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

config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
loginOrCreate.addEventListener("click", login);

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

function createVisit () {
        const visit  = new Visit({position: root, id: "visit-form"});
        visit.selectVisit();
        config.element("create-visit").removeEventListener("click", createVisit);
        config.element("select-visit").addEventListener("click", (ev) => {
            let num = config.element("select-visit").selectedIndex
                if (num === 0 ) {
                    new VisitCardiologist({position: root, id: "visit-form"}).additionalForm();
                    config.element("visit-form").remove()
                } else if (num === 1) {
                    return new VisitDentist({position: root, id: "visit-form"}).additionalForm();
                    // dentistOption()
                } else if (num === 2) {
                    return new VisitTherapist({position: root, id: "visit-form"}).additionalForm();
                    // therapistOption()
                }
        })
}
    

const client = new Client();

