<template>
  <div class="testing-wallet">
    <div class="edition-center">
      <div class="marking" @click="close" />
      <div v-if="!waAddress" class="content">
        <p class="title">Connect your wallet</p>
        <p class="tips">
          <span>By connecting your wallet</span>
          <span>you agree to our terms of Service</span>
          <span>and our Privacy Policy.</span>
        </p>
        <div class="MateMask-box same-sty" @click="init">MetaMask</div>
        <div class="WalletCon-box same-sty">WalletConnect</div>
        <p style="text-decoration: underline;">New to Ethereum?</p>
        <p style="text-decoration: underline;">Learn more about wallets</p>
      </div>
      <div v-else class="content linking">
        <div class="user-box">
          <el-image class="user-img" />
          <div class="user-info">
            <p class="name">zhangsan</p>
            <p class="dec">Brief introduction</p>
          </div>
          <i class="el-icon-edit" />
        </div>
        <p v-loading="!ethNumber" class="eth">{{ ethNumber }}<span>ETH</span></p>
        <p class="address">
          {{ waAddress.substring(0, 19) }}...{{
            waAddress.substring(waAddress.length - 4, waAddress.length)
          }}
        </p>
        <div v-loading="imageItem.length === 0" class="nfts">
          <div v-for="(item, index) in imageItem" :key="index">
            <el-image v-if="index < 3" :src="item.image" />
          </div>
          <span class="more">...</span>
        </div>
        <div class="my-collections">My Collections</div>
        <div class="disconnect">Disconnect</div>
        <p class="support" @click="toSupport">Support</p>
      </div>
    </div>
  </div>
</template>
<script>
// import eth from '../eth.js'
import { eth, web3 } from '@/connector'
import * as contract from '@/contract'
export default {
  name: 'TestingWallet',
  data: function() {
    return {
      isLink: false,
      waAddress: '',
      imageItem: [],
      ethNumber: '',
      '721Address': '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21'
    }
  },
  methods: {
    toSupport() {
      this.close()
      this.$router.push('/support')
    },
    async init() {
      await this.getAddress()
      
      console.info(this.waAddress)
      if(this.waAddress){
        const ethNumber = await this.getEth()
        this.ethNumber = window.BigNumber(ethNumber).toFormat(4)
        // console.log(ethNumber)
        await this.getERC721Balance()
      }
      
    },

    getAddress() {
      // return eth.getAccounts().then(res => {
      //   this.waAddress = res[0]
      // })
      
      return eth.getAccounts().then(accounts => {
        console.log('>>>>>>>>.getaccounts', accounts)
        if (accounts && accounts.length) {
          // context.commit('setAddress', accounts[0])
          this.waAddress = accounts[0]
        } else {
          eth.requestAccounts().then(accounts => {
            if (accounts && accounts.length) {
              // context.commit('setAddress', accounts[0])
              this.waAddress = accounts[0]
            }
          }).catch(err => {
            if(err.code == -32002) {
              Toast('Please unlock your wallet')
            }
          })
        }
        
      }).catch(err => {
        console.error('getaccounterr..................j',err)
      })

      
    },
    // 查询资产
    getEth() {
      console.log('eeee')
      return eth.getBalance(this.waAddress).then(res => {
        console.log(new BigNumber(res).div(1000000000000000000), 'eeeee')
        return new BigNumber(res).div(1000000000000000000)
      })
    },
    async getERC721Balance() {
      this.imageItem = await contract.getERC721Balance(
        this['721Address'],
        this.waAddress
      )
      this.$store.commit('app/SET_IMAGE_IMTES', this.imageItem)
    },
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
      background: rgba(0, 0, 0, 0.4);
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
    .linking {
      padding: 55px 45px;
      .user-box {
        display: flex;
        align-items: center;
        margin-bottom: 42px;

        .user-img {
          min-width: 80px;
          height: 80px;
          border-radius: 40px;
          margin-right: 46px;
        }
        .user-info {
          margin-right: 35px;
          .name {
            font-size: 24px;
            font-family: Verdana;
            font-weight: bold;
            color: #454953;
            margin-bottom: 16px;
          }
          .dec {
            font-size: 14px;
            font-family: Verdana;
            font-weight: 400;
            color: #454953;
          }
        }
        .el-icon-edit {
          font-size: 28px;
          color: #da6464;
        }
      }
      .eth {
        font-size: 18px;
        font-family: Verdana;
        font-weight: bold;
        text-align: left;
        color: #454953;
      }
      .address {
        margin-bottom: 50px;
        font-size: 18px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
        margin-top: 25px;
      }
      .nfts {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .el-image {
          width: 78px;
          margin-right: 10px;
          height: 78px;
          border-radius: 10px;
        }
        .more {
          font-size: 18px;
          font-family: Verdana;
          font-weight: bold;
          color: #595959;
        }
        margin-bottom: 50px;
      }
      .my-collections {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        background: #da6464;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-family: Verdana;
        font-weight: 400;
        margin: 0 auto;
      }
      .disconnect {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        background: #ffffff;
        text-align: center;
        color: #da6464;
        border: 2px solid #da6464;
        margin: 0 auto;
        line-height: 36px;
        font-size: 18px;
        font-family: Verdana;
        font-weight: 400;
        margin-top: 17px;
        margin-bottom: 20px;
      }
      .support {
        display: block;
        font-size: 14px;
        text-align: center;
        font-family: Verdana;
        font-weight: 400;
        text-decoration: underline;
        color: #da6464;
      }
    }
  }
}
</style>
