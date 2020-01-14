import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from "../views/Desktop";
import PatientCard from "../views/PatientCard";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'desktop',
    component: Desktop,
    meta: {title: 'Рабочий стол'}
  },
  {
    path: '/app/patient-card/get/:id',
    name: 'getCard',
    component: PatientCard,
    meta: {title: 'Карта пациента'}
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
