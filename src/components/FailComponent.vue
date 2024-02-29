<template>
    <div class="containerfail">
        
        <div class="imagefail">
        <img src="https://www.trubicars.ca/wordpress/wp-content/uploads/2023/09/fail.png" alt=""/>
        </div>

        <div class="resultfail">
          <p>correct answer: {{ correctAnswers }}</p>
          <p> incorrect answer: {{ IncorrectAnswers }}</p>
          <p>  Result: fail</p>
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

.containerfail{
    margin-top: 100px;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    padding-right: 60px;

}

.resultfail{
  border: 2px solid ;
  box-shadow: 20px 20px 20px 5px rgb(105, 101, 101);
  border-color: rgb(255, 255, 255);
  width: 250px;
  height: 250px;
  margin: 20px 20px 20px 20px;
text-align: center;
background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5wMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAKxAAAgICAQQABQMFAAAAAAAAAAECEQMhMQQSQVETImFxgUKRsQUyYqHh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAHBEBAQEBAAMBAQAAAAAAAAAAAAERAhIhMQNB/9oADAMBAAIRAxEAPwD6Q9KiGl5/0i3t2KjyPoSl2qtWUmtcjTVCTVq9FiLTRWmQpxpjiys1raoinYlIfcVkBFb2HI1yvoVK2SlDymikl6FFlLg05U0OyRlQ0ykyCohMWAAVAAAAAAAAAAAAAFD0HoxzubahBb5svucYfO7kiaYz6iVZKT1QjKUnNt+bEYtdpz6c/kHdk3sb2jDuJaqmDe0IbKJ5d+jSLJ16f4KQZqhpWJcFFYNFKiR3s0lq4my4MImsVornVAAFZMaYgAtMoyspMIsAAqAAAAAAAAAAJlLtuuWcuSXLs6Z43Lh0ceSW2vXkxXTiah8jJVv2Bl2ZuN8EwW2nydMoqqRhL5XVExqXRVDQikgUJjSfpAo7NEjUjNqaLS0HaaRjZcYtTRol8qH2ofBcYtTGHsoTAqHYCGBQCQwhAh0IDSLKuzJFRYRYAgKAVr2Eno43nj81S45+hLcWc67bXsieRJcnEs8rpmeWbb09GfJufnWvUZbl2Jv7GHD2S5NvufI+eTFuu05xpBgQvowLExpKQtPdEuRcVaB8RVMaZTixKIxNVFbNUiIo1ijUYtCVlpUC4ArGgAAoAAAAAGAikyRhFCYDfAEgmAgNobG3RnCQ2wmJyyiotyaS+ro8XDk+J1OaePcL26020d39SnB43ik43k1T/mjnxxWKCSSX0So5dXa7/nMgtulegk6WuS7XhCqnb5I6RAAAaFtDBL2AMaNbOiMKSMMMWpxUU3GjrSN8uPdxm0JI1aIaNYxpcGkSDSKBTABNlZAAMAAAABghhCENkthVIbdIzsLBhOVsE2S3sERWsWWyMY3yGXF1Xa8qdK4xq/JmnaN+pjDfecq9fsc79enjMV5vyNcbF4AjQkkjK96LbpGbkFaoCIMCo7Ole3+yOkSgo8DOkebq7Q+DNmgu0qISLBaBgF6J8jEBSAmw7gKBCTGgK8DQkDIhSeqM2UxVbDRpbCRokjOfISI8jSGiktho1pKxXuhyOfJkWJuU3SRNJNZdVJuaXijL0P40szvtXZrtfn/gM5/13nqYTGuCFyO6DScn9tGRpN2iIqwq4AWo0gLjGvUQMYjq8oCgDwBLAbQgoBoaACaJotoKAlFDpAAIUiqBoDPdlxQqKTIU+DKXJU5rwZtqwSGVFnLl6rHB13K0Lp+quNy8bZPKOnhbNdsno87rIuWSDU/ki9x9v2dfxozh3Rp2tUcPUZO6bUdox3djX5c+/ZqXsbtJejOLdkzybaTMx1q5SjHZKyJ6/V5SMXKrbOeWTv4ZR2tu+K+5UOTkwzqdSbZ1x5+/Ag6IUAsewNuVeiAxG3AgBiYAJjBhSGgAAABpBBQDQABPJdESfaA6Jk0iZT0c0ptykn+DNrfPOrnN+Dm6vPkhFLHGMpXw3RTdbVnPkanNNPwZ6rtxz7c+JZHKWTK1c6fav0v6M3UU92xqI1SZzx2ClKOoypLgSWi6TJlUeAmplqDd060c8sr7lS+7fk6WlKDTOHzdMsZrTLK3+PDMarZTV+AXo0yvFHuf5O6OJtKnoz6WK7P8rOzHFjEtLFj7HdgbRVegNMa6xDEdHAmJjZJFAxDCgAABoaEFhFoZNisJinRll4KsjImGp9YSMmjSSYqMV1lxjOUVFnPCO02a9QqyKlohSVpNmL9dp8WyJaZUpVryiJO2zLUVFkyTHFq68BFd/FlSolNw0uf4OZRb5WzseBu72/ZePDr5qRYxa4O1t0kylhn3L5Xo9FY0l4NIY3Wipa5unxSS2jsxJrXgtIuK1wakc7UdtjN4Y0+RGsY8lAAGmCJYgIpgABQAgAYAAAMACAQAA4xVcGOWCXAASrGHUY4uCteDCMVKPa+Exgc69HN9LjijG9Xfsznji5/gYDF26SglaN3FLhcABcS0lspJAAZVSuikgAsZ1pFGmNbEBqOdboQAaYf/2Q==');
border-radius: 20px;
font-size: large;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}



</style>