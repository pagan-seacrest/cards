import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
  constructor() {
<<<<<<< HEAD
    super({place: document.getElementById("visit-form")});
=======
    super({position: document.getElementById("visit-form")});
>>>>>>> visits
    this.select =  document.getElementById("visit-form").children[1].children[0];
    this.select.addEventListener("click", this.listen);
  }

  listen (event) {
    event.target.parentElement.nextElementSibling.remove();
<<<<<<< HEAD
    config.visitValues.cardiologist.pressure.place = this.form;
    config.visitValues.cardiologist.bodyMassIndex.place = this.form;
    config.visitValues.cardiologist.age.place = this.form;
=======
    config.visitValues.cardiologist.pressure.position = this.form;
    config.visitValues.cardiologist.bodyMassIndex.position = this.form;
    config.visitValues.cardiologist.age.position = this.form;
>>>>>>> visits

    if (event.target.value === null || event.target.value === undefined || event.target.value === "Кардіолог") {
      super.name();
      super.purpose();
      super.description();
      super.urgency();
      new Input(config.visitValues.cardiologist.pressure).addInput();
      new Input(config.visitValues.cardiologist.bodyMassIndex).addInput();
      new Input(config.visitValues.cardiologist.age).addInput();
    } else {
      return;
    }
  }
}
