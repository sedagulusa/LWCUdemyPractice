import { LightningElement } from 'lwc';

export default class DynamicStyling extends LightningElement {
    percent=20

    changeHandler(event){
      this.percent=event.target.value
    }
}