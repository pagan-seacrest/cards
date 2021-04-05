import Client from "./Client.js";
import {button, config } from "./config.js";

export default class Auth {
  constructor() {
    config.token() ?  button.textContent = "Створити візит" : false; 
  }

  // sighIn () {
  //   client.login().then(res => localStorage.setItem("token", res));
  //   changeButtonsValue();
  // }
}
