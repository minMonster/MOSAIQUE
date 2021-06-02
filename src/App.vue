<template>
  <div id="app" class="f-base">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$store.getters.token': {
      immediate: true,
      handler(token) {
        token && this.$store.dispatch('currency/init')
      }
    }
  }
}
</script>
<style lang="scss">
.f-base {
  width: 100vw;
  overflow: hidden;
}
.edition-center {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
* {
  box-sizing: border-box;
}
p {
   margin: 0;
}
</style>
