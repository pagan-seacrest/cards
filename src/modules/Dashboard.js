import { config, root } from "./config.js";
import Client from "./Client.js";

export default class Dashboard {
    constructor ({doctor, name, urgency, purpose, description, pressure, heartDiseases, bodyMassIndex, lastVisitDate, age}) {
        this.doctor = doctor;
        this.name = name;
        this.urgency = urgency;
        this.purpose = purpose;
        this.description = description;

        this.heartDiseases = heartDiseases;
        this.pressure = pressure;
        this.bodyMassIndex = bodyMassIndex;
        this.lastVisitDate = lastVisitDate;
        this.age = age;                 
        
    }

    update () {
        document.getElementById("dashboard") === null ?
        root.insertAdjacentHTML("afterbegin", `<div id="dashboard" class="dashboard"></div>`) : false;
        const client = new Client();
        client.get().then((res) => {

            res.length !== 0 ? res.forEach((card) => {
                localStorage.setItem(`${card.id}`, `${JSON.stringify(card)}`);

                if (card.content.doctor === "Кардіолог") {
                document.getElementById("dashboard").insertAdjacentHTML("beforeend", 
                    `<div class="card">
                        <header class="card-title">${card.content.doctor}</header>
                        <ul class="card-content card${card.id}">
                            <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
                            <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
                        </ul>
                        <button class="card-more-info" id="folding${card.id}">Детальніше</button>
                        <button class="edit-card" id="edit${card.id}">Редагувати</button>
                        <button class="delete-card" id="delete${card.id}">X</button>
                    </div>`);

                    this.folding(card.id, card.content);
                    this.edit(card.id, card.content);
                    this.remove(card.id);
                    document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
                } else if (card.content.doctor === "Дантист") {
                    document.getElementById("dashboard").insertAdjacentHTML("beforeend", 
                    `<div class="card">
                        <header class="card-title">${card.content.doctor}</header>
                        <ul class="card-content card${card.id}">
                            <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
                            <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
                            </ul>
                            <button class="card-more-info" id="folding${card.id}">Детальніше</button>
                            <button class="edit-card" id="edit${card.id}">Редагувати</button>
                            <button class="delete-card" id="delete${card.id}">X</button>
                            </div>`);
                            
                    this.folding(card.id, card.content);
                    this.edit(card.id, card.content);
                    this.remove(card.id);
                    document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
                } else if (card.content.doctor === "Терапевт") {
                    document.getElementById("dashboard").insertAdjacentHTML("beforeend", 
                    `<div class="card">
                        <header class="card-title">${card.content.doctor}</header>
                        <ul class="card-content card${card.id}">
                            <li class="card-caption-default">Ім'я<p class="card-name">${card.content.name}</p></li>
                            <li class="card-caption-default">Терміновість<p class="card-urgency">${card.content.urgency}</p></li>
                        </ul>
                        <button class="card-more-info" id="folding${card.id}">Детальніше</button>
                        <button class="edit-card" id="edit${card.id}">Редагувати</button>
                        <button class="delete-card" id="delete${card.id}">X</button>
                    </div>`);

                    document.querySelector(".empty") !== null ? document.querySelector(".empty").remove() : false;
                    this.folding(card.id, card.content);
                    this.edit(card.id, card.content);
                    this.remove(card.id);
                }
            }) : document.querySelector("#dashboard").insertAdjacentHTML("beforeend",
            `<p class="empty">Жодного візиту не було створено</p>`);
        })
    }


    folding (id, visit) {
        document.getElementById(`folding${id}`).addEventListener("click", unfold);

        function unfold () {
            if (visit.doctor === "Кардіолог") {
                document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
                <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
                <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
                <li class="card-caption fold${id}">Тиск<p class="card-pressure">${visit.pressure}</p></li>
                <li class="card-caption fold${id}">Хвороби серця<p class="card-heart-diseases">${visit.heartDiseases}</p></li>
                <li class="card-caption fold${id}">Індекс маси тіла<p class="card-body-mass-index">${visit.bodyMassIndex}</p></li
                <li class="card-caption fold${id}">Вік<p class="card-age">${visit.age}</p></li>`);

                document.getElementById(`folding${id}`).textContent = "Коротко";
                
            } else if (visit.doctor === "Дантист") {
                document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
                <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
                <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
                <li class="card-caption fold${id}">Дата останнього візиту<p class="card-date">${visit.lastVisitDate}</p></li>`);

                document.getElementById(`folding${id}`).textContent = "Коротко";

            } else if (visit.doctor === "Терапевт") {
                document.querySelector(`.card${id}`).insertAdjacentHTML("beforeend", `
                <li class="card-caption fold${id}">Мета візиту<p class="card-purpose">${visit.purpose}</p></li>
                <li class="card-caption fold${id}">Опис<p class="card-description">${visit.description}</p></li>
                <li class="card-caption fold${id}">Вік<p class="card-age">${visit.age}</p></li>`);
                
                document.getElementById(`folding${id}`).textContent = "Коротко";
            }
            
            document.getElementById(`folding${id}`).removeEventListener("click", unfold);
            return document.getElementById(`folding${id}`).addEventListener("click", fold);
        }
        
        function fold () {
            const [...folds] = document.getElementsByClassName(`fold${id}`);
            folds.forEach(details => details.remove());
            
            document.getElementById(`folding${id}`).removeEventListener("click", fold);
            document.getElementById(`folding${id}`).textContent = "Детальніше";
            
            return document.getElementById(`folding${id}`).addEventListener("click", unfold);
        }
        
    }
    
    async edit (id, visit) {
        const editedVisit = {
            id: id,
            doctor: visit.doctor,
            urgency: visit.urgency
        }
         const changeVisit = new Promise ((resolve) => {

        document.getElementById(`edit${id}`).addEventListener("click", (ev) => {
            document.querySelector(".dashboard").insertAdjacentHTML("beforeend", 
                `<form action="" id="edit-form">
                    <input id="edit-name" type="text" value="${visit.name}" placeholder="ПІБ">
                    <input id="edit-purpose" type="text" value="${visit.purpose}" placeholder="Мета візиту">
                    <input id="edit-description" type="text" value="${visit.description}" placeholder="Опис">
                    <label id="edit-urgency" for="edit-form">
                        Терміновість
                        <select id="edit-select-urgency">
                             <option>Невідкладна</option>
                             <option>Важлива</option>
                             <option>Звичайна</option>
                        </select>
                    </label>
                </form>`);
                
            config.element("edit-select-urgency").addEventListener("change", (ev) => {
                ev.target.selectedIndex === 0 ? editedVisit.urgency = "Невідкладна" : false;
                ev.target.selectedIndex === 1 ? editedVisit.urgency = "Важлива" : false;
                ev.target.selectedIndex === 2 ? editedVisit.urgency = "Звичайна" : false;
            });

            if (visit.doctor === "Кардіолог") {
                config.element("edit-form").insertAdjacentHTML("beforeend", 
                `<input id="edit-pressure" type="text" value="${visit.pressure}" placeholder="Тиск зазвичай">
                 <input id="edit-body-mass-index" type="number" value="${visit.bodyMassIndex}" placeholder="Індекс маси тіла">
                 <input id="edit-heart-diseases" type="text" value="${visit.heartDiseases}" placeholder="Перенесені хвороби серця">
                 <input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
                 <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
                 <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`);
                 resolve();
                
            } else if (visit.doctor === "Дантист") {
                config.element("edit-form").insertAdjacentHTML("beforeend",
                `<label id="edit-last-visit-date" for="edit-form">
                     Дата останнього візиту
                     <input id="edit-date" type="date">
                 </label>
                 <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
                 <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`);
                 resolve();

            } else if (visit.doctor === "Терапевт") {
                document.querySelector("#edit-form").insertAdjacentHTML("beforeend",
                `<input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
                 <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
                 <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`);
                resolve();
            }
        });
        });

        changeVisit.then(() => {

            config.element("edit-confirm").addEventListener("click", confirmEdit);
            
            function confirmEdit (ev) {
                
                ev.preventDefault();
                
                editedVisit.name = config.element("edit-name").value;
                editedVisit.purpose = config.element("edit-purpose").value;
                editedVisit.description = config.element("edit-description").value;
                
                if (visit.doctor === "Кардіолог") {
                    editedVisit.pressure = config.element("edit-pressure").value;
                    editedVisit.bodyMassIndex = config.element("edit-body-mass-index").value;
                    editedVisit.heartDiseases = config.element("edit-heart-diseases").value;
                    editedVisit.age = config.element("edit-age").value;
                }
                visit.doctor === "Дантист" ? editedVisit.lastVisitDate = config.element("edit-date").value : false
                visit.doctor === "Терапевт" ? editedVisit.age = config.element("edit-age").value : false;
                
                config.element("edit-confirm").removeEventListener("click", confirmEdit);
                config.element("edit-form").remove();

                return new Client(editedVisit).put(editedVisit.id);
            }
            
        });
    }

    remove (id) {
        const client = new Client();
        config.element(`delete${id}`).addEventListener("click", del);

        function del (event) {
            client.delete(id);
            config.element(`delete${id}`).removeEventListener("click", del);
            event.target.parentElement.remove();
        }

    }

    setupCard () {
        document.getElementById("dashboard").insertAdjacentHTML("beforeend", `
        <div class="card">
            <header class="card-title">${this.doctor}</header>
            <ul class="card-content" id="card-details-fields">
                <li class="card-caption-default">Ім'я
                    <p class="card-name">${this.name}</p>
                </li>
                <li class="card-caption-default">Терміновість
                    <p class="card-urgency">${this.urgency}</p>
                </li>
            </ul>
            <button class="card-button card-more-info" id="card-unfold">Детальніше</>
            <button class="card-button edit-card">Редагувати</>
            <button class="delete-card">X</>
        </div>`);        
    }

    unfold (id) {
        let visitDetails = localStorage.getItem(`${id}`);
        visitDetails = JSON.parse(visitDetails);
        
        document.getElementById(`folding${id}`).insertAdjacentHTML("beforeend", `
        <li class="card-caption">Мета візиту
            <p class="card-purpose">${visitDetails.purpose}</p>
        </li>
        <li class="card-caption">Опис
            <p class="card-description">${visitDetails.description}</p>
        </li>`);

        if (visitDetails.doctor === "Кардіолог") {
            document.getElementById(`folding${id}`).insertAdjacentHTML("afterbegin", `
                <li class="card-caption">Тиск
                    <p class="card-pressure">${visitDetails.pressure}</p>
                </li>
                <li class="card-caption">Хвороби серця
                    <p class="card-heart-diseases">${visitDetails.heartDiseases}</p>
                </li>
                <li class="card-caption">Індекс маси тіла
                    <p class="card-body-mass-index">${visitDetails.bodyMassIndex}</p>
                </li>
                <li class="card-caption">Вік
                    <p class="card-age">${visitDetails.age}</p>
                </li>`);

        } else if (visitDetails.doctor === "Дантист") {
            document.getElementById(`folding${id}`).insertAdjacentHTML("beforebegin", `
                <li class="card-caption">Дата останнього візиту
                    <p class="card-last-visit-date">${visitDetails.lastVisitDate}</p>
                </li>`);

        } else if (visitDetails.doctor === "Терапевт") {
            document.getElementById(`folding${id}`).insertAdjacentHTML("beforebegin", `
                <li class="card-caption">Вік
                    <p class="card-age">${visitDetails.age}</p>
                </li>`);
        }

        document.getElementById(`folding${id}`).textContent = "Коротко";
    }

    briefly () {
        const folding = config.element("card-unfold");

        let visitDetails = localStorage.getItem(`${document.getElementsByClassName("card").length - 1}`);
        visitDetails = JSON.parse(visitDetails);
        
        const [...captions] = document.getElementsByClassName("card-caption");
        document.querySelector(".card-purpose").remove();   
        document.querySelector(".card-description").remove();
        
        if (visitDetails.doctor === "Кардіолог") {
            document.querySelector(".card-pressure").remove();
            document.querySelector(".card-heart-diseases").remove();
            document.querySelector(".card-body-mass-index").remove();
            document.querySelector(".card-age").remove();
        }
        
        visitDetails.doctor === "Дантист" ? document.querySelector(".card-last-visit-date").remove() : false;
        visitDetails.doctor === "Терапевт" ? document.querySelector(".card-age").remove() : false;
        
        captions.forEach(elt => elt.remove());

        folding.textContent = "Детальніше";
    }

    action () {
        const client = new Client();
        client.get().then((res) => {
            res.forEach((card) => {
                
            });
        });
    }

}