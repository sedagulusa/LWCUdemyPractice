import { LightningElement,track } from 'lwc';

export default class TrackProperties extends LightningElement {
    //when you have an object or an array you should use track decorator

   @track address={
        country:'USA',
        city:'Atlanta',
        code:30075
    }
    @track stateCodes=['AB','BE','GH','DN'];
    changeHandler(event){
        this.address.city=event.target.value;
        this.stateCodes[0]=event.target.value;
    }

    //getter example

    users=['Seda','Ahmet','Mehmet','Mahmut'];
    num1=10
    num2=20

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1*this.num2
    }
}