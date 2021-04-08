class Form {
    constructor (place, id) {
        this.id = id;
        this.place = place;
    }

    add () {
      this.place.insertAdjacentHTML("beforeend", `
      <form id="${this.id}" class="modal"></form>`);

      return document.getElementById(this.id);
    }

    create () {
      const form = document.createElement("form");
      form.id = this.id
      this.place.append(form);

      return form;
    }
}

class Input {
    constructor ({place, type, name, className, placeholder, id}) {
        this.type = type;
        this.placeHolder = placeholder;
        this.id = id;
        this.name = name;
        this.place = place;
        this.className = className;
    }

    add (place = this.place, id = this.id) {
        place.insertAdjacentHTML("beforeend", `
        <input type="${this.type}"
        class="${this.className}"
        id="${this.id}" name="${this.name}"
        placeholder="${this.placeHolder}" required>`);

        return document.getElementById(id);
    }
  }

class Select {
  constructor ({id, place, forForm}) {
    this.id = id;
    this.labelFor = forForm;
    this.place = place;
  }

  addUrgencySelect (place = this.place, id = this.id, labelFor = this.labelFor) {
      place.insertAdjacentHTML("beforeend", `
      <label for="${labelFor}">Терміновість
          <select id="${id}">
              <option>Невідкладна</option>
              <option>Важлива</option>
              <option>Звичайна</option>
          </select>
      </label>`);

      return document.getElementById(`${id}`);
  }

  addDoctorSelect (place = this.place, id = this.id, labelFor = this.labelFor) {
      place.insertAdjacentHTML("beforeend", `
      <label for="${labelFor}">Виберіть лікаря
          <select id="${id}">
              <option>Кардіолог</option>
              <option>Дантист</option>
              <option>Терапевт</option>
          </select>
      </label>`);

      return document.getElementById(id);
  }

}

class TextArea {
  constructor ({id, place}) {
    this.id = id;
    this.place = place;
  }

  add (id = this.id, place = this.place) {
    place.insertAdjacentHTML("beforeend", `
    <textarea rows="6" cols="40" placeholder="Опис візиту"></textarea>`);

    return document.getElementById(id);
  }
}

class Button {
    constructor({type, value, id, className, place}) {
        this.type = type;
        this.value = value;
        this.id = id;
        this.className = className;
        this.place = place;
        const click = this.add();
        this.eventType = "click";
        this.type === "submit" ? this.eventType = "onsubmit" : false;
        click.addEventListener(this.eventType, this.enableClick);

        return click;
    }

    add () {
        this.place.insertAdjacentHTML("beforeend", `
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
