import { config } from "./config.js";
import { Form, Input,TextArea, Select } from "./components.js";
// import { config } from "./config.js";
import Modal from "./Modal.js";
import ElementHandler from "./ElementHandler.js";

export default class Visit extends Modal {
    constructor ({
        position, id, type, name, placeHolder, required, 

        visit,
        // purpose, description, urgency, regularPressure, bodyMassIndex, heartDeseases,
        //  lastVisit,
        // age, fullName, visitOption, optionValue,
    }) {
        super({
            position: position,
            id: id,
            type: type,
            name: name,
            placeHolder: placeHolder,
            required: required
        });
        this.id = id;
        this.position = position;
        this.visit = visit;
        // this.purpose = purpose;
        // this.description = description;
        // this.urgency = urgency;
        // this.regularPressure = regularPressure;
        // this.bodyMassIndex = bodyMassIndex;
        // this.heartDeseases = heartDeseases;
        // this.lastVisit = lastVisit;
        // this.age = age;
        // this.fullName = fullName;
        // this.visitOption = visitOption;
        // this.optionValue = optionValue;
    }

    selectVisit () {
        const form = this.form();
        const label = this.label();
        label.id = "visit";
        const select = new Select({position: label, name: this.id, id: "select-visit"});
        this.position.append(form);
        config.element(this.id).append(label);
        config.element("visit").append(select.createSelect());
        config.content(config.element("visit"), "Вибір лікаря");

        [new Select({position: config.element("select-visit")}).option("cardiologist", "Кардіолог"),
         new Select({position: config.element("select-visit")}).option("dentist", "Стоматолог"),
         new Select({position: config.element("select-visit")}).option("therapist", "Терапевт")
        ].forEach(element => config.element("select-visit").append(element));
    }

    visitForm () {
        if (this.visit === "Кардіолог") {
            this.commonForm();
            this.cardiologistForm();
        } else if (this.visit === "Стоматолог") {
            this.commonForm();
            this.dentistForm();
        } else if (this.visit === "Терапевт") {
            this.commonForm();
        }
        const create = new ElementHandler([], {element: "button", id: "submit-visit" ,parentElement: config.element(this.id)});
        create.addElement();
        create.edit({element: create.child, content: "Створити візит"})
        create.modify({attribute: "type", attributeValue: "submit"});

        const cancel = new ElementHandler([], {element: "botton", id: "cancel-visit", parentElement: config.element(this.id)});
        cancel.addElement();
        cancel.edit({element: cancel.child, content: "Закрити"});
        

    }

    commonForm () {
        const visitPurpose = new Input({type: "text", placeHolder: "Мета візиту", id: "visit-purpose", required: true}).createInput();
        const visitDescription = new TextArea({id: "visitDescription", placeHolder: "Короткий опис візиту"}).createArea;
        const label = new Input({id: "visitUrgency"}).createLabel();
        config.element(this.id).append(visitPurpose);
        config.element(this.id).append(visitDescription);
        config.element(this.id).append(label);
        config.element(this.id).prepend(new Input({type: "number", placeHolder: "ПІБ", required: true}).createInput());
    }

    cardiologistForm () {
        const visitUrgency = new Select({position: config.element("visitUrgency"), id: "select-urgency"}).createSelect();
        config.element(this.id).append(visitUrgency);
        const urgentlyOption = new Select({position: config.element("select-urgency")}).option("urgently", "Невідкладно");
        const importantOption = new Select({position: config.element("select-urgency")}).option("important", "Важливо");
        const generalOption = new Select({position: config.element("select-urgency")}).option("general", "Звичайно");
        config.element("select-urgency").append(urgentlyOption);
        config.element("select-urgency").append(importantOption);
        config.element("select-urgency").append(generalOption);

        config.element(this.id).append(new Input({type: "text", placeHolder: "Звичайний тиск", required: true}).createInput());
        config.element(this.id).append(new Input({type: "number", placeHolder: "Індекс маси тіла", required: true}).createInput());
        config.element(this.id).append(new Input({type: "text", placeHolder: "Минулі хвороби серця", required: true}).createInput());
        config.element(this.id).append(new Input({type: "number", placeHolder: "Вік", required: true}).createInput());
    }

    dentistForm () {
        const label = document.createElement("label");
        label.textContent = "Дата останнього візиту";
        label.id("last-visit");
        config.element(this.id).append(label);
        config.element("last-visit").append(new Input({type: "date"}).createInput());
    }

}