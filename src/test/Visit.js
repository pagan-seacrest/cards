const root = document.getElementById("root");
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

    // visitForm () {
    //     const name = new Input(config.visitCommonValues.name);
    //     name.listen(name.addInput);
    //     const purpose = new Input(config.visitCommonValues.purpose);
    //     purpose.listen(purpose.addInput);
    //     const description = new Input(config.visitCommonValues.description);
    //     description.listen(description.addInput)
    //     const urgency = new Input(config.visitCommonValues.urgency);
    //     urgency.listen(urgency.addInput);
    // }
}