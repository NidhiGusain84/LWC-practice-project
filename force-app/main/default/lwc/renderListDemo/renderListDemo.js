import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {
    superstars = ["Spiderman", "Superman", "Batman", "Hulk"];
    contactList = [{
        id : 1,
        fName : "Nidhi",
        lName : "Gusain"
    },
    {
        id : 2,
        fName : "Laksh",
        lName : "Singh"
    },
    {
        id : 3,
        fName : "Siri",
        lName : "G"
    },
    {
        id : 4,
        fName : "Manit",
        lName : "love"
    }
];
}