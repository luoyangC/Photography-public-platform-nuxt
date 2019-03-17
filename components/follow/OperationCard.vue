<template>
  <div>
    <v-card height="250">
      <v-img class="white--text" height="250" style="filter: blur(15px)" :src="$store.getters.user.avatar"/>
      <div class="image-before"></div>
      <v-layout class="user-detail" column justify-center align-content-center align-center>
        <v-avatar size="80" color="grey lighten-4">
          <img :src="$store.getters.user.avatar" alt="avatar">
        </v-avatar>
        <div class="user-nick-name" v-text="$store.getters.user.name"></div>
      </v-layout>
    </v-card>
    <v-card style="margin-top:20px">
      <v-layout row justify-space-around align-center>
        <v-flex>
          <div class="operation-card-item">
            <v-icon>assignment</v-icon>
            <v-btn flat small>我的动态</v-btn>
          </div>
        </v-flex>
        <v-flex>
          <div class="operation-card-item">
            <v-icon>camera_enhance</v-icon>
            <v-btn flat small color="primary">我的约拍</v-btn>
          </div>
        </v-flex>
        <v-flex>
          <div class="operation-card-item">
            <v-icon>grade</v-icon>
            <v-btn flat small color="primary">我的收藏</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card style="margin-top:20px">
      <v-list>
        <v-list-tile nuxt to="/topic">创建的主题</v-list-tile>
        <v-list-tile nuxt to="/topic">关注的主题</v-list-tile>
        <v-list-tile nuxt to="/topic">我关注的人</v-list-tile>
        <v-list-tile nuxt to="/topic">关注我的人</v-list-tile>
      </v-list>
    </v-card>
    <v-card style="margin-top:20px">
      <v-list>
        <v-list-tile nuxt to="/topic">发布新动态</v-list-tile>
        <v-list-tile nuxt to="/topic">发布新约拍</v-list-tile>
        <v-list-tile nuxt to="/topic">帮助与反馈</v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.operation-card-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.image-before
  position: absolute;
  width:100%;
  height:250px;
  left:0;
  top:0;
  background-color: rgba(#000, 0.2)
.user-detail
  position absolute
  left 0
  top 100px
  width 100%
  color #fff
  .user-nick-name
    font-size 20px
    margin-top 10px
</style>

