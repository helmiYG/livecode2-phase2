import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url: 'http://localhost:3000',
    islogin: '',
    isLogout: false,
    show: [],
    readPosts: [],
    readAgain: '',
    count: 0
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.islogin = payload
    },

    SET_ISLOGOUT (state, payload) {
      state.isLogout = payload
    },

    SET_SHOW (state, payload) {
      state.show = payload
    },

    SET_READP (state, payload) {
      state.readPosts = payload
    },

    READ_AGAIN (state, payload) {
      state.readAgain = payload
    },

    SET_COUNT (state, payload) {
      state.count = payload
    }
  },
  actions: {
    login(context, data){
      axios({
        method: 'POST',
        url: this.state.base_url+'/users/login',
        data: {
          user: data.user,
          password: data.password
        }
      })
      .then((result) => {
        context.commit('SET_ISLOGIN', result)
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('idLogin', result.data.id)
      })
      .catch((err) => {
        console.log(err);
      });
    },

    logout (context) {
      if (this.state.isLogout) {
        context.commit('SET_ISLOGOUT', false)
      } else {
        context.commit('SET_ISLOGOUT', true)
      }
      localStorage.clear()
    },

    getShow (context, data) {
      context.commit('SET_SHOW', data)
    },

    getAfterAdd (context, data) {
      context.commit('READ_AGAIN', data)
    },

    countPosts (context, data) {
      context.commit('SET_COUNT', data)
    }
  }
})
