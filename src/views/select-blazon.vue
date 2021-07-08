<template>
  <div class="blazon">
    <section class="section-1">
      <div class="edition-center">
        <div class="left-box">
          <div class="title">Recently Used</div>
          <div class="master-box" :class="{ active: true }">
            <template v-if="masterIndex !== -1">
              <el-image fit="cover" class="data-img" :src="imagList[masterIndex].img" />
              <el-image class="close" :src="require('../access/close-icon.png')" @click="detele('M')" />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
            </template>
          </div>
          <div class="master-title">Master</div>
          <div class="blazon-box">
            <template v-if="blazonIndex !== -1">
              <el-image fit="cover" class="data-img" :src="imagList[blazonIndex].img" />
              <el-image class="close" :src="require('../access/close-icon.png')" @click="detele('B')" />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
            </template>
          </div>
          <div class="master-title">Blazon</div>
          <div class="button-next" @click="next">Next</div>
        </div>
        <div class="right-box">
          <div class="title">Select a Master & Blazon</div>
          <div class="image-list">
            <div
              v-for="(item, index) in imagList"
              :key="index"
              class="image-item"
              :class="{
                selectMaster: masterIndex === index,
                selectBlazon: blazonIndex === index,
              }"
            >
              <!-- <img :src="item.img" alt="" class="img"> -->
              <el-image :src="item.img" class="img" />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
              <div class="hover-mark">
                <img class="enlarge-icon" src="../icons/enlarge.png" alt="" @click="enlargeProduct(item)">
                <!-- <el-image class="show-image-btn" /> -->
                <div class="select-item">
                  <div @click="setDataStatus(index, 'M')">Master</div>
                  <div @click="setDataStatus(index, 'B')">Blazon</div>
                </div>
                <!-- <div class="mask" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <enlarge-product v-if="isShowEnlarge" :enlarge-data="enlargeData" />
    <guide-page v-if="isShowGuidPage" @skip="setMaster" />
  </div>
</template>
<script>
import enlargeProduct from './components/enlarge.vue'
import GuidePage from './components/guide-page.vue'
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
      curIndex: -1,
      enlargeData: {},
      masterIndex: -1,
      blazonIndex: -1,
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
  methods: {
    next() {
      if (this.masterIndex === -1 || this.blazonIndex === -1) {
        this.$message({
          message: 'Please complete the form',
          type: 'warning'
        })
        return
      }
      this.$router.push({
        name: 'EditBlazon', query: {
          masterIndex: this.masterIndex,
          blazonIndex: this.blazonIndex
        }
      })
    },
    setMaster() {
      this.isShowGuidPage = false
      this.masterIndex = this.curIndex
    },
    setDataStatus(index, type) {
      switch (type) {
        case 'M':
          this.curIndex = index
          this.isShowGuidPage = true
          break
        default:
          this.blazonIndex = index
      }
    },
    detele(type) {
      switch (type) {
        case 'M':
          this.masterIndex = -1
          break
        default:
          this.blazonIndex = -1
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
      height: 794px;
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
            content: ' ';
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
          position: relative;
          &.selectMaster,
          &.selectBlazon {
            &::before {
              position: absolute;
              content: ' ';
              width: 295px;
              left: -9.5px;
              top: -8.5px;
              height: 385px;
              border: 4px solid #da6464;
              border-radius: 15px;
            }
            .select-item {
              display: none !important;
            }
          }
          &.selectBlazon {
            &::before {
              border: 4px solid #464952;
            }
          }
          .el-image {
            width: 100%;
            height: 100%;
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
            text-align: center;
            font-size: 12px;
            color: #f5f5f5;
            position: absolute;
            bottom: 0;
            &::before {
              content: ' ';
              filter: blur(10px);
              position: absolute;
              z-index: -1;
              left: 0;
              right: 0;
              filter: blur(10px);
              height: 100%;
              width: 100%;
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
                width: 130px;
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
