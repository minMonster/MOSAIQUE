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
  },
  mounted() {
    this.$store.dispatch('app/checkMobile')
    window.addEventListener('resize', () => {
      this.$store.dispatch('app/checkMobile')
    })
  }
}
</script>
<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
}

.f-base {
  width: 100vw;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
p {
   margin: 0;
}
</style>
