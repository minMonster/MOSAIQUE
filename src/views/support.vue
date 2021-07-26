<template>
  <div class="support">
    <div class="edition-center">
      <div class="left-box">
        <div class="title">Help Center</div>
        <p>How do I create an Mosaique account?</p>
        <p>How do I hide items from my Mosaique profile?</p>
        <p>How do I withdraw funds from Polygon/Matic?</p>
        <p class="no-line">What crypto wallets can I use with Mosaique?</p>
      </div>
      <div class="right-box">
        <div class="title">What crypto wallets can I use with Mosaique?</div>
        <div class="timer tip">10 day ago</div>
        <p class="no-line">
          Just as there are many banks and credit cards, there are many
          different wallet providers to choose from. They all serve the same
          purpose, but each one takes a different approach and makes different
          tradeoffs.
        </p>
        <p class="no-line">
          If you’d like, you can try a few different wallets to determine which
          works best for you, but many users choose MetaMask for desktop use,
          and WalletConnect for mobile use.
        </p>
        <p class="no-line">
          <b>MetaMask</b>– A browser extension with peerless power and
          flexibility. MetaMask is web 3’s most popular wallet and one of the
          oldest players in the industry.
        </p>
        <p>
          <b>WalletConnect</b>- WalletConnect is a protocol supported by many
          different Dapps and wallets. Install any mobile wallets supporting
          WalletConnect protocol.
        </p>
        <div class="tip mt-30">Was this article helpful?</div>
        <div class="btns mt-60">
          <div>Yes</div>
          <div>No</div>
        </div>
        <div class="tip">Have more questions?Submit a request</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.support {
  display: flex;
  padding-bottom: 200px;
  .edition-center {
    width: 1200px;
    padding: 0 90px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    display: flex;
  }
  .left-box {
    min-width: 183px;
    max-width: 183px;
    margin-right: 200px;
  }
  .title {
    font-size: 24px;
    font-family: Verdana;
    font-weight: bold;
    color: #454954;
    margin-top: 200px;
    margin-bottom: 30px;
  }
  .tip {
    font-size: 14px;
    font-family: Verdana;
    font-weight: 400;
    color: #da6464;
  }
  p.no-line {
    &::after {
      display: none;
    }
  }
  p {
    line-height: 28px;
    padding: 30px 0;
    font-size: 18px;
    font-family: Verdana;
    font-weight: 400;
    color: #454954;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      bottom: 0px;
      width: 183px;
      left: 0;
      height: 1px;
      background-color: #dbdbdb;
    }
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-60 {
    margin-top: 60px;
  }
  .btns {
    margin: 20px 0;
    display: flex;
    div {
      margin-right: 17px;
      width: 93px;
      height: 33px;
      border: 1px solid #da6464;
      border-radius: 10px;
      line-height: 33px;
      text-align: center;
      font-size: 14px;
      font-family: Verdana;
      font-weight: 400;
      color: #da6464;
    }
  }
}
</style>
