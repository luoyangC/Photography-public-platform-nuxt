<template>
  <v-app>
    <v-toolbar app fixed>
      <v-toolbar-title> Amor </v-toolbar-title>
      <v-btn flat small nuxt to="/inspire">首页</v-btn>
      <v-btn flat small nuxt to="/follow">关注</v-btn>
      <v-btn flat small nuxt to="/explore">发现</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-menu v-if="$store.getters.user.name" offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar size="40" color="grey lighten-4" v-on="on">
            <img :src="$store.getters.user.avatar" alt="avatar">
          </v-avatar>
        </template>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>主页</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>设置</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="handleLogOut">
            <v-list-tile-title>退出</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn v-else round small color="light-blue" dark nuxt to="/signup">登录</v-btn>

    </v-toolbar>
    <v-content app>
      <nuxt/>
      <v-btn fab bottom right color="light-blue" dark fixed>
        <v-icon>vertical_align_top</v-icon>
      </v-btn>
      <v-footer app height="auto">
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
import cookie from '@/utils/cookie'
export default {
  methods: {
    handleLogOut() {
      cookie.delCookie("token")
      console.log('logout')
      this.$store.dispatch("setUserInfo")
    }
  },
  
  beforeCreate() {
    this.$store.dispatch("setUserInfo")
  }
}
</script>
