<template>
  <!-- My collections -->
  <div class="my-collections">
    <div class="center">
      <h3>My collections</h3>
      <!-- tab 栏 -->
      <ul class="tabs">
        <li v-for="(item,index) in tabs" :key="index" :class="[active === item.key ? 'active' : '','tabs-item']" @click="active = item.key">
          {{ item.name }}
        </li>
      </ul>
      <!-- 收藏列表 -->
      <ul class="list">
        <li v-for="(item,index) in collectionsList" :key="index" class="list-item">
          <!-- 上部 -->
          <div class="h" :style="{ backgroundImage: 'url(' + item.data.image + ')' }">
            <!-- 分享按钮 -->
            <el-image class="share" :src="require('../access/share.png')" />
            <!-- 模糊遮罩 -->
            <div class="mask">
              <div class="mask-bg" :style="{ backgroundImage: 'url(' + item.data.image + ')' }" />
              <ul class="mask-con">
                <li>
                  <span class="tit">Collection name</span>
                  <span class="val">This NFT Song</span>
                </li>
                <li>
                  <span class="tit">Current Price</span>
                  <span class="val">0.9 ETH</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 底部 -->
          <ul class="f">
            <li class="active">
              <span class="sup">B</span>
              <span class="sub">0</span>
            </li>
            <li class="hollow">
              <span class="sup">I</span>
              <span class="sub">0</span>
            </li>
            <li class="active">
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>0</i>
                <i>0</i>
              </span>
            </li>
            <li class="hollow">
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>0</i>
                <i>0</i>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as api from '@/service/api'
import * as contract from '@/contract'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      // tabs 选中项
      active: 'all',
      // tabs 列表
      tabs: [
        { name: 'All', key: 'all' },
        { name: 'The Original', key: 'theOriginal' },
        { name: 'The Programmable', key: 'theProgrammable' }
      ],
      // 收藏列表
      collectionsList: []
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress']
    })
  },
  created() {
    this.getNftContractAddr()
  },
  methods: {
    // 获取平台收录NFT合约地址
    getNftContractAddr() {
      api.getNftContractAddr().then(res => {
        const addr = res.data.contract
        if (!addr || !addr.length) {
          return false
        }
        console.log(addr)
        for (let i = 0; i < addr.length; i++) {
          console.log(addr[i])
          this.getCollectionsList(addr[i].contract_address)
        }
      }).catch(err => {
        this.$message.error(err.message || err.msg)
      })
    },
    /**
       * 1.创建合约
       * 2.获取balanceOf 数值直接遍历通过索引作为id
       * 3.tokenOfOwnerByIndex 通过上面balanceOf的索引获得
       * 4.获取tokenURI
       * 5.通过get请求得到返回值
       * 6.有多个参数根据自己想要的参数进行格式化
      */
    //  获取收藏列表
    async getCollectionsList(contractAddr) {
      const contracts = contract.createERC721Contract(contractAddr)
      const balanceOf = await contracts.methods.balanceOf(this.userAddress).call()
      console.log('balanceOf', balanceOf)
      for (let i = 0; i < balanceOf; i++) {
        console.log(contractAddr, i)
        contracts.methods.tokenOfOwnerByIndex(this.userAddress, i).call().then(res => {
          contracts.methods.tokenURI(res).call().then(async(tokenURI) => {
            console.log(tokenURI)
            const result = await axios.get(tokenURI)
            const data = {
              contractAddr,
              tokenOfOwnerByIndex: res,
              tokenUrl: tokenURI,
              ...result
            }
            this.collectionsList.push(data)
            console.log('----------data----------', data, i)
          }).catch(err => { console.log(err) })
        }).catch(err => { console.log(err) })
        console.log(this.collectionsList)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.my-collections{
  background: #f5f5f5;
  &>.center{
    width: 1200px;
    margin: 0 auto;
    // 标题
    &>h3{
      font-size: 24px;
      font-family: Verdana;
      font-weight: bold;
      color: #454953;
      line-height: 21px;
      padding: 150px 0 50px;
      margin: 0;
    }
    // tabs 栏
    &>.tabs{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #d7d7d7;
      .tabs-item{
        min-width: 150px;
        padding: 10px 10px 5px;
        border: 1px solid #E5E5E5;
        border-radius: 10px 10px 0px 0px;
        font-size: 12px;
        font-family: Verdana;
        font-weight: bold;
        line-height: 21px;
        text-align: center;
        cursor: pointer;
        margin-bottom: -1px;
        color:rgba(69,73,83, 0.5);
        background: #f5f5f5;
        margin-right: -1px;
        &.active{
          color: #454953;
          border-bottom: none;
        }
      }
    }
    // 收藏列表
    &>.list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      min-height: 400px;
      padding-bottom: 50px;
      &::after{
        content: "";
        width: 350px;
      }
      .list-item{
        display: block;
        width: 350px;
        height: 550px;
        margin-top: 50px;
        // 列表项上半部分
        .h{
          height: 463px;
          background-size: 100% 100%;
          border-radius: 10px 10px 0 0;
          position: relative;
          // 分享按钮
          .share{
            width: 26px;
            height: 26px;
            position: absolute;
            top: 20px;
            right: 20px;
          }
          // 下面遮罩
          .mask{
            width: 100%;
            height: 100px;
            position: absolute;
            left: 0;
            bottom: 0;
            overflow: hidden;
            .mask-bg{
              position: absolute;
              background-size: 100% 100%;
              -webkit-filter: blur(10px);
              filter: blur(10px);
              background-position: 10px 90px;
              margin: -30px;
              left: 0;
              top: 0;
              width: 130%;
              height: 160%;
            }
            .mask-con{
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              display: flex;
              justify-content: space-between;
              padding: 0 30px;
              li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                .tit{
                  font-size: 14px;
                  font-family: Verdana;
                  color: #FFFFFF;
                  line-height: 21px;
                  margin-bottom: 8px;
                }
                .val{
                  font-size: 14px;
                  font-family: Verdana;
                  font-weight: bold;
                  color: #FFFFFF;
                  line-height: 21px;
                }
              }
            }
          }
        }
        // 列表项下半部分
        .f{
          display: flex;
          background: #FFFFFF;
          border-radius: 0px 0px 10px 10px;
          &>li{
            width: 25%;
            height: 87px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 15px;
            position: relative;
            .sup{
              font-size: 40px;
              font-family: Verdana;
              font-weight: bold;
              color: #E1E1E1;
              line-height: 40px;
            }
            .sub{
              align-self: flex-end;
              font-size: 16px;
              font-family: Verdana;
              font-weight: 500;
              color: #E0E0E0;
              height: 24px;
              line-height: 32px;
              &.fraction{
                width: 25px;
                color: #E0E0E0;
                position: relative;
                margin-top: 1px;
                // flex-direction: column;
                // justify-content: center;
                // &> i:last-child{
                //   align-self: flex-end;
                // }
                i{
                  font-size: 12px;
                  line-height: 12px;
                  font-family: Verdana;
                  font-weight: 500;
                }
                &>i:nth-child(1){
                  position: absolute;
                  left: 0;
                  top: 6px;
                  &::after{
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: 6px;
                    width: 12px;
                    border-bottom: 1px solid #E1E1E1;
                    transform: rotateZ(115deg);
                  }
                }
                &>i:nth-child(2){
                  position: absolute;
                  right: 0;
                  bottom: 0;
                }
              }
            }
            &.active{
              .sup{
                color: #DA6464 !important;
              }
              .sub{
                color: #DA6464 !important;
                &.fraction{
                  &>i:nth-child(1){
                    &::after{
                      border-bottom: 1px solid #D96363;
                    }
                  }
                }
              }
            }
            &.hollow{
              .sup{
                color: #FFFFFF;
                -webkit-text-stroke: 2px #D96363;
                text-stroke: 2px #D96363;
              }
              .sub{
                color: #DA6464 !important;
                &.fraction{
                  &>i:nth-child(1){
                    &::after{
                      border-bottom: 1px solid #D96363;
                    }
                  }
                }
              }
            }
            &::after{
              content: '';
              position: absolute;
              height: 48px;
              border-right: 1px solid #EEEEEE;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
            }
          }

        }
      }
    }
  }
}
</style>
