const user = {
  state: () => {
    return { 
      name: "",
      avatar: "",
    }
  },

  mutations: {
    SET_USER_NAME: (state, name) => {
      state.name = name
    },
    SET_USER_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    async setUserInfo(context) {
      let {data} = await this.$axios.get('/user/', {params: {self: 2}})
      if (data.results[0]) {
        context.commit('SET_USER_NAME', data.results[0].nick_name)
        context.commit('SET_USER_AVATAR', data.results[0].image)
      } else {
        context.commit('SET_USER_NAME', "")
        context.commit('SET_USER_AVATAR', "")
      }
      console.log("set user info")
    }
  }
}

export default user
