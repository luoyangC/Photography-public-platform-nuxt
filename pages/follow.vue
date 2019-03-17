<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-layout class="follow-tabs">
          <div class="tabs-item">
            <a :class="{'is-active': followType=='topic'}" @click="changeTab('topic')">关注主题</a>
          </div>
          <div class="tabs-item">
            <a :class="{'is-active': followType=='user'}" @click="changeTab('user')">关注用户</a>
          </div>
        </v-layout>
        <div class="follow-list">
          <div class="follow-item" v-for="item in followList" :key="item.id">
            <activity-card :item="item"></activity-card>
          </div>
        </div>
      </v-flex>
      <v-flex class="hidden-md-and-down" md4 lg3 xl2 align-self-start>
        <div class="operation">
          <operation-card></operation-card>
        </div>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
import ActivityCard from '@/components/common/ActivityCard'
import OperationCard from '@/components/follow/OperationCard'

export default {
  components: {
    ActivityCard,
    OperationCard,
  },
  async asyncData({$axios}) {
    let { data } = await $axios.get('/activity', {follow:'topic'})
    return {
      followType: 'topic',
      followList: data.results,
    }
  },
  methods: {
    changeTab(followType) {
      this.followType = followType
      this.getFollowActivity(followType)
    },
    async getFollowActivity(followType) {
      let { data } = await this.$axios.get('/activity/', {follow: followType})
      this.followList = data.results
    }
  },
}
</script>

<style lang="stylus" scoped>
  .follow-tabs
    display block
    background-color #fff
    margin-bottom 1px
    border-color #fff
    border-radius 2px
    box-shadow 0px 1px 3px 0px rgba(0,0,0,0.12)
    .tabs-item
      position relative
      display inline-block
      padding 18px 14px
      font-size 16px
      line-height 32px
      color #1a1a1a
      text-align center
      .is-active
        color #000
      .is-active:after
        position absolute
        right 14px
        bottom -1px
        left 14px
        height 3px
        background #0084ff
        content ""

  .follow-item
    margin-bottom 20px

  .operation
    position fixed
    margin-left 20px
    width 300px
</style>
