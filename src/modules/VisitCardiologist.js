import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
    constructor ({
        visit = "Кардіолог",
        position
        // purpose, description, urgency, regularPressure, bodyMassIndex, heartDeseases, lastVisit,
        // age, fullName, visit, visitOption, optionValue,
        // position, id, type, name, placeHolder, required
    }) {
        super({visit: visit, position: position});
        this.position = position;
        this.visit = visit;
        // this.id = id;
        this.selectVisit();
        this.visitForm();
    }

}