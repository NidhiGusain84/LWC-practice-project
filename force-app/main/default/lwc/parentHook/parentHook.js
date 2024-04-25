import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {

    displayChild = false;

    constructor() {
        super();
        console.log("Constructor form parent.")
    }
    connectedCallback() {
        console.log("ConnectedCallback from parent.");
    }

    renderedCallback() {
        console.log("renderedCallback from Parent.");
    }
    errorCallback(error, stack) {
        console.log("ErrorCallback from Parent.");
        console.log("Error", error);
        console.log("Stack", stack);
        console.log("error.message", error.message);
    }
    disconnectedCallback(){
        console.log("DisconnectedCallback from Parent");
    }

    changeHandler(event){
        this.displayChild = event.target.checked;
    }

}