<template>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

*,
html,
body {
  margin: 0px;
  font-family: "PT Serif", serif;
}

body {
  width: 100% !important;

}

:root {
  --background_nav_bar: rgb(48, 45, 45);
  --text-color_nav: white;
  --main-color: #A6B1E1;
  --hover-color: #DCD6F7;
}

.main_container_game{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(30, 29, 29);
}
@media (max-width: 1024px )and (min-width:769px) {
.header_title{
  font-size: 22px !important;
  text-wrap: balance !important;
  padding: 0px 20px;  
}


.header_under_title{
  font-size: 19px !important;
  text-wrap: balance !important;
  padding: 0px 20px;
}
.profile-card{
  flex-direction: column !important;
}
.profile-photo{
  width: 90%;
}
.profile-info{
  width: 90% !important;
  padding: 0px !important;
}
.button_learn{
  width: 90% !important;
}
.objective{
  padding-left: 13px !important;
  padding-right: 15px !important;
}
.card{
  margin: 20px 0px !important;
  width: 320px !important;
}
}
.text_area{
  outline: none;
}
/* Стили для мобильных устройств */
@media (max-width: 768px) {
  .text_area{
    width: 86% !important;
    height: 320px !important;
    
  }
  .close-btn{
    font-size: 29px !important;
  }
  .modal-content h2{
    margin-top: 10px;
  }
  .header_title{
    font-size: 20px !important;
    text-wrap: balance !important;
    padding: 0px 20px;  
  }
  .modal-content{
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 0px !important;
    padding: 0px !important;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  }
  .header_section{
    width: 101% !important ;
    height: 101vh !important;
  }
  
  .header_under_title{
    font-size: 17px !important;
    text-wrap: balance !important;
    padding: 0px 20px;
  }
  .mobile_nav{
    display: block !important;
    margin-right: 20px
  }
  .info{
    display: none ;
  }
  .connect_with_me{
    width: 90% !important;
  }
  .profile-card{
    margin-left: 10px !important;
  }
  .row_container{
    flex-direction: column !important;
    
  }
  .container_col{
    width: 100% !important;
  }
  .profile-card{
    flex-direction: column !important;
  }
  .profile-photo{
    width: 90% !important;
  }
  .profile-info{
    width: 90% !important;
    padding: 0px !important;
  }
  .button_learn{
    width: 90% !important;
  }
  .nav_bar{
    width: 100% !important;
    position: fixed !important;
  }
  .container_col h4{
    font-size: 16.7px;
  }
  .have_a_question p{
    font-size: 15.4px !important;

  }
  .have_a_question .connect_button{
    font-size: 15.4px !important;
    padding: 0px !important;
   text-align: end;
   width: 50%;
   text-wrap: wrap;
  }
  .text_left_block{
    margin: 0px !important;
  }
  .footer_container{
    width: 100% !important;
    overflow: hidden;
  }
  .img_blocks{
    width: 140px !important;
  }
  .img_progs{
    width: 90px;
  }
 .main_section{
  padding-top: 92px !important;
 }
  .testr{
    margin-top: 0rem !important;
 
  }
  .section_study h3{
    padding-left: 15px;
    padding-right: 15px;
  }
  .sectionSecond h3,h1{
    padding-left: 15px;
    padding-right: 15px;
  }
  .mobile-info{
    display: flex;
    flex-direction: column-reverse !important;
  }
  .card{
    margin: 20px 0px !important;
    width: 320px !important;
    margin-left:0px !important;
  }
 .title_study_example{
  padding: 0px 20px;
 }
 .input_two_row{
  width: 88% !important;
}
.for_mobile_connect{
  flex-direction: column;
  width: 100% !important;
 
}
.ustal_nazv{
  margin: 0px !important;
  margin-bottom: 10px !important;
}
.bottom_part_connect{
  width: 97%;
  align-items: center !important;
}
.for_mobile_connect_third{
  margin-left: 0px !important;
}
.input_one_row{
  width: 86% !important;
}
.footer_modal{
  width: 90% !important;
  margin-left: -18px;
  margin-top: 5px !important;
}
.central_continer p{
  margin-right: -10px;
  text-align: center;
}
.central_continer {
  display: flex;
  flex-direction: column;
 align-items: center !important;
}
.mobile_progs{
  height: 600px !important;
  width: fit-content !important;
}
.for_cont_progs{
  flex-direction: column !important;
  justify-content: space-evenly !important;
}
.controll_button{
  width: 60px !important;
}
.title_tres{
  padding: 20px;
}
.calc_mobile{
  flex-direction: column;
}
.buttons_calc_mobile{
  margin-top: 15px;
  margin-bottom: 15px;
}
.ham_img_mobile{
  width: 90%;
}
.row_ham{
  justify-content: space-between !important;

}
.row_ham h3{ 
  margin-left: 15px;
  margin-right: 15px;
}
.row_ham p{ 
  margin-left: 15px;

}
}

</style>