import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import IconIndex from '@/views/IconIndex'
import Hello from '@/views/Hello'
import AddCard from '@/components/exe/AddCard.vue'
// import Summernote from '@/components/editor/summernote.vue'
import Scoped from '@/components/test/scopedInherit/Parent.vue'
import Vux from '@/components/vux/Vux.vue'
import VCell from '@/components/vux/VCell.vue'
import VPopuppicker from '@/components/vux/VPopuppicker.vue'
import VPicker from '@/components/vux/VPicker.vue'
import Picker from '@/components/cube/Picker.vue'
import Echarts from '@/components/echarts/echarts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/icon',
      name: 'IconIndex',
      component: IconIndex
    },
    {
      path: '/addcard',
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
    // {
    //   path: '/editor',
    //   name: 'Summernote',
    //   component: Summernote
    // },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
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
      path: '/vux/picker',
      name: 'VPicker',
      component: VPicker
    },
    {
      path: '/cube/piker',
      name: 'piker',
      component: Picker
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
  ]
})
