<template>
  <div class="snapshotable">
    <div class="edition-center">
      <div class="snapshotable-title">Snapshotables</div>
      <div class="img-list">
        <div v-for="item in imagList" :key="item.nft_mid" class="item-card">
          <div class="top">
            <el-image class="img" fit="cover" :src="item.uri" />
            <div class="mark-box">
              <div :style="{ backgroundImage: 'url(' + item.uri + ')' }" class="mark" />
              <div class="info">
                <p class="title">Artwork title</p>
                <div class="user">
                  <el-image :src="require('../access/img-1@2x.png')" />
                  <span>Collector name</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bt-item">
              <p class="bt-title">Snapshot</p>
              <p class="value">{{ item.minted_count }}/{{ item.supply }}</p>
            </div>
            <!-- <div class="bt-item">
              <p class="bt-title">Current Price</p>
              <p class="value">0.7 ETH</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '@/service/api'
export default {
  name: 'Snapshotable',
  data: function() {
    return {
      imagList: [
        // address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
        // contract: "0x8F5D7348b71208D1025F84250722F9d6C35f27e1"
        // minted_count: 0
        // nft_mid: "0xbb02368ab08e80f6ae9b160827f412ce087f2ef4842947c5a7b8f67d14ef08c8"
        // supply: 10
        // token_id: "0"
        // uri: "https://img1.uapay.io/mpay/img/txt/mosaique/2c9180820000000a017b361220310005"
      ]
    }
  },
  computed: {
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const snapshots = await api.getSnapshots().then(res => {
        this.imagList = res.data.snapshots
        return res.data.snapshots
      })
      // api.getArtistInfo({ address: snapshots.map(i => i.address) })
    }
  }
}
</script>
<style lang="scss">
.snapshotable {
  background-color: #f5f5f5;
  .edition-center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  .snapshotable-title {
    padding-top: 153px;
    padding-bottom: 54px;
    font-size: 24px;
    font-family: Verdana;
    font-weight: bold;
    color: #454953;
  }
  .img-list {
    display: flex;
    flex-wrap: wrap;
    .item-card {
      width: 350px;
      height: 540px;
      overflow: hidden;
      margin-right: 40px;
      border-radius: 10px;
      margin-bottom: 74px;
      .top {
        position: relative;
        height: 460px;
        background-image: hska(0, 0%, 100%, 0.3);

        .img {
          height: 460px;
          img {
            width: 350px;
          }
        }
        .mark-box {
          height: 110px;
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
            height: 110px;
            top: 30px;
            position: absolute;
            left: 37px;
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
            content: ' ';
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
