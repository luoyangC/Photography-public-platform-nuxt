<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-layout column class="activity-list">
          <v-layout column v-for="item in activityList" :key="item.id" mb-3>
            <activity-card :item="item"></activity-card>
          </v-layout>
        </v-layout>
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
import OperationCard from '@/components/inspire/OperationCard'

export default {
  components: {
    ActivityCard,
    OperationCard,
  },
  async asyncData({ params, $axios }) {
    let { data } = await $axios.get('/activity/')
    return {
      activityList: data.results
    }
  },
  data() {
    return {
      activityList: [],
      operationWidth: 0,
    }
  },
};
</script>

<style lang="stylus" scoped>
  .operation
    position fixed
    margin-left 20px
    width 300px
</style>
