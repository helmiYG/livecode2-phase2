<template>
    <div>
        <div class="container">
        <div class="row" v-for="(post, index) in posts" :key="index">
            <div class="col-lg-12 col-md-12 timeline-wrapper">
                <div class="media ">
                <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                <span class="media-body twit-status">
                    <h5 class="mt-0"> {{post.userId.name}} </h5>
                    <p>{{post.userId.email}}</p>
                    {{post.status}}
                </span>
                <button v-if="String(userLogin) == String(post.userId._id) && token" @click="remove(post._id)"> delete</button>
                </div>
            </div>
            </div>
        </div>
</div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            posts : [],
            token: false,
            userLogin: ''
        }
    },
    computed: {
        ...mapState([
            'isLogout'
        ])
    },
    methods: {
        getUserpost () {
            axios({
                method: 'GET',
                url:'http://localhost:3000/posts/users',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((result) => {
                this.posts = result.data.result
            }).catch((err) => {
                console.log(err);
                
            });
        },

         remove (id) {
             console.log(id);
             
             axios({
                 method: 'DELETE',
                 url: 'http://localhost:3000/posts/'+id,
                 headers: {
                     token: localStorage.getItem('token')
                 }
             })
             .then((result) => {
                this.getUserpost()
             })
             .catch((err) => {
                console.log(err.response);
             });
         }
    },

    mounted() {
        this.getUserpost()
        let isToken = localStorage.getItem('token')
        if (isToken) {
            this.token = true
            this.userLogin = localStorage.getItem('idLogin')
        } else {
            this.$router.push('/')
        }
    },

    watch: {
        isLogout () {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
