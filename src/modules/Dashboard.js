import { config, root, button, ajax } from "./config.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import {Input, Select, TextArea, Button} from "./components.js";
import Client from "./Client.js";
import Modal from "./Modal.js";
import Visit from "./Visit.js";

export default class Dashboard {
  constructor () {
    
  }

  init () {
    const client = new Client({});
    config.token() ? button.textContent = "Створити візит" : button.addEventListener("click", client.setup);
    if (config.token() && button.textContent === "Створити візит") {
      button.addEventListener("click", this.createVisit);
    } 
  }

  createVisit () {
    if (document.getElementById("visit-form") === null) {
      new VisitCardiologist({});
      new VisitDentist({});
      new VisitTherapist({});
    } else { return; }
  }

  update () {
    if (document.getElementById("dashboard") === null) {
      const dashboard = new Modal({place: root, id: "dashboard", title: "Створені візити"});
      const form = dashboard.add();
      new Client({}).get().then(res => {
        if (res.length === 0) {
          this.empty(form);
        } else { res.forEach(visit => this.card(form, visit)); }
      });
    } else {
      document.getElementById("dashboard").children[1] === undefined ? 
      this.empty(document.getElementById("dashboard")) : false;
    }
  }

  card (place, visit) {
    localStorage.setItem(`${visit.id}`, JSON.stringify(visit));
    place.insertAdjacentHTML("beforeend", `
          <div id="${visit.id}" class="card">
            <header class="card-title">${visit.doctor}</header>
            <ul>
              <li>Ім'я<p>${visit.name}</p></li>
              <li>Мета візиту<p>${visit.purpose}</p></li>
              <li>Терміновість<p>${visit.urgency}</p></li>
            </ul>
          </div>`);
    const wrapper = new Modal({}).wrap("button-wrapper", "div", document.getElementById(`${visit.id}`));
    new Button({type: "button", value: "Розгонути", id: `folding-${visit.id}`, className: "folding", place: wrapper});
    new Button({type: "button", value: "Редагувати", id: `edit-${visit.id}`, className: "edit", place: wrapper});
    new Button({type: "button", value: "&#x274C", id: `delete-${visit.id}`, className: "delete", place: document.getElementById(`${visit.id}`)});
  }

  folding (card, folding, fold = false) {
    if (localStorage.getItem(`${card.id}`) !== null) {
      folding.textContent = "Згорнути";
      const visit = JSON.parse(localStorage.getItem(`${card.id}`));
      if (visit.doctor === "Кардіолог") {
        card.children[1].insertAdjacentHTML("beforeend", `
        <li>Опис візиту<p>${visit.description}</p></li>
        <li>Тиск зазвичай<p>${visit.pressure}</p></li>
        <li>Перенесені хвороби серця<p>${visit.heartDiseases}</p></li>
        <li>Індекс маси тіла<p>${visit.bodyMassIndex}</p></li>
        <li>Вік<p>${visit.age}</p></li>`);
      } else if (visit.doctor === "Дантист") {
        card.children[1].insertAdjacentHTML("beforeend", `
        <li>Опис візиту<p>${visit.description}</p></li>
        <li>Дата останнього візиту<p>${visit.lastVisitDate}</p></li>`);
      } else if (visit.doctor === "Терапевт") {
        card.children[1].insertAdjacentHTML("beforeend", `
        <li>Опис візиту<p>${visit.description}</p></li>
        <li>Вік<p>${visit.age}</p></li>`);
      }
    } else {
      folding.textContent = "Згорнути";
      new Client({}).card(card.id).then(visit => {
        localStorage.setItem(`${visit.id}`, JSON.stringify(visit));
        if (visit.doctor === "Кардіолог") {
          card.children[1].insertAdjacentHTML("beforeend", `
          <li>Опис візиту<p>${visit.description}</p></li>
          <li>Тиск зазвичай<p>${visit.pressure}</p></li>
          <li>Перенесені хвороби серця<p>${visit.heartDiseases}</p></li>
          <li>Індекс маси тіла<p>${visit.bodyMassIndex}</p></li>
          <li>Вік<p>${visit.age}</p></li>`);
        } else if (visit.doctor === "Дантист") {
          card.children[1].insertAdjacentHTML("beforeend", `
          <li>Опис візиту<p>${visit.description}</p></li>
          <li>Дата останнього візиту<p>${visit.lastVisitDate}</p></li>`);
        } else if (visit.doctor === "Терапевт") {
          card.children[1].insertAdjacentHTML("beforeend", `
          <li>Опис візиту<p>${visit.description}</p></li>
          <li>Вік<p>${visit.age}</p></li>`);
        }
      });
    }
    if (fold) {
      const [,,,...list] = card.children[1].children;
      list.forEach(li => li.remove());
      folding.textContent = "Розрнути";
    }
  }
  
  edit (card) {
    if (localStorage.getItem(`${card.id}`) !== null) {
      const visit = JSON.parse(localStorage.getItem(`${card.id}`));
      const resolve = new Promise((resolve) => {
        const edit = new Visit({id: "edit-form", visit: visit}).edit();
        resolve(edit);
      });
      resolve.then(edit => edit.addEventListener("click", (ev) => {
        new Client(ajax.define()).put(card.id).then(() => {
          ev.target.parentElement.parentElement.remove();
          this.reload();
          card.remove();
        });
      }, {once: true}))
    } else {
      new Client({}).card(card.id).then(visit => {
        localStorage.setItem(`${visit.id}`, JSON.stringify(visit));
        new Visit({id: "edit-form", visit: visit}).edit();
      });
    }
    
  }

  empty (place) {
    const msg = document.createElement("p");
    msg.textContent = "Жодного візиту не було створено";
    msg.id = "empty";
    place.append(msg);

    return empty;
  }

  reload () {
    document.getElementById("dashboard").remove();
    this.update();
    ajax.unset();
  }
}

export function main () {
  const dashboard = new Dashboard();
  dashboard.init();
  dashboard.update();
}