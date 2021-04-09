import { config, root, button } from "./config.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import {Input, Select, TextArea, Button} from "./components.js";
import Client from "./Client.js";

export default class Dashboard {
  constructor (values) {
    this.client = new Client({});
    config.token() ? button.textContent = "Створити візит" : button.addEventListener("click", this.client.auth);
    config.token() && button.textContent === "Створити візит" ? button.addEventListener("click", this.createVisit) : false;

  }

  createVisit () {
    new VisitCardiologist({});
    new VisitDentist({});
    new VisitTherapist({});
  }


}
//
// export default class Dashboard {
//     constructor ({id, doctor, name, urgency, purpose, description, pressure, heartDiseases, bodyMassIndex, lastVisitDate, age}) {
//         this.id = id;
//         this.doctor = doctor;
//         this.name = name;
//         this.urgency = urgency;
//         this.purpose = purpose;
//         this.description = description;
//
//         this.heartDiseases = heartDiseases;
//         this.pressure = pressure;
//         this.bodyMassIndex = bodyMassIndex;
//         this.lastVisitDate = lastVisitDate;
//         this.age = age;
//     }
//
//     update () {
//
//         this.search();
//         document.getElementById("dashboard") === null ?
//         root.insertAdjacentHTML("afterbegin", `<div id="dashboard" class="dashboard"></div>`) : false;
//         const client = new Client();
//         client.get().then((res) => {
//             res.length !== 0 ? res.forEach((card) => {
//                 localStorage.setItem(`${card.id}`, `${JSON.stringify(card)}`);
//
//                 if (card.content.doctor === "Кардіолог") {
//                 document.getElementById("dashboard").insertAdjacentHTML("beforeend",
//                     `<div class="card">
//                         <header class="card-title">${card.content.doctor}</header>
//                         <ul class="card-content card${card.id}">
//                             <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
//                             <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
//                             </ul>
//                         <div class="button-wrapper">
//                         <button class="card-more-info" id="folding${card.id}">Детальніше</button>
//                             <button class="edit-card" id="edit${card.id}">Редагувати</button>
//                             <button class="delete-card" id="delete${card.id}">&#x274C</button>
//                         </div>
//                     </div>`);
//
//                     this.folding(card.id, card.content);
//                     this.edit(card.id, card.content);
//                     this.remove(card.id);
//                     document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
//                 } else if (card.content.doctor === "Дантист") {
//                     document.getElementById("dashboard").insertAdjacentHTML("beforeend",
//                     `<div class="card">
//                         <header class="card-title">${card.content.doctor}</header>
//                         <ul class="card-content card${card.id}">
//                             <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
//                             <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
//                             </ul>
//                             <div class="button-wrapper">
//                                 <button class="card-more-info" id="folding${card.id}">Детальніше</button>
//                                 <button class="edit-card" id="edit${card.id}">Редагувати</button>
//                                 <button class="delete-card" id="delete${card.id}">&#x274C</button>
//                             </div>
//                             </div>`);
//
//                     this.folding(card.id, card.content);
//                     this.edit(card.id, card.content);
//                     this.remove(card.id);
//                     document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
//                 } else if (card.content.doctor === "Терапевт") {
//                     document.getElementById("dashboard").insertAdjacentHTML("beforeend",
//                     `<div class="card">
//                         <header class="card-title">${card.content.doctor}</header>
//                         <ul class="card-content card${card.id}">
//                             <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
//                             <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
//                         </ul>
//                         <div class="button-wrapper">
//                             <button class="card-more-info" id="folding${card.id}">Детальніше</button>
//                             <button class="edit-card" id="edit${card.id}">Редагувати</button>
//                             <button class="delete-card" id="delete${card.id}">&#x274C</button>
//                             </div>
//                             </div>`);
//
//                     document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
//                     this.folding(card.id, card.content);
//                     this.remove(card.id);
//                     this.edit(card.id, card.content);
//                 }
//             }) : document.querySelector("#dashboard").insertAdjacentHTML("beforeend",
//             `<p class="empty">Жодного візиту не було створено</p>`);
//         })
//     }
//
//
//     folding (id, visit) {
//         document.getElementById(`folding${id}`).addEventListener("click", unfold);
//
//         function unfold () {
//             if (visit.doctor === "Кардіолог") {
//                 document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
//                 <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
//                 <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
//                 <li class="card-caption fold${id}">Тиск<p class="card-pressure">${visit.pressure}</p></li>
//                 <li class="card-caption fold${id}">Хвороби серця<p class="card-heart-diseases">${visit.heartDiseases}</p></li>
//                 <li class="card-caption fold${id}">Індекс маси тіла<p class="card-body-mass-index">${visit.bodyMassIndex}</p></li>
//                 <li class="card-caption fold${id}">Вік<p class="card-age">${visit.age}</p></li>`);
//
//                 document.getElementById(`folding${id}`).textContent = "Коротко";
//
//             } else if (visit.doctor === "Дантист") {
//                 document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
//                 <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
//                 <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
//                 <li class="card-caption fold${id}">Дата останнього візиту<p class="card-date">${visit.lastVisitDate}</p></li>`);
//
//                 document.getElementById(`folding${id}`).textContent = "Коротко";
//
//             } else if (visit.doctor === "Терапевт") {
//                 document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
//                 <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
//                 <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
//                 <li class="card-caption fold${id}">Вік<p class="card-age">${visit.age}</p></li>`);
//
//                 document.getElementById(`folding${id}`).textContent = "Коротко";
//             }
//
//             document.getElementById(`folding${id}`).removeEventListener("click", unfold);
//             return document.getElementById(`folding${id}`).addEventListener("click", fold);
//         }
//
//         function fold () {
//             const [...folds] = document.getElementsByClassName(`fold${id}`);
//             folds.forEach(details => details.remove());
//
//             document.getElementById(`folding${id}`).removeEventListener("click", fold);
//             document.getElementById(`folding${id}`).textContent = "Детальніше";
//
//             return document.getElementById(`folding${id}`).addEventListener("click", unfold);
//         }
//
//     }
//
//     async edit (id, visit) {
//         const editedVisit = {
//             id: id,
//             doctor: visit.doctor,
//             urgency: visit.urgency
//         }
//          const changeVisit = new Promise ((resolve) => {
//
//         document.getElementById(`edit${id}`).addEventListener("click", (ev) => {
//             document.querySelector(".dashboard").insertAdjacentHTML("beforeend",
//                 `<form action="" id="edit-form">
//                 <header class="edit-title">Редагування візиту</header>
//                     <input id="edit-name" type="text" value="${visit.name}" placeholder="ПІБ">
//                     <input id="edit-purpose" type="text" value="${visit.purpose}" placeholder="Мета візиту">
//                     <input id="edit-description" type="text" value="${visit.description}" placeholder="Опис">
//                     <label id="edit-urgency" for="edit-form">
//                         Терміновість
//                         <select id="edit-select-urgency">
//                              <option>Невідкладна</option>
//                              <option>Важлива</option>
//                              <option>Звичайна</option>
//                         </select>
//                     </label>
//                 </form>`);
//
//             editedVisit.urgency = config.element("edit-select-urgency").firstElementChild.value;
//
//             config.element("edit-select-urgency").addEventListener("change", (ev) => {
//                 ev.target.selectedIndex === 0 ? editedVisit.urgency = "Невідкладна" : false;
//                 ev.target.selectedIndex === 1 ? editedVisit.urgency = "Важлива" : false;
//                 ev.target.selectedIndex === 2 ? editedVisit.urgency = "Звичайна" : false;
//             });
//
//             if (visit.doctor === "Кардіолог") {
//                 config.element("edit-form").insertAdjacentHTML("beforeend",
//                 `<input id="edit-pressure" type="text" value="${visit.pressure}" placeholder="Тиск зазвичай">
//                  <input id="edit-body-mass-index" type="number" value="${visit.bodyMassIndex}" placeholder="Індекс маси тіла">
//                  <input id="edit-heart-diseases" type="text" value="${visit.heartDiseases}" placeholder="Перенесені хвороби серця">
//                  <input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
//                  <div class="edit-button-wrapper">
//                     <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
//                     <button type="button" class="edit-buttons" id="edit-cancel">Відмінити</button>
//                 </div>`);
//                 this.cancel();
//                 resolve();
//
//             } else if (visit.doctor === "Дантист") {
//                 config.element("edit-form").insertAdjacentHTML("beforeend",
//                 `<label id="edit-last-visit-date" for="edit-form">
//                      Дата останнього візиту
//                      <input id="edit-date" type="date">
//                  </label>
//                  <div class="edit-button-wrapper">
//                     <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
//                     <button type="button" class="edit-buttons" id="edit-cancel">Відмінити</button>
//                 </div>`);
//                 this.cancel();
//                 resolve();
//
//             } else if (visit.doctor === "Терапевт") {
//                 document.querySelector("#edit-form").insertAdjacentHTML("beforeend",
//                 `<input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
//                 <div class="edit-button-wrapper">
//                     <button type="submit" class="edit-button" id="edit-confirm">Підтвердити</button>
//                     <button type="button" class="edit-button" id="edit-cancel">Відмінити</button>
//                 </div>`);
//                 this.cancel();
//                 resolve();
//             }
//
//
//         });
//         });
//
//
//         changeVisit.then(() => {
//
//             const stay = setTimeout(() => {
//                 document.body.addEventListener("click", close);
//                 function close (event) {
//                     document.body.removeEventListener("click", close);
//                     if (event.target.parentElement === root || event.target.parentElement === document.body) {
//                         config.element("edit-form").remove();
//                     }
//                     clearTimeout(stay);
//                 }
//             }, 0)
//
//             config.element("edit-confirm").addEventListener("click", confirmEdit);
//
//             async function confirmEdit (ev) {
//                 ev.preventDefault();
//
//                 editedVisit.name = config.element("edit-name").value;
//                 editedVisit.purpose = config.element("edit-purpose").value;
//                 editedVisit.description = config.element("edit-description").value;
//
//                 if (visit.doctor === "Кардіолог") {
//                     editedVisit.pressure = config.element("edit-pressure").value;
//                     editedVisit.bodyMassIndex = config.element("edit-body-mass-index").value;
//                     editedVisit.heartDiseases = config.element("edit-heart-diseases").value;
//                     editedVisit.age = config.element("edit-age").value;
//                 }
//                 visit.doctor === "Дантист" ? editedVisit.lastVisitDate = config.element("edit-date").value : false
//                 visit.doctor === "Терапевт" ? editedVisit.age = config.element("edit-age").value : false;
//
//                 config.element("edit-confirm").removeEventListener("click", confirmEdit);
//                 config.element("edit-form").remove();
//                 return await new Client(editedVisit).put(editedVisit.id);
//             }
//
//         });
//     }
//
//     remove (id) {
//         const client = new Client();
//         config.element(`delete${id}`).addEventListener("click", del);
//
//         function del (event) {
//             client.delete(id);
//             config.element(`delete${id}`).removeEventListener("click", del);
//             event.target.parentElement.parentElement.remove();
//
//             document.querySelector(".card") === null ? document.querySelector("#dashboard")
//             .insertAdjacentHTML("beforeend",`<p class="empty">Жодного візиту не було створено</p>`) : false;
//
//             localStorage.removeItem(`${id}`);
//         }
//
//     }
//
//     cancel () {
//         if (config.element("edit-form") !== null) {
//             config.element("edit-cancel").addEventListener("click", deny);
//
//             function deny (event) {
//                 config.element(`${event.target.id}`).removeEventListener("click", deny);
//                 config.element("edit-form").remove();
//             }
//         }
//     }
//
//     create () {
//         const visitDetails = {};
//
//         loginOrCreate.addEventListener("click", createVisit)
//
//         function createVisit () {
//                 const promise = new Promise ((resolve) => {
//
//                 loginOrCreate.removeEventListener("click", createVisit);
//                 const visit  = new Visit({place: root, id: "visit-form"});
//                 visit.selectVisit();
//                 config.element("visit-form").classList.add("new-visit-form");
//
//             const stay = setTimeout(() => {
//                 if (config.element("visit-form") !== null) {
//                     document.body.addEventListener("click", deny);
//                     function deny (event) {
//                         if (event.target.parentElement === document.body
//                         || event.target === root || event.target === config.element("dashboard")) {
//                             document.body.removeEventListener("click", deny);
//                             config.element("visit-form") !== null ? config.element("visit-form").remove() : false;
//                             loginOrCreate.addEventListener("click", createVisit);
//                             clearTimeout(stay);
//                         }
//                     }
//                 }
//             }, 0)
//
//                 config.element("select-visit").addEventListener("click", () => {
//                     let num = config.element("select-visit").selectedIndex;
//                     if (num === 0 ) {
//                         visitDetails.doctor = "Кардіолог";
//                         resolve();
//                         return new VisitCardiologist({place: root, id: "visit-form"}).additionalForm();
//                     } else if (num === 1) {
//                         visitDetails.doctor = "Дантист";
//                             resolve();
//                             return new VisitDentist({place: root, id: "visit-form"}).additionalForm();
//                         } else if (num === 2) {
//                             visitDetails.doctor = "Терапевт";
//                             resolve();
//                             return new VisitTherapist({place: root, id: "visit-form"}).additionalForm();
//                         }
//                 });
//             });
//
//             promise.then(() => {
//             visitDetails.urgency = config.element("visit-urgency").firstElementChild.value;
//
//             config.element("visit-name").addEventListener("change", (ev) => visitDetails.name = ev.target.value);
//             config.element("visit-purpose").addEventListener("change", (ev) => visitDetails.purpose = ev.target.value);
//             config.element("visit-description").addEventListener("change",(ev)=> visitDetails.description = ev.target.value);
//             config.element("visit-urgency").addEventListener("change", (ev) => visitDetails.urgency = ev.target[ev.target.selectedIndex].value);
//
//             if (visitDetails.doctor === "Кардіолог") {
//                 config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value);
//                 config.element("visit-pressure").addEventListener("change", (ev) => visitDetails.pressure = ev.target.value);
//                 config.element("body-mass-index").addEventListener("change", (ev) => visitDetails.bodyMassIndex = ev.target.value);
//                 config.element("heart-diseases").addEventListener("change", (ev) => visitDetails.heartDiseases = ev.target.value);
//             }
//
//             visitDetails.doctor === "Дантист" ?
//             config.element("last-visit-date").addEventListener("change", (ev) => visitDetails.lastVisitDate = ev.target.value) : false;
//
//             visitDetails.doctor === "Терапевт" ?
//             config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value) : false;
//
//             config.element("submit-visit").addEventListener("click", postReq);
//             config.element("cancel-visit").addEventListener("click", deny);
//             document.body.addEventListener("click", deny);
//
//             function deny (event) {
//                 if (event.target.id === "cancel-visit" || event.target.parentElement === document.body
//                 || event.target === root || event.target === config.element("dashboard")) {
//                     document.body.removeEventListener("click", deny);
//                     config.element("cancel-visit") !== null ? config.element("cancel-visit").removeEventListener("click", deny) : false;
//                     config.element("submit-visit") !== null ? config.element("submit-visit").removeEventListener("click", postReq): false;
//                     config.element("visit-form") !== null ? config.element("visit-form").remove() : false;
//                     loginOrCreate.addEventListener("click", createVisit);
//                 }
//             }
//
//             function postReq (event) {
//                 event.preventDefault();
//                 if (visitDetails.doctor === "Кардіолог") {
//                     visitDetails.bodyMassIndex = config.element("body-mass-index").value;
//                     visitDetails.age = config.element("age").value;
//                 }
//                 visitDetails.doctor === "Дантист" ? visitDetails.lastVisitDate = config.element("last-visit-date").value : false;
//                 visitDetails.doctor === "Терапевт" ? visitDetails.age = config.element("age").value : false;
//
//                 const client = new Client(visitDetails);
//                 client.post().then(res => {
//                     visitDetails.id = res["id"];
//                 });
//
//                 config.element("cancel-visit").removeEventListener("click", deny);
//                 config.element("submit-visit").removeEventListener("click", postReq);
//                 config.element("visit-form").remove();
//             }
//         });
//     }
// }
//
//     search () {
//         const filter = {}
//         const searchPanel = document.querySelector(".panel-button-wrapper");
//         searchPanel.insertAdjacentHTML("afterbegin", `
//         <button type="button" id="search">Пошук</button>`);
//         const search = document.getElementById("search");
//         search.addEventListener("click", filterPanel);
//         function filterPanel (event) {
//             search.removeEventListener("click", filterPanel);
//             const step = new Promise((next) => {
//
//                 document.querySelector("#dashboard").insertAdjacentHTML("beforeend", `
//                 <form id="search-form">
//                 <header class="search-title">Пошук</header>
//                 <label>Фільтрувати по "Терміновість"
//                 <select id="search-urgency">
//                         <option>Не виберено</option>
//                         <option>Невідкладна</option>
//                         <option>Важлива</option>
//                         <option>Звичайна</option>
//                     </select>
//                 </label>
//                 <label>Фільтрувати по "Лікар"
//                     <select id="search-doctor">
//                         <option>Не виберено</option>
//                         <option>Кардіолог</option>
//                         <option>Дантист</option>
//                         <option>Терапевт</option>
//                     </select>
//                 </label>
//                 <div class="search-button-wrapper">
//                     <button type="button" class="search-button" id="search-confirm">Шукати</button>
//                     <button type="button" class="search-button" id="search-cancel">Закрити</button>
//                     </div>
//             </form>`);
//
//             next();
//             });
//
//             step.then(() => {
//                 const stay = setTimeout(() => {
//                     document.body.addEventListener("click", filterClose);
//                     function filterClose (event) {
//                         if (event.target.parentElement === root || event.target.parentElement === document.body) {
//                             document.body.removeEventListener("click", filterClose);
//                             config.element("search-form") !==null ? config.element("search-form").remove() : false;
//                             config.element("search").addEventListener("click", filterPanel);
//                             clearTimeout(stay);
//                         }
//                 }
//                 }, 0);
//
//
//                 filter.urgency = config.element("search-urgency").firstElementChild.value;
//                 filter.doctor = config.element("search-doctor").firstElementChild.value;
//
//                 config.element("search-urgency").addEventListener("blur", filterUrgency);
//                 function filterUrgency (event) {
//                     event.target.selectedIndex === 0 ? filter.urgency = "Не виберено" : false;
//                     event.target.selectedIndex === 1 ? filter.urgency = "Невідкладна" : false;
//                     event.target.selectedIndex === 2 ? filter.urgency = "Важлива" : false;
//                     event.target.selectedIndex === 3 ? filter.urgency = "Звичайна" : false;
//                 }
//                 config.element("search-doctor").addEventListener("blur", filterDoctor);
//                 function filterDoctor (event) {
//                     event.target.selectedIndex === 0 ? filter.urgency = "Не виберено" : false;
//                     event.target.selectedIndex === 1 ? filter.doctor = "Кардіолог" : false;
//                     event.target.selectedIndex === 2 ? filter.doctor = "Дантист" : false;
//                     event.target.selectedIndex === 3 ? filter.doctor = "Терапевт" : false;
//                 }
//                 config.element("search-confirm").addEventListener("click", searchConfirm);
//                 config.element("search-cancel").addEventListener("click", searchCancel);
//
//
//
//                 function searchConfirm (event) {
//                     config.element("search").addEventListener("click", filterPanel);
//                     config.element("search-urgency").removeEventListener("change", filterUrgency);
//                     config.element("search-doctor").removeEventListener("change", filterDoctor);
//                     config.element("search-confirm").removeEventListener("click", searchConfirm);
//                     config.element("search-cancel").removeEventListener("click", searchCancel);
//                     config.element("search-form").remove();
//                     const client = new Client();
//                     client.get().then((res) => {
//                         res.forEach((card) => {
//                             if (filter.doctor === "Не виберено" && filter.urgency === "Не виберено") {
//                                 return;
//                             } else if (document.querySelector(`.card${card.id}`) !== null &&
//                             (card.content.doctor !== filter.doctor && filter.urgency === "Не виберено")) {
//                                 document.querySelector(`.card${card.id}`).parentElement.remove();
//                             } else if (document.querySelector(`.card${card.id}`) !== null &&
//                              (card.content.urgency !== filter.urgency && filter.doctor === "Не виберено")) {
//                                 document.querySelector(`.card${card.id}`).parentElement.remove();
//                             }   else if (document.querySelector(`.card${card.id}`) !== null &&
//                             (card.content.urgency !== filter.urgency && card.content.doctor !== filter.doctor)) {
//                                document.querySelector(`.card${card.id}`).parentElement.remove();
//                            }
//                         })
//                     })
//                 }
//
//                 function searchCancel () {
//                     config.element("search-cancel").removeEventListener("click", searchCancel);
//                     config.element("search-form").remove();
//                     config.element("search").addEventListener("click", filterPanel);
//                 }
//             })
//         }
//     }
//
// }
