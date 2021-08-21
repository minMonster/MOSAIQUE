<template>
  <div class="blazon">
    <section class="section-1">
      <div class="edition-center">
        <div class="left-box">
          <div class="title">Ready-made NFTs</div>
          <div class="master-box" :class="{ active: true }">
            <template v-if="masterImageItem">
              <el-image
                fit="cover"
                class="data-img"
                :src="masterImageItem.image"
              />
              <el-image
                class="close"
                :src="require('../access/close-icon.png')"
                @click="detele('M')"
              />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
            </template>
          </div>
          <div class="master-title">Master</div>
          <div class="button-next" @click="next">Next</div>
        </div>
        <div class="right-box">
          <div class="title">Select an Inscription Method</div>
          <div class="image-list">
            <div
              v-for="(item, index) in collectionsList"
              v-if="item.nft_status && item.nft_status !== 4"
              :key="index"
              class="image-item"
              :class="{
                selectMaster: masterImageItem && Number(masterImageItem.token_id) === item.token_id
              }"
            >
              <!-- <img :src="item.img" alt="" class="img"> -->
              <el-image :src="item.image" fit="cover" class="img" />
              <div class="dec">
                <div class="blur-mao" :style="{backgroundImage: 'url('+ item.image +')'}" />
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
              <div class="hover-mark">
                <img
                  class="enlarge-icon"
                  src="../icons/enlarge.png"
                  alt=""
                  @click="enlargeProduct(item)"
                >
                <!-- <el-image class="show-image-btn" /> -->
                <div class="select-item">
                  <div @click="setDataStatus(item, 'M')">Master</div>
                </div>
                <!-- <div class="mask" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <enlarge-product v-if="isShowEnlarge" :enlarge-data="enlargeData" />
    <guide-page v-if="isShowGuidPage" :image-item="curIndex" @skip="setMaster" />
  </div>
</template>
<script>
import enlargeProduct from '@/components/enlarge.vue'
import GuidePage from '@/components/guide-page.vue'
import * as api from '@/service/api'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Blazon',
  components: {
    enlargeProduct,
    GuidePage
  },
  data: function() {
    return {
      isShowEnlarge: false,
      isShowGuidPage: false,
      curIndex: null,
      masterImageItem: null,
      enlargeData: {},
      collectionsList: []
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress'],
      formatEth: state => state.walletAccount.formatEth,
      imageItems: state => state.nft.userNfts
    })
  },
  created() {
    this.init()
    const { contractAddr, token_id } = this.$route.query
    if (contractAddr && token_id) {
      this.masterImageItem = this.$route.query
    }
  },
  methods: {
    init() {
      this.getNftContractAddr()
    },
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
    next() {
      if (!this.masterImageItem) {
        this.$message({
          message: 'Please complete the form',
          type: 'warning'
        })
        return
      }
      this.$router.push({
        name: 'EditInscription',
        query: {
          mImage: this.masterImageItem.image,
          mToken_id: this.masterImageItem.token_id,
          mContractAddress: this.masterImageItem.contractAddr
        }
      })
    },
    setMaster() {
      this.isShowGuidPage = false
      this.masterImageItem = this.curIndex
    },
    setDataStatus(item, type) {
      switch (type) {
        case 'M':
          this.masterImageItem = item
          this.curIndex = item
          this.isShowGuidPage = true
          break
      }
    },
    detele(type) {
      switch (type) {
        case 'M':
          this.masterImageItem = null
          break
      }
    },
    enlargeProduct(item) {
      this.isShowEnlarge = true
      this.enlargeData = item
    }
  }
}
</script>
<style lang="scss">
.blazon {
  background-color: #f5f5f5;
  .edition-center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    display: flex;
  }
  .section-1 {
    padding-top: 215px;
    .left-box {
      margin-right: 33px;
      width: 265px;
      height: 494px;
      background-color: #fff;
      padding: 28px 32px;
      border-radius: 10px;
      box-sizing: border-box;
      .title {
        margin-bottom: 45px;
        font-size: 18px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        line-height: 21px;
      }
      .master-box,
      .blazon-box {
        width: 207px;
        height: 207px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        border: 1px dashed #acadb1;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        .data-img {
          width: 207px;
          height: 207px;
        }
        .close {
          cursor: pointer;
          position: absolute;
          right: 10px;
          width: 26px;
          height: 26px;
          top: 10px;
        }
        .dec {
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #f5f5f5;
          position: absolute;
          bottom: 0;
          &::before {
            height: 100px;
            width: 100%;
            content: " ";
            filter: blur(10px);
          }
        }
      }
      .master-title {
        text-align: center;
        font-size: 14px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        line-height: 21px;
        margin-top: 13px;
        margin-bottom: 61px;
      }
      .button-next {
        cursor: pointer;
        text-align: center;
        color: #ffffff;
        line-height: 43px;
        font-size: 20px;
        font-weight: bold;
        width: 202px;
        height: 43px;
        background: #da6464;
        border-radius: 22px;
      }
    }
    .right-box {
      flex: 1;
      .title {
        text-align: right;
        font-size: 24px;
        margin-bottom: 40px;
        font-weight: bold;
        color: #454953;
      }
      .image-list {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        .image-item {
          cursor: pointer;
          position: relative;
          margin-bottom: 50px;
          width: 285px;
          height: 375px;
          &.selectMaster,
          &.selectBlazon {
            &::before {
              position: absolute;
              content: " ";
              width: 295px;
              left: -9.5px;
              top: -8.5px;
              height: 385px;
              z-index: 10;
              border: 4px solid #da6464;
              border-radius: 15px;
              background-color: #fff;
            }
            &::after {
              content: "M";
              z-index: 9;
              position: absolute;
              background-color: #da6464;
              text-align: center;
              font-size: 18px;
              font-family: Verdana;
              font-weight: bold;
              color: #ffffff;
              height: 48px;
              padding-top: 6px;
              width: 60px;
              left: -9.5px;
              top: -34.5px;
              border-radius: 10px;
            }
            .select-item {
              display: none !important;
            }
          }
          &.selectBlazon {
            &::before {
              border: 4px solid #464952;
            }
             &::after {
              content: "B";
              background-color: #464952;
             }
          }
          .el-image {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 11;
            border-radius: 10px;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .dec {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 90px;
            width: 100%;
            overflow: hidden;
            text-align: center;
            font-size: 12px;
            color: #f5f5f5;
            position: absolute;
            z-index: 12;
            bottom: 0;
            .blur-mao {
              content: " ";
              position: absolute;
              z-index: -1;
              left: 0;
              right: 0;
              transform: scale(1.5);
              filter: blur(10px);
              height: 100%;
              width: 100%;
              object-fit: cover;
              background-size: cover;
              background-position: 0 -217px;
            }
            p {
              padding: 0;
            }
            .name {
              margin-bottom: 10px;
            }
          }
          .hover-mark {
            display: none;
            position: absolute;
            z-index: 12;
            background-color: rgba(0, 0, 0, 0.5);
            width: 285px;
            height: 377px;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 10px;
            .enlarge-icon {
              width: 20px;
              height: 20px;
              position: absolute;
              right: 10px;
              top: 20px;
            }
            .select-item {
              margin-top: 270px;
              display: flex;
              justify-content: space-around;
              div {
                width: 230px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                border-radius: 10px;
                background-color: rgba(187, 182, 182, 0.5);
                color: #fffefe;
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .image-item:hover .hover-mark {
          display: block;
        }
        .image-item:hover .dec {
          display: none;
        }
      }
    }
  }
}
</style>
