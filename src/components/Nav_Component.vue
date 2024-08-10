<template>
    <div class="nav_bar">
        <div class="logo" >
            <img src="../assets/img/logo.png" style="width: 40px;" alt="">
            <p class="logo_text">Silver-tech</p>
        </div>

        <div class="info">
            <button class="button_info" @click="handle_change('_about')"><fa icon="circle-info" /> Обо мне</button>
            <button class="button_info" @click="handle_change('_study')"><fa icon="book" /> Обучение</button>
            <button class="button_info" @click="handle_change('_code')"><fa icon="code" /> Разработка</button>
            <button class="button_info button_contact" @click="handle_change('_contact')"><fa icon="address-book" /> Контакты</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Nav_Component',
    methods:{
        handle_change(name){
            this.$emit('scroll_to', name);
        }
    }
}
</script>

<style scoped>
    .nav_bar{
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background_nav_bar);
        color: var(--text-color_nav);
        width: 100%;
        opacity: 1;

    }
    .logo_text{
        font-family: "Edu AU VIC WA NT Hand", cursive;
        font-size: 18px;
        font-weight: 700;
        margin-left: 7px;
    }
    .logo{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .button_info{
        background-color: transparent;
        color: var(--text-color_nav);
        font-family: "PT Serif", serif;
        font-size: 16.5px;
        border: 0px;
        cursor: pointer;
        transition:0.3s all;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        padding: 7px 12px;
        border-radius: 7px;
    }

    .button_contact{ 
        background-color: #d43a63 !important;
        color: rgb(255, 254, 254);
        margin-right: 20px;
    }

    @media (hover: hover) {
        .button_info:hover {
          background-color: var(--hover-color); 
          color: black;
        }
        .button_contact:hover{
            background-color: #c01a46 !important;
            color: white;
        }
      }
      
      @media (hover: none) {
        .button_info:active {
        background-color: var(--hover-color); ; 
        }
        .button_contact:active{
            background-color: #c01a46 !important;
            color: white;
        }
      }
</style>