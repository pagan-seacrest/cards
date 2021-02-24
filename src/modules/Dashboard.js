export default class Dashboard {
    constructor (visit) {
        this.visit = visit;
    }
    update () {

    }

    edit () {

    }

    setup () {
        const card = document.createElement("div");
        card.classList.add("card");
        document.getElementById("root").append(card);
        const title = document.createElement("header");
        title.classList.add("card-title");
        card.prepend(title);
        const content = document.createElement("ul");
        content.classList.add("card-content");
        card.prepend(content);
        const purpose = document.createElement("li");
        purpose.classList.add("card-purpose");
        purpose.textContent = this.visit.purpose;
        const urgency = document.createElement("li");
        urgency.classList.add("card-urgency");
        urgency.textContent = this.visit.urgency;
        
    }
}