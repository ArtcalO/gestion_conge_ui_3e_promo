import { createRouter, createWebHistory } from 'vue-router'
import ListeEmploye from "../views/ListeEmploye.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"listeEmploye",
      component:ListeEmploye
    }
  ]
})

export default router
