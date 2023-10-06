import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainpage.vue'

import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import Cart from '../components/Cart.vue'


import Cafe_1 from '../components/Cafe_1.vue';
import Cafe_2 from '../components/Cafe_2.vue';
import Cafe_3 from '../components/Cafe_3.vue';
import Cafe_4 from '../components/Cafe_4.vue';
import Cafe_5 from '../components/Cafe_5.vue';
import Cafe_6 from '../components/Cafe_6.vue';
import Cafe_7 from '../components/Cafe_7.vue';
import Cafe_8 from '../components/Cafe_8.vue';
import Cafe_9 from '../components/Cafe_9.vue';
import Cafe_10 from '../components/Cafe_10.vue';


const shopRoutes = [
  { name: 'news_1', component: Cafe_1, shop: 'ชาเขียว' },
  { name: 'news_2', component: Cafe_2, shop: 'ชานม' },
  { name: 'news_3', component: Cafe_3, shop: 'ชามะนาว'},
  { name: 'news_4', component: Cafe_4, shop: 'ชากุหลาบ'},
  { name: 'news_5', component: Cafe_5, shop: 'ชาดำ'},
  { name: 'news_6', component: Cafe_6, shop: 'ชาแอปเปิ้ล'},
  { name: 'news_7', component: Cafe_7, shop: 'ชาเขียวส้มยูสุ'},
  { name: 'news_8', component: Cafe_8, shop: 'ชามะลิ'},
  { name: 'news_9', component: Cafe_9, shop: 'ชาอู่หลง'},
  { name: 'news_10', component: Cafe_10, shop: 'ชาไทย'},

];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }

];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
