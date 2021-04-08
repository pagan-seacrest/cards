import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
// import Dashboard from "./Dashboard.js";
import Modal from "./Modal.js";

export default class Visit extends Modal{
    constructor ({position = root, id = "visit-form", title = "Створення візиту", className = "modal-title"}) {
        super({position: position, id: id, title: title, className: className});
        this.id = id;
        this.form = document.getElementById(this.id);
        config.visitValues.position = this.form;
        const select = super.selectDoctor("visit-select-doctor", this.form, this.id); // if default id into methods
        this.select = select;
        // select.addEventListener("click", this.listen);
        const div = super.wrap("button-wrapper");
        div.style.justifyContent = "center";
        config.buttonCancel.position = div;
        super.button(config.buttonCancel);
    }

    listen (event) {
      event.target.parentElement.nextElementSibling.remove();
      config.visitValues.position = this.form;

      if (event.target.value === null || event.target.value === undefined || event.target.value === "Кардіолог") {
        this.name();
        this.purpose();
        this.description();
        this.urgency();
        this.derivedObject.cardiologist();
      } else if (event.target.value === "Дантист") {
        this.name();
        this.purpose();
        this.description();
        this.urgency();
        this.derivedObject.dentist();
      } else if (event.target.value === "Терапевт") {
        this.name();
        this.purpose();
        this.description();
        this.urgency();
        this.derivedObject.therapist();
      }
    }

    name () {
      config.visitValues.name.position = this.form;
      return new Input(config.visitValues.name).addInput();
    }

    purpose () {
      config.visitValues.purpose.position = this.form;
      return new Input(config.visitValues.purpose).addInput();
    }

    description () {
      config.visitValues.description.position = this.form;
      return new TextArea(config.visitValues.description).addTextArea();
    }

    urgency () {
      config.visitValues.urgency.position = this.form;
      return new Select(config.visitValues.urgency).addUrgencySelect();
    }
}
