import Pizza from "../Models/Pizza.js";
import store from "../store.js";

//Public
class PizzasService {
  makePizza(newPizza) {
    store.State.pizzas.push(newPizza);
  }
}

let service = new PizzasService();
export default service;
