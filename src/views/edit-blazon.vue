<template>
  <div class="edit-blazon">
    <div class="left" />
    <div class="right">
      <p class="return-icon">
        <img src="../icons/return.png" alt="">
      </p>
      <div class="set-message">
        <p class="title">Edit Blazon</p>
        <p class="theme">Master</p>
        <p class="introduce">The NFT Song</p>
        <p class="theme">Blazon</p>
        <p class="introduce">Pot</p>
        <p class="title">Coordinate</p>
        <div class="coordinate-mess">
          <p>
            <span>X</span>
            <el-input v-model="parameter.XCoordinate" size="small" />
          </p>
          <p>
            <span>Y</span>
            <el-input v-model="parameter.YCoordinate" size="small" />
          </p>
        </div>
        <div>
          <p class="parameter-title">Size</p>
          <el-input v-model="parameter.size" style="width: 90px; display: inline-block" size="small" />%
        </div>
        <div>
          <p class="parameter-title">Rotate</p>
          <el-input v-model="parameter.size" style="width: 90px; display: inline-block" size="small" />。
        </div>
        <div class="icon-box">
          <img src="../icons/icon-3.png" alt="">
          <img src="../icons/icon-2.png" alt="">
        </div>
        <p class="title" style="margin-top: 55px; margin-bottom: 17px; font-weight: bold">Estimated Gas</p>
        <p style="font-size: 14px; font-weight: bold">0.0245 ETH (about $54.53)</p>
        <p class="btn">Mint</p>
      </div>
    </div>
  </div>
</template>
<script>

export default ({
  data() {
    return {
      parameter: {
        XCoordinate: '',
        YCoordinate: '',
        size: ''
      }
    }
  }

})
</script>
<style lang="scss" scoped>
.edit-blazon {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .left {
    width: 500px;
    height: 720px;
    margin-right: 220px;
  }
  .right {
    width: 316px;
    padding: 42px 0 0 46px;
    .return-icon {
      width: 30px;
      height: 30px;
      background-color: #da6464;
      border-radius: 50px;
      text-align: center;
      margin-bottom: 16px;
      img {
        width: 67%;
        height: 88%;
      }
    }

    .set-message {
      background-color: #fff;
      font-size: 14px;
      el-input {
        width: 70px;
        height: 20px;
      }
      .title {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 13px;
      }
      .theme {
        font-weight: bold;
        margin-bottom: 12px;
      }
      .introduce {
        margin-bottom: 24px;
      }
      .coordinate-mess {
        display: flex;
        p {
          display: flex;
          span {
            font-weight: bold;
            margin-right: 14px;
            color: #454953;
            font-size: 24px;
          }
          margin-right: 12px;
        }
      }
      .parameter-title {
        margin-top: 19px;
        color: #454953;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 13px;
      }
      .icon-box {
        margin-top: 70px;
        img {
          cursor: pointer;
          width: 32px;
          height: 32px;
          margin-right: 26px;
        }
      }
      .btn {
        cursor: pointer;
        width: 224px;
        height: 43px;
        background: #da6464;
        border-radius: 22px;
        text-align: center;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 43px;
        margin: 41px 0;
      }
    }
  }
}
</style>
