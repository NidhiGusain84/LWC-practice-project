import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api displayGreeting;
    @api isUserAvailable = false;
    displayUser;

    set user(value){
        let cloneuser = {...value};
        this.displayUser = cloneuser.channel.toUpperCase();
    }

    @api
    get user(){
        return this.displayUser;
    }

}