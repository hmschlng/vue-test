import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMain from '@/views/AppMain'
import AppHouse from '@/views/AppHouse'
import AppCommunity from '@/views/AppCommunity'
import AppNews from '@/views/AppNews'
// import AppMember from '@/views/AppMember'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: AppMain
  },
  {
    path: '/map',
    name: 'map',
    component: AppHouse
  },
  {
    path: '/community',
    name: 'community',
    component: AppCommunity
  },
  {
    path: '/news',
    name: 'news',
    component: AppNews
  },
  {
    path: '/member',
    name: 'member',
    component: () => import("@/views/AppMember"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/MemberLogin")
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/member/MemberJoin")
      },
    ]
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/TempProfile"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/MemberLogin")
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/member/MemberJoin")
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
