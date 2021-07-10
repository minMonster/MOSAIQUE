<template>
  <div class="home">
    <div class="edition-center">
      <div class="Blazon same" @click="goRouter('select-blazon')">
        <p class="title">Blazon</p>
        <p>Suggest to add text description</p>
      </div>
      <div class="Inscription same" @click="goRouter('Inscription')">
        <p class="title">Inscription</p>
        <p>Suggest to add text description</p>
      </div>
      <div v-if="isNotWallets">
        <testing-wallet />
        <div class="marking" />
      </div>
    </div>
  </div>
</template>
<script>
import TestingWallet from '@/components/testing-wallet.vue'
export default {
  name: 'Home',
  components: {
    TestingWallet
  },
  data: function() {
    return {
      isNotWallets: false
    }
  },

  created() { },

  mounted() {
  },

  methods: {
    goRouter(route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="scss">
.home {
  .edition-center {
    width: 1200px;
    padding: 0 90px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    display: flex;
  }
  display: flex;
  .same {
    width: 591px;
    height: 324px;
    margin: 395px 0 410px;
    font-size: 14px;
    font-family: Verdana;
    color: #fefeff;
    padding: 60px 60px;
    .title {
      margin-bottom: 20px;
      font-size: 48px;
      font-weight: 400;
      color: #fefeff;
      font-family: Arial Black;
    }
  }
  .Blazon {
    border-radius: 0 0 100% 0;
    background-color: #da6464;

  }
  .Inscription {
    border-radius: 100% 0 0 0;
    background-color: #454953;
    text-align: right;
    .title {
      margin-top: 134px;
    }
  }
}
</style>
