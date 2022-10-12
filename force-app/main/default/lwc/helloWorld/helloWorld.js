import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    //local properties
    name='LWC';
    age=30;
    fullname='Salesforce Developer';
    showData=true;
    details={
        username:'Melissa',
        password:'2137Gezgin'
    };
    userlist=['A','B','C'];
    /*data binding-controller js,template html
    data binding is in one way from controller to template
    age==>{age}
    primite data types and objects with the dot 
    notation can be bind directly not arrays.To achieve two way data binding
    we need methods.Methods can be called from html or js.*/

    changeHandler(event){
        this.name=event.target.value;
    }
}