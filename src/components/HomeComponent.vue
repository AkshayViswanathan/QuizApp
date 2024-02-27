<template>
      <div>
        <p>{{ countdown }}</p>
       
        <button @click="handleStart">Start Quiz</button>
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const countdown = ref('');
  
  function handleStart() {
    let timer = 2;

    const intervel = setInterval(() => {
        countdown.value = timer--;
      if (timer < 0 ){
       
        clearInterval(intervel)
        router.push("/Quiz")
        
      }
    }, 1000);
    
  }


  </script>
  
  <style>
  </style>