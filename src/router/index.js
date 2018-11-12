/**
 * Created by Administrator on 2018/11/12.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  //配置所有路由
  routes:[
    {//一级路由
      path:'/about',
      component:About
    },
    {//一级路由
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }
          ]
        }
      ]
    },
    {//自动跳转路由
      path:'/',
      redirect:'/about'
    },
  ]
})

