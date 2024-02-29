<template>
    <div class="container">
      <div class="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_TjNwCLKWmEURVJ1Lyt4GwfpTgQT2guwww&usqp=CAU" alt=""/>
      </div>
      
      
        <div class="result">
          <p>correct answer: {{ correctAnswers }}</p>
          <p> incorrect answer: {{ IncorrectAnswers }}</p>
          <p>  Result: Pass</p>
          <p> Average: {{ Average }}</p>
          <button @click="backtoHome" > Try again</button>
        </div>

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

.result{
  border: 2px solid ;
  box-shadow: 20px 20px 20px 5px rgb(105, 101, 101);
  border-color: rgb(255, 255, 255);
  width: 250px;
  height: 250px;
  margin: 20px 20px 20px 20px;
text-align: center;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzF5lNx3Q_E_WpMFSLN4H7ztE8ePyo_wjDg&usqp=CAU');
border-radius: 20px;
font-size: large;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}

.container{

  display: flex;
 justify-content: center;
 margin-top: 100px;
 gap: 60px;
 padding-right: 60px;

}


</style>