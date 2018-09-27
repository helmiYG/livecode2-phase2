<template>
    <div class="col-lg-6">
        <Add v-if="token"/>
        <Card :gettoken="cektoken"/>
    </div>
</template>

<script>

import Add from '@/components/Add'
import Card from '@/components/Card'
export default {
    props: ['cektoken'],
    data () {
        return {
            token : false
        }
    },
    components: {
        Add, 
        Card
    },
    created() {
         let isToken = localStorage.getItem('token')
            if (isToken) {
                 this.token = true
            } else {
                this.token = false
            }
    },
    watch : {
        cektoken () {
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
