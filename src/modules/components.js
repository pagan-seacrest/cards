import { config, data } from "./config.js";
import Client from "./Client.js";
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
      if (document.getElementById(id) !== null) {
        return document.getElementById(id);
      } else {
        place.insertAdjacentHTML("beforeend", `
        <input type="${this.type}"
        class="${this.className}"
        id="${this.id}" name="${this.name}"
        placeholder="${this.placeHolder}" required>`);
        document.getElementById(id).addEventListener("blur", this.listen);

        return document.getElementById(id);
      }
    }

    listen (event) {
      switch (this.id) {
        case config.visitValues.name.id: data.name = event.target.value;
          break;
          case config.visitValues.purpose.id: data.purpose = event.target.value;
            break;
            case config.visitValues.therapist.age.id: data.age = event.target.value;
              break;
              case config.visitValues.cardiologist.age.id: data.age = event.target.value;
                break;
                case config.visitValues.cardiologist.pressure.id: data.pressure = event.target.value;
                  break;
                  case config.visitValues.dentist.lastVisitDate.id: data.lastVisitDate = event.target.value;
                    break;
                    case config.visitValues.cardiologist.heartDiseases.id: data.heartDiseases = event.target.value;
                      break;
                      case config.visitValues.cardiologist.bodyMassIndex.id: data.bodyMassIndex = event.target.value;
                        break;
                          default: return;
      }
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
              <option>Звичайна</option>
              <option>Важлива</option>
              <option>Невідкладна</option>Звичайна
          </select>
      </label>`);
      document.getElementById(id).addEventListener("click", this.listen);
      return document.getElementById(`${id}`);
  }

  addDoctorSelect (place = this.place, id = this.id, labelFor = this.labelFor) {
      place.insertAdjacentHTML("beforeend", `
      <label class="doctor-modal-select" for="${labelFor}">Виберіть лікаря
          <select id="${id}">
              <option>Кардіолог</option>
              <option>Дантист</option>
              <option>Терапевт</option>
          </select>
      </label>`);

      return document.getElementById(id);
  }

  listen (event) {
    data.urgency = event.target.value;
  }

}

class TextArea {
  constructor ({id, place}) {
    this.id = id;
    this.place = place;
  }

  add (id = this.id, place = this.place) {
    place.insertAdjacentHTML("beforeend", `
    <textarea id="${id}" rows="4" cols="22" placeholder="Опис візиту"></textarea>`);
    document.getElementById(id).addEventListener("blur", this.listen);

    return document.getElementById(id);
  }

  listen (event) {
    data.description = event.target.value;
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
        this.type === "submit" ? this.eventType = "submit" : false;
        click.parentElement.parentElement.addEventListener(this.eventType, this.enableClick);

        return click;
    }

    add () {
        this.place.insertAdjacentHTML("beforeend", `
        <button type="${this.type}" id="${this.id}" class="${this.className}">${this.value}</button>`);

        return document.getElementById(this.id)
    }

    enableClick (event) {
      event.preventDefault();
      event.target.id === "cancel" ?
      event.target.parentElement.parentElement.remove() : false;

      if (event.target.id === "authorization") {
        new Client({}).setUp();
        event.target.parentElement.parentElement.remove();
      }
    }
  }


export {Form, Input, Select, TextArea, Button};
