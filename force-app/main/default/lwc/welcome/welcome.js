import { LightningElement, track } from 'lwc';

export default class Welcome extends LightningElement {
   
  @track hello = {
         greeting: "Hello!",
         welcome: "Tech Journey with Ankit"
    };
  @track myTasks = ["Office", "Meeting", "Call", "Email"];

    clickHandler(event){
        this.hello.greeting = "Namaste!";
        this.hello.welcome = "Today's learning is all about decorators."
    }

    addTaskHandler(event){
        this.myTasks.push("Self Study");
    }

    refreshHandler(event){
        this.hello = {
        ...this.hello,
        greeting: "Hello!",
        welcome: "Tech Journey with Ankit"     
        };
        this.myTasks = [...this.myTasks, "Learning LWC"];
    };
       
}

