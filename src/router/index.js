import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

// UserAdmin-->用户管理-路由
import UserAdmin from '@/views/UserAdmin'
//UserAdmin的子路由
import UserList from '@/views/UserAdmin/UserList'
import UserNew from '@/views/UserAdmin/UserNew'




// ReviewManagement-->用户管理-路由
import ReviewManagement from '@/views/ReviewManagement'
//ReviewManagement的子路由
import ReviewList from '@/views/ReviewManagement/ReviewList'
import ReviewUserNew from '@/views/ReviewManagement/ReviewUserNew'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        // 客户管理
        {
          path: "userAdmin",
          component: UserAdmin,
          name: "IF_010000",
          isMenu:true,
          expanding:false, //是否是可展开的列表
          meta: {
            title: "客户管理",
            icon: 'ios-people',
          },
          redirect: "userAdmin/userList",
          children: [
            {
              path: "userList",
              component: UserList,
              name: "IF_010001",
              meta: {
                title: "客户管理"
              }
            },
            {
              path: "userNew",
              component: UserNew,
              name: "IF_010002",
              meta: {
                title: "新增用户"
              }
            }
          ]
         
        },
        {
          path: "reviewManagement",
          component:ReviewManagement,
          name: "IF_020000",
          isMenu:true,
          expanding:false, //是否是可展开的列表
          meta: {
            title: "评论管理",
            icon: 'ios-people',
          },
          redirect: "reviewManagement/reviewList",
          children: [
            {
              path: "reviewList",
              component: ReviewList,
              name: "IF_020001",
              meta: {
                title: "评论列表"
              }
            },
            {
              path: "reviewUserNew",
              component: ReviewUserNew,
              name: "IF_020002",
              meta: {
                title: "新增评论"
              }
            }
          ]
         
        }
      ]
    }
  ]
})
