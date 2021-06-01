<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
