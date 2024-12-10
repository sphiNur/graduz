import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Employers from '../components/Employers.vue'
import Vacancies from '../components/Vacancies.vue'
import Candidates from '../components/Candidates.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employers',
    name: 'Employers',
    component: Employers
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: Vacancies
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router