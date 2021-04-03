import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
    constructor ({  position, id, type, name, placeHolder, required, 
        
        visit,}) {
            super({  position: position, id: id, type: type, name: name, placeHolder: placeHolder, required: required, 

                visit: visit,});
        }

        additionalForm() {
            this.visitFrom();
            this.age()
            this.confirm();
            this.cancel();
        }
}