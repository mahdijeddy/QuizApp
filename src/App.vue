<template>
 <div class="container">
  <div class="category">
   <p> {{store.category}}</p>
  </div>
  <div class="question">
      {{store.ques[store.index]}}
      {{store.index}}
    </div>
  <div class="answers" v-for="ans in store.answers[store.index]"
  @click="checkAnswer(ans)"
  :class="status"
  >
    {{ans}}
  </div>
  <div class="score">
    score : {{store.score}}
  </div>
 <div class="end" v-if="isEnd">
  <button @click="startAgain" class="btn">Try Again</button>
 </div>

 </div>
 {{store.Canswers[store.index]}}

  
</template>
<script setup>
// -------------------------------------------------------Imports
import { Store } from './stores/appStore';
import { ref } from 'vue';
// -------------------------------------------------end Imports
const store = Store()
store.get()
const status = ref(null)
const isEnd = ref(false)


function checkAnswer(ans){
if (ans == store.Canswers[store.index]) {
  status.value='Cstyle'
  store.score++
 setTimeout(() => {
  next()
 }, 500);

}else{
  status.value='Wstyle'
  setTimeout(() => {
  next()
 }, 500);
}
}
function next(){
  store.index++
  status.value=null
    if (store.index >= (store.ques.length )) {
    isEnd.value=true
  }
}
function startAgain(){
  store.index=0
  status.value=null;
  isEnd.value=false;
  store.get();
  store.score=0

}



</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
@import './styles/style.scss';



</style>