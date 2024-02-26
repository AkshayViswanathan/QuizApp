<template>
    <div>
      <div v-if="divstate">
        <p>{{ countdown }}</p>
       
        <button @click="handleStart">Start Quiz</button>
      </div>

      <div v-else>
       <div>
         <QuestionComp />
       </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import QuestionComp from "./QuestionComp.vue"
  
  const countdown = ref('');
  const divstate = ref(true)

 

  
  function handleStart() {
    let timer = 2;

    const intervel = setInterval(() => {
        countdown.value = timer--;
      if (timer < 0 ){
        clearInterval(intervel)
        divstate.value= false;
      }
    }, 1000);
    
  }
  </script>
  
  <style>
  </style>