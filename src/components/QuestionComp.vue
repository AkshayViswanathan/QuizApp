<template>
    <div>
        questions
        <div v-for="apiArray in data.results" :key="apiArray.question">
    <ul>
        <li> 
            {{ apiArray.question }}
        </li> 
    </ul>
    <ol>
        <li>
          
            <input type="radio" :value="apiArray.correct_answer"  >
            {{ apiArray.correct_answer }}
          
        
        <div v-for="incorrect in apiArray.incorrect_answers" :key="incorrect">
          
            <input type="radio" :value="incorrect">
            {{ incorrect }}
          
        </div>
    </li>
      </ol>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

 const data = ref([]);
 const loading = ref()


const fetchdata = async()=>{
  try{
      const response = await fetch("https://opentdb.com/api.php?amount=10")

      const sucessData = await response.json();
      data.value = sucessData;
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