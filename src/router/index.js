import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"listeEmploye",
      component:ListeEmployes
    }
  ]
})

export default router
