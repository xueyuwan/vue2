import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserList from '../pages/userlist.vue'
import GoodsList from '../pages/goodslist.vue'
import AddShops from '../pages/addshops.vue'
import AddGoods from '../pages/addgoods.vue'
import TextEditor from '../pages/texteditor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/userList',
      name: 'userList',
      component:UserList
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component:GoodsList
    },
    {
      path: '/addshops',
      name:'addshops',
      component:AddShops
    },
    {
      path: '/addgoods',
      name: 'addgoods',
      component:AddGoods
    },
    {
      path: '/texteditor',
      name: 'texteditor',
      component:TextEditor
    }
  ]
})