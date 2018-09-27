<template>
<div>
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
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
    props: ['gettoken'],
    data() {
        return {
            posts: [],
            userLogin: '',
            token: false
        }
    },
    computed: {
        ...mapState([
            'base_url',
            'show',
            'readPosts',
            'readAgain',
            'isLogout',
            'islogin',
        ])
    },
    methods: {
        ...mapActions ([
            'countPosts'
        ]),
        getPosts () {
            axios({
                method: 'GET',
                url:'http://localhost:3000/posts'
            })
            .then((result) => {
                this.posts = result.data.result
                let adaToken = localStorage.getItem('token')
                if (adaToken) {
                    axios({
                        method: 'GET',
                        url:'http://localhost:3000/posts/users',
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then((result) => {
                        this.countPosts(result.data.result.length)
                    }).catch((err) => {
                        console.log(err);
                        
                    });
                }
                // this.countPosts(this.posts.length)
            })
            .catch((err) => {
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
                this.getPosts()
             })
             .catch((err) => {
                console.log(err.response);
             });
         }
    },
    created() {
        this.getPosts()
        this.userLogin = localStorage.getItem('idLogin')
        let isToken = localStorage.getItem('token')
        if (isToken) {
            this.token = true
        } else {
            this.token = false
        }
    },
    watch: {
        show () {
            this.posts = this.show
        },

        readAgain () {
            this.getPosts()
        },

        gettoken () {
            let isToken = localStorage.getItem('token')
            if (isToken) {
                 this.token = true
            } else {
                this.token = false
            }
        },

        islogin () {
        let isToken = localStorage.getItem('token')
            if (isToken) {
                 this.token = true
            } else {
                this.token = false
            }
        },

        isLogout () {
             let isToken = localStorage.getItem('token')
            if (isToken) {
                 this.token = true
            } else {
                this.token = false
            }
        }
    }
}
</script>

<style>

</style>
