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

      <div >
       <p > question completed: {{input }}/10</p>
       <p> time: {{ timeLine }}</p>
       <p> correct-ans: {{ correctAnswerCount }}</p>
     
   
    </div>
 <div >
  <h3>Question</h3>
    <div v-for="(apiArray, index) in data.results" :key="index">
            {{ apiArray.question }}         
            
          
            <div >
                                                         <!-- Correct answer -->
                        <input type="radio" :id="'correct' + index" :name="'question' + index" :value="apiArray.correct_answer" @change.prevent="handleOnchange($event, index)" />
                             <label :for="'correct' + index">{{ apiArray.correct_answer }}</label>
          
                                                          <!-- Incorrect answers -->
                   <div v-for="(incorrect, i) in apiArray.incorrect_answers" :key="i">
                      <input type="radio" :id="'incorrect' + index + '_' + i" :name="'question' + index" :value="incorrect" @change.prevent="handleOnchange($event, index)" />
                        <label :for="'incorrect' + index + '_' + i">{{ incorrect }}</label>
                     </div>
               </div>
        </div>
 </div>

        <button @click="handleOnClick()"> Submit</button>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { LoopingRhombusesSpinner } from 'epic-spinners'
import { useRouter } from 'vue-router';

const router = useRouter();


 const data = ref([]);
 const loading = ref(true)
 const input = ref(0)
 const timeLine = ref(5)
 const correctAnswerCount = ref(0)
 const wrongAnswerCount = ref(0)



// API fetch


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
        alert("Time Out - please try again")
        router.push("/");
        
    }

}, 1000);
     }
    catch(error){
     console.error("failed to fetch api data");
  }
};



onMounted(fetchdata)


const selectedAnswers = reactive({});

const handleOnchange = (event, index) => {
  const selectedAnswer = event.target.value;
  const correctAnswer = data.value.results[index].correct_answer;
  const previousAnswer = selectedAnswers[index];


  selectedAnswers[index] = selectedAnswer;

                              // Update answer count    
  if (selectedAnswer === correctAnswer) {
    correctAnswerCount.value++;

    if (previousAnswer !== undefined && previousAnswer !== correctAnswer) {
      wrongAnswerCount.value--;
    }
  } else {
    if (previousAnswer === correctAnswer) {
      correctAnswerCount.value--;
    }

    if (previousAnswer === correctAnswer) {
      wrongAnswerCount.value++;
    }
  }

                                                  // Update input ref : to get the input selected length
  input.value = Object.values(selectedAnswers).filter(val => val !== undefined).length;
};


const handleOnClick = () => {
 
    if (correctAnswerCount.value >= 5) {
        router.push({ name: 'pass', query: { correctAnswerCount: correctAnswerCount.value } });
    } else {
        router.push({ name: 'fail', query: { correctAnswerCount: correctAnswerCount.value } });
    }
};
</script>

<style >

</style>