<template>
    <div>
        <div>
          <p>correct answer: {{ correctAnswers }}</p>
          <p> incorrect answer: {{ IncorrectAnswers }}</p>
          <p>  Result: fail</p>
          <p> Average: {{ Average }}</p>

        </div>

    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
 
  const route = useRoute()
  const correctAnswers = route.query.correctAnswerCount
  const totalNoOfQuestions = 10;
  const Average = (correctAnswers / totalNoOfQuestions)*100;
  const IncorrectAnswers = totalNoOfQuestions - correctAnswers; 

</script>

<style >

</style>