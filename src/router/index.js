import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"
import ListeVoitures from "../views/ListeVoitures.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"listeEmployes",
      component:ListeEmployes
    },
    {
      path:"/voitures",
      name:"listeVoitures",
      component:ListeVoitures
    }
  ]
})

export default router
