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
      <ul v-loading="loading" class="loading list">
        <li v-for="(item,index) in collectionsList" :key="index" class="list-item">
          <!-- 上部 -->
          <div class="h" :style="{ backgroundImage: 'url(' + item.image + ')' }">
            <!-- 分享按钮 -->
            <el-image class="share" :src="require('../access/share.png')" />
            <!-- 模糊遮罩 -->
            <div class="mask">
              <div class="mask-bg" :style="{ backgroundImage: 'url(' + item.image + ')' }" />
              <ul class="mask-con">
                <li>
                  <span class="tit">Collection name</span>
                  <span class="val">{{ item.name }}</span>
                </li>
                <li>
                  <span class="tit">Current Price</span>
                  <span class="val">0.9 ETH</span>
                </li>
              </ul>
            </div>
          </div>
          <!--
          1-b、i、p亮，s灰，p需要判断是否达到上限置灰
          2-b、i亮，s、p灰
          3-b、i、s亮，p灰
          4-都灰
          -->
          <!-- 底部 -->
          <ul v-show="item.nft_status === 1" class="f">
            <li class="active" @click="jumpBlazon(item)">
              <span class="sup">B</span>
              <span class="sub">{{ item.blazon_count || 0 }}</span>
            </li>
            <li class="active" @click="jumpInscription(item)">
              <span class="sup">I</span>
              <span class="sub">{{ item.inscription_count || 0 }}</span>
            </li>
            <li>
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li v-show="item.program_supply === item.program_count">
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
            <li v-show="(item.program_supply !== item.program_count) && item.program_count > 0" class="hollow">
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
            <li v-show="(item.program_supply !== item.program_count) && item.program_count === 0" class="active" @click="jumpProgram(item)">
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
          </ul>
          <ul v-show="item.nft_status === 2" class="f">
            <li class="active" @click="jumpBlazon(item)">
              <span class="sup">B</span>
              <span class="sub">{{ item.blazon_count || 0 }}</span>
            </li>
            <li class="active" @click="jumpInscription(item)">
              <span class="sup">I</span>
              <span class="sub">{{ item.inscription_count || 0 }}</span>
            </li>
            <li>
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li>
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
          </ul>
          <ul v-show="item.nft_status === 3" class="f">
            <li class="active" @click="jumpBlazon(item)">
              <span class="sup">B</span>
              <span class="sub">{{ item.blazon_count || 0 }}</span>
            </li>
            <li class="active" @click="jumpInscription(item)">
              <span class="sup">I</span>
              <span class="sub">{{ item.inscription_count || 0 }}</span>
            </li>
            <!-- <li class="active" @click="jumpSnapshot(item)">
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li> -->
            <li v-show="item.snapshot_supply === item.snapshot_count">
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li v-show="(item.snapshot_supply !== item.snapshot_count) && item.snapshot_count > 0" class="hollow">
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li v-show="(item.snapshot_supply !== item.snapshot_count) && item.snapshot_count === 0" class="active" @click="jumpSnapshot(item)">
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li>
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
          </ul>
          <ul v-show="item.nft_status === 4" class="f">
            <li>
              <span class="sup">B</span>
              <span class="sub">{{ item.blazon_count || 0 }}</span>
            </li>
            <li>
              <span class="sup">I</span>
              <span class="sub">{{ item.inscription_count || 0 }}</span>
            </li>
            <li>
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>{{ item.snapshot_count || 0 }}</i>
                <i>{{ item.snapshot_supply || 0 }}</i>
              </span>
            </li>
            <li>
              <span class="sup">P</span>
              <span class="sub fraction">
                <i>{{ item.program_count || 0 }}</i>
                <i>{{ item.program_supply || 0 }}</i>
              </span>
            </li>
          </ul>
          <ul v-show="!item.nft_status" class="f">
            <li>
              <span class="sup">B</span>
              <span class="sub">0</span>
            </li>
            <li>
              <span class="sup">I</span>
              <span class="sub">0</span>
            </li>
            <li>
              <span class="sup">S</span>
              <span class="sub fraction">
                <i>0</i>
                <i>0</i>
              </span>
            </li>
            <li>
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
      collectionsList: [],
      loading: false
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress']
    })
  },
  created() {
    this.getNftContractAddr()
    // this.getNftContractAddrCopy()
  },
  methods: {
    // 获取平台收录NFT合约地址
    getNftContractAddr() {
      this.loading = true
      api.getNftContractAddr().then(async(res) => {
        const addr = res.data.contract
        if (!addr || !addr.length) {
          this.loading = false
          return false
        }
        for (let i = 0; i < addr.length; i++) {
          const contractAddr = addr[i].contract_address
          const contractName = addr[i].name
          const contracts = await contract.createERC721Contract(contractAddr)
          const balanceOf = await contracts.methods.balanceOf(this.userAddress).call()
          const itemArr = []
          for (let j = 0; j < balanceOf; j++) {
            await contracts.methods.tokenOfOwnerByIndex(this.userAddress, j).call().then(async(res) => {
              contracts.methods.tokenURI(res).call().then(async(tokenURI) => {
                const catchUri = localStorage.getItem('URI_' + res)
                let result = null
                if (catchUri) {
                  result = JSON.parse(catchUri)
                } else {
                  result = await axios.get(tokenURI).then((result) => {
                    localStorage.setItem('URI_' + res, JSON.stringify(result))
                    return result
                  }).catch(() => false)
                }
                const data = {
                  contractAddr,
                  tokenOfOwnerByIndex: res,
                  tokenUrl: tokenURI,
                  name: contractName,
                  ...result.data
                }
                itemArr.push(data)

                if (itemArr.length === 6 || j === balanceOf - 1) {
                  // 此时渲染6个
                  // if (itemArr.length > 0 && itemArrTmp.length > 0) {
                  const newArr = this.$_.chunk(itemArr, 6)
                  for (let index = 0; index < newArr.length; index++) {
                    // console.log('---------------------', newArr[index])
                    const collections = newArr[index].map(v => {
                      // console.log(v)
                      return {
                        contract: v.contractAddr,
                        token_id: v.tokenOfOwnerByIndex
                      }
                    })
                    const params = {
                      collections: collections
                    }
                    console.log(params)
                    api.getCollectInfo(params).then(res => {
                      const { collections } = res && res.data
                      if (collections && collections.length) {
                        for (let k = 0; k < newArr[index].length; k++) {
                          Object.assign(newArr[index][k], collections[k])
                        }
                        this.collectionsList.push(...newArr[index])
                        return false
                      }
                      this.collectionsList.push(...newArr[index])
                    }).catch(err => {
                      this.collectionsList.push(...newArr[index])
                      console.log(err)
                    })
                  }
                  itemArr.splice(0, itemArr.length)
                }
              }).catch(err => { console.log(err) })
            }).catch(err => { console.log(err) })
          }
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
        this.$message.error(err.message || err.msg)
      })
    },
    async getNftContractAddrCopy() {
      this.loading = true
      // 获取平台合约
      const addr = await api.getNftContractAddr().then((res) => {
        return res.data.contract
      })
      if (!addr || !addr.length) {
        this.loading = false
        return false
      }
      console.log(addr, 'addr')
      const contractsPAll = []

      addr.forEach(i => {
        contractsPAll.push(contract.createERC721Contract(i.contract_address))
      })
      const balanceOfPAll = []

      const contracts = await Promise.all(contractsPAll)
      console.log('contracts', contracts)

      addr.forEach((i, index) => {
        balanceOfPAll.push(contracts[index].methods.balanceOf(this.userAddress).call())
      })
      const balanceOfs = await Promise.all(balanceOfPAll)
      console.log('balanceOfs', balanceOfs)
      const tokenOfOwnerByIndexPA = []
      balanceOfs.forEach((i, index) => {
        const contractsC = contracts[index]
        for (let j = 0; j < i; j++) {
          tokenOfOwnerByIndexPA.push(contractsC.methods.tokenOfOwnerByIndex(this.userAddress, j).call())
        }
      })
      const tokenOfOwnerByIndexs = await Promise.all(tokenOfOwnerByIndexPA)
      console.log(tokenOfOwnerByIndexs, 'tokenOfOwnerByIndexs')
      let num = 0
      const tokenURIPa = []
      balanceOfs.forEach((i, index) => {
        const contractsC = contracts[index]
        for (let j = 0; j < i; j++) {
          tokenURIPa.push(contractsC.methods.tokenURI(tokenOfOwnerByIndexs[num]).call())
          num++
        }
      })
      const tokenURIs = await Promise.all(tokenURIPa)
      console.log(tokenURIs, 'tokenURIs')
      // contracts.methods.tokenURI(res).call()
      // // console.log(addr, 'addr')
      // addr.forEach(async(i) => {
      //   const contractAddr = i.contract_address
      //   const contractName = i.name
      //   const contracts = await contract.createERC721Contract(contractAddr)
      //   const balanceOf = await contracts.methods.balanceOf(this.userAddress).call()
      //   const itemArr = []
      // })
    },
    // 查询collections信息
    getCollectInfo(data) {

      // const collections = data.map(v => {
      //   return {
      //     contract: v.contractAddr,
      //     token_id: v.tokenOfOwnerByIndex
      //   }
      // })
      // const params = {
      //   collections: collections
      // }
      // api.getCollectInfo(params).then(res => {
      //   const { collections } = res && res.data
      //   if (collections && collections.length) {
      //     for (let k = 0; k < data.length; k++) {
      //       Object.assign(data[k], collections[k])
      //     }
      //   }
      //   console.log(data)
      //   console.log(this.collectionsList)
      // }).catch(err => {
      //   console.log(err)
      //   // this.$message.error(err.message || err.msg)
      // })
    },
    // 跳转到 Blazon
    jumpBlazon(item) {
      this.$router.push({ path: '/select-blazon', query: item })
    },
    // 跳转到 Inscription
    jumpInscription(item) {
      this.$router.push({ path: '/edit-Inscription', query: item })
    },
    // 跳转到 Snapshot
    jumpSnapshot(item) {},
    // 跳转到 Program
    jumpProgram(item) {}
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
            cursor:not-allowed;
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
              cursor: pointer;
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
              cursor: pointer;
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
    &>.loading{
      /deep/ .el-loading-mask{
        background: none !important;
      }
      /deep/ .el-loading-spinner .path{
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #da6464;
        stroke-linecap: round;
      }
    }
  }
}
</style>
