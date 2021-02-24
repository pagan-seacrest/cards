import {config} from "./config.js";


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
    return await request.json()
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
        return await req.json();
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
        return await req.json();
        // console.log(JSON.stringify(res));
        // console.log(JSON.stringify(res[0]["id"]));
        // localStorage.setItem("id", JSON.stringify(res[0]["id"]));
    }
}