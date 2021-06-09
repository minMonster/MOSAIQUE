<template>
  <div class="app-wrapper" :style="{zoom: zoomApp}">
    <div class="main-container">
      <div>
        <m-navbar v-if="isMobile" />
        <navbar v-else />
      </div>
      <app-main />
      <div>
        <MFooter v-if="isMobile" />
        <Footer v-else />
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
  computed: {
    ...mapGetters(['isMobile', 'domWidth']),
    zoomApp() {
      if (this.domWidth > 2000) {
        return 1.8
      }
      if (this.domWidth > 1600) {
        return 1.4
      }
      if (this.domWidth > 1400) {
        return 1.2
      }
      return 1
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
}
</style>
