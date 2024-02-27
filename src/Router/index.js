import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeComponent.vue"
import Quiz from "../components/QuizComponent.vue"

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
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router