import { createApp } from 'vue'
import {  library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 
import { createHead } from '@vueuse/head'
library.add(fas)


import App from './App.vue'
import router from '@/Router'

const head = createHead()

let env_link = process.env.VUE_APP_LINK


createApp(App).component('fa',FontAwesomeIcon )
.use(router).use(head)
.mount('#app')



router.afterEach((to)=>{
    const { title, description, keywords, og_title , og_description,  og_url } = to.meta
    head.addHeadObjs({
        title:title || 'Школа программированиия / разработка на заказ ',
        meta:[
            {
                name:'description',
                content:description || 'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, а так же выполение на заказ любой сложности программ для любой платформы'
            },
            {
                name:'keywords', 
                content:keywords || 'школа, школа программирования, разработка, разработка на заказ'
            },
            {
                name:'robots',
                content:'index, follow'
            },
            {
                property:'og:title',
                content:og_title || "Школа программированиия / разработка на заказ", 
            },
            {
                property:'og:description',
                content:og_description || "Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, а так же выполение на заказ любой сложности программ для любой платформы"
            }, 
            {
                property:'og:image',
                content:`${env_link}social.jpg`    
            },

            {
                property:'og:url',
                content:og_url || env_link
            }

        ],
        script: [
            {
              type: 'application/ld+json',
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Silver-Tech",
                "url": `${env_link}`,
                "logo": `${env_link}logo.png`,
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+7 (960) 459-34-45",
                    "contactType": "Customer Service",
                    "areaServed": "RU",
                    "availableLanguage": ["Russian", "English"],
                    "email": "m.yacenko@gmail.com"
                  }
              }),
            },
          ]

    })
})
