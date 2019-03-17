<template>
  <v-card>
    <v-card-title>
      <v-layout align-center>
        <v-flex lg1>
          <v-avatar size="42" color="grey lighten-4">
            <img :src="item.user.image" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <span style="display:block">{{item.user.nick_name}}</span>
          <span style="display:block">{{item.create_time}}</span>
        </v-flex>
        <v-flex d-flex lg1>
          <v-icon>keyboard_arrow_down</v-icon>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <p>{{item.content}}</p>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex v-for="(image, index) in item.images" :key="index" xs4 d-flex>
            <v-card flat tile class="d-flex">
              <v-img aspect-ratio="1" class="grey lighten-2" :src="image.image">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-flex align-self-center xs12 sm3 style="text-align:center">
        <v-btn flat icon color="pink">
          <v-icon>thumb_up</v-icon>
        </v-btn>
      </v-flex>
      <v-flex align-self-center xs12 sm3 style="text-align:center">
        <v-btn flat icon color="indigo">
          <v-icon>textsms</v-icon>
        </v-btn>
      </v-flex>
      <v-flex align-self-center xs12 sm3 style="text-align:center">
        <v-btn flat icon color="green">
          <v-icon>cached</v-icon>
        </v-btn>
      </v-flex>
      <v-flex align-self-center xs12 sm3 style="text-align:center">
        <v-btn flat icon color="deep-orange">
          <v-icon>more_horiz</v-icon>
        </v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>
