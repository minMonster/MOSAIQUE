<template>
  <div class="app-wrapper">
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, Footer } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Footer
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
