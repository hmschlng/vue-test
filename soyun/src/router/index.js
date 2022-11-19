import Vue from "vue";
import VueRouter from "vue-router";

import AppMain from "@/views/AppMain";
import AppHouse from "@/views/AppHouse";
// import AppCommunity from '@/views/AppCommunity'
// import AppNews from '@/views/AppNews'
// import AppMember from '@/views/AppMember'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/map",
    name: "map",
    component: AppHouse,
  },
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/AppCommunity"),
    redirect: "/community/main",
    children: [
      {
        path: "main",
        name: "boardmain",
        component: () => import("@/components/board/BoardMain"),
      },
      {
        path: "list",
        name: "boardlist",
        component: () => import("@/components/board/BoardList"),
      },
      {
        path: "write",
        name: "boardwrite",
        component: () => import("@/components/board/BoardWrite"),
      },
      {
        path: "detail/:articleno",
        name: "boarddetail",
        component: () => import("@/components/board/BoardDetail"),
      },
      {
        path: "update",
        name: "boardupdate",
        component: () => import("@/components/board/BoardUpdate"),
      },
    ],
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/AppNews"),
  },
  // {
  //   path: '/house',
  //   name: 'house',
  //   component: () => import("@/views/AppHouse"),
  //   children: [
  //     {
  //       path: "login",
  //       name: "login",
  //       component: () => import("@/components/member/MemberLogin")
  //     },
  //     {
  //       path: "join",
  //       name: "join",
  //       component: () => import("@/components/member/MemberJoin")
  //     },
  //   ]
  // },
  {
    path: "/member",
    name: "member",
    component: () => import("@/views/AppMember"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/MemberLogin"),
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/member/MemberJoin"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/AppMypage"),
    redirect: "/mypage/myinfo",
    children: [
      {
        path: "myinfo",
        name: "myinfo",
        component: () => import("@/components/mypage/MyInfo"),
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: () => import("@/components/mypage/MyWishlist"),
      },
      {
        path: "mycommunity",
        name: "mycommunity",
        component: () => import("@/components/mypage/MyCommunity"),
      },
      // {
      //   path: "helpcenter",
      //   name: "helpcenter",
      //   component: () => import("@/components/profile/ProfileHelpcenter"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
