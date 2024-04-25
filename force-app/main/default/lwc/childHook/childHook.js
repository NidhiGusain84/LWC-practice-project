import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    constructor() {
        super();
        console.log("Constructor from Child.");
    }
    connectedCallback() {
        console.log("ConnentedCallback from Child.");
        throw new Error("Error from Child's connectedCallback");
    }

    renderedCallback() {
        console.log("renderedCallback from Child.");
    }

    errorCallback(error, stack) {
        console.log("errorCallback from Child");
    }
    disconnectedCallback(){
        console.log("DisconnentedCallback from Child");
    }

}