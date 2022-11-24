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
    redirect: "/map/main",
    children: [
      {
        path: "main",
        name: "housemain",
        component: () => import("@/components/house/HouseMain"),
      },
      {
        path: "detail",
        name: "houseDetail",
        component: () => import("@/components/house/HouseDetail"),
      },
    ],
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
    redirect: "/member/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/MemberLogin"),
      },
      {
        path: "findpw",
        name: "findpw",
        component: () => import("@/components/member/MemberFindPw"),
      },
      {
        path: "auth",
        name: "auth",
        component: () => import("@/components/member/MemberAuth"),
      },
      {
        path: "updatepw",
        name: "updatepw",
        component: () => import("@/components/member/MemberUpdatePw"),
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
    children: [
      {
        path: "detail/:articleno",
        name: "noticedetail",
        component: () => import("@/components/board/BoardDetail"),
      },
    ]
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
      {
        path: "detail/:articleno",
        name: "qnadetail",
        component: () => import("@/components/board/BoardDetail"),
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
