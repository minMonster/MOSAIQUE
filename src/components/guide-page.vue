<template>
  <div class="guide-page">
    <div v-if="imageItem" class="guide-con">
      <el-image class="close" :src="require('../access/close-icon.png')" @click="close" />
      <div class="pig">
        <el-image :src="imageItem.image" style="width: 360px; height: 360px; border-radius: 10px" />
      </div>
      <div class="information">
        <p class="title">Whether to Make Program the NFT?</p>
        <p class="descriptions">Add simple text descriptions...</p>
        <p class="song">{{ imageItem.name }}</p>
        <p class="token">
          <span style="margin-right: 30px"> Token ID </span>
          <span> {{ imageItem.token_id }} </span>
        </p>
        <p class="price">
          <span style="margin-right: 60px"> Price </span>
          <span> -- ETH </span>
        </p>
        <div class="handle-box">
          <p class="make-btn" @click="toCopy">Make Program</p>
          <p @click="$emit('skip')">Skip</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageItem: {
      type: Object,
      default: function() {
        console.log(this.imageItem)
        return null
      }
    }
  },
  methods: {
    toCopy() {
      this.$router.push({ name: 'copy', query: this.imageItem })
    },
    close() {
      this.$parent.isShowGuidPage = false
    }
  }
}
</script>
<style lang="scss" scoped>
.guide-page {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 16px;
  .guide-con {
    width: 1200px;
    height: 550px;
    background: #ffffff;
    position: fixed;
    right: 0;
    left: 50%;
    margin-left: -600px;
    bottom: 0;
    top: 130px;
    border-radius: 10px;
    display: flex;
    padding: 100px 100px;
    .close {
      cursor: pointer;
      position: absolute;
      right: -60px;
      top: -2px;
      width: 30px;
      height: 30px;
    }
    .information {
      margin-left: 80px;
      text-align: left;
      .title {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 18px;
      }
      .descriptions {
        font-size: 14px;
        font-family: Verdana;
        color: #454953;
      }
      .song {
        margin-top: 63px;
        margin-bottom: 4px;
        color: #da6464;
        font-size: 24px;
        font-weight: bold;
      }
      .token,
      .price {
        margin-top: 20px;
        :nth-child(1) {
          font-size: 14px;
          font-family: Verdana;
          font-weight: bold;
        }
      }
      .handle-box {
        display: flex;
        margin-top: 103px;
        p {
          cursor: pointer;
          width: 242px;
          height: 43px;
          text-align: center;
          line-height: 43px;
          border: 1px solid #da6464;
          border-radius: 22px;
          font-size: 20px;
          font-family: Verdana;
          font-weight: bold;
          color: #da6464;
        }
        .make-btn {
          margin-right: 32px;
          background: #da6464;
          font-size: 20px;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
