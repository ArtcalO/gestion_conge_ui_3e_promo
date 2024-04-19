import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"
import ListeVoitures from "../views/ListeVoitures.vue"
import SalairesView from '../views/SalairesView.vue'
import PresencesView from '../views/PresencesView.vue'

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
    },
    {
      path:"/salaires",
      name:"listeSalaires",
      component:SalairesView
    },
    {
      path:"/presences",
      name:"listePresences",
      component:PresencesView
    }
  ]
})

export default router
