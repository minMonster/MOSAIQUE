<template>
  <m-home v-if="isMobile" />
  <home v-else />
</template>

<script>
import Home from './home'
import MHome from './m-home'
import { mapGetters } from 'vuex'
export default {
  components: {
    Home,
    MHome
  },
  computed: {
    ...mapGetters(['isMobile'])
  }
}
</script>

<style scoped>

</style>
