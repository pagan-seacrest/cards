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

    }

    edit (id) {    
        let visit = localStorage.getItem(`${id.slice(-1)}`);
        visit = JSON.parse(visit);
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

        config.element("edit-select-urgency").addEventListener("change", () => {
            config.element("edit-select-urgency").selectedIndex === 0 ? visit.urgency = "Невідкладна" : false;
            config.element("edit-select-urgency").selectedIndex === 1 ? visit.urgency = "Важлива" : false;
            config.element("edit-select-urgency").selectedIndex === 2 ? visit.urgency = "Звичайна" : false;
        });

        if (visit.doctor === "Кардіолог") {
            config.element("edit-form").insertAdjacentHTML("beforeend", 
            `<input id="edit-pressure" type="text" value="${visit.pressure}" placeholder="Тиск зазвичай">
             <input id="edit-body-mass-index" type="number" value="${visit.bodyMassIndex}" placeholder="Індекс маси тіла">
             <input id="edit-heart-diseases" type="text" value="${visit.heartDiseases}" placeholder="Перенесені хвороби серця">
             <input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
             <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
             <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`);

            
        } else if (visit.doctor === "Дантист") {
            config.element("edit-form").insertAdjacentHTML("beforeend",
            `<label id="edit-last-visit-date" for="edit-form">
                 Дата останнього візиту
                 <input id="edit-date" type="date">
             </label>
             <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
             <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`)
        } else if (visit.doctor === "Терапевт") {
            config.element("edit-form").insertAdjacentHTML("beforeend",
            `<input id="edit-age" type="number" value="${visit.age}" placeholder="Вік">
             <button type="submit" class="edit-buttons" id="edit-confirm">Підтвердити</button>
             <button type="submit" class="edit-buttons" id="edit-cancel">Відмінити</button>`)
        }

        config.element("edit-confirm").addEventListener("click", (ev) => {
            ev.preventDefault();
            visit.name = config.element("edit-name").value;
            visit.purpose = config.element("edit-purpose").value;
            visit.description = config.element("edit-description").value;
            
            if (visit.doctor === "Кардіолог") {
                    visit.pressure = config.element("edit-pressure").value;
                    visit.bodyMassIndex = config.element("edit-body-mass-index").value;
                    visit.heartDiseases = config.element("edit-heart-diseases").value;
                    visit.age = config.element("edit-age").value;
                } 
            visit.doctor === "Дантист" ? visit.lastVisitDate = config.element("edit-date").value : false
            visit.doctor === "Терапевт" ? visit.age = config.element("edit-age").value : false;
            console.log(visit);
        });
        
        const edit = new Client()

    }

    setupCard () {
        const dashboard = document.createElement("div");
        dashboard.classList.add("dashboard");
        document.getElementById("root").append(dashboard);

        const card = document.createElement("div");
        card.classList.add("card");
        dashboard.append(card);

        const title = document.createElement("header");
        title.classList.add("card-title");
        title.textContent = this.doctor;
        card.prepend(title);

        const content = document.createElement("ul");
        content.classList.add("card-content");
        content.id = "card-details-fields";
        card.append(content);

        const nameCaption = document.createElement("li");
        nameCaption.textContent = "Ім'я";
        nameCaption.classList.add("card-caption-default");
        content.append(nameCaption);

        const name = document.createElement("p");
        name.classList.add("card-name");
        name.textContent = this.name;
        nameCaption.append(name);

        const urgencyCaption = document.createElement("li");
        urgencyCaption.textContent = "Терміновість";
        urgencyCaption.classList.add("card-caption-default");
        content.append(urgencyCaption);
        
        const urgency = document.createElement("p");
        urgency.classList.add("card-urgency");
        urgency.textContent = this.urgency;
        urgencyCaption.append(urgency);

        const unfoldButton = document.createElement("button");
        unfoldButton.classList.add("card-more-info");
        unfoldButton.id = "card-unfold";
        unfoldButton.textContent = "Детальніше";
        card.append(unfoldButton);

        const editButton = document.createElement("button");
        editButton.classList.add("edit-card");
        editButton.id = `card-${document.getElementsByClassName("dashboard").length - 1}`;
        editButton
        editButton.textContent = "Редагувати";
        card.append(editButton);
        
        const xButton = document.createElement("button");
        xButton.classList.add("delete-card");
        xButton.textContent = "X";
        card.append(xButton);
    }

    unfold () {
        let visitDetails = localStorage.getItem(`${document.getElementsByClassName("card").length - 1}`);
        visitDetails = JSON.parse(visitDetails);
        
        const list = config.element("card-details-fields");

        const purposeCaption = document.createElement("li");
        purposeCaption.classList.add("card-caption");
        purposeCaption.textContent = "Мета візиту";
        list.append(purposeCaption);
        
        const purpose = document.createElement("p");
        purpose.classList.add("card-purpose");
        purpose.textContent = visitDetails.purpose;
        purposeCaption.append(purpose);

        const descriptionCaption = document.createElement("li");
        descriptionCaption.classList.add("card-caption");
        descriptionCaption.textContent = "Опис";
        list.append(descriptionCaption);
        
        const description = document.createElement("p");
        description.classList.add("card-description");
        description.textContent = visitDetails.description;
        descriptionCaption.append(description);

        if (visitDetails.doctor === "Кардіолог") {
            const pressureCaption = document.createElement("li");
            pressureCaption.classList.add("card-caption");
            pressureCaption.textContent = "Тиск";
            list.append(pressureCaption);
            const pressure = document.createElement("p");
            pressure.classList.add("card-pressure");
            pressure.textContent = visitDetails.pressure;
            pressureCaption.append(pressure);
            

            const heartDiseasesCaption = document.createElement("li");
            heartDiseasesCaption.classList.add("card-caption");
            heartDiseasesCaption.textContent = "Хвороби серця";
            list.append(heartDiseasesCaption);
            const heartDiseases = document.createElement("p");
            heartDiseases.classList.add("card-heart-diseases");
            heartDiseases.textContent = visitDetails.heartDiseases;
            heartDiseasesCaption.append(heartDiseases);

            const bodyMassIndexCaption = document.createElement("li");
            bodyMassIndexCaption.classList.add("card-caption");
            bodyMassIndexCaption.textContent = "Індекс маси тіла";
            list.append(bodyMassIndexCaption);
            const bodyMassIndex = document.createElement("p");
            bodyMassIndex.classList.add("card-body-mass-index");
            bodyMassIndex.textContent = visitDetails.bodyMassIndex;
            bodyMassIndexCaption.append(bodyMassIndex);

            const ageCaption = document.createElement("li");
            ageCaption.classList.add("card-caption");
            ageCaption.textContent = "Вік";
            list.append(ageCaption);
            const age = document.createElement("p");
            age.classList.add("card-age");
            age.textContent = visitDetails.age;
            ageCaption.append(age);

        } else if (visitDetails.doctor === "Дантист") {
            const lastVisitCaption = document.createElement("li");
            lastVisitCaption.classList.add("card-caption");
            lastVisitCaption.textContent = "Дата останнього візиту";
            list.append(lastVisitCaption);
            const lastVisit = document.createElement("p");
            lastVisit.classList.add("card-last-visit-date");
            lastVisit.textContent = visitDetails.lastVisitDate;
            lastVisitCaption.append(lastVisit);

        } else if (visitDetails.doctor === "Терапевт") {
            const ageCaption = document.createElement("li");
            ageCaption.classList.add("card-caption");
            ageCaption.textContent = "Вік";
            list.append(ageCaption);
            const age = document.createElement("li");
            age.classList.add("card-age");
            age.textContent = visitDetails.age;
            list.append(age);
        }

        const folding = config.element("card-unfold");
        
        folding.textContent = "Коротко";
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

}