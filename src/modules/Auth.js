import { button, config } from "./config.js";

export default class Auth {
  constructor() {
    config.token() ?  button.textContent = "Створити візит" : false;
  }

}
