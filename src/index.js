import { root, loginOrCreate, account, config } from "./modules/config.js";
import {Form, Input, TextArea, Select} from "./modules/components.js";
// import { wait } from "./modules/login.js";
import ElementHandler from "./modules/ElementHandler.js";
import Visit from "./modules/Visit.js";
import VisitCardiologist from "./modules/VisitCardiologist.js";
import VisitDentist from "./modules/VisitDentist.js";
import VisitTherapist from "./modules/VisitTherapist.js";
import Client from "./modules/Client.js"
import login  from "./modules/login.js";
import Modal from "./modules/Modal.js";

const client = new Client();
config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
loginOrCreate.addEventListener("click", login);

onload = (
    config.token() !== null ?
    config.element("button").id = "create-visit": false
    )

onchange = (
    config.token() !== null ?
    config.loginToggle(true): false
)

export function emptyCase() {
    const empty = new ElementHandler ([], {element: "p", id: "no-items", parentElement: root});
    empty.addElement("foo")
    config.element("no-items").textContent = "Жодної картки візиту не було додано";
}

const promise = new Promise ((resolve) => {

    onload = (
        config.token() !== null ?
        config.element("create-visit").addEventListener("click", createVisit) : false
        )
function createVisit () {
    const visit  = new Visit({position: root, id: "visit-form"});
    visit.selectVisit();
    config.element("create-visit").removeEventListener("click", createVisit);
    config.element("select-visit").addEventListener("click", () => {
        let num = config.element("select-visit").selectedIndex
        if (num === 0 ) {
            resolve();
            sessionStorage.setItem("visit", "cardiologist");
            return new VisitCardiologist({position: root, id: "visit-form"}).additionalForm();
        } else if (num === 1) {
                resolve();
                sessionStorage.setItem("visit", "dentist");
                return new VisitDentist({position: root, id: "visit-form"}).additionalForm();
            } else if (num === 2) {
                resolve();
                sessionStorage.setItem("visit", "therapist");
                return new VisitTherapist({position: root, id: "visit-form"}).additionalForm();
            }
        });
    }
});


promise.then(() => {
    // ========================
    client.get().then(res => {
        res.length === 0 ? emptyCase() : false;
    });
    // ========================

    const visitDetails = {}
    
    config.element("visit-name").addEventListener("change", (ev) => visitDetails.name = ev.target.value);
    config.element("visit-purpose").addEventListener("change", (ev) => visitDetails.purpose = ev.target.value);
    config.element("visit-description").addEventListener("change",(ev)=> visitDetails.description = ev.target.value);
    config.element("visit-urgency").addEventListener("change", (ev) => visitDetails.urgency = ev.target[ev.target.selectedIndex].value);

    if (sessionStorage.getItem("visit") === "cardiologist") {
        config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value);
        config.element("visit-pressure").addEventListener("change", (ev) => visitDetails.pressure = ev.target.value);
        config.element("body-mass-index").addEventListener("change", (ev) => visitDetails["body-mass-index"] = ev.target.value);
        config.element("heart-deseases").addEventListener("change", (ev) => visitDetails["heart-deseases"] = ev.target.value);
    }

    sessionStorage.getItem("visit") === "dentist" ?
    config.element("last-visit-date").addEventListener("change", (ev) => visitDetails["last-visit-date"] = ev.target.value) : false;

    sessionStorage.getItem("visit") === "therapist" ?
    config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value) : false;

    
    config.element("submit-visit").addEventListener("click", (ev) => {
        ev.preventDefault();
        const client = new Client(visitDetails);
        client.post().then(res => {
        localStorage.setItem("id", res["id"]);
        visitDetails.id = res["id"];
        
        });
    });
});