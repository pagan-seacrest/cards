import { root } from "./config.js";
import { Form, Input, Button} from "./components.js";
// import { config } from "./config.js";
import Modal from "./Modal.js";

export default class Visit extends Modal{
    constructor ({
        position = root, id, titleText, titleClass}) {
        const form = super({position: position,id: id,});
        super.addTitle("visit-title", "Виберіть лікаря", form);

        this.titleClass = titleClass;
        this.title = titleText;
        this.id = id;
        this.position = position;
        this.visit = visit;

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
    
    // confirm () {
    //     const form = config.element("visit-form");
    //     config.element("visit-form").insertAdjacentHTML("beforeend", `<div class="create-button-wrapper"></div>`);
    //     const submit = new ElementHandler([], {element: "button", id: "submit-visit", parentElement: document.querySelector(".create-button-wrapper") });
    //     submit.addElement();
    //     config.element("submit-visit").setAttribute("type", "submit");
    //     config.element("submit-visit").textContent = "Створити";
    // }
    
    // cancel () {
    //     const form = config.element("visit-form");
    //     const submit = new ElementHandler([], {element: "button", id: "cancel-visit", parentElement: document.querySelector(".create-button-wrapper")});
    //     submit.addElement();
    //     config.element("cancel-visit").setAttribute("type", "button");
    //     config.element("cancel-visit").textContent = "Закрити";   
    // }

    // age () {
    //     const form = config.element("visit-form");
    //     const age = new Input({type: "number", id: "age", required: true, placeHolder: "Вік"});
    //     form.append(age.createInput());
    // }
}