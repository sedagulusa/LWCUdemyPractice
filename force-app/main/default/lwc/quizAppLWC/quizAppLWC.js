import { LightningElement } from 'lwc';

export default class QuizAppLWC extends LightningElement {
    selected={}//stores the answers
    correctAnswers=0;
    isSubmitted=false;
    myQuestions=[
        {
            id:'Question 1.',
            question:'Which of the following is not a template loop?',
            answers:
            {
                a:'for:each',
                b:'iteretor',
                c:'map loop'
            },
            correctAnswer:'c'

        },
        {
            id:'Question 2.',
            question:'Which of the file is invalid in LWC component folder?',
            answers:
            {
                a:'.svg',
                b:'.apex',
                c:'.js'
            },
            correctAnswer:'b'

        },
        {
            id:'Question 3.',
            question:'Which of the the following is not a directive?',
            answers:
            {
                a:'@track',
                b:'if:true',
                c:'if:false'
            },
            correctAnswer:'a'

        }
    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
               'slds-text-color_success':'slds-text-color_error' }`
    }
    changeHandler(event){
       
        const {name,value}=event.target
    //     const name=event.target.name
    //     const value=event.target.value
        this.selected={...this.selected,[name]:value}
     }
     //form submit handler
     submitHandler(event){
        event.preventDefault()
        const correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers=correct.length
        this.isSubmitted=true
        console.log('this.correctAnswers', this.correctAnswers);
    }
    //form reset handler
     resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
     }
    
}