<template>
  <v-app>
    <v-toolbar fixed>
      <v-toolbar-title><nuxt-link to="/"> Amor </nuxt-link></v-toolbar-title>
      <v-btn flat small nuxt to="/inspire">首页</v-btn>
      <v-btn flat small nuxt to="/follow">关注</v-btn>
      <v-btn flat small nuxt to="/explore">发现</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn round small color="light-blue" dark nuxt to="/signup">登录</v-btn>
    </v-toolbar>
    <v-content style="margin-top:64px">
      <nuxt/>
      <v-btn fab bottom right color="light-blue" dark fixed>
        <v-icon>vertical_align_top</v-icon>
      </v-btn>
      <v-footer height="auto">
        <v-card class="flex" flat tile>
          <v-card-actions class="justify-center">
            &copy;2018 — <strong>luoyangc</strong>
          </v-card-actions>
        </v-card>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>
