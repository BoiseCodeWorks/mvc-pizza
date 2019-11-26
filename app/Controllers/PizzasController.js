import PizzasService from "../Services/PizzasService.js";
import store from "../store.js";

function _draw() {
  let pizzas = store.State.pizzas;
  pizzas.forEach(p => {
    console.log(p);
  });
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
}
