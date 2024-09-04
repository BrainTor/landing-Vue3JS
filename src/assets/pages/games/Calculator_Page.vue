
<template>
    <div class="main_container_game">
    
       
        <div class="calcul">
            <RouterLink to="/study">
                <Back_Button style="margin-left: -15px;"></Back_Button>
            </RouterLink>
            <h3>Калькулятор</h3>
 
            <div style="display: flex; align-items: center;">
                <input class="input_calc" type="number" ref="numb1">
                <div>  
                    <div>
                        <button class="button_chast" @click="this.calc_res('+')">+</button>
                        <button class="button_chast" @click="this.calc_res('-')">-</button>
                    </div>
    
                    <div>
                        <button class="button_chast" @click="this.calc_res('*')">*</button>
                        <button class="button_chast" @click="this.calc_res('/')">/</button>
                    </div>
                </div>
    
                <input class="input_calc" type="number" ref="numb2">
            </div>
            <p>Ваш ответ: <strong>{{this.answer}}</strong></p>
        </div>
    </div>
</template>

<script>
import Back_Button from '@/components/UI/Back_Button.vue';
export default{
    name:'Calculator_Page',data(){
        return {
            answer:''
        }
    }, 
    components:{
        Back_Button
    },
    methods:{
        calc_res(value){
            switch(value){
                case '+':
                    this.answer = parseInt(this.$refs.numb1.value) + parseInt(this.$refs.numb2.value)
                    break
                case '-':
                    this.answer = parseInt(this.$refs.numb1.value) - parseInt(this.$refs.numb2.value)
                    break
                case '*':
                    this.answer = parseInt(this.$refs.numb1.value) * parseInt(this.$refs.numb2.value)
                    break
                case '/':
                    this.answer = parseInt(this.$refs.numb1.value) / parseInt(this.$refs.numb2.value)
                    break
            }
        }
    }
}
</script>

<style scoped>

.calcul{
    display: flex;
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    flex-direction: column;
}
.button_chast{
    width: 40px;
    height: 40px;
    background-color: var(--main-color);
    font-size: x-large;
    border-radius: 8px;
    margin: 4px;
    cursor: pointer;
    border: 0px;
}
.input_calc{
    width: 175px;
    height: 40px;
    outline: none;
    border: 1.5px solid rgb(197, 195, 195);
    border-radius: 8px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>