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
  async mounted() {
    const that = this
    window.ethereum.on('accountsChanged', async function(accounts) {
      console.log('accounts changed', accounts)
      if (accounts && accounts.length) {
        that.$store.commit('walletAccount/set_user_address', accounts[0])
        if (accounts[0]) {
          await that.$store.dispatch('walletAccount/getEth')
          await that.$store.dispatch('nft/getERC721Balance')
        }
      } else {
        that.$store.commit('walletAccount/remove_user_address')
      }
    })
    this.$store.dispatch('app/checkMobile')
    window.addEventListener('resize', () => {
      this.$store.dispatch('app/checkMobile')
    })
  }
}
</script>
<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
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
.edition-center {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
</style>
