<template>
    <div>
        <div>
          <p>correct answer: {{ correctAnswers }}</p>
          <p> incorrect answer: {{ IncorrectAnswers }}</p>
          <p>  Result: Pass</p>
          <p> Average: {{ Average }}</p>

        </div>
<button @click="backtoHome" > Back</button>
    </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router';
 
  const route = useRoute()
  const router=  useRouter();
  const correctAnswers = route.query.correctAnswerCount
  const totalNoOfQuestions = 10;
  const Average = (correctAnswers / totalNoOfQuestions)*100;
  const IncorrectAnswers = totalNoOfQuestions - correctAnswers; 

  function backtoHome(){
    router.push("/")
   
  }
  

</script>

<style >

</style>