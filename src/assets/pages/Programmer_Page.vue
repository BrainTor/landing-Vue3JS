<template>
  <Nav_Component place = "code"></Nav_Component>

  <Footer_Component></Footer_Component>
</template>
<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue';

    export default{ 
        name:'Programmer_Page', 
        components:{
            Nav_Component, 
            Footer_Component
        }
    }
</script>