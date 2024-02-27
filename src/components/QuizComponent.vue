<template>
                      <!-- loading state -->
    <div v-if="loading">
        <looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="15"
  color="#ff1d5e"
/>
    </div>

                        <!-- question  -->
<div v-else>
        questions

      <div >
       <p > completed: {{input }}</p>
       <p> time: {{ timeLine }}</p>
       <p> correct-ans: {{ correctAnswerCount }}</p>
       <p>{{wrongAnswerCount}}</p>
   
    </div>


        <div v-for="(apiArray, index) in data.results" :key="index">
            {{ apiArray.question }}         
            
            
            <div   >
                      <!-- Correct answer -->
                        <input type="radio" :id="'correct_' + index" :name="'question' + index" :value="apiArray.correct_answer" @change.prevent="handleOnchange(index)"/>
                             <label :for="'correct' + index">{{ apiArray.correct_answer }}</label>
          
                  <!-- Incorrect answers -->
                 <div v-for="(incorrect, i) in apiArray.incorrect_answers" :key="i">
                      <input type="radio" :id="'incorrect_' + index + '_' + i" :name="'question' + index" :value="incorrect" @change.prevent="handleOnchange(index)"/>
                        <label :for="'incorrect' + index + '_' + i">{{ incorrect }}</label>
                     </div>
               </div>
        </div>
        <button @Submit="HandleSubmit"> Submit</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { LoopingRhombusesSpinner } from 'epic-spinners'


 const data = ref([]);
 const loading = ref(true)
 const input = ref(0)
 const timeLine = ref(6)
 const correctAnswerCount = ref(0)
 const wrongAnswerCount = ref(0)


// API fetch

console.log(input);
   const fetchdata = async()=>{
    try{
        const response = await fetch("https://opentdb.com/api.php?amount=10")

        const sucessData = await response.json();
        data.value = sucessData;
        loading.value=false;
        console.log(data.value); 

       const timeLineCount = setInterval(() => {
    timeLine.value--
    if( timeLine.value < 1){
        clearInterval(timeLineCount) 
    }

}, 1000);
   

     }
    catch(error){
     console.error("failed to fetch api data");
  }
};



onMounted(fetchdata)

let lastQuestionIndex = -1;

function handleOnchange(index){


    if (index !== lastQuestionIndex) {
    input.value++; 
    lastQuestionIndex = index;
     
  
}}




function HandleSubmit(index){

 // Get the selected answer
   
 const selectedAnswer = event.target.value;
    const correctAnswer = data.value.results[index].correct_answer;

    if (selectedAnswer === correctAnswer) {
      correctAnswerCount.value++;
    } else {
      wrongAnswerCount.value++;
    }


}



</script>

<style >

</style>