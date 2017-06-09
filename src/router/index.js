import Vue from 'vue';
import Router from 'vue-router';
import bookcity from '@/components/bookcity/bookcity';
import bookrack from '@/components/bookrack/bookrack';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/bookcity',
    name: 'bookcity',
    component: bookcity
  }, {
    path: '/bookrack',
    name: 'bookrack',
    component: bookrack
  }],
  linkActiveClass: 'active'
});
