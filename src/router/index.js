import Vue from "vue";
import VueRouter from "vue-router";
// import Msite from '../views/msite/msite'
import store from "../store";
import { getStore } from "../utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/msite",
  },
  {
    path: "/msite",
    beforeEnter: (to, from, next) => {
      // ...
      if (store.state.geohash) {
        to.query.geohash = store.state.geohash;
      }
      next();
    },
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'msite' */ "../views/msite/msite.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: "/login",
    component: () =>
      import(/*webpackChunkName: 'login'*/ "../views/login/login.vue"),
  },
  {
    path: "/forget",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'forget' */ "../views/forget/forget.vue"),
  },
  {
    path: "/profile",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/*webpackChunkName: 'profile'*/ "../views/profile/profile.vue"),
    children: [
      {
        path: "info", //个人信息页面
        component: () =>
          import(
            /*webpackChunkName: 'profile'*/ "../views/profile/children/info.vue"
          ),
        children: [
          {
            path: "setusername", // 修改用户名
            meta: {
              needLogin: true,
            },
            component: () =>
              import(
                /*webpackChunkName: 'profile'*/ "../views/profile/children/children/setusername.vue"
              ),
          },
          {
            path: "address", // 修改用户名
            meta: {
              needLogin: true,
            },
            component: () =>
              import(
                /*webpackChunkName: 'profile'*/ "../views/profile/children/children/address.vue"
              ),
            children: [
              {
                path: "add",
                meta: {
                  needLogin: true,
                },
                component: () =>
                  import(
                    /*webpackChunkName: 'profile'*/ "../views/profile/children/children/children/add.vue"
                  ),
                children: [
                  {
                    path: "addDetail",
                    meta: {
                      needLogin: true,
                    },
                    component: () =>
                      import(
                        /*webpackChunkName: 'profile'*/ "../views/profile/children/children/children/children/addDetail.vue"
                      ),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/download",
    component: () =>
      import(
        /* webpackChunkName: 'download' */ "../views/download/download.vue"
      ),
  },
  {
    path: "/balance",
    component: () =>
      import(/* webpackChunkName: 'balance' */ "../views/balance/balance.vue"),
    meta: {
      needLogin: true,
    },
    children: [
      {
        path: "detail",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'balance' */ "../views/balance/children/detail.vue"
          ),
      },
    ],
  },
  {
    path: "/benefit",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'benefit' */ "../views/benefit/benefit.vue"),
    meta: {
      needLogin: true,
    },
    children: [
      {
        path: "hbDescription",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'benefit' */ "../views/benefit/children/hbDescription.vue"
          ),
      },
      {
        path: "hbHistory",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'benefit' */ "../views/benefit/children/hbHistory"
          ),
      },
      {
        path: "coupon",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'benefit' */ "../views/benefit/children/coupon"
          ),
      },
      {
        path: "exchange",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'benefit' */ "../views/benefit/children/exchange"
          ),
      },
      {
        path: "commend",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'benefit' */ "../views/benefit/children/commend"
          ),
      },
    ],
  },
  {
    path: "/points",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'points' */ "../views/points/points.vue"),
    meta: {
      needLogin: true,
    },
    children: [
      {
        path: "detail",
        meta: {
          needLogin: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'points' */ "../views/points/children/detail.vue"
          ),
      },
    ],
  },
  {
    path: "/order",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'order' */ "../views/order/order.vue"),
    children: [
      {
        path: "orderDetail",
        component: () =>
          import(
            /* webpackChunkName: 'order' */ "../views/order/children/orderDetail"
          ),
      },
    ],
  },
  {
    path: "/search/:geohash",
    component: () =>
      import(/* webpackChunkName: 'search' */ "../views/search/search.vue"),
  },
  {
    path: "/shop",
    meta: {
      keepAlive: false,
    },
    component: () =>
      import(/* webpackChunkName: 'shop' */ "../views/shop/shop.vue"),
    children: [
      {
        path: "shopDetail",
        meta: {
          keepAlive: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'shop' */ "../views/shop/children/shopDetail.vue"
          ),
        children: [
          {
            path: "shopSafe",
            component: () =>
              import(
                /* webpackChunkName: 'shop' */ "../views/shop/children/children/shopSafe.vue"
              ),
          },
        ],
      },
      {
        path: "footDetail",
        meta: {
          keepAlive: true,
        },
        component: () =>
          import(
            /* webpackChunkName: 'shop' */ "../views/shop/children/footDetail.vue"
          ),
      },
    ],
  },
  {
    path: "/service",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'service' */ "../views/service/service.vue"),
    children: [
      {
        path: "questionDetail",
        component: () =>
          import(
            /* webpackChunkName: 'service' */ "../views/service/children/questionDetail"
          ),
      },
    ],
  },
  {
    path: "/vipcard",
    component: () =>
      import(/* webpackChunkName: 'vipcard' */ "../views/vipcard/vipcard"),
    meta: {
      needLogin: true,
    },
    children: [
      {
        path: "vipDescription",
        component: () =>
          import(
            /* webpackChunkName: 'vipcard' */ "../views/vipcard/children/vipDescription"
          ),
      },
      {
        path: "useCart",
        component: () =>
          import(
            /* webpackChunkName: 'vipcard' */ "../views/vipcard/children/useCart"
          ),
      },
      {
        path: "invoiceRecord",
        component: () =>
          import(
            /* webpackChunkName: 'vipcard' */ "../views/vipcard/children/invoiceRecord"
          ),
      },
    ],
  },

  {
    path: "/food",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'food' */ "../views/food/food.vue"),
  },
  {
    path: "/home",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'home' */ "../views/home/home.vue"),
  },
  {
    path: "/city/:cityid",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: 'city' */ "../views/city/city.vue"),
  },
  {
    path: "/confirmOrder",
    component: () =>
      import(
        /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/confirmOrder.vue"
      ),
    meta: {
      // keepAlive:true,
      needLogin: true,
    },
    children: [
      {
        path: "invoice",
        component: () =>
          import(
            /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/children/invoice.vue"
          ),
        meta: {
          needLogin: true,
        },
      },
      {
        path: "remark",
        component: () =>
          import(
            /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/children/remark.vue"
          ),
        meta: {
          needLogin: true,
          keepAlive: true,
        },
      },
      {
        path: "payment",
        component: () =>
          import(
            /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/children/payment.vue"
          ),
        meta: {
          needLogin: true,
          keepAlive: true,
        },
      },
      {
        path: "chooseAddress",
        component: () =>
          import(
            /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/children/chooseAddress.vue"
          ),
        meta: {
          needLogin: true,
        },
        children: [
          {
            path: "addAddress",
            component: () =>
              import(
                /* webpackChunkName: 'confirmOrder' */ "../views/confirmOrder/children/children/addAddress.vue"
              ),
            meta: {
              keepAlive: true,
            },
            children:[
              {
                path:'searchAddress',
                component:()=>import(/* webpackChunkName: 'confirmOrder' */  '../views/confirmOrder/children/children/children/searchAddress.vue')
              }
            ]
          },
        ],
      },
    ],
  },
  // {
  //   // 匹配 无效路由
  //   path : '*',
  //   redirect : '/'
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition };
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = scrollY || document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  },
});

//设置一个路由守卫
router.beforeEach((to, from, next) => {
  // 判断 本地是否有id  有id 的话 防止 vuex 状态丢失
  // 进入页面前判断 本地和vuex 中是否存在数据
  if (!store.state.userInfo) {
    if (getStore("user_id")) {
      //触发 actions  获取 数据
      store.dispatch("getUserInfo");
    }
  }

  //如果需要登录的页面
  if (to.meta.needLogin) {
    //检测本地时候 有登陆后的id存在
    if (getStore("user_id")) {
      //存在 则在登录状态
      next();
    } else {
      // 未登录 跳转到登录页面
      next("/login");
    }
  } else {
    //不要验证的
    next();
  }
});

export default router;
