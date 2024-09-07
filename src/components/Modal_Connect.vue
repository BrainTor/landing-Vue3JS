<template>
    <div class="modal-container" v-show="isVisible">
      <!-- Фон модального окна без события @click -->
      <div class="modal-overlay"></div>
      
      <!-- Контент модального окна -->
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2 style="margin-bottom: 0.5rem;">Свяжитесь со мной</h2>
        <div style="display: flex;">
            <div style="display: flex; flex-direction: column">
                <p>Введите имя</p>
           
                <input placeholder="Иван" class="input_one_row" type="text">
            </div>
            <div style="display: flex; flex-direction: column;margin-left: 1rem">
                <p>Введите отчество</p>
                <input type="text" class="input_one_row" placeholder="Иванович">
            </div>
        </div>

        <p style="margin-top: 10px; margin-bottom: 10px;">Введите номер телефона</p>
        <input type="text" placeholder="+7 900 000 00 00" class="input_two_row">
        <center>
            <p style="color: gray;margin-top: 0.5rem;">или</p>
        </center>
        <p>Введите ссылку на социальную сеть</p>
        <div style="display: flex;flex-direction: column;">
            <input placeholder="https://t.me/@name" type="text" class="input_two_row" style="margin-top: 10px; margin-bottom: 10px;">

            <textarea placeholder="Напишите мне что-то" style="margin-top: 10px; margin-bottom: 10px;height: 320px;padding: 20px;   font-size: 16.2px;"></textarea>
        </div>



        <div class="footer_modal">
            <button class="button_modal_controll"  @click="closeModal">Закрыть</button>
            <button class="button_modal_controll" style="background-color: rgb(30, 181, 30); ">Отправить</button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'Modal_Connect',
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style>
/* Глобальные стили */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.90); /* Тёмный фон */
  z-index: 100;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Локальные стили для контента модального окна */
.modal-content {
  position: relative;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  z-index: 200;
  box-shadow: 0 0 15px rgba(102, 101, 101, 0.8);
  min-width: 350px;
  min-height: 200px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.input_one_row{
  width: 220px;
  outline: none;
  border: 1.5px solid rgb(178, 175, 175);
  padding:  4px 10px;
  border-radius: 4px;
  height: 25px;
  font-size: 16.2px;

}
.input_two_row{
  width: 96%;
  outline: none;
  border: 1.5px solid rgb(178, 175, 175);
  padding:  4px 10px;
  border-radius: 4px;
  height: 25px;
  font-size: 16.2px;
}
.footer_modal{
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
}
.button_modal_controll{
  color: whitesmoke;
  border: 0px;
  width: 120px;
  font-size: 16.2px;
  padding: 3px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgb(207, 31, 31);

}
</style>