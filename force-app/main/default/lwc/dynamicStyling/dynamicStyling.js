import { LightningElement } from 'lwc';

export default class DynamicStyling extends LightningElement {
    percent=30
    selected;
    changeHandler(event){
      this.percent=event.target.value
    }
}