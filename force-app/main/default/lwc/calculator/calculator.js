import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberone = "";
    numbertwo = "";
    result = 0;
    displayOutput = false;

    changeHandler(event){
       let { name, value } = event.target;
        if (name === "Num1") {
            this.numberone = value;
        }else if (name === "Num2") {
            this.numbertwo = value;
        }
    }

    calculateResult(event){
        this.displayOutput = true;
        let labelElement = event.target.label;
        if(labelElement === "Add"){
        this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
        }else if(labelElement === "Subtract"){
        this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
        }else if (labelElement === "Multiply") {
        this.result = parseInt(this.numberone) * parseInt(this.numbertwo);          
        }else if (labelElement === "Divide") {
        this.result = parseInt(this.numberone) / parseInt(this.numbertwo);           
        }
        this.numberone ="";
        this.numbertwo = "";

    }
}