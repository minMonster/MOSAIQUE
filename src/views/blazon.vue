<template>
  <div class="blazon">
    <section class="section-1">
      <div class="edition-center">
        <div class="left-box">
          <div class="title">
            Recently Used
          </div>
          <div class="master-box" :class="{ active: true }">
            <el-image />
            <el-image class="close" />
            <div class="dec">
              <p class="name">Collection name</p>
              <p class="type">Artwork</p>
            </div>
          </div>
          <div class="master-title">Master</div>
          <div class="blazon-box">
            <el-image />
            <el-image class="close" />
            <div class="dec">
              <p class="name">Collection name</p>
              <p class="type">Artwork</p>
            </div>
          </div>
          <div class="master-title">Blazon</div>
          <div class="button-next">Next</div>
        </div>
        <div class="right-box">
          <div class="title">Select a Master & Blazon</div>
          <div class="image-list">
            <div
              v-for="item in 10"
              :key="item"
              class="image-item"
              :class="{ selectMaster: true, selectBlazon: true }"
            >
              <el-image />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
              <div class="hover-mark">
                <el-image class="show-image-btn" />
                <div class="select-item">
                  <div>Master</div>
                  <div>Blazon</div>
                </div>
                <div class="mask" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Blazon',
  data: function() {
    return {
      masterData: null,
      blazon: null
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
      height: 794px;
      background-color: #fff;
      padding: 28px 32px;
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
    }
    .right-box {
      flex: 1;
      background-color: pink;
    }
  }
}
</style>
