const root = document.getElementById("root");

const button = document.getElementById("button");

const data = {
    account: {
        "email": "velocity@fex.net",
        "password": "velocity"
    },
    url: "https://ajax.test-danit.com/api/v2/cards/",

    name: undefined,
    purpose: undefined,
    description: undefined,
    urgency: undefined,
    bodyMassIndex: undefined,
    pressure: undefined,
    heartDiseases: undefined,
    lastVisitDate: undefined,
    age: undefined

}

function changeButtonsValue () {
  button.textContent = "Вхід" ? button.textContent = "Створити візит" : button.textContent = "Вхід";
}

const config = {
  confirm: {
    type: "submit",
    place: root,
    id: "confirm",
    className: "send",
    value: "Вхід",
  },
  cancel: {
    type: "button",
    place: root,
    id: "cancel",
    className: "cancel",
    value: "Відмінити"
  },
  newVisitModal: {
    place: document.getElementById("root"),
    id: "visit-form",
    title: "Створення візиту",
  },
  authorize: {
    type: "submit",
    place: root,
    id: "authorization",
    className: "send",
    value: "Вхід",
  },
  submit: {
    type: "submit",
    id: "submit",
    value: "Створити"
  },
    visitValues: {
      place: root,
        name: {
            place: root,
            type: "text",
            placeholder: "ПІБ",
            id: "visit-form-name",
            className: undefined,
            name: undefined
        },
        purpose: {
            place: root,
            type: "text",
            placeholder: "Мета вашого візиту",
            id: "visit-form-purpose",
            className: undefined,
            name: undefined
        },
        description: {
            place: root,
            placeholder: "Короткий опис візиту",
            id: "visit-form-description",
        },
        urgency: {
            place: root,
            id: "visit-form-urgency",
            forForm: undefined,
        },
        cardiologist: {
          pressure: {
              place: root,
              type: "text",
              placeholder: "Тиск зазвичай",
              id: "visit-form-pressure",
              className: undefined,
              name: undefined
          },
          heartDiseases: {
            place: root,
            type: "text",
            placeholder: "Перенесені хворови серця",
            id: "visit-form-diseases",
            className: undefined,
            name: undefined
          },
          bodyMassIndex: {
              place: root,
              type: "number",
              placeholder: "Індекс маси тіла",
              id: "visit-form-date",
              className: undefined,
              name: undefined
          },
          age: {
              place: root,
              type: "number",
              placeholder: "Вік",
              id: "visit-form-age",
              className: undefined,
              name: undefined
          }
      },
      dentist: {
        lastVisitDate: {
          place: root,
          type: "date",
          placeholder: undefined,
          id: "visit-form-date",
          className: undefined
        }
      },
      therapist: {
        age: {
          place: root,
          type: "number",
          placeholder: "Вік",
          id: "visit-form-age",
          className: undefined
        }
      },
    },

    buttonWrapper (place, className) {
        const div = document.createElement("div");
        div.className = `${className}`;
        place.append(div);

        return div;
    },
    token() { return localStorage.getItem("token") },

    element (id) {return document.getElementById(id); },
}

const ajax = {
  cardiologist: {
    doctor: "Кардіолог",
    purpose: undefined,
    urgency: "Звичайна",
    description: undefined,
    name: undefined,
    pressure: undefined,
    bodyMassIndex: undefined,
    heartDiseases: undefined,
    age: undefined
  },
  dentist: {
    doctor: "Дантист",
    purpose: undefined,
    urgency: "Звичайна",
    description: undefined,
    name: undefined,
    lastVisitDate: undefined
  },
  therapist: {
    doctor: "Терапевт",
    purpose: undefined,
    urgency: "Звичайна",
    description: undefined,
    name: undefined,
    age: undefined
  }
}

export {root, button, data, changeButtonsValue, config, ajax}
