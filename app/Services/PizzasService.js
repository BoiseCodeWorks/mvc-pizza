import Pizza from "../Models/Pizza.js";
import store from "../store.js";

//Public
class PizzasService {
  makePizza(rawPizza) {
    store.State.pizzas.push(new Pizza(rawPizza));
  }
}

let service = new PizzasService();
export default service;
