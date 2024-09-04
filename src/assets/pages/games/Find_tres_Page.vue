
<template>
    <div class="main_container_game" style="justify-content: space-around !important;">
      
        <h2 style="color: whitesmoke;margin-bottom: 20px;" ref="title">В одном из сундуков спрятан алмаз, постарайтесь его найти :)</h2>
  
      
        <div class="chest_rows" style="display: flex; flex-wrap: wrap; width: 100%;
        justify-content: center;">
            <div class="chest" ref="chest1" @click="this.click_button(1)">
                <div class="cap" ref="cap1">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
            <div class="chest" ref="chest2" @click="this.click_button(2)">
                <div class="cap" ref="cap2">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
            <div class="chest" ref="chest3" @click="this.click_button(3)">
                <div class="cap" ref="cap3">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
        </div>
        <div class="buttons">
            <button class="controll_button">Вернуться назад</button>
            <button class="controll_button" onclick="window.location.reload()">Перезапустить</button>
        </div>
 

    </div>
</template>

<script>

export default{
    name:'Find_tres_Pages',
    data(){
        return {
            win_number: -5, 
            chest_count: 3,
            is_clicked:false
        }
    },beforeMount(){
        this.generate_win_number()
    },
    methods:{
        generate_win_number(){
            this.win_number = Math.round(Math.random()*this.chest_count)
            this.win_number = this.win_number==0?1:this.win_number
        },
        click_button(id){
            if(!this.is_clicked){
                this.is_clicked = true
                if(this.win_number == id) this.generate_another_chest(id)
                else this.$refs.title.innerText = "Вы выбрали, неправельный сундук, повторите попытку" 
            }
        },
        generate_another_chest(id){
            alert(id)
        }

    }
    

}
</script>

<style scoped>
.base{
    width: 200px;
    height: 70px;
    background-color: rgb(192, 141, 74);
    border: 2px solid black;
}
.cap{
    width: 200px;   
    height: 34px;
    background-color: rgb(192, 141, 74);
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.lock{
    width: 10px;
    height: 20px;
    background-color: silver;
}
.chest{
    cursor: pointer;
    margin-left: 1rem;
    margin-right: 1rem;
}
.buttons{
    margin-top: 20px;
}
.controll_button{
    background-color: var(--main-color);
    width: 200px;
    border: 0px;
    border-radius: 4px;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 40px;
    cursor: pointer;
    font-size: large;
}
</style>