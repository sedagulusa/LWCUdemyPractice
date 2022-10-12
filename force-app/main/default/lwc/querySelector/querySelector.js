import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
   //to access the element rendered by the component we use query selector,innertext for this example
   users=['Nick','Mike','Denise','Luke'];
   
   handleClick(){
    const elem=this.template.querySelector('h1')
    elem.style.border='2px solid red'
    console.log(elem.innerText)

    const userElemns=this.template.querySelectorAll('.name')
    Array.from(userElemns).forEach(item=>{
        console.log(item.innerText)
        item.setAttribute('title',item.innerText)
    })
    const childElem=this.template.querySelector('.child')
    childElem.innerHTML='<p> Hey i am a child element </p>'
   }


}