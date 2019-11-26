import Pizza from "../Models/Pizza.js";
import store from "../store.js";

//Public
class PizzasService {
  removeTopping(pizzaId, toppingIndex) {
    let pizzaToRemoveTopping = store.State.pizzas.find(
      pizza => pizza.id == pizzaId
    );
    pizzaToRemoveTopping.toppings.splice(toppingIndex, 1);
    store.saveState();
  }
  addTopping(id, topping) {
    let pizzaToAddTopping = store.State.pizzas.find(pizza => pizza.id == id);
    pizzaToAddTopping.toppings.push(topping);
    store.saveState();
  }
  removePizza(id) {
    let index = store.State.pizzas.findIndex(pizza => pizza.id == id);
    store.State.pizzas.splice(index, 1);
    store.saveState();
  }
  makePizza(rawPizza) {
    store.State.pizzas.push(new Pizza(rawPizza));
    store.saveState();
  }
}

let service = new PizzasService();
export default service;
