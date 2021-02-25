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
            const heartDiseases = new Input({type: "text", id: "heart-diseases", required: true, placeHolder: "Перенесені хвороби серця"});
            form.append(heartDiseases.createInput());
            this.age();
            this.confirm();
            this.cancel();
        }

}