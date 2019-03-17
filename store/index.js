import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export const modules = {
  user,
}

export const getters = {
  user: state => state.user,
}