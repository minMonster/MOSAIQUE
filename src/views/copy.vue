<template>
  <div class="make-program">
    <div class="edition-center">
      <div class="left">
        <el-image class="minted-image" :src="image" />
      </div>
      <div class="right">
        <section class="edit">
          <h2 class="nft-name">
            Make Programmable
            <svg-icon style="width: 27px;height: 27px" icon-class="question" />
          </h2>
          <p class="dec">
            The NFT Song
          </p>
          <div class="item">
            <label>Owner</label>
            <span class="red">myName</span>
          </div>
          <div class="item">
            <label>Token ID</label>
            <span>34567</span>
          </div>
          <div class="item">
            <label>Price</label>
            <span>21 ETH</span>
          </div>
          <div class="item">
            <label># of Imprints</label>
            <el-input-number
              v-model="ofImprints"
              class="jibuqi"
              size="small"
              controls-position="right"
              :min="1"
              :max="10"
              @change="handleChange"
            />
            <span class="max red">(MAX 3)</span>
          </div>
          <div class="buttons">
            <p class="btn" @click="copy">Make Programmable</p>
            <p class="btn cancel">cancel</p>
          </div>
        </section>
        <section class="loading" />
        <section class="finished" />
      </div>
    </div>
  </div>
</template>
<script>
import * as contract from '@/contract'
import * as connector from '@/connector'
export default {
  data: function() {
    return {
      contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
      image:
        'https://ipfs.io/ipfs/Qme46XFBDEEv5F8uhxB1eQdTQR37vRmCCUo21nxGnyqsL2',
      tokenOfOwnerByIndex: '6',
      tx: null,
      ofImprints: 0
    }
  },
  methods: {
    async copy() {
      // contract.sign()
      // connector.eth.sign('0x8A3c226f02a692894643d070214B9495F8b40D58', '0x8A3c226f02a692894643d070214B9495F8b40D58').then(function(ee) {
      // console.log(ee)
      // })
      // console.log(connector.web3.utils.utf8ToHex('0x37bd087c6c5c1d7af667c81146ce0d70d78c826ad421ef5a4f0ca233deb0ca23'))
      // console.log(connector.eth.accounts.hashMessage('0xe5f897cd55b1481f0e3e18b76d6d83ea8109949c2fc63a46f30366b9130fcec0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000033030300000000000000000000000000000000000000000000000000000000000'))
      this.tx = await contract.makeProgrammable(
        this.contractAddress,
        this.tokenOfOwnerByIndex
      )
    }
  }
}
</script>
<style lang="scss">
.make-program {
  height: 100vh;
  .edition-center {
    display: flex;
    padding-top: 152px;
    .buttons {
      display: flex;
      margin-top: 70px;
    }
    .red {
      color: #DA6464;
    }
    .btn {
      cursor: pointer;
      height: 43px;
      padding: 0 20px;
      background: #da6464;
      border-radius: 22px;
      font-size: 20px;
      color: #ffffff;
      line-height: 43px;
      text-align: center;
      margin-top: 41px;
      &.cancel {
        border: 2px solid #da6464;
        background: #ffffff;
        color: #da6464;
        line-height: 35px;
        margin-left: 31px;
        padding: 0 47px;
      }
    }

    .left {
      flex: 1;
      .minted-image {
        width: 480px;
        padding-left: 50px;
      }
    }
    .right {
      flex: 1;
      h2.nft-name {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        line-height: 21px;
      }
      p.dec {
        font-size: 24px;
        font-family: Verdana;
        color: #454953;
        line-height: 21px;
        margin-bottom: 38px;
        margin-top: 27px;
      }
      .item {
        font-size: 14px;
        font-family: Verdana;
        color: #454953;
        line-height: 21px;
        margin-bottom: 20px;
        label {
          display: inline-block;
          width: 120px;
          font-weight: bold;
        }
      }
      .el-input {
        .el-input__inner {
          background-color: #ebebeb;
          border: none;
        }
      }
    }
  }
}
</style>
