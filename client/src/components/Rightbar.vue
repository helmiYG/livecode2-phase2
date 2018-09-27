<template>
    <div class="col-lg-3">
          <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body who-to-follow">
              <h5 class="card-title">Who to Follow <small><a href="#">Refresh</a></small></h5>
              <ul id="recently-followed">
                <li>
                  <div class="media ">
                    <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    <span class="media-body twit-status">
                      <h6 class="mt-0">Johny Walker <small>@johnywalker</small></h6>

                      <button class="btn btn-outline-info">Follow</button>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="media ">
                    <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    <span class="media-body twit-status">
                      <h6 class="mt-0">Johny Walker <small>@johnywalker</small></h6>

                      <button class="btn btn-outline-info">Follow</button>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="media ">
                    <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    <span class="media-body twit-status">
                      <h6 class="mt-0">Johny Walker <small>@johnywalker</small></h6>

                      <button class="btn btn-danger">Unfollow</button>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="media ">
                    <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    <span class="media-body twit-status">
                      <h6 class="mt-0">Johny Walker <small>@johnywalker</small></h6>

                      <button class="btn btn-outline-info">Follow</button>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="media ">
                    <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    <span class="media-body twit-status">
                      <h6 class="mt-0">Johny Walker <small>@johnywalker</small></h6>

                      <button class="btn btn-outline-info">Follow</button>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: []
    }
  },
  // methods: {
  //   getRandom () {
  //     axios ({
  //       method: 'GET',
  //       url: 'http://localhost:3000/users'
  //     })
  //     .then((result) => {
  //       this.users = result.data,result
  //     })
  //     .catch((err) => {
  //       console.log(err);
        
  //     });
  //   }
  // },
  // created() {
  //   this.getRandom()
  // },
}
</script>

<style>

</style>
