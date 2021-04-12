// import Client from "./Client.js";
import { root, button, ajax, changeButtonsValue, config } from "./config.js";
import { Form, Input, Select, TextArea, Button } from "./components.js";
import Modal from "./Modal.js";

export default class Visit extends Modal{
    constructor ({place = root, id = "visit-form", title = "Створення візиту", visit}) {
      super({place: place, id: id, title: title});
        this.id = id;
        this.place = place;
        this.title = title;
        this.form = null;
        this.visit = visit;
      }
      
    setup () {
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
    
    edit () {
      this.visit.doctor === "Кардіолог" ? this.title = "Редагування візиту: Кардіолог" : "Редагування візиту: Дантист";
      this.visit.doctor === "Терапевт" ? this.title = "Редагування візиту: Терапевт" : false;

      this.form = super.add();
      this.name().value = this.visit.name;
      this.purpose().value = this.visit.purpose;
      this.description().value = this.visit.description;
      this.urgency().value = this.visit.urgency;
      
      if (this.visit.doctor === "Кардіолог") {
        ajax.doctor = "Кардіолог";
        config.visitValues.cardiologist.pressure.place = this.form;
        config.visitValues.cardiologist.bodyMassIndex.place = this.form;
        config.visitValues.cardiologist.age.place = this.form;
        config.visitValues.cardiologist.pressure.place = this.form;
        config.visitValues.cardiologist.bodyMassIndex.place = this.form;
        config.visitValues.cardiologist.age.place = this.form;
        config.visitValues.cardiologist.heartDiseases.place = this.form;
        
        new Input(config.visitValues.cardiologist.pressure).add().value = this.visit.pressure;
        new Input(config.visitValues.cardiologist.heartDiseases).add().value = this.visit.heartDiseases;
        new Input(config.visitValues.cardiologist.bodyMassIndex).add().value = this.visit.bodyMassIndex;
        new Input(config.visitValues.cardiologist.age).add().value = this.visit.age;
        
      } else if (this.visit.doctor === "Дантист") {
        ajax.doctor = "Дантист";
        config.visitValues.dentist.lastVisitDate.place = super.wrap("wrapper", "label", this.form, "Дата останнього візиту");
        new Input(config.visitValues.dentist.lastVisitDate).add().value = this.visit.lastVisitDate;
      } else if (this.visit.doctor === "Терапевт") {
        ajax.doctor = "Терапевт";
        config.visitValues.therapist.age.place = this.form;
        new Input(config.visitValues.therapist.age).add().value = this.visit.age;
      }
      
      const wrapper = super.wrap("button-wrapper");
      config.cancel.place = wrapper;
      config.edit.place = wrapper;
      const editBt = super.button(config.edit);
      super.button(config.cancel);
      
      return editBt;
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
