import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'loginPage', component: () => import('../views/loginPage'), meta: { requireAuth: false } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
