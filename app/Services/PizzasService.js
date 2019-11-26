import Pizza from "../Models/Pizza.js";
import store from "../store.js";

//Public
class PizzasService {
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
