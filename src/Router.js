import { createRouter, createWebHistory } from 'vue-router';
import Main_Page from '@/assets/pages/Main_Page.vue';
import Study_page from '@/assets/pages/Study_page.vue';
import Programmer_Page from './assets/pages/Programmer_Page.vue';
import Cross_page from './assets/pages/games/Cross_page.vue';
import Calculator_page from '@/assets/pages/games/Calculator_Page.vue';
import Find_tres_page from './assets/pages/games/Find_tres_Page.vue';
import Ham_page from './assets/pages/games/Ham_Page.vue';

const routes = [
    {path: '/', component: Main_Page }, 
    {path:'/study', component:Study_page},
    {path:'/code', component:Programmer_Page},
    {path:'/game/cross', component:Cross_page},
    {path:'/game/calculator', component:Calculator_page},
    {path:'/game/find_tres', component:Find_tres_page},
    {path:'/game/ham', component:Ham_page}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router