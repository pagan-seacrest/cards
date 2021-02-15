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

function createVisit () {
    const visit  = new Visit({position: root, id: "visit-form"});
    visit.selectVisit();
    config.element("create-visit").removeEventListener("click", createVisit);
}

onload = (
    config.token() !== null ?
    config.element("button").id = "create-visit": false
    )
onload = (
    config.token() !== null ?
    config.element("create-visit").addEventListener("click", createVisit) : false
)
onchange = (
    config.token() !== null ?
    config.loginToggle(true): false
)

onchange = (
    config.token() !== null ?
    config.element("visit-option-cardiologist").addEventListener("select", createCardiologist) : false
)


config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
loginOrCreate.addEventListener("click", login);


// config.element("visit-option-cardiologist").addEventListener("click", createCardiologist);
 

function createCardiologist () {
    console.log("okay");
}
    

const client = new Client();


const cardiologist = new VisitCardiologist({position: root, id: "visit-form"});