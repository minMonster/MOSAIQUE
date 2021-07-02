<template>
  <div class="enlarge-box">
    <div class="enlarge-con">
      <el-image class="close" :src="require('../../access/close-icon.png')" />
      <div class="basic-information">
        <p class="title">Artwork name</p>
        <p class="edition">Edition 1 of 1</p>
        <div class="introduce">
          <p>
            synopsis of works Across the continents, thousands of computers
            maintain Bitcoin's peer-to-peer network, a global distribution
            designed to defy the odds and maintain its integrity under almost
            all circumstances. The network distributes
          </p>
          <p style="margin: 20px 0 40px">
            the blockchain independently. Hence, it is resistant to the failure
            of individu...
          </p>
        </div>
        <div style="opacity: 0.5;">
          #3d #animation #architecture #bitcoin #blockchain #blocks #btc #cloud
          #clouds #decentralization
        </div>
      </div>
      <div class="artwork">
        <el-image style="width: 452px; height: 565px;" :src="enlargeData.img" />
      </div>
      <div class="browse">
        <div class="artist-and-owner">
          <div class="artist">
            <p class="head-portrait">
              <img src="" alt="">
            </p>
            <div>
              <p class="organize">
                @Flora
              </p>
              <p class="identity">
                Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowEnlarge: {
      type: Boolean,
      default: false
    },
    enlargeData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss">
.enlarge-box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 16px;
  .enlarge-con {
    width: 1200px;
    height: 900px;
    position: absolute;
    right: 0;
    left: 50%;
    margin-left: -600px;
    bottom: 0;
    top: 50%;
    margin-top: -450px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    padding: 110px 100px;
    .basic-information {
      line-height: 21px;
      text-align: left;
      width: 200px;
      margin-right: 69px;
      font-size: 14px;
      color: #454953;
      .title {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 29px;
      }
      .edition {
        color: #da6464;
        font-size: 18px;
        margin-bottom: 26px;
      }
    }
    .artwork {
      margin-right: 120px;
    }
    .browse {
      .artist-and-owner {
        .artist {
          display: flex;
        }
        .head-portrait {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #454953;
        }
      }
    }
  }
}
</style>
