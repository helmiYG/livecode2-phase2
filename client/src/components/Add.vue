<template>
     <div class="row">
            <div class="col-lg-12 col-md-12 mb-12 form-horizontal">
              <div class="form-group">
                <textarea class="form-control" placeholder="What's happening?" rows="3" v-model="status"></textarea>
              </div>
              <div class="form-group">
                <button class="btn-info" @click="insert">Post</button>
              </div>
            </div>
          </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      status: ''
    }
  },
  methods: {
    ...mapActions([
      'getAfterAdd',
    ]),
    insert () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/posts',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          status: this.status
        }
      })
      .then((result) => {
        this.getAfterAdd(result)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>

<style>

</style>
