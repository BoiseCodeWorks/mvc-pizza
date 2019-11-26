import Pizza from "./Models/Pizza.js";

let _state = {
  /** @type {Pizza[]} */
  pizzas: []
};

function _loadState() {
  try {
    let data = JSON.parse(localStorage.getItem("PizzaShack"));
    _state.pizzas = data.pizzas.map(rp => new Pizza(rp));
  } catch (e) {}
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("PizzaShack", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
