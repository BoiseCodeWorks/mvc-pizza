import PizzasService from "../Services/PizzasService.js";
import store from "../store.js";

function _draw() {
  let pizzas = store.State.pizzas;
  let template = "";
  pizzas.forEach(pizza => {
    template += pizza.Template;
  });
  document.querySelector("#pizzas").innerHTML = template;
}
_draw();

//Public
export default class PizzasController {
  makePizza(event) {
    event.preventDefault();
    let formData = event.target;
    let newPizza = {
      title: formData.title.value
    };
    PizzasService.makePizza(newPizza);
    _draw();
  }

  removePizza(id) {
    PizzasService.removePizza(id);
    _draw();
  }
  addTopping(event, id) {
    event.preventDefault();
    let topping = event.target.topping.value;
    PizzasService.addTopping(id, topping);
    _draw();
  }

  removeTopping(pizzaId, toppingIndex) {
    PizzasService.removeTopping(pizzaId, toppingIndex);
    _draw();
  }
}
