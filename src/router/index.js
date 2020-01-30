import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from "../views/Desktop";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'desktop',
    component: Desktop,
    meta: {title: 'Рабочий стол', layout: 'App'}
  },
  {
    path: '/app/patient-card/get/:id',
    name: 'getCard',
    component: () => import('../views/PatientCard'),
    meta: {title: 'Карта пациента', layout: 'App'}
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default router
