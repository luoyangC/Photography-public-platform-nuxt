<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <div class="activity-item" v-for="item in activityList" :key="item.id">
          <activity-card :item="item"></activity-card>
        </div>
      </v-flex>
      <v-flex class="hidden-md-and-down" md4 lg3 xl2 align-self-start ref="monthPie">
        <div class="operation">
          <operation-card></operation-card>
        </div>  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ActivityCard from '../components/common/activity-card'
import OperationCard from '../components/inspire/operation-card'
import { getActivity } from "../api"

export default {
  components: {
    ActivityCard,
    OperationCard,
  },
  data() {
    return {
      activityList: [],
      operationWidth: 0,
    };
  },
  methods: {
    delUser(index) {
      getActivity()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  async asyncData() {
    let { data } = await getActivity();
    return { activityList: data };
  }
};
</script>

<style lang="stylus" scoped>
  .activity-item
    margin-bottom 20px
  .operation
    position fixed
    margin-left 20px
    width 300px
</style>
