import { Form, Input, Select, TextArea, Button } from "./components.js";
import { config } from "./config.js";

export default class Modal {
    constructor ({position, id, title, className}) {
        this.position = position;
        this.id = id;
        this.form = new Form(this.position, this.id);
        config.submitVisit.position = this.form;
        this.title = function() {
          this.form.insertAdjacentHTML("beforeend", `<header class="${className}">${title}</header>`);
        }
        this.title();
    }

    wrap (className, position = this.form) {
      const wrapper = document.createElement("div");
      wrapper.className = className;
      position.append(wrapper);

      return wrapper;
    }

    input ({id, type, placeholder, name, className}) {
      return new Input({
        id: id,
        position: this.form,
        type: type,
        placeholder: placeholder,
        name: name,
        className: className
      }).addInput();
    }

    selectDoctor (id, position = this.form, labelFor = this.form.id) {
      return new Select ({id: id, position: position, forForm: labelFor}).addDoctorSelect();
    }

    selectUrgency (id, position = this.form) {
      return new Select ({id: id, position: position, forForm: this.form.id}).addUrgencySelect();
    }

    textArea (id, position = this.form) {
      return new TextArea({id: id, position: position}).addTextArea();
    }

    button (attrObject) {
      return new Button(attrObject);
    }

}
