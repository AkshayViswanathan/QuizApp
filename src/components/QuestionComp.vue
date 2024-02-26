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
        <div v-for="(apiArray, index) in data.results" :key="index">
            {{ apiArray.question }}


                    <div>
                      <!-- Correct answer -->
              <input type="radio" :id="'correct_' + index" :name="'question' + index" :value="apiArray.correct_answer" />
              <label :for="'correct' + index">{{ apiArray.correct_answer }}</label>
          
                  <!-- Incorrect answers -->
                     <div v-for="(incorrect, i) in apiArray.incorrect_answers" :key="i">
                    <input type="radio" :id="'incorrect_' + index + '_' + i" :name="'question' + index" :value="incorrect" />
                    <label :for="'incorrect' + index + '_' + i">{{ incorrect }}</label>
                 </div>

</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { LoopingRhombusesSpinner } from 'epic-spinners'

 const data = ref([]);
 const loading = ref(true)


const fetchdata = async()=>{
  try{
      const response = await fetch("https://opentdb.com/api.php?amount=10")

      const sucessData = await response.json();
      data.value = sucessData;
      loading.value=false;
      console.log(data.value);
  }
  catch(error){
console.error("failed to fetch api data");
  }
};

onMounted(fetchdata)


</script>

<style >

</style>