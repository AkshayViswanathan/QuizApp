<template>
                      <!-- loading state -->
    <div v-if="loading" >
      <div class="loadinganimation"> <looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="15"
  color="#ff1d5e"
/></div>
        
    </div>

                        <!-- question  -->
<div v-else class="quizContainer">
<div>

  <div class="navbar">
        
        <p class="questionCompleted" > Question Completed: {{ input }}/10</p>
        <p class="countdown"> Time: {{ timeLine }}</p>
    
     </div>
  <div >
   <h3 class="heading">Questions:</h3>

     <div v-for="(apiArray, index) in data.results" :key="index" class="questions">
             {{ apiArray.question }}         
                        
             <div class="choise" >
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
  <button @click="handleOnClick()" class="submitButton" > Submit</button>



</div>
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
 const timeLine = ref(60)
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
        alert("Session Time Out")
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

<style scoped>
  /* Loading state */
  /* .loading {
   
  } */

  .loadinganimation{
 align-items: center;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  /* Navbar styles */
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }

  .questionCompleted {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 900;
 
  }

  .countdown {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
  }

  /* Question styles */
  .heading {
    font-size: 20px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin:20px 20px 30px 60px ;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  /* Choice container styles */
  .questions {
    margin-bottom: 20px;
    margin-left: 100px;
 
  }

  /* Choice styles */
  .choise {
    margin-bottom: 10px;
  }

  /* Radio button and label styles */
  input[type="radio"] {
    margin-right: 10px;
  }

  /* Submit button styles */
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }


  .quizContainer{
    
    text-align: left;
    background-image: url('https://png.pngtree.com/background/20230414/original/pngtree-abstract-pastel-watercolor-background-on-paper-picture-image_2425472.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }


.quizContainer{
  height: 1400px;
}

button{
  margin-left: 50%;
}

</style>
