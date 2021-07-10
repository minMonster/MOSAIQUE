<template>
  <div class="app-wrapper">
    <!-- :style="{zoom: zoomApp}" -->
    <div class="main-container">
      <div>
        <!-- <m-navbar v-if="isMobile" /> -->
        <navbar />
      </div>
      <app-main />
      <div>
        <!-- <MFooter v-if="isMobile" /> -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, Footer, MFooter, MNavbar } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Footer,
    MFooter, MNavbar
  },
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters(['isMobile', 'domWidth', 'zoomApp'])
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
}
</style>
