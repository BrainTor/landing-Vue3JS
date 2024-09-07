<template>

    <div class="modal-container" v-if="isVisible_ads">
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-content">
            <button class="close-btn" @click="closeModal">&times;</button>
            <center>
                <img src="@/assets/img/rocket.png" style="width: 100px;">
            </center>
            <h2 style="text-align: center; margin-top: 1rem;">Подождите, у меня специальное предложение.</h2>
            <center>
                <slot></slot>
            </center>
         
            <div style="display: flex; flex-direction: column; align-items:center;">
                <input type="text" class="input_two_row" placeholder="+7 909 000 00 00" style="margin-top: 10px;">
                <button class="accept">Отправить</button>
                <p style="text-decoration: underline; cursor: pointer;" @click="closeModal">Нет, спасибо, я хочу полную стоимость</p>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Modal_ads',
    props: {
        isVisible_ads: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close_ads');
        }
    }
}
</script>

<style scoped>
.accept{
    width: 96%;
    padding:  4px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #d43a63;
    border: 0px;
    color: white;
    height: 40px;
    font-size: 16.5px;
    cursor: pointer;
    transition: 0.6s;
    border-radius: 7px;
}
.accept:hover{
    transform: scale(1.02);
}
</style>