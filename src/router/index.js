import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'desktop',
    component:() => import('../views/App/Desktop'),
    meta: {title: 'Рабочий стол', layout: 'app'}
  },
  {
    path: '/app/patient-card/get/:id',
    name: 'getCard',
    component: () => import('../views/App/PatientCard'),
    meta: {title: 'Карта пациента', layout: 'app'}
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
