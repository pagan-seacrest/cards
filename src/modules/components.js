class Form {
    constructor (position, id) {
        this.id = id;
        this.position = position;
        return this.addForm();
    }

    addForm () {
      this.position.insertAdjacentHTML("beforeend", `
      <form id="${this.id}" class="form modal"></form>`);

        return document.getElementById(this.id);
    }

    createForm () {
      const form = document.createElement("form");
      form.id = this.id
      this.position.append(form);

      return form;
    }
}

class Input {
    constructor ({position, type, name, className, placeholder, id}) {
        this.type = type;
        this.placeHolder = placeholder;
        this.id = id;
        this.name = name;
        this.position = position;
        this.className = className;
    }

    addInput (position = this.position, id = this.id) {
        position.insertAdjacentHTML("beforeend", `
        <input type="${this.type}"
        class="${this.className}"
        id="${this.id}" name="${this.name}"
        placeholder="${this.placeHolder}" required>`);

        return document.getElementById(`${id}`);
    }
  }

class Select {
  constructor ({id, position, forForm}) {
    this.id = id;
    this.labelFor = forForm;
    this.position = position;
    return document.getElementById(this.id); // if default id into methods
  }

  addUrgencySelect (position = this.position, id = this.id, labelFor = this.labelFor) {
      position.insertAdjacentHTML("beforeend", `
      <label for="${labelFor}">Терміновість
          <select id="${id}">
              <option>Невідкладна</option>
              <option>Важлива</option>
              <option>Звичайна</option>
          </select>
      </label>`);

      return document.getElementById(`${id}`)
  }

  addDoctorSelect (position = this.position, id = this.id, labelFor = this.labelFor) {
      position.insertAdjacentHTML("beforeend", `
      <label for="${labelFor}">Виберіть лікаря
          <select id="${id}">
              <option>Кардіолог</option>
              <option>Дантист</option>
              <option>Терапевт</option>
          </select>
      </label>`);

      return document.getElementById(`${id}`)
  }

}

class TextArea {
  constructor ({id, position}) {
    this.id = id;
    this.position = position;
  }

  addTextArea (id = this.id, position = this.position) {
    position.insertAdjacentHTML("beforeend", `
    <textarea rows="6" cols="40" placeholder="Опис візиту"></textarea>`);
  }
}

class Button {
    constructor({type, value, id, className, position}) {
        this.type = type;
        this.value = value;
        this.id = id;
        this.className = className;
        this.position = position;
        const click = this.add();
        this.eventType = "click";
        this.type === "submit" ? this.eventType = "onsubmit" : false;
        click.addEventListener(this.eventType, this.enableClick);

        return click;
    }

    add () {
        this.position.insertAdjacentHTML("beforeend", `
        <button type="${this.type}" id="${this.id}" class="${this.className}">${this.value}</button>`);

        return document.getElementById(this.id)
    }

    enableClick (event) {
      event.preventDefault();
      event.target.parentElement.parentElement.remove();

    }

    disableClick (event) {

    }
  }


export {Form, Input, Select, TextArea, Button};
