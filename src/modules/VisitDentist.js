import Visit from "./Visit.js";
import {config} from "./config.js";
import {Input} from "./components.js";

export default class VisitDentist extends Visit {
    constructor ({  position, id, type, name, placeHolder, required, 
        
        visit,}) {
            super({  position: position, id: id, type: type, name: name, placeHolder: placeHolder, required: required, 

                visit: visit,});
        }

        additionalForm() {
            this.visitFrom();
            const form = config.element("visit-form");
            const label = this.label();
            config.content(label, "Дата останнього візиту");
            form.append(label);
            const lastVisit = new Input({type: "date", id: "last-visit-date", required: true});
            label.append(lastVisit.createInput());   
            this.confirm();
            this.cancel();
        }
}