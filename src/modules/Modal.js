import { Form, Input, Select } from "./components.js";

export default class Modal {
    constructor ({position, id, type, name, placeHolder, required}) {
        this.position = position;
        this.id = id;
        this.type = type;
        this.name = name;
        this.placeHolder = placeHolder;
        this.required = required;
    }

    form () {
        const form = new Form(this.position, this.id);
        return form.createForm();
    }

    input () {
        const input = new Input({
            type: this.type,
            id: this.id,
            placeHolder: this.placeHolder,
            required: this.required
        });
        return input.createInput();
    }

    label () {
        const label = new Input({attribute: this.id});
        return label.createLabel();
    }

    select () {
        const select = new Select({position: this.position, id: this.id, name: this.name});
        return select.createSelect();
    }

    option (value, content) {
        const select = new Select({position: this.position, id: this.id});
        return select.option(value, content);
    }

    submit (content) {
        const submit = new Input({id: this.id});
        return submit.createSubmit(content);
    }
}