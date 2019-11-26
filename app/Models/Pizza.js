export default class Pizza {
  constructor(data) {
    this.title = data.title;
  }

  get Template() {
    return this.title;
  }
}
