import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AddCard from '@/components/exe/AddCard.vue'
import Scoped from '@/components/test/scopedInherit/Parent.vue'
import VCell from '@/components/vux/VCell.vue'
import VPopuppicker from '@/components/vux/VPopuppicker.vue'
import Picker from '@/components/cube/picker.vue'

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
    },
    {
      path: '/test/scoped',
      name: 'scoped',
      component: Scoped
    },
    {
      path: '/vux/cell',
      name: 'VCell',
      component: VCell
    },
    {
      path: '/vux/popuppiker',
      name: 'VPopuppiker',
      component: VPopuppicker
    },
    {
      path: '/cube/piker',
      name: 'piker',
      component: Picker
    }
  ]
})
