import { createRouter, createWebHistory } from 'vue-router';
import Main_Page from '@/assets/pages/Main_Page.vue';
import Study_page from '@/assets/pages/Study_page.vue';
import Programmer_Page from './assets/pages/Programmer_Page.vue';
import Cross_page from './assets/pages/games/Cross_page.vue';
import Calculator_page from '@/assets/pages/games/Calculator_Page.vue';
import Find_tres_page from './assets/pages/games/Find_tres_Page.vue';
import Ham_page from './assets/pages/games/Ham_Page.vue';
let env_link = process.env.VUE_APP_LINK
const routes = [
    {
      path: '/', 
      component: Main_Page,
      meta: {
        title: 'Школа программированиия / Разработка на заказ',
        description: 'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, а так же выполение на заказ любой сложности программы, а так же для любой платформы',
        keywords: 'школа, школа программирования, it, образование, репетитор, курсы программирования, опытный программист, разработка, разработка под заказ, Java, JavaScript, индивидуальный подход, веб-сайт на заказ, мобильное приложение, сервер',  
      }
    }, 
    {path:'/study', component:Study_page,
      meta: {
        title: 'Школа программированиия Silver - Tech',
        description: 'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, войдите в мир It с граммотным наставником!',
        keywords: 'школа, школа программирования, it, образование, репетитор, курсы программирования, обучение на всех платформах, Уровни обучения (начальный, средний, продвинутый)',
        og_title: 'Школа программированиия Silver - Tech',
        og_description:'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, войдите в мир It с граммотным наставником!',
        og_url:`${env_link}study`
      }
    },
    {path:'/code', component:Programmer_Page, 
      meta: {
        title: 'Разработка на заказ Silver - Tech',
        description: 'Выполение на заказ любой сложности программы, а так же для любой платформы. Квалифицированный и опытный специалист поможет воплотить в жизнь, ваши технические бизнес-идеи',
        keywords: 'Разработка приложений,Кроссплатформенные приложения,Современные технологии,Индивидуальный подход,Мобильные приложения,Веб-разработка,Автоматизация бизнес-процессов,Примеры проектов,Опытный разработчик',
        og_title: 'Разработка на заказ Silver - Tech',
        og_description:'Выполение на заказ любой сложности программы, а так же для любой платформы. Квалифицированный и опытный специалист поможет воплотить в жизнь, ваши технические бизнес-идеи',
        og_url:`${env_link}code`
      }
    },
    {path:'/game/cross',  component:Cross_page,
      meta: {
        title: 'Крестики-нолики Silver - Tech',
        description: 'Самая знаменитая игра, можно сыграть с другом на одном компьютере',
        keywords: 'крестики нолики, крестики-нолики, cross or null, крестики-нолики играть, играть, игра',
      }
    },
    {path:'/game/calculator', component:Calculator_page,
      meta: {
        title: 'Калькулятор Silver - Tech',
        description: 'Простой калькулятор, который вы сможете самостоятельно написать, пройдя обучения у меня',
        keywords: 'Простой калькулятор, калькулятор, решение примеров, простые примеры, калькулятор онлайн',
      }
    },
    {path:'/game/find_tres', component:Find_tres_page,
      meta: {
        title: 'Поиск сокровищ Silver - Tech',
        description: 'Игра по мотивам minecraft с элементами азарта, попробуйте сами!',
        keywords: 'minecraft, сундук из майнкрафта, игра, игра онлайн,маинкрафт,майнкрафт',
      }
    },
    {
      path:'/game/ham', component:Ham_page,
      meta: {
        title: 'Почти Hamster Combat',
        description: 'Игра по мотивам Hamster Combat И NotCoin в ней вы не заработаете, но хорошо проведете время!',
        keywords: 'Hammster Combat,Hammster Combat online, хомяк , игра хомяк, хомяк играть',
      }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router