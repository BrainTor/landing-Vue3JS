<template>
    <Modal_ads @close_ads = "hadle_ads" :isVisible_ads = "is_Visible_ads">
        <p style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px;">Напишите ваш, номер телефона и получите скидку<br>на написание программы в размере 10% 
        </p>
    </Modal_ads>
  <Nav_Component place = "code" @scroll_to="handle_navbar"></Nav_Component>

    <section class="main_section">
        <RouterLink to = "/">
            <Back_Button style="margin-left: 20px; margin-top: 20px;"></Back_Button>
        </RouterLink>
        
        <h1 style="text-align: center; margin-top: 1rem; margin-bottom: 1rem;">Я создаю приложения, которые работают на разных платформах и с использованием современных технологий</h1>
        <p style="text-align: center; font-size: 1.17em;">
            Это идеальный способ реализовать ваши идеи в реальность. 
        </p>
        <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap; margin-top: 1rem; margin-bottom: 1rem; ">
            <div style="width: 250px; flex-direction: column; align-items: center;
             display: flex;">
                <img src="@/assets/img/progs/agile.png" width="115px" alt="">
                <h2>Гибкость</h2>
                <p style="text-align: center; font-size: 16.5px;">Я работаю, с заказами разной степени сложности и срочности</p>
            </div>

            <div style="width: 250px; flex-direction: column; align-items: center;
             display: flex;">
                <img src="@/assets/img/progs/platform.png" width="115px" alt="">
                <h2>Платформы</h2>
                <p style="text-align: center; font-size: 16.5px;">
                    Создаю мобильные приложения, веб-сайты и приложения для компьютера – всё, что нужно для вашего бизнеса.
                </p>
            </div>

            <div style="width: 250px; flex-direction: column; align-items: center;
             display: flex;">
                <img src="@/assets/img/progs/effective.png" width="115px" alt="">
                <h2>Эффективность</h2>
                <p style="text-align: center; font-size: 16.5px;">Моя цель – быстрое и качественное выполнение задач, чтобы ваш проект был готов в кратчайшие сроки.</p>
            </div>
        </div>
    </section>


    <section>

        <div style="width: 100%; height: fit-content; position: relative;">
            <img src="@/assets/img/progs/block.jpg" style="width: 100% !important; filter: blur(5px)">
            <div style="position: absolute; z-index: 2; width: 100%; top:0%; left:0%;height: 100%; display: flex; justify-content: center; align-items: center;">
                
                <div class="block_about">
                    <h1 style="color: white;">Более 30</h1>
                    <h3 style="color: white;">Довольных клиентов</h3>
                </div>

                <div class="block_about">
                    <h1 style="color: white;">Более 40</h1>
                    <h3 style="color: white;">Законченных проектов с моим участием</h3>
                </div>
                
                <div class="block_about">
                    <h1 style="color: white;">Более миллиона</h1>
                    <h3 style="color: white;">Написанных строчек кода</h3>
                </div>

            </div>
        </div>

    </section>

    <section style="background-color: #f0f0f0; padding-bottom: 20px; padding-top: 20px;">
        <h1 style="text-align: center;">
            Начать разработку просто
        </h1>
    
        <div style="width: 100%; justify-content: space-evenly;  align-items: center; display: flex; margin-top: 20px;">
            <div style="width: 370px;">
                <div class="circle_element">
                    <div class="number_inside_circle">1</div>
                </div>
                <h2 style="text-align: center;">Индивидуальный подход</h2>
                <p style="font-size: 16.5px;  text-align: center;">Все ваши требования и предпочтения учитываются, во время разработки уникальных решений под ваш проект.</p>
            </div>
            <div style="width: 370px;">
                <div class="circle_element">
                    <div class="number_inside_circle">2</div>
                </div>
                <h2 style="text-align: center;">Первый этап бесплатно</h2>
                <p style="font-size: 16.5px;  text-align: center;">Получите консультацию и оценку проекта на первом этапе совершенно бесплатно. Мы обсудим все детали и сделаем предварительный план.</p>
            </div>
            
            <div style="width: 370px;">
                <div class="circle_element">
                    <div class="number_inside_circle">3</div>
                </div>
                <h2 style="text-align: center;">Демократичные и прозрачные цены</h2>
                <p style="font-size: 16.5px; text-align: center;">Вы всегда знаете, за что платите. У нас фиксированные цены, а также гибкая система правок и доработок без лишних затрат.</p>
            </div>
        </div>

    </section>

    <section style="padding-top: 20px; padding-bottom: 20px;">
        <center>
            <h1>
                Практические примеры
            </h1>
        </center>
        <Card_progs></Card_progs>
    </section>

  <div ref="section_contact">
    <Footer_Component></Footer_Component>
  </div>

  
</template>
<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue';
import Modal_ads from '@/components/Modal_ads.vue'
import Back_Button from '@/components/UI/Back_Button.vue';
import Card_progs from '@/components/UI/Card_progs.vue';
    export default{ 
        name:'Programmer_Page', 
        components:{
            Nav_Component, 
            Footer_Component,
            Modal_ads,
            Back_Button,
            Card_progs
        },
        data(){
            return {
                is_Visible_ads:false,
                randomTime:  Math.round(Math.random() * (12000 - 7000) + 7000) 
            }
        },
        methods:{
            hadle_ads(){
                this.is_Visible_ads = !this.is_Visible_ads
            },
            handle_navbar(data){
                let check_el = this.$refs['section' + data]
                if (check_el) check_el.scrollIntoView({ behavior: 'smooth' })
            }
        },
        mounted(){
            if(sessionStorage.getItem('ads')==null){
                setTimeout(this.hadle_ads,this.randomTime)
                sessionStorage.setItem('ads' , true)
            }
        }
    }
</script>
<style>
.block_about{
    width: 300px;
    display: flex;
    flex-direction: column;

    text-align: center;
    height: 100px;
    margin-left: 1rem; 
    margin-right: 1rem;
}
.circle_element{
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border-style: solid;
    position: relative;
    margin: 0 auto;
    border-width: 2px;
    border-color: #d43a63 !important;
    background: #ffffff;
}
.number_inside_circle{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #d43a63 !important;
    font-size: 20px;
    
}
</style>