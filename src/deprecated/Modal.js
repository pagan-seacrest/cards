import { Form, Input, Button } from "./components.js";

export default class Modal {
    constructor ({position, id}) {
        this.position = position;
        this.id = id;
        
        return this.form = new Form({position: this.position, id: this.id});
    }

    addTitle (className, text, position = this.position) {
        position.insertAdjacentHTML("beforeend", `
        <header class="${className}">${text}</header>`);
    }
}