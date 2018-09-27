<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Victwitter</a>
        <router-link to="/myarticle" v-if="token">My Article</router-link>
        <div class="header-right" v-if="!token">
          <input type="text" placeholder="username / email" v-model="user">
          <input type="password" placeholder="password" v-model="password">
          <button class="btn-info" @click="signin">Login</button>
        </div>
        <div class="header-right" v-if="token">
          <button class="btn-info" @click="signout">Logout</button>
        </div>
      </div>
    </nav>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data () {
        return {
            user: '',
            password: '',
            token : false
        }
    },

    computed: {
        ...mapState([
            'islogin',
            'isLogout'
        ]),
    },

    methods: {
        ...mapActions ([
            'login',
            'logout'
        ]),

        signin () {
            let obj = {
                user: this.user,
                password: this.password
            }
            this.login(obj)
        },

        signout () {
            this.logout()
        }
    },
    created() {
        let isToken = localStorage.getItem('token')
        if(isToken) {
            this.token = true
        }
    },
    watch: {
        islogin () {
            this.token = true
        },
        isLogout () {
            this.token = false
        }
    }
}
</script>

<style>

</style>
