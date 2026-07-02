import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DestinationDetail from '../views/DestinationDetail.vue'
import PhotoWall from '../views/PhotoWall.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/destination/:id',
      name: 'DestinationDetail',
      component: DestinationDetail,
      props: true
    },
    {
      path: '/photo-wall',
      name: 'PhotoWall',
      component: PhotoWall
    }
  ]
})

export default router