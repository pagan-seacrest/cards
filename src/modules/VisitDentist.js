import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor() {
    super({});
    this.select =  document.getElementById("visit-form").children[1].children[0];
    this.select.addEventListener("click", this.listen);
  }

  listen (event) {
    event.target.parentElement.nextElementSibling.remove();
<<<<<<< HEAD
    config.visitValues.dentist.lastVisitDate.place = this.form;
=======
    config.visitValues.dentist.lastVisitDate.position = this.form;
>>>>>>> visits

    if (event.target.value === "Дантист") {
      super.name();
      super.purpose();
      super.description();
      // super.urgency();
      new Input(config.visitValues.dentist.lastVisitDate).addInput();
    } else {
      return;
    }
  }
}
