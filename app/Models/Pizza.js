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
        <button onclick="app.pizzasController.removePizza('${
          this.id
        }')">Delete</button>
      </div>
    </div>
  </div>
  `;
  }

  getToppingTemplate() {
    let template = "";
    this.toppings.forEach(t => {
      template += `<li>${t}</li>`;
    });
    return template;
  }
}
