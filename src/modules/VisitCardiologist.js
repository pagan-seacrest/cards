import Visit from "./Visit.js";
import {config} from "./config.js";
import {Input} from "./components.js";
import ElementHandler from "./ElementHandler.js";

export default class VisitCardiologist extends Visit {
    constructor ({  position, id, type, name, placeHolder, required, 
        
        visit,}) {
            super({  position: position, id: id, type: type, name: name, placeHolder: placeHolder, required: required, 

                visit: visit,});
        }

        additionalForm() {
            this.visitFrom();
            const form = config.element("visit-form");
            const regularPressure = new Input({type: "text", placeHolder: "Тиск зазвичай", required: true, id: "visit-pressure"});
            form.append(regularPressure.createInput());
            const bodyMassIndex = new Input({type: "number", placeHolder: "Індекс маси тіла", id: "body-mass-index", required: true});
            form.append(bodyMassIndex.createInput());
            const heartDeseases = new Input({type: "text", id: "heart-deseases", required: true, placeHolder: "Перенесені хвороби серця"});
            form.append(heartDeseases.createInput());
            this.age();
            this.confirm();
            this.cancel();
        }

}