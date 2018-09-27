<template>
  <div class="col-lg-3">
		<Above/>
		<Middle/>
		<Bellow/>
  </div>
</template>

<script>
import Above from '@/components/SideAbove'
import Middle from '@/components/SideMid'
import Bellow from '@/components/SideBellow'
export default {
	components: {
		Above,
		Middle,
		Bellow
	},
}
</script>

<style>

</style>
