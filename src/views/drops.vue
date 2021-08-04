<template>
  <div class="drops">
    <div v-loading="loading" class="edition-center">
      <div class="snapshotable-title">IP Special-Cyberpunk</div>
      <div class="img-list">
        <div v-for="item in imageItem" :key="item" class="item-card">
          <div class="top">
            <el-image class="img" :src="item.image" />
            <div class="mark-box">
              <div
                :style="{ backgroundImage: 'url(' + item.image + ')' }"
                class="mark"
              />
              <div class="info">
                <p class="title">Artwork title</p>
                <div class="user">
                  <span>Collector name</span>
                </div>
              </div>
            </div>
            <img
              class="enlarge-icon"
              src="../icons/enlarge.png"
              alt=""
              @click="enlargeProduct(item)"
            >
          </div>
          <div class="bottom">
            <div class="bt-item">
              <p class="bt-title">Price</p>
              <p class="value">0.7 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="snapshotable-title pt-0">For you</div>
      <div class="img-list">
        <div v-for="item in imagList" :key="item" class="item-card">
          <div class="top">
            <el-image class="img" :src="item.img" />
            <div class="mark-box">
              <div
                :style="{ backgroundImage: 'url(' + item.img + ')' }"
                class="mark"
              />
              <div class="info">
                <p class="title">Artwork title</p>
                <div class="user">
                  <span>Collector name</span>
                </div>
              </div>
            </div>
            <img
              class="enlarge-icon"
              src="../icons/enlarge.png"
              alt=""
              @click="enlargeProduct(item)"
            >
          </div>
          <div class="bottom">
            <div class="bt-item">
              <p class="bt-title">Price</p>
              <p class="value">0.7 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div class="snapshotable-title pt-0">Badges and Trophies</div>
      <div class="img-list">
        <div v-for="item in imagList" :key="item" class="item-card">
          <div class="top">
            <el-image class="img" :src="item.img" />
            <div class="mark-box">
              <div
                :style="{ backgroundImage: 'url(' + item.img + ')' }"
                class="mark"
              />
              <div class="info">
                <p class="title">Artwork title</p>
                <div class="user">
                  <span>Collector name</span>
                </div>
              </div>
            </div>
            <img
              class="enlarge-icon"
              src="../icons/enlarge.png"
              alt=""
              @click="enlargeProduct(item)"
            >
          </div>
          <div class="bottom">
            <div class="bt-item">
              <p class="bt-title">Price</p>
              <p class="value">0.7 ETH</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <enlarge-product v-if="isShowEnlarge" :enlarge-data="enlargeData" />
  </div>
</template>
<script>
import enlargeProduct from '@/components/enlarge.vue'
import { mapState } from 'vuex'
import * as contract from '@/contract'

export default {
  name: 'Drops',
  components: { enlargeProduct },
  data: function() {
    return {
      isShowEnlarge: false,
      enlargeData: null,
      imageItem: [],
      loading: true,
      imagList: [
        {
          img: require('../access/img/beeple-03-29-18.jpg')
        },
        {
          img: require('../access/img/beeple-07-12-20.jpg')
        },
        {
          img: require('../access/img/beeple-07-25-20.jpg')
        },
        {
          img: require('../access/img/beeple-07-26-20.jpg')
        },
        {
          img: require('../access/img/beeple-07-30-20.jpg')
        },
        {
          img: require('../access/img/beeple-08-12-20.jpg')
        }
      ]
    }
  },
  computed: {
    ...mapState({
      '721Address': state => state.app['721Address']
    })
  },
  created() {
    this.getERC721Balance()
    if (localStorage.getItem('downImg')) {
      this.imagList[0].img = localStorage.getItem('downImg')
    }
  },
  methods: {
    async getERC721Balance() {
      this.imageItem = await contract.getERC721Balance(
        this['721Address'],
        '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
      ).then((res) => {
        this.loading = false
        return res
      }).catch(() => {
        this.loading = false
      })
    },
    enlargeProduct(item) {
      this.isShowEnlarge = true
      this.enlargeData = item
    }
  }
}
</script>
<style lang="scss">
.drops {
  background-color: #f5f5f5;

  .edition-center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  .snapshotable-title {
    padding-top: 153px;
    padding-bottom: 39px;
    font-size: 24px;
    font-family: Verdana;
    font-weight: bold;
    color: #454953;
    &.pt-0 {
      padding-top: 0;
    }
  }
  .img-list {
    display: flex;
    flex-wrap: wrap;
    .item-card {
      margin-right: 20px;
      &:nth-child(4) {
        margin-right: 0;
      }
       &:hover .enlarge-icon {
        display: block!important;
      }
      width: 280px;
      height: 450px;
      overflow: hidden;
      border-radius: 10px;
      margin-bottom: 39px;
      .top {
        position: relative;
        height: 370px;
        background-image: hska(0, 0%, 100%, 0.3);

        .img {
          height: 370px;
          img {
            height: 370px;
          }
        }
        .enlarge-icon {
          display: none;
          width: 20px;
          height: 20px;
          position: absolute;
          right: 10px;
          top: 10px;
        }
        .mark-box {
          height: 80px;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          position: absolute;
          .mark {
            position: absolute;
            background-size: 100%;
            filter: blur(10px);
            background-position: -350px -350px;
            margin: -30px;
            left: 0;
            top: 0;
            width: 130%;
            height: 160%;
          }
          .info {
            height: 80px;
            top: 0;
            padding-top: 15px;
            padding-left: 15px;
            position: absolute;
            left: 0;
            width: 100%;
            font-size: 20px;
            font-family: Verdana;
            font-weight: bold;
            color: #ffffff;
            .user {
              display: flex;
              font-size: 12px;
              font-family: Verdana;
              font-weight: 400;
              color: #f5f5f5;
              margin-top: 14px;
              align-items: center;
              .el-image {
                margin-right: 11px;
                width: 25px;
                height: 25px;
                border-radius: 50%;
              }
            }
          }
          &::before {
            content: " ";
            position: absolute;
            margin: -30px;
            left: 30px;
            top: 30px;
            width: 100%;
            height: 100%;
          }
        }
      }
      .bottom {
        padding-left: 37px;
        background-color: #fff;
        height: 80px;
        font-size: 12px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        display: flex;
        padding-top: 22px;
        .bt-item {
          margin-right: 58px;
        }
        .value {
          margin-top: 9px;
          font-size: 12px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
        }
      }
    }
  }
}
</style>
