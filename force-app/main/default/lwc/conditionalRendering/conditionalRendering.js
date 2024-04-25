import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    dispalyMessage = false;

    changeHandler(event){
        this.dispalyMessage = !this.dispalyMessage;
        
    }
}