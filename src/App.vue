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
  background-color: rgb(57, 55, 55);
}

</style>