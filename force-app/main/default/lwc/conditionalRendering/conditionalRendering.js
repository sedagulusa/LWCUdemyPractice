import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false;
    theWord;
    handleClick(){
        this.isVisible=true;
    }
    changeHandler(event){
    this.theWord=event.target.value;
    }
    get getterMethod(){//if getter returns true
        return this.theWord ==='hello';
    }
}