const root = document.getElementById("root");

const button = document.getElementById("button");

const data = {
    account: {
        "email": "velocity@fex.net",
        "password": "velocity"
    },
    url: "https://ajax.test-danit.com/api/v2/cards/",
}

function changeButtonsValue () {
  button.textContent = "Вхід" ? button.textContent = "Створити візит" : button.textContent = "Вхід";
}

const config = {
  buttonLogIn: {
    type: "submit",
    place: root,
    id: "auth-button-confirm",
    className: "send",
    value: "Вхід",
  },
  buttonCancel: {
    type: "button",
    place: root,
    id: "auth-button-cancel",
    className: "cancel",
    value: "Відмінити"
  },
  newVisitModal: {
    place: document.getElementById("root"),
    id: "visit-form",
    title: "Створення візиту",
  },
  submitVisit: {
    type: "submit",
    id: "submit-visit",
    value: "Створити візит"
  },
    visitValues: {
      position: root,
        name: {
            position: root,
            type: "text",
            placeholder: "ПІБ",
            id: "visit-form-name",
            className: undefined,
            name: undefined
        },
        purpose: {
            position: root,
            type: "text",
            placeholder: "Мета вашого візиту",
            id: "visit-form-purpose",
            className: undefined,
            name: undefined
        },
        description: {
            position: root,
            type: "text",
            placeholder: "Короткий опис візиту",
            id: "visit-form-description",
            className: undefined,
            name: undefined
        },
        urgency: {
            position: root,
            id: "visit-form-urgency",
            forForm: undefined,
        },
        cardiologist: {
          pressure: {
              position: root,
              type: "text",
              placeholder: "Тиск зазвичай",
              id: "visit-form-pressure",
              className: undefined,
              name: undefined
          },
          bodyMassIndex: {
              position: root,
              type: "number",
              placeholder: "Індекс маси тіла",
              id: "visit-form-date",
              className: undefined,
              name: undefined
          },
          age: {
              position: root,
              type: "number",
              placeholder: "Вік",
              id: "visit-form-age",
              className: undefined,
              name: undefined
          }
      },
      dentist: {
        lastVisitDate: {
          position: root,
          type: "date",
          placeholder: undefined,
          id: "visit-form-date",
          className: undefined
        }
      },
      therapist: {
        age: {
          position: root,
          type: "number",
          placeholder: "Вік",
          id: "visit-form-age",
          className: undefined
        }
      },
    },

    buttonWrapper (position, className) {
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
