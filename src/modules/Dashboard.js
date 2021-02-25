import { config } from "./config.js";
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

    edit () {

    }

    setupCard () {
        const card = document.createElement("div");
        card.classList.add("card");
        document.getElementById("root").append(card);

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
        editButton.textContent = "Редагувати";
        card.append(editButton);
        
        const xButton = document.createElement("button");
        xButton.classList.add("delete-card");
        xButton.style.content = "X";
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
        
        // folding.removeEventListener("click", this.unfold);
        folding.textContent = "Коротко";
        // folding.addEventListener("click", this.briefly);
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

        // folding.removeEventListener("click", this.briefly);
        folding.textContent = "Детальніше";
        // folding.addEventListener("click", this.unfold);
    }

}