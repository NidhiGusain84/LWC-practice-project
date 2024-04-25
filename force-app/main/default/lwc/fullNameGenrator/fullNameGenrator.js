import { LightningElement } from 'lwc';

export default class FullNameGenrator extends LightningElement {
    firstName;
    lastName;
    fullname; 

    changeHandler(event){
        let {name, value } = event.target;
        if (name === "fName") {
            this.firstName = value;
        }else if (name === "lName") {
            this.lastName = value;
        }
       
    }

    clickHandler(event){
        this.fullname = (this.firstName).toUpperCase() + " " + (this.lastName).toUpperCase();
         this.firstName = "";
        this.lastName = "";
    }
}