<template>
  <div class="testing-wallet">
    <div class="edition-center">
      <div class="marking" @click="close" />
      <div class="content">
        <p class="title">Connect your wallet</p>
        <p class="tips">
          <span>By connecting your wallet</span>
          <span>you agree to our terms of Service</span>
          <span>and our Privacy Policy.</span>
        </p>
        <div class="MateMask-box same-sty">MetaMask</div>
        <div class="WalletCon-box same-sty">WalletConnect</div>
        <p style="text-decoration: underline;">New to Ethereum?</p>
        <p style="text-decoration: underline;">Learn more about wallets</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestingWallet',
  data: function() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>

.testing-wallet {
  z-index: 9999;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .edition-center {
    position: relative;
    width: 1200px;

    justify-content: flex-end;
    .marking {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background:rgba(0, 0, 0, 0.4);
    top: 0;
    z-index: 100;
    bottom: 0;
    left: 0;
  }
    .content {
      text-align: center;
      position: relative;
      z-index: 101;
      margin-top: 86px;
      float: right;
      padding: 108px 50px 112px;
      width: 401px;
      //   height: 600px;
      background: #ffffff;
      border-radius: 10px;
      z-index: 9999;
      .title {
        font-size: 20px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 23px;
      }
      .tips {
        text-align: center;
        margin-bottom: 40px;
        span {
          display: block;
          font-size: 14px;
          font-family: Verdana;
          color: #454953;
          margin-bottom: 6px;
        }
      }
      .same-sty {
        width: 300px;
        height: 60px;
        line-height: 60px;
        border-radius: 10px;
        color: #fff;
        margin-bottom: 23px;
      }
      .MateMask-box {
        background-color: #454953;

      }
      .WalletCon-box {
        background-color: #da6464;
      }
    }
  }
}
</style>
