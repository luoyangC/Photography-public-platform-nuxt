<template>
  <div>
    <v-layout column justify-center align-center>
      <v-parallax height="600" style="width:100%" dark src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg">
        <v-layout align-center column justify-end>
          <h1 class="display-2 font-weight-thin mb-3">国内最大摄影公共平台</h1>
          <h4 class="subheading">Luo Yang's graduation design</h4>
        </v-layout>
        <v-layout align-center column justify-center>
          <v-btn nuxt large round color="light-blue" to="/inspire" dark>Get Started</v-btn>
        </v-layout>
      </v-parallax>
  </v-layout>
  <v-layout style="height:500px"></v-layout>
  <v-layout>
    <v-parallax height="600" style="width:100%" src="https://vuetifyjs.com/themes/parallax-starter/assets/section.jpeg"></v-parallax>
  </v-layout>
  <v-layout style="height:500px"></v-layout>
  </div>
</template>

<script>
export default {
}
</script>
