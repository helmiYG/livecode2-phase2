<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Sidebar v-if="token"/>
        <Main :cektoken="token"/>
        <Right v-if="token"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Sidebar.vue'
import Main from '@/components/Main.vue'
import Right from '@/components/Rightbar.vue'
export default {
  name: 'home',
  data () {
    return {
      token: false
    }
  },
  components: {
    HelloWorld,
    Sidebar,
    Main,
    Right
  },
  computed: {
    ...mapState([
      'islogin',
      'isLogout'
    ])
  },
  created() {
    let isToken = localStorage.getItem('token')
    if (isToken) {
      this.token  = true
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
