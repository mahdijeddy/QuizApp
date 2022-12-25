import { defineStore } from 'pinia';
import axios from 'axios'
export const Store = defineStore('appInfo',{
    state : ()=>({
         loading:'loading',
         url:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
         answers:[],
         Canswers:[],
         ques:[],
         index:0,
         category:'',
         score:0


    }),
    actions: {
        async get(){
            await fetch(this.url)
             .then( async res => await res.json() )
                .then(async ( resp) => {
                     this.category =await resp.results[0].category
                     console.log(resp.results);
                     let questions = resp.results.map((p) => {
                        const Question =  p.question
            
                        const answerChoices = [...p.incorrect_answers];
                       let i = Math.floor(Math.random() * 4) + 1;
                        answerChoices.splice(
                            i - 1,
                            0,
                            p.correct_answer
                        );

                       this.answers.push(answerChoices) 
                       this.ques.push(Question)
                       this.Canswers.push( p.correct_answer)


                    });
                    
                })
                .catch((err) => {
                    console.error(err);
                })
         },
    
//    async get(){
//        await fetch(this.url)
//         .then( async res => await res.json() )
//            .then(async ( resp) => {
//                 this.resp =await resp.results
//                 console.log(resp.results);
//                 let questions = resp.results.map((p) => {
//                    const Question = {
//                        question: p.question,
//                    };
       
//                    const answerChoices = [...p.incorrect_answers];
//                   let i = Math.floor(Math.random() * 4) + 1;
//                    answerChoices.splice(
//                        i - 1,
//                        0,
//                        p.correct_answer
//                    );
       
//                    answerChoices.forEach((choice, index) => {
//                        Question['choice' + (index + 1)] = choice;
//                    });
//                   this.data= Question
//                   this.answers = answerChoices
                   
//                });
               
//            })
//            .catch((err) => {
//                console.error(err);
//            })
//     },
//     async getQuestions() {
         
//         const res = await fetch(this.url)
//         const resdata = await res.json()
  
//         this.data = resdata.results
//         this.data.map((p)=>{
//         let Q = p.question;
//         let corr = p.correct_answer;
//         let incorr = [...p.incorrect_answers]
//         })

        
//   },
       
       
 }
})