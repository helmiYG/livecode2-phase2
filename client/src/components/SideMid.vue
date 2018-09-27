<template>
     <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <input type="text" placeholder="Search..." v-model="toSearch">
              <button class="btn-info" @click="getAll">Search</button>
            </div>
          </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
    data () {
        return {
            toSearch: '',
            show: []
        }
    },
    methods: {
        ...mapActions([
            'getShow'
        ]),
        getAll () {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/posts',
            })
            .then((result) => {
                this.show = []
                result.data.result.forEach(element => {
                    if (element.status.toLowerCase().indexOf(this.toSearch.toLowerCase()) > -1) {
                        this.show.push(element)
                    }
                });
                this.getShow(this.show)
            })
            .catch((err) => {
                
            });
        }
    }
}
</script>

<style>

</style>
