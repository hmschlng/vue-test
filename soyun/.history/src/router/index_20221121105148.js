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
    redirect: "/member/main",
    children: [
      {
        path: "main",
        name: "main",
        component: () => import("@/components/member/MemberMain"),
        redirect: "/member/main/",
      },
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
      {
        path: "findpw",
        name: "findpw",
        component: () => import("@/components/member/MemberFindPw"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/AppMypage"),
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
    ],
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/AppNotice"),
  },
  {
    path: "/helpcenter",
    name: "helpcenter",
    component: () => import("@/views/AppHelpcenter"),
    redirect: "/helpcenter/qna",
    children: [
      {
        path: "qna",
        name: "qna",
        component: () => import("@/components/etc/TheQna"),
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/components/etc/TheFaq"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
