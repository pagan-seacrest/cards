import {config} from "./config.js";


export default class Client {
    constructor() {
        
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

    post () {
        
    }
}