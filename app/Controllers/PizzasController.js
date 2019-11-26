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
  makePizza() {
    console.log("Making Pizza in Controller");
    let fakePizza = {
      title: "MyFav"
    };
    PizzasService.makePizza(fakePizza);
    _draw();
  }

  removePizza(id) {
    PizzasService.removePizza(id);
    _draw();
  }
}
