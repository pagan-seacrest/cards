import { Form, Input, Select, TextArea, Button } from "./components.js";
import { config } from "./config.js";

export default class Modal {
    constructor ({place, id, title}) {
        this.place = place;
        this.id = id;
        config.submitVisit.place = this.form;
        this.title = title;
        this.form = null;
    }

    add () {
      const form = new Form(this.place, this.id).add();
      form.insertAdjacentHTML("beforeend", `<header class="modal-title">${this.title}</header>`);
      this.form = form;
      return form;
    }

    wrap (className, place = this.form) {
      const wrapper = document.createElement("div");
      wrapper.className = className;
      place.append(wrapper);

      return wrapper;
    }

    input ({place = this.form, type, name, className, placeholder, id}) {
      return new Input({
        place: place,
        type: type,
        name: name,
        className: className,
        placeholder: placeholder,
        id: id,
      }).add();
    }

    selectDoctor ({place = this.form, labelFor = this.id, id}) {
      return new Select ({id: id, place: place, forForm: labelFor}).addDoctorSelect();
    }

    selectUrgency ({id, place = this.form, labelFor = this.id}) {
      return new Select ({id: id, place: place, forForm: labelFor}).addUrgencySelect();
    }

    textArea (id, place = this.form) {
      return new TextArea({id: id, place: place}).add();
    }

    button (attrObject) {
      return new Button(attrObject);
    }

}
