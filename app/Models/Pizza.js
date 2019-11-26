import { generateId } from "../Utils.js";

export default class Pizza {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.toppings = data.toppings || [];
  }

  get Template() {
    return `
    <div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <ul class="card-text">
            ${this.getToppingTemplate()}
        </ul>
        <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
        <input
          type="text"
          name="topping"
          placeholder="Topping..."
          required
        />
        <button class="btn btn-success" type="submit">Add Topping</button>
      </form>
        
        <button class="btn btn-danger" onclick="app.pizzasController.removePizza('${
          this.id
        }')">Delete</button>
      </div>
    </div>
  </div>
  `;
  }

  getToppingTemplate() {
    let template = "";
    this.toppings.forEach((topping, index) => {
      template += `<li>${topping} <span onclick="app.pizzasController.removeTopping('${this.id}', ${index})">X</span></li>`;
    });
    return template;
  }
}
