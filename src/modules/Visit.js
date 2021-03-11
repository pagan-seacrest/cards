import { config } from "./config.js";
import { Form, Input,TextArea, Select } from "./components.js";
// import { config } from "./config.js";
import Modal from "./Modal.js";
import ElementHandler from "./ElementHandler.js";

export default class Visit extends Modal{
    constructor ({
        position, id, type, name, placeHolder, required,
        visit,
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
    }

    selectVisit () {
        const form = this.form();
        const label = this.label();
        label.textContent = "Виберіть лікаря ";
        let select = new ElementHandler([], {element: "select", id: "select-visit", parentElement: label});
        select.addElement();
        select.modify("name", "visit-form");
        config.element(this.id).append(label);
        label.insertAdjacentHTML("beforebegin", `<header class="create-title">Створення візиту</header>`);
        
        const option1 = new ElementHandler([], {element: "option", id: "visit-option-cardiologist", parentElement: config.element("select-visit")})
        option1.addElement();
        const eltOption1 = config.element("visit-option-cardiologist");
        eltOption1.textContent = "Кардіолог";
        eltOption1.nodeValue = "cardio";
        
        const option2 = new ElementHandler([], {element: "option", id: "visit-option-dentist", parentElement: config.element("select-visit")})
        option2.addElement();
        const eltOption2 = config.element("visit-option-dentist");
        eltOption2.textContent = "Дантист";
        eltOption2.nodeValue = "dentist";

        const option3 = new ElementHandler([], {element: "option", id: "visit-option-therapist", parentElement: config.element("select-visit")})
        option3.addElement();
        const eltOption3 = config.element("visit-option-therapist");
        eltOption3.textContent = "Терапевт";
        eltOption3.nodeValue = "therapist";
    }

    visitFrom () {
        const form = config.element("visit-form");
        const name = new Input({type: "text", placeHolder: "ПІБ", id: "visit-name", required: true});
        form.append(name.createInput());
        const purpose = new Input({type: "text", placeHolder: "Мета вашого візиту", id: "visit-purpose", required: true});
        form.append(purpose.createInput());
        const description = new Input ({type: "text", placeHolder: "Короткий опис візиту", required: true, id: "visit-description"});
        form.append(description.createInput());
        
        const label = this.label();
        config.content(label, "Терміновість");
        form.append(label);
        let select = new ElementHandler([], {element: "select", id: "visit-urgency", parentElement: label});
        select.addElement();

        const option1 = new ElementHandler([], {element: "option", id: "urgency-option", parentElement: config.element("visit-urgency")})
        option1.addElement();
        const eltOption1 = config.element("urgency-option");
        eltOption1.textContent = "Невідкладна";
        eltOption1.nodeValue = "urg-high";
        eltOption1.removeAttribute("id");
        
        const option2 = new ElementHandler([], {element: "option", id: "urgency-option", parentElement: config.element("visit-urgency")})
        option2.addElement();
        const eltOption2 = config.element("urgency-option");
        eltOption2.textContent = "Важлива";
        eltOption2.nodeValue = "urg-middle";
        eltOption2.removeAttribute("id");
        
        const option3 = new ElementHandler([], {element: "option", id: "urgency-option", parentElement: config.element("visit-urgency")})
        option3.addElement();
        const eltOption3 = config.element("urgency-option");
        eltOption3.textContent = "Звичайна";
        eltOption3.nodeValue = "urg-low";
        eltOption3.removeAttribute("id");
    }
    
    confirm () {
        const form = config.element("visit-form");
        config.element("visit-form").insertAdjacentHTML("beforeend", `<div class="create-button-wrapper"></div>`);
        const submit = new ElementHandler([], {element: "button", id: "submit-visit", parentElement: document.querySelector(".create-button-wrapper") });
        submit.addElement();
        config.element("submit-visit").setAttribute("type", "submit");
        config.element("submit-visit").textContent = "Створити";
    }
    
    cancel () {
        const form = config.element("visit-form");
        const submit = new ElementHandler([], {element: "button", id: "cancel-visit", parentElement: document.querySelector(".create-button-wrapper")});
        submit.addElement();
        config.element("cancel-visit").setAttribute("type", "button");
        config.element("cancel-visit").textContent = "Закрити";   
    }

    age () {
        const form = config.element("visit-form");
        const age = new Input({type: "number", id: "age", required: true, placeHolder: "Вік"});
        form.append(age.createInput());
    }
}