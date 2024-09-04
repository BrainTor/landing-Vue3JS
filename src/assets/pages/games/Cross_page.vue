
<template>
    
    <div class="main_container_game">
        <RouterLink to="/study">
            <Back_Button style="margin-left: -125px;margin-bottom: 20px; color: white !important;"></Back_Button>
        </RouterLink>
        
        <div>
            <div class="row_button">
                <button class="button" @click="button_click('button1')" ref="button1">-</button>
                <button class="button" @click="button_click('button2')" ref="button2">-</button>
                <button class="button" @click="button_click('button3')" ref="button3">-</button>
            </div>
            <div class="row_button">
                <button class="button" @click="button_click('button4')" ref="button4">-</button>
                <button class="button" @click="button_click('button5')" ref="button5">-</button>
                <button class="button" @click="button_click('button6')" ref="button6">-</button>
            </div>
            <div class="row_button">
                <button class="button" @click="button_click('button7')" ref="button7">-</button>
                <button class="button" @click="button_click('button8')" ref="button8">-</button>
                <button class="button" @click="button_click('button9')" ref="button9">-</button>
            </div>
        </div>

    </div>
</template>

<script>
import Back_Button from '@/components/UI/Back_Button.vue';


export default{
    name:'Cross_page',
    methods:{
        button_click(ref){
            if(this.$refs[ref].innerText=='-'&&!this.is_win){
                this.$refs[ref].innerText = this.cross_or_null
                this.cross_or_null = this.cross_or_null=='x'?'0':'x'
            }
            this.check_winner()
            setTimeout(()=>{
                if(this.is_win)
                    alert('Есть победитель!')
            } , 100)
        
        },
        check_winner(){
            if((this.$refs.button1.innerText == this.$refs.button2.innerText&&this.$refs.button1.innerText!='-')&&
                this.$refs.button2.innerText == this.$refs.button3.innerText)
                return this.is_win = true
            else if((this.$refs.button4.innerText == this.$refs.button5.innerText&&this.$refs.button4.innerText!='-')&&
                this.$refs.button5.innerText == this.$refs.button6.innerText)
                return this.is_win = true
            else if((this.$refs.button7.innerText == this.$refs.button8.innerText&&this.$refs.button7.innerText!='-')&&
                this.$refs.button8.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if((this.$refs.button1.innerText == this.$refs.button4.innerText&&this.$refs.button1.innerText!='-')&&
                this.$refs.button4.innerText == this.$refs.button7.innerText)
                return this.is_win = true
            else if((this.$refs.button2.innerText == this.$refs.button5.innerText&&this.$refs.button2.innerText!='-')&&
                this.$refs.button5.innerText == this.$refs.button8.innerText)
                return this.is_win = true
            else if((this.$refs.button3.innerText == this.$refs.button6.innerText&&this.$refs.button3.innerText!='-')&&
                this.$refs.button6.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if((this.$refs.button1.innerText == this.$refs.button5.innerText&&this.$refs.button1.innerText!='-')&&
                this.$refs.button5.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if((this.$refs.button3.innerText == this.$refs.button5.innerText&&this.$refs.button3.innerText!='-')&&
                this.$refs.button5.innerText == this.$refs.button7.innerText)
                return this.is_win = true
        }
    }
    ,data(){
        return {
            cross_or_null:'x',
            is_win:false
        }
    },
    components:{
        Back_Button
    }
}
</script>

<style scoped>

.main_container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(57, 55, 55);
}
.button{
    background-color: blue;
    color: white;
    font-size: x-large;
    width: 60px;
    height: 60px;
    border: 0px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
}
</style>