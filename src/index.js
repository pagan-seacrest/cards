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
import Dashboard from "./modules/Dashboard.js";

const client = new Client();
config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
loginOrCreate.addEventListener("click", login);
const visitDetails = {}

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
            visitDetails.doctor = "Кардіолог";
            resolve();
            sessionStorage.setItem("visit", "cardiologist");
            return new VisitCardiologist({position: root, id: "visit-form"}).additionalForm();
        } else if (num === 1) {
            visitDetails.doctor = "Дантист";
                resolve();
                sessionStorage.setItem("visit", "dentist");
                return new VisitDentist({position: root, id: "visit-form"}).additionalForm();
            } else if (num === 2) {
                visitDetails.doctor = "Терапевт";
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
    visitDetails.urgency = config.element("visit-urgency").firstElementChild.value;
    
    config.element("visit-name").addEventListener("change", (ev) => visitDetails.name = ev.target.value);
    config.element("visit-purpose").addEventListener("change", (ev) => visitDetails.purpose = ev.target.value);
    config.element("visit-description").addEventListener("change",(ev)=> visitDetails.description = ev.target.value);
    config.element("visit-urgency").addEventListener("change", (ev) => visitDetails.urgency = ev.target[ev.target.selectedIndex].value);

    if (sessionStorage.getItem("visit") === "cardiologist") {
        config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value);
        config.element("visit-pressure").addEventListener("change", (ev) => visitDetails.pressure = ev.target.value);
        config.element("body-mass-index").addEventListener("change", (ev) => visitDetails.bodyMassIndex = ev.target.value);
        config.element("heart-diseases").addEventListener("change", (ev) => visitDetails.heartDiseases = ev.target.value);
    }

    sessionStorage.getItem("visit") === "dentist" ?
    config.element("last-visit-date").addEventListener("change", (ev) => visitDetails.lastVisitDate = ev.target.value) : false;

    sessionStorage.getItem("visit") === "therapist" ?
    config.element("age").addEventListener("change", (ev) => visitDetails.age = ev.target.value) : false;

    
    
    config.element("submit-visit").addEventListener("click", postReq);
    
        function postReq (event) {
            event.preventDefault();
            const client = new Client(visitDetails);
            client.post().then(res => {
            localStorage.setItem("id", res["id"]);
            visitDetails.id = res["id"];
            });
            config.element("submit-visit").removeEventListener("click", postReq);
            config.element("visit-form").firstElementChild.remove();
            config.element("visit-form").style.display = "none";
            
            
            const dashborad = new Dashboard(visitDetails);
                    
            const visitShow = new Promise((resolve) => {
                dashborad.setupCard();
                resolve();
            });

            visitShow.then(() => {
                config.element("card-unfold").addEventListener("click", unfold);
            })

            function unfold () {
                dashborad.unfold();
                config.element("card-unfold").removeEventListener("click", unfold);
                return config.element("card-unfold").addEventListener("click", brief);
            }

            function brief () {
                dashborad.briefly();
                config.element("card-unfold").removeEventListener("click", brief);
                return config.element("card-unfold").addEventListener("click", unfold);
            }
            
            localStorage.setItem(`${document.getElementsByClassName("card").length - 1}`, JSON.stringify(visitDetails));

            const [...editVisit] = document.getElementsByClassName("edit-card")
            editVisit.forEach((elt) =>{
                elt.addEventListener("click", (ev) => {
                    dashborad.edit(ev.target.id);

                });
            });

            // function edit (event) {
            // }

            // dashborad.edit(config.element("card-0"));
            
        }
});


// client.delete(11181).then(() => client.get().then(res => console.log(res)));
// client.get().then(res => console.log(res));