// import { config } from "./config";

export default class ElementHandler {
    constructor ([...elements], {element, id, className, parentElement, parent_id}) {
        this.elementList = elements;
        this.element = element;
        this.id = id;
        this.parent_id = parent_id
        this.parent = parentElement;
        this.className = className;
        this.classList = [];
        this.child = document.getElementById(this.id);
    }

    createElement () {
        const element = document.createElement(this.element);
        element.id = this.id;
        element.classList.add(this.className);
        return this.define(element);
    }

    createElementList () {
        const list = [];
        this.elementList.forEach((value, index) => {
            const element = document.createElement(value);
            value.classList = `handler-elt-${this.elementList[index]}-${index}`
            return list.push(element);
        });
        return list;
        }

    addElement () {
        // this.parent_id !== undefined ? document.getElementById(this.parent_id).append(this.modify()) : false;
        this.parent.append(this.createElement());
    }

    addElementList () {
        this.createElementList().forEach(element => {
            this.parent !== undefined ? this.parent.append(element) :
            this.getElement(this.parent_id).append(element) ?? false;
        });
    }
    
    modify ({attribute, attributeValue}) {
        attribute !== undefined && attributeValue !== undefined ? this.child.setAttribute(attributeValue) : false;
        // return this.parent !== undefined ? this.parent.append(this.createElement()) : this.createElement();
    }

    define (element) {
        this.id ?? element.removeAttribute("id");
        this.className ?? element.removeAttribute("class");
        return element;
    }

    getElement () {
        return document.getElementById(this.id);
    }

    edit ({element, id, className, content}) {
        if (id !== undefined && element === undefined) {
            this.getElement(this.id).id = id;
        } else if (id !== undefined && element !== undefined) {
            element.id = id;
        }
        if (className !== undefined) {
            element.classList.add(className);
        } else if (className !== undefined && id !== undefined) {
            element.id = id;
            element.classList.add(className);
        }
        if (content !== undefined && element !== undefined) {
            element.textContent = content;
        } else if (content !== undefined && id !== undefined) {
            this.getElement(id).textContent = content;
        } else if (content !== undefined && className !== undefined) {
            document.querySelector(`.${className}`).textContent = content;
        }
    }

    unset ({element, id, className, content}) {
        if (element !== undefined && id === true) {
            element.removeAttribute("id");
        } else if (element !== undefined && className !== undefined) {
            element.classList.remove(className);
        } else if (element !== undefined && content === true) {
            element.textContent = "";
        } else if (element !== undefined && id !== true && className !== undefined) {
            element.removeAttribute("id");
            element.classList.remove(className);
        } else if (element !== undefined && id !== true && content === true) {
            element.removeAttribute("id");
            element.textContent = "";
        } else if (element !== undefined && className !== undefined && content === true) {
            element.classList.remove(className);
            element.textContent = "";
        }
         else if (element !== undefined && id !== true && className !== undefined && content === true) {
            element.removeAttribute("id");
            element.classList.remove(className);
            element.textContent = "";
        }

        if (element !== undefined && id !== true && className === true) {
            element.removeAttribute("id");
            element.removeAttribute("class");
        } else if (element !== undefined && className == true) {
            element.removeAttribute("class");
        } else if (element !== undefined && className === true && content === true) {
            element.removeAttribute("class");
            element.textContent = "";
        } else if (element !== undefined && id !== true && className === true && content === true) {
            element.removeAttribute("id");
            element.removeAttribute("class");
            element.textContent = "";
        }


        if (element !== undefined && (id === undefined && className === undefined && content === undefined)) {
            element.remove();
        }
    }
}