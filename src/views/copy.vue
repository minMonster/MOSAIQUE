<template>
  <div class="make-program">
    <div v-if="imageItem" class="edition-center">
      <div class="left">
        <el-image class="minted-image" :src="imageItem.image" />
      </div>
      <div class="right">
        <section v-if="status== 0" class="edit">
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
        <section v-if="status== -1" class="loading">
          <el-image
            :src="require('../access/Loading_20210708.gif')"
          />
        </section>
        <section v-if="status== 1" class="finished">
          <p class="title-tip">Finished!</p>
          <p class="title-tip black">The NFT Song</p>
          <p class="item-info"><label>Owner</label>zhangsan</p>
          <p class="item-info"><label>Time</label>2021.04.19,08:15pm EST</p>
          <p class="item-info">
            <label>Collection</label>Imprint Rarible<span>( {{ tx.blockHash.substring(0, 19) }}...{{
              tx.blockHash.substring(tx.blockHash.length - 4, tx.blockHash.length)
            }})</span>
          </p>
          <p class="item-info"><label>Token ID</label>23456</p>
          <p class="item-info"><label># of Imprints</label>1</p>
          <div class="minted-btn" @click="$router.push('home')">
            go to Imprint
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import * as contract from '@/contract'
// import * as connector from '@/connector'
import { mapState } from 'vuex'
import { eth } from '@/connector'

export default {
  data: function() {
    return {
      tx: null,
      status: 0,
      ofImprints: 0,
      imageItem: null
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress'],
      formatEth: state => state.walletAccount.formatEth,
      userNfts: state => state.nft.userNfts,
      mosaique: state => state.contract['CollectionContract'].mosaique,
      contractAddress: state => state.contract['contractAddress']
    })
  },
  created() {
    this.imageItem = this.$route.query
    this.imageItem.token_id = Number(this.imageItem.token_id)
  },
  methods: {
    handleChange(e) {
      console.log(e)
    },
    loadingTransferHash(transferHash) {
      console.log('loadingTransferHash')
      return eth.getTransactionReceipt(transferHash).then(res => {
        console.log(res, 'res')
        if (res === null || res === 0) {
          setTimeout(() => {
            return this.loadingTransferHash(transferHash, status)
          }, 1000)
        } else {
          this.status = 1
          this.tx = res
          return true
        }
      }).catch(err => {
        console.log(err)
        return false
      })
    },
    async copy() {
      this.status = -1
      contract.makeProgrammable(
        this.contractAddress,
        this.imageItem.token_id
      ).on('transactionHash', (reject) => {
        this.loadingTransferHash(reject)
      })
      console.log(this.tx)
    }
  }
}
</script>
<style lang="scss">
.make-program {
  min-height: 100vh;
    padding-bottom: 200px;
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
    .finished {
        p {
          display: block;
          font-size: 14px;
          font-family: Verdana;
          font-weight: Regular;
          color: #454953;
          margin-bottom: 12px;
          span {
            color: #da6464;
          }
          label {
            width: 130px;
            color: #454953;
            font-weight: bold;

            display: inline-block;
          }
        }
        .title-tip {
          margin-top: 35px;
          margin-bottom: 52px;
          font-size: 24px;
          font-family: Verdana;
          font-weight: bold;
          color: #da6464;
        }
        .black {
          color: #454953;
        }
      }
      .minted-btn {
    width: 309px;
    height: 43px;
    background: #da6464;
    border-radius: 22px;
    text-align: center;
    line-height: 43px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 100px;
  }
}
</style>
