<template>
  <m-team v-if="isMobile" />
  <team v-else />
</template>

<script>
import Team from './team'
import MTeam from './m-team'
import { mapGetters } from 'vuex'
export default {
  components: {
    Team,
    MTeam
  },
  computed: {
    ...mapGetters(['isMobile'])
  }
}
</script>

<style scoped>

</style>
