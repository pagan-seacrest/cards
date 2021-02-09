class Form {
    constructor (position, id) {
        this.id = id;
        this.position = position;
    }

    createForm () {
        const form = document.createElement("form");
        form.id = this.id
        this.position.append(form);
        return form;
    }
}

class Input {
    constructor ({type, placeHolder, id, required, attribute}) {
        this.type = type;
        this.placeHolder = placeHolder;
        this.id = id;
        this.required = required;
        this.for = attribute;
    }

    createInput () {
        const input = document.createElement("input");
        input.type = this.type;
        input.placeholder = this.placeHolder;
        input.id = this.id;
        input.required = this.required;
        return input;
    }

    createLabel () {
        const label = document.createElement("label");
        label.setAttribute("for", this.for)
        return label;
    }

    createSubmit (content) {
        const submit = document.createElement("button");
        submit.type = "submit";
        submit.id = this.id;
        submit.textContent = content;
        return submit;
    }
}


class Select {
    constructor ({position, id, name}) {
        this.position = position;
        this.id = id;
        this.name = name;
    }

    createSelect () {
        const select = document.createElement("select");
        select.name = this.name;
        select.id = this.id;
        this.position.append(select);
        return select;
    }
    
    option (value, content) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = content;
        this.position.append(option);
        return option;
    }
    
}

export {Form, Input, Select};