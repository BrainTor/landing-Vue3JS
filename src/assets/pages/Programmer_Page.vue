<template>
    <Modal_ads @close_ads = "hadle_ads" :isVisible_ads = "is_Visible_ads">
        <p style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px;">Напишите ваш, номер телефона и получите скидку<br>на написание программы в размере 10% 
        </p>
    </Modal_ads>
  <Nav_Component place = "code"></Nav_Component>
  <Footer_Component></Footer_Component>
  
</template>
<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue';
import Modal_ads from '@/components/Modal_ads.vue'
    export default{ 
        name:'Programmer_Page', 
        components:{
            Nav_Component, 
            Footer_Component,
            Modal_ads
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
            }
        },
        mounted(){
            setTimeout(this.hadle_ads,this.randomTime)
        }
    }
</script>