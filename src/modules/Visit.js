import { root, button, data, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
import Modal from "./Modal.js";

export default class Visit extends Modal{
    constructor ({place = root, id = "visit-form", title = "Створення візиту"}) {
        super({place: place, id: id, title: title});
        this.id = id;
        this.place = place;
        this.title = title;
        this.form = null;
    }

    setUp () {
      if (document.getElementById("visit-form") === null) {
        this.form = super.add();
        config.visitValues.place = this.form;
        const select = super.selectDoctor({id: "visit-select-doctor", place: this.form, forForm: this.id});
        this.select = select;

        const div = super.wrap("button-wrapper");
        div.style.justifyContent = "center";
        config.cancel.place = div;
        super.button(config.cancel);
      }
    }

    name () {
      config.visitValues.name.place = this.form;
      return new Input(config.visitValues.name).add();
    }

    purpose () {
      config.visitValues.purpose.place = this.form;
      return new Input(config.visitValues.purpose).add();
    }

    description () {
      config.visitValues.description.place = this.form;
      return new TextArea(config.visitValues.description).add();
    }

    urgency () {
      config.visitValues.urgency.place = this.form;
      return new Select(config.visitValues.urgency).addUrgencySelect();
    }

    buttons (place) {
      const wrapper = super.wrap("button-wrapper", "div", place);
      config.submit.place = wrapper;
      config.cancel.place = wrapper;
      super.button(config.submit);
      super.button(config.cancel);
    }
}
