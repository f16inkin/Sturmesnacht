import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from "../components/Desktop/Desktop";
import Index from "../components/PatientCard/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'desktop',
    component: Desktop
  },
  {
    path: '/patient-card',
    name: 'patient-card',
    component: Index
  },

  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
