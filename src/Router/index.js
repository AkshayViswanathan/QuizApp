import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeComponent.vue"
import Quiz from "../components/QuizComponent.vue"
import Pass from "../components/PassComponent.vue"
import Fail from "../components/FailComponent.vue"

const routes = [
 {  
    path:"/",
    name:"home",
    component: Home
 },
 { 
    path:"/quiz",
    name:"quiz",
    component: Quiz
  },
  { 
    path:"/pass",
    name:"pass",
    component: Pass
  },
  { 
    path:"/fail",
    name:"fail",
    component: Fail
  },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router