<template>
      <div class="twPc-div">
            <a class="twPc-bg twPc-block bg-info"></a>
          	<div>
          		<a title="Mert S. Kaplan" href="https://twitter.com/mertskaplan" class="twPc-avatarLink">
          			<img alt="Mert S. Kaplan" src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg" class="twPc-avatarImg">
          		</a>

          		<div class="twPc-divUser">
          			<div class="twPc-divName">
          				<a href="https://twitter.com/mertskaplan">Mert S. Kaplan</a>
          			</div>
          			<span>
          				<a href="https://twitter.com/mertskaplan">@<span>mertskaplan</span></a>
          			</span>
          		</div>

          		<div class="twPc-divStats">
          			<ul class="twPc-Arrange">
          				<li class="twPc-ArrangeSizeFit">
          					<a href="https://twitter.com/mertskaplan" title="9.840 Tweet">
          						<span class="twPc-StatLabel twPc-block">Tweets</span>
          						<span class="twPc-StatValue"> {{countCp}} </span>
          					</a>
          				</li>
          				<li class="twPc-ArrangeSizeFit">
          					<a href="https://twitter.com/mertskaplan/following" title="885 Following">
          						<span class="twPc-StatLabel twPc-block">Following</span>
          						<span class="twPc-StatValue">885</span>
          					</a>
          				</li>
          				<li class="twPc-ArrangeSizeFit">
          					<a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
          						<span class="twPc-StatLabel twPc-block">Followers</span>
          						<span class="twPc-StatValue">1.810</span>
          					</a>
          				</li>
          			</ul>
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
            countCp: 0
        }
    },
    computed: {
        ...mapState([
            'count'
        ])
	},
	
	methods: {
		getUserPost () {
			 axios({
                        method: 'GET',
                        url:'http://localhost:3000/posts/users',
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then((result) => {
                        this.countCp = result.data.result.length
                    }).catch((err) => {
                        console.log(err);
                        
                    });
		}
	},

	created() {
		this.getUserPost()
	},

    watch: {
        count () {
            this.countCp = this.count
        }
    }
}
</script>

<style>

</style>
