import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button} from "./components.js";
import Dashboard from "./Dashboard.js";
import Modal from "./Modal.js";

export default class Visit extends Modal{
    constructor ({position = root, id = "visit-form", title = "Створення візиту", className = "modal-title"}) {
        super({position: position, id: id, title: title, className: className});
        this.form = document.getElementById(id);
        this.id = id;
        this.select = "Кардіолог";
        const select = super.selectDoctor("visit-select-doctor", this.form, this.id); // if default id into methods
        select.addEventListener("click", this.listen);
        const div = super.wrap("button-wrapper");
        div.style.justifyContent = "center";
        config.buttonCancel.position = div;
        super.button(config.buttonCancel);
    }

    listen (event) {
      event.target.parentElement.nextElementSibling.remove();
      config.visitValues.position = this.form;

      if (event.target.value === null || event.target.value === undefined || event.target.value === "Кардіолог") {
        new Dashboard(config.visitValues).cardiologist();
      } else if (event.target.value === "Дантист") {
        new Dashboard(config.visitValues).dentist();
      } else if (event.target.value === "Терапевт") {
        new Dashboard(config.visitValues).therapist();
      }
    }

    visitForm () {
        const name = new Input(config.visitCommonValues.name);
        name.listen(name.addInput);
        const purpose = new Input(config.visitCommonValues.purpose);
        purpose.listen(purpose.addInput);
        const description = new Input(config.visitCommonValues.description);
        description.listen(description.addInput)
        const urgency = new Input(config.visitCommonValues.urgency);
        urgency.listen(urgency.addInput);
    }
}
