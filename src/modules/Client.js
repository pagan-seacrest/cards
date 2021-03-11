import {config} from "./config.js";
import Dashboard from "./Dashboard.js";

const dasboard = new Dashboard({});

export default class Client {
    constructor(body) {
        this.body = body;
    }
    async get () {
        const request = await fetch("https://ajax.test-danit.com/api/cards", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${config.token()}`
        }
    });
    const res =  await request.json();
    // const reload = new Dashboard({});
    // config.element("search").remove();
        // document.getElementById("dashboard").remove();
        // reload.update();
        // reload.create();
        return res;
    }

    async card (id) {
        const req = await fetch(`https://ajax.test-danit.com/api/cards/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            "Authorization": `Bearer ${config.token()}`
            }
        })
        const step =  await req.json();
        return step;
    }

    async post () {
        const req = await fetch("https://ajax.test-danit.com/api/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
            body: JSON.stringify(this.body)
        });
        const res = await req.json();
        const reload = new Dashboard({});
        document.getElementById("search").remove();
        document.getElementById("dashboard").remove();
        reload.update();
        reload.create();
        return res;
    }

    async put (id) {
        const req = await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
            body: JSON.stringify(this.body)
        });
        const res = await req.json();
        const reload = new Dashboard({});
        document.getElementById("search").remove();
        document.getElementById("dashboard").remove();
        reload.update();
        reload.create();
        return res;
    }

    async delete (id) {
        return await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
        });
    }
}