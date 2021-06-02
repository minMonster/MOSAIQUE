<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
.app-main {
  $navbarHeight: 111px;
  $padding: 20px;
  /*50 = navbar  */
  min-height: calc(100vh - #{$navbarHeight});
  width: 100%;
  position: relative;
  overflow: hidden;

  // app-main的唯一子元素至少占满屏幕空间
  &>*:only-child{
    min-height: calc(100vh - #{$navbarHeight};
  }
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">

</style>
