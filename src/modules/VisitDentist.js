import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
import Modal from "./Modal.js";
import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor() {
    super({});
    super.setUp();
    if (document.getElementById("visit-form") !== null) {

    this.form = document.getElementById("visit-form");
    this.select = this.form.children[1].children[0];
    this.select.addEventListener("click", (ev) => {
      // ev.target.parentElement.nextElementSibling.remove();

      if (ev.target.value === "Дантист") {
        super.name();
        super.purpose();
        super.description();
        super.urgency();
        config.visitValues.dentist.lastVisitDate.place = new Modal({}).wrap("wrapper", "label", this.form, "Дата останнього візиту");
        new Input(config.visitValues.dentist.lastVisitDate).add();
        super.buttons(this.form);
        ev.target.parentElement.remove();
        this.form.children[0].textContent = "Створення візиту: Дантист";
      } else {
        return;
      }
    });
  }
  }
}
