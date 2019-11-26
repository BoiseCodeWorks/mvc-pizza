import Pizza from "./Models/Pizza.js";

let _state = {
  /** @type {Pizza[]} */
  pizzas: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const store = new Store();
export default store;
