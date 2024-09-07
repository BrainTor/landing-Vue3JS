<template>
    <Nav_Component @scroll_to="this.handle_nav" place="main" class="nav_bar" />

    <Modal_Connect :isVisible="this.isVisible" @close="this.togle_Modal">
    

    </Modal_Connect>

   
    <section class="header_section">
        <img ref="img_header" src="@/assets/img/main-section.webp" class="img_undercover" alt="">
        <div class="cover">
            <h1 style="text-align: center;font-size: 24pt; font-weight: 600;">Разработка программного обеспечения любой
                сложности.<br>Обучение любым направлениям программирования!</h1>
            <h1 style="text-align: center;margin-top: 1.5rem;font-weight: 400;"><br> <strong>Разработка</strong>
                программного
                обеспечения для любой платформы: быстро, качественно, не дорого!
                <br><strong>Обучение</strong> всем направлениям программирования. Для вас и ваших детей
            </h1>
        </div>
    </section>

    <Modal_ads @close_ads = "hadle_ads" :isVisible_ads = "is_Visible_ads">
        <p style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px;">Напишите ваш, номер телефона и получите скидку<br>на все услуги в размере 15 процентов</p>
    </Modal_ads>


    <section ref="section_about" class="about-section">

        <h1 style="text-align: center;margin-top: 1.5rem;">Обо мне</h1>

        <div class="profile-card">
            <img src="@/assets/img/main_photo.png" alt="Profile Photo" class="profile-photo">
            <div class="profile-info">
                <h2>Яценко Максим</h2>
                <p> 👨‍💻 <strong>Пpoгрaммист с большим опытом работы</strong>, специализирующийся на разработке
                    программного
                    обеспечения высшего уровня сложности. Имею диплом магистра и обладаю глубокими знаниями в области
                    информационных технологий. <br> <strong>Призер множеcтва все-российских конкурсов</strong>, что
                    подтверждает
                    мою компетентность и профессионализм 🏆. <strong>Имею 10-летний опыт программирования</strong> на
                    различных
                    платформах, включая мобильные устройства, десктопы и серверные решения. 📱💻 <br> <strong>Проектирую
                        и создаю
                        системы разного уровня сложности</strong> – от небольших приложений до сложных корпоративных
                    систем. 🛠️ Мой
                    подход к разработке основан на строгом соблюдении сроков и высоких стандартах качества, поэтому
                    <strong>выполняю работу всегда вовремя и качественно</strong>. ✅ <br>
                    Кроме того, <strong>обучаю детей и взрослых</strong> <strong>самой востребованной и
                        высокооплачиваемой
                        профессии нашего времени</strong> – программированию 💼. Мои ученики не только получают
                    практические навыки,
                    но и овладевают современными методологиями разработки, что позволяет им успешно строить карьеру в
                    IT-индустрии. 🚀

                    Если вы ищете профессионала, который может воплотить ваши идеи в жизнь и обеспечить надежные,
                    масштабируемые
                    решения – я здесь, чтобы помочь! "
                </p>
            </div>
        </div>

        <center>

            <button class="connect_with_me" @click="togle_Modal">
                <fa icon="link" /> Свяжитесь со мной
            </button>
        </center>


    </section>

    <section ref="section_why_pick_me" class="sectionSecond">
        <center>
            <h1 style="padding-top: 20px;">Почему стоит выбрать именно меня?</h1>
            <h3 style="font-weight: 400;margin-top: 20px;">Имею большой опыт создания приложений для разных
                платформ,<br> а так же исходя из
                своего опыта могу объяснить "простым языком" сложные вещи</h3>
            <div class="row_container">
                <div class="container_col">
                    <img class="img_icon" src="@/assets/img/icons/10age.png">
                    <h4>10 лет работы</h4>
                    <p class="text_why_me">Мой опыт говорит за меня. За 10 лет практической разработки и 5 лет
                        преподавания, я
                        успел поучаствовать(или даже разработать самостоятельно) огромное количество разной сложности
                        проектов. А
                        так же обучить около 100 детей и взрослых .</p>
                </div>

                <div class="container_col">
                    <img class="img_icon" style="margin-top: 20px;" src="@/assets/img/icons/individ.png">
                    <h4>Индвидуальной подход</h4>
                    <p class="text_why_me">За время моей работы, я научился находить индивидуальный подход к клиенту.
                        Если речь
                        идет о разработке, то это всегда <strong>качественная работавыполенная в срок</strong>,
                        <br> если обучение - то выработанные техники работы с детьми и взрослыми, создание
                        <strong>индвидуального
                            курса работы</strong> для каждого!
                    </p>
                </div>

                <div class="container_col">
                    <img class="img_icon" src="@/assets/img/icons/upgrade.png">
                    <h4>Непрерывный рост</h4>
                    <p class="text_why_me">
                        Я стараюсь не сидеть на месте и постоянно совершенствую своё мастерство, как в плане
                        разработки(изучение
                        новых технологий и паттернов), так и в плане преподавания(создаю и применяю новые техники
                        обучения)
                    </p>
                </div>
            </div>
        </center>

    </section>

    <section ref="section_study" class="section_study">
        <center>
            <h1>Обучение:</h1>

            <h3 style="font-weight: 400;margin-top: 20px;">
                📚 Хотите освоить программирование с нуля или повысить свои навыки?📚
                <br>Я – опытный разработчик и преподаватель с более чем 5-летним стажем работы в IT.
                <br>В конце данной страницы, нажмите кнопку подробнее и перейдите на отдельную страницу, где вы сможете
                увидеть дополнительную информацию
            </h3>

            <div class="objective">

                <div class="left_block">
                    <img src="@/assets/img/icons/uniqe.png" class="img_blocks">
                    <p class="text_left_block">🚀 Уникальная возможность: обучаю программированию как детей, так и
                        взрослых. Мои ученики не просто изучают теорию, но получают реальные практические навыки и
                        учатся современным методологиям разработки, что позволяет им успешно строить карьеру в
                        IT-индустрии.</p>
                </div>

                <div class="right_block">
                    <p class="text_right_block">💻 Что вас ждет: от создания простых приложений до сложных корпоративных
                        систем – вы получите знания и навыки, которые помогут вам уверенно шагнуть в мир
                        программирования и воплотить свои идеи в жизнь.</p>
                    <img src="@/assets/img/icons/wait.png" class="img_blocks">
                </div>

                <div class="left_block">
                    <img src="@/assets/img/icons/programs.png" class="img_blocks">
                    <p class="text_left_block">🔧 За время своей преподавательской деятельности, я разработал уникальные
                        программы, которые подуйдут для каждого, обучение построенно на большом количестве практики и не
                        скучной теории</p>
                </div>

                <div class="right_block">
                    <p class="text_right_block">Присоединяйтесь к обучению прямо сейчас и начните путь к успешной
                        карьере в IT! 💼</p>
                    <img src="@/assets/img/icons/it.png" class="img_blocks">
                </div>

            </div>
            <RouterLink to="/study">
                <Button_more></Button_more>
            </RouterLink>

        </center>

    </section>


    <section ref="section_code" class="sectionSecond" style="padding-top: 20px;">
        <center>
            <h1>
                Разработка
            </h1>

        </center>
        <div class="profile-card" style="background-color: transparent;">
            <img src="@/assets/img/programmer.jpg" alt="Profile Photo" class="profile-photo" style="width: 400px;">
            <div class="profile-info">

                <p>
                    👨‍💻 Я – программист с богатым опытом и глубокими знаниями в области информационных технологий. Мой
                    диплом магистра и призовые места на всероссийских конкурсах подтверждают мою квалификацию и
                    профессионализм 🏆. <br>
                    <br>

                    С более чем 10-летним опытом работы, я успешно разрабатываю решения для самых разнообразных
                    платформ. Я создаю потрясающие мобильные приложения 📱, которые легко и удобно использовать в любой
                    ситуации. Мои десктопные программы 💻 обеспечивают надежность и эффективность в выполнении задач,
                    будь то простые утилиты или сложные инструменты. Я также проектирую масштабируемые серверные решения
                    🌐, которые поддерживают высокую производительность и надежность даже при значительных нагрузках.
                    <br>
                    <br>
                    Мой подход к разработке основывается на строгом соблюдении сроков и высоких стандартах качества, что
                    гарантирует точное и качественное выполнение работы ✅.<br>
                    <br>
                    Если вам нужен профессионал, способный воплотить ваши идеи в жизнь и предоставить надежные,
                    масштабируемые решения – я готов помочь! Свяжитесь со мной, чтобы обсудить детали вашего проекта.
                </p>
            </div>
        </div>
        <center>
            <RouterLink to="/code">
                <Button_more style="margin-top: 2rem;"></Button_more>
            </RouterLink>

        </center>

    </section>

    <section ref="section_contact">
        <Footer_Component @toggle="this.togle_Modal" />
    </section>

</template>

<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue'
import Button_more from '@/components/UI/Button_more.vue';
import Modal_Connect from '@/components/Modal_Connect.vue';
import Modal_ads from '@/components/Modal_ads.vue';
export default {
    name: 'Main_Page',
    components: {
        Nav_Component,
        Footer_Component,
        Button_more,
        Modal_Connect,Modal_ads
    },
    data() {
        return {
            name_of: ['_about', '_why_pick_me', '_study', '_code', '_contact'],
            isVisible: false,
            is_Visible_ads:false,
            randomTime:  Math.round(Math.random() * (22000 - 12000) + 12000) 
        }
    },
    mounted() {

        setTimeout(this.hadle_ads, this.randomTime)

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.001
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch (entry.target) {
                        case this.$refs['section' + this.name_of[0]]:
                            entry.target.classList.add('animate');
                            break
                        case this.$refs['section' + this.name_of[1]]:
                            entry.target.classList.add('animate-from-back');
                            break
                        case this.$refs['section' + this.name_of[2]]:
                            entry.target.classList.add('animate');
                            break
                        case this.$refs['section' + this.name_of[3]]:
                            entry.target.classList.add('animate-from-back');
                            break
                        case this.$refs['section' + this.name_of[4]]:
                            entry.target.classList.add('animate');
                            break

                    }
                }
                else {
                    if (entry.target.classList.contains('animate') || entry.target.classList.contains('animate-from-back'))
                        entry.target.classList.contains('animate') ? entry.target.classList.remove('animate') : entry.target.classList.remove('animate-from-back')
                }
            })
        }, options);
        const ref_element = this.$refs
        for (let refName in ref_element) {
            for (let index = 0; index < this.name_of.length; index++) {
                if (refName == 'section' + this.name_of[index]) observer.observe(this.$refs[refName]);
            }
        }
    }, methods: {
        handle_nav(data) {
            let check_el = this.$refs['section' + data]
            if (check_el) check_el.scrollIntoView({ behavior: 'smooth' })
        },
        togle_Modal() {
            this.isVisible = !this.isVisible
        },
        hadle_ads(){
            this.is_Visible_ads = !this.is_Visible_ads 
        }

    }
}
</script>

<style scoped>
.nav_bar {
    position: sticky;
    width: 100% !important;
    left: 0%;
    top: 0%;
    z-index: 1000;

}

.header_section {
    height: 100vh;
    position: relative;
    background-size: 100%;
    overflow: hidden;
}


.img_undercover {
    position: absolute;
    width: 100%;
    /* Изображение занимает всю ширину экрана */
    height: 100vh;
    /* Изображение занимает всю высоту экрана */
    object-fit: cover;
    /* Изображение сохраняет пропорции, занимая весь контейнер */
    object-position: calc(50%);
    /* Центрируем изображение в контейнере */
    display: block;
}

.cover {
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.78));
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;

}

.section_about_text {
    text-align: justify;
    font-size: 17px;
    width: 30%;
}

.container_info {
    display: flex;
    justify-content: center;
}

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
    width: 400px;
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

.animate {
    animation-name: slide;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-duration: 1.5s;
}

.animate-from-back {
    animation-name: slide-back !important;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-duration: 1.5s;
}

@keyframes slide {
    from {
        transform: translateX(-450px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
}

@keyframes slide-back {
    from {
        transform: translateX(450px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
}

.sectionSecond {
    background-color: #f0f0f0;
    padding-bottom: 20px;
}

.about-section {
    margin-bottom: 20px;

}

@media (hover: hover) {
    .profile-photo:hover {
        transform: scale(1.09);

    }
}

.row_container {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    margin-top: 20px;
}

.img_icon {
    width: 150px;
}

.container_col {
    width: 25% !important;
}

.text_why_me {
    font-size: 17px;
}

.section_study {
    padding: 20px 0px;
}

.objective {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right_block {
    display: flex;
    flex-direction: row;
    align-items: center;


    align-self: end;
    padding-right: 10%;
    margin: 20px 0;

}

.text_right_block {
    width: 600px;
    font-size: 17px;
    margin-right: 15px;
}

.left_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: start;


    padding-left: 10%;
    margin: 20px 0;

}

.text_left_block {
    width: 600px;
    font-size: 17px;
    margin-left: 15px;
}

.img_blocks {
    width: 180px;
}

.connect_with_me {
    background-color: var(--main-color);
    width: 600px;
    height: 50px;
    outline: none;
    border: 0px;
    transition: 0.6s all;
    font-size: 17px;
    border-radius: 8px;
    cursor: pointer;

}

.connect_with_me:hover {
    background-color: rgb(30, 181, 30);
    color: white;

}
</style>