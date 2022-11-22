import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'create',
      component: ()=> import('../components/create-car/CreateCar.vue')
    },
    {
      path: '/listCars',
      name: 'list',
      component: () => import('../components/list-car/ListCar.vue')
    },
    {
      path: '/editCars/:id',
      name: 'edit',
      component: () => import('../components/edit-car/EditCar.vue')
    }
  ]
})

export default router
