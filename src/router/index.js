import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AddCard from '@/components/exe/AddCard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddCard',
      component: AddCard
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
