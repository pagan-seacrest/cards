class Form {
    constructor (position, id) {
        this.id = id;
        this.position = position;
        return this.createForm();
    }

    createForm () {
        const form = document.createElement("form");
        form.id = this.id
        this.position.append(form);
        return form;
    }
}

class Input {
    constructor ({position, type, name, className, placeHolder, id}) {
        this.type = type;
        this.placeHolder = placeHolder;
        this.id = id;
        this.name = name;
        this.position = position;
        this.className = className;
    }

    addInput (position = this.position, id = this.id) {
        position.insertAdjacentHTML("beforeend", `
        <input type="${this.type}" 
        class="${this.className ?? false}" 
        id="${this.id}" name="${this.name ?? false}" 
        placeholder="${this.placeHolder ?? false}" required>`);

        return document.getElementById(`${id}`);
    }

    addUrgencyrSelect (position = this.position, id = this.id) {
        position.insertAdjacentHTML("beforeend", `
        <label for="${id}">
            <select id="${id}">Терміновість 
                <option>Невідкладна</option>
                <option>Важлива</option>
                <option>Звичайна</option>
            </select>
        </label>`);

        return document.getElementById(`${id}`)
    }

    addDoctorSelect (position = this.position, id = this.id) {
        position.insertAdjacentHTML("beforeend", `
        <label for="${id}">
            <select id="${id}">Виберіть лікаря  
                <option>Кардіолог</option>
                <option>Дантист</option>
                <option>Терапевт</option>
            </select>
        </label>`);

        return document.getElementById(`${id}`)
    }

    listen (elt = document.getElementById(`${this.id}`)) {
        elt.addEventListener("blur", ev);
        return function ev (event) {
            return event.target.value
        }
    }
}

class Button {
    constructor({type, content, id, className, position}) {
        this.type = type;
        this.content = content,
        this.id = id;
        this.className = className;
        this.position = position;
    }
    
    add (position = this.position) {
        position.insertAdjacentHTML("beforeend", `
        <button type="${this.type} id="${this.id}" class="${this.className ?? false}">${this.content}</button>`);

        return document.getElementById(`${this.id}`)
    }

    on (ev) {
        document.getElementById(`${this.id}`).addEventListener(click, ev)

        return ev;
    }

    off () {
        document.getElementById(`${this.id}`).removeEventListener(click, ev)

        return ev;
    }
}


export {Form, Input, Button};