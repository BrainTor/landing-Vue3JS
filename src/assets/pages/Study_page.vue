<template>
    <div>
        <Nav_Component @scroll_to="handle_scroll" place="study"></Nav_Component>
        <Modal_Connect :isVisible = "this.modal_connect_visible" @close = "this.handle_connect"></Modal_Connect>
        <Modal_ads @close_ads="hadle_ads" :isVisible_ads="is_Visible_ads">
            <p style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px;">Напишите ваш, номер телефона и получите
                скидку<br>на первое занятие в размере 15% <br>
                И пробное занятие <strong>бесплатно</strong>
            </p>
        </Modal_ads>

        <section style="padding: 20px;">
            <RouterLink to='/'>
                <Back_Button></Back_Button>
            </RouterLink>

            <div class="profile-card">

                <img src="@/assets/img/study/enter.jpg" alt="Profile Photo" class="profile-photo">
                <div class="profile-info">
                    <h2>👋 Введение</h2>
                    <p> Обучение программированию — это 🎓 инвестиция в будущее, которая открывает двери к бесконечным
                        возможностям. В современном мире, где технологии стремительно развиваются, умение
                        программировать становится не просто навыком, а необходимостью. Я предлагаю обучение по
                        программированию, которое подходит для любого возраста и уровня подготовки — от подростков 11
                        лет до взрослых, которые хотят улучшить свои навыки или начать карьеру в IT. 💻
                    </p>
                </div>


            </div>

            <div class="profile-card mobile-info">
                <div class="profile-info">
                    <h2>📚 Мое обучение</h2>
                    <p> Я горжусь тем, что уже более пяти лет успешно обучаю программированию. За это время более 100
                        довольных клиентов 🎉 достигли своих целей благодаря моему наставничеству. Мои программы
                        включают обучение на всех существующих платформах, от веб-разработки и мобильных приложений до
                        сложных серверных решений 🤖
                    <ul>
                        <li> Начальный уровень: обучение для новичков 🆕, которые только начинают знакомство с
                            программированием. Подходит для всех возрастов.</li>
                        <li>Средний уровень: для тех, кто уже имеет базовые знания и хочет углубить свои навыки.</li>
                        <li>Продвинутый уровень: для опытных программистов, желающих освоить новые технологии или
                            улучшить уже существующие знания. 🌟</li>
                    </ul>
                    </p>
                </div>
                <img src="@/assets/img/study/happy_woman.jpg" alt="Profile Photo" class="profile-photo">
            </div>


            <div class="profile-card">
                <img src="@/assets/img/study/unique.jpg" alt="Profile Photo" class="profile-photo">
                <div class="profile-info">
                    <h2>🌟 Уникальный подход</h2>
                    <p>
                        Каждый студент уникален, и мы понимаем это как никто другой. Наш квалифицированный специалист 🎓
                        с дипломом магистра разрабатывает персонализированные программы обучения, учитывая цели и
                        предпочтения каждого ученика. Мы используем гибкие методики преподавания, адаптированные к
                        разным стилям обучения, что позволяет добиваться максимальных результатов. 🏆
                        <br>
                        <strong>Почему выбирают нас?</strong>
                    <ul>
                        <li>Опыт и квалификация: более 5 лет успешной работы и диплом магистра в области
                            программирования.🎓</li>
                        <li> 100+ довольных клиентов: положительные отзывы от наших студентов — лучшее
                            подтверждение эффективности наших курсов. 🗣️</li>
                        <li> Индивидуальный подход: программы обучения разрабатываются с учетом особенностей и целей
                            каждого студента. 👩‍🏫</li>
                        <li>Обучение на всех платформах: предлагаем широкий выбор курсов по программированию для любых
                            платформ и технологий. 🌐</li>
                    </ul>




                    </p>
                </div>


            </div>



        </section>

        <section style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;" class="title_study_example">
            <center>
                <h2>🎯 Примеры чему можно научиться</h2>
                <h3 style="margin-top: 20px; margin-bottom: 20px;" >Ниже будут отображены примеры того, что каждый ученик
                    сможет сделать к концу обучения<br>
                    Это минимальные задачи, а чем больше будет длиться обучение, тем лучше будут становиться навыки у вас
                    или у вашего ребенка!
                </h3>

                <div class="buttons">

                    <div class="card">
                        <img src="@/assets/img/study/cross.jpg" style="width: 200px;" alt="">
                        <h3>Крестики — нолики</h3>
                        <p>
                            Классическая логическая игра, знакомая каждому с детства. Представьте, что вы можете не только сыграть в неё, но и создать свою собственную версию! Научитесь программировать эту увлекательную игру с нуля, разбираясь в основах разработки интерфейса и логики. Удивите друзей и близких своими умениями и покажите им, как вы воплотили известную игру в жизнь.
                        </p>
                        <RouterLink to="/game/cross">
                            <button class="expample" style="margin-top: 85px;">Играть</button>
                        </RouterLink>
                    </div>

                    <div class="card">
                        <img src="@/assets/img/study/calc.jpg" style="width: 200px;" alt="">
                        <h3>Калькулятор</h3>
                        <p>
                            Незаменимое приложение, которым мы пользуемся ежедневно. Что если вы сможете разработать свой собственный калькулятор с уникальным дизайном и дополнительными функциями? Освойте основы программирования и математических операций, создавая полезное приложение своими руками.
                        </p>
                        <RouterLink to="/game/calculator">
                            <button class="expample" style="margin-top: 100px;">Посчитать</button>
                        </RouterLink>
                    </div>


                    <div class="card">
                        <img src="@/assets/img/study/chest.jpg" style="height: 200px;" alt="">
                        <h3>Поиск сокровищ</h3>
                        <p>
                            Погрузитесь в мир приключений и создайте свою собственную игру "Поиск сокровищ". Эта захватывающая игра сочетает в себе элементы стратегии и случайности, предоставляя игрокам возможность испытать удачу в поисках спрятанных богатств. Вы научитесь программировать игровые механики, работать с координатами и событиями, а также создавать интерактивный интерфейс. После создания этой игры вы сможете гордиться тем, что стали разработчиком полноценного игрового приложения.
                        </p>

                        <RouterLink to="/game/find_tres">

                            <button class="expample">Играть</button>
                        </RouterLink>
                    </div>

                    <div class="card">
                        <img src="@/assets/img/study/ham.jpg" style="height: 200px;" alt="">
                        <h3>Аналог Hamster</h3>
                        <p>
                            Создайте аналог известной игры, завоевавшей сердца миллионов игроков по всему миру. Этот проект поможет вам освоить более сложные аспекты программирования, включая работу с графикой, анимацией и управлением состоянием игры. Вы узнаете, как создавать динамичные и увлекательные игровые процессы, которые ничем не уступают профессиональным разработкам. Испытайте свои силы и убедитесь, что вы способны создавать игры высокого уровня сложности!
                        </p>

                        <RouterLink to="/game/ham">
                            <button class="expample">Играть</button>
                        </RouterLink>
                    </div>


                </div>
            </center>
        </section>

        <div ref="section_contact">
            <Footer_Component @toggle="this.handle_connect"></Footer_Component>
        </div>

    </div>
</template>
<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue';
import Back_Button from '@/components/UI/Back_Button.vue';
import Modal_ads from '@/components/Modal_ads.vue'
import Modal_Connect from '@/components/Modal_Connect.vue';
import axios from 'axios';
export default {
    name: 'Study_page',
    components: {
        Nav_Component,
        Footer_Component,
        Back_Button, Modal_ads,Modal_Connect
    }
    , methods: {
        handle_scroll(data) {
            let check_el = this.$refs['section' + data]
            if (check_el) check_el.scrollIntoView({ behavior: 'smooth' })
        },
        hadle_ads() {
            this.is_Visible_ads = !this.is_Visible_ads
        },
        handle_connect(){
            this.modal_connect_visible = !this.modal_connect_visible
        }
        ,
        async send_location(ref , time) {
            axios.post(`http://${process.env.VUE_APP_BACK_IP}:${process.env.VUE_APP_BACK_PORT}/send_location`, {
                location: 'study_page',
                referal: ref, 
                time:time
            })
        }
    }, data() {
        return {
            is_Visible_ads: false,
            randomTime: Math.round(Math.random() * (12000 - 7000) + 7000),
            startTime: 0,
            endTime:0,
            local_ref:null,
            modal_connect_visible:false
        }
    },
    mounted() {
        if (sessionStorage.getItem('ads') == null) {
            setTimeout(this.hadle_ads, this.randomTime)
            sessionStorage.setItem('ads', true)
        }
        if(localStorage.getItem('ref')!=null)
            this.local_ref = localStorage.getItem('ref')
        this.startTime = new Date();
    },
    async beforeUnmount(){
        this.endTime = new Date();
        let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1000);
        totalTimeSpent = Math.floor(totalTimeSpent/60) != 0?
        `Минут: ${Math.floor(totalTimeSpent/60)}, Секунд: ${Math.floor(totalTimeSpent%60)}`:
        `Секунд: ${Math.floor(totalTimeSpent%60)}`
        await this.send_location(this.local_ref, totalTimeSpent)
    }
}
</script>

<style scoped>
.profile-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    width: 98%;
    margin-left: 20px;
    margin-top: 20px;
    opacity: 1;
    transition: opacity 1s ease-in-out;
}

.profile-photo {
    width: 550px;
    border-radius: 8px;
    object-fit: cover;
    margin: 20px;
    cursor: pointer;
    transition: 0.6s;
    box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
}

.profile-info {
    padding: 20px;
    width: 650px;
}

.profile-info h2 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

.profile-info p {
    margin-top: 10px;
    font-size: 17px;
    color: #666;
    line-height: 1.5;
}

.profile-photo:hover {
    transform: scale(1.09);

}

li::before {
    content: "✔";
    /* Добавляем галочку перед каждым элементом списка */
    margin-right: 10px;
    /* Добавляем отступ справа от галочки */
    color: rgb(31, 241, 31);
    font-size: larger;
}

ul {
    margin-top: 10px;
    list-style-type: none;
    margin-left: -15px;
    font-size: 17px;
}

.buttons {
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;
}

.expample {
    background-color: transparent;
    border: 0px;
    font-size: large;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    cursor: pointer;
    width: 320px;
    background-color: var(--main-color);
    height: 45px;
    border-radius: 8px;
    transition: 0.6s;
}

.expample:hover {
    background-color: var(--hover-color);
    transform: scale(1.08);
}

.card {
    margin-left: 10px;
    margin-left: 10px;
    padding: 10px;
    background-color: rgb(218, 218, 218);
    border-radius: 8px;
    width: 350px;
    box-shadow: 1px 2px 11px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 2px 11px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 2px 11px 3px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 680px;
}
</style>