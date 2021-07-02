<template>
  <div class="blazon">
    <section class="section-1">
      <div class="edition-center">
        <div class="left-box">
          <div class="title">Recently Used</div>
          <div class="master-box" :class="{ active: true }">
            <template v-if="masterData">
              <el-image fit="cover" class="data-img" :src="masterData.img" />
              <el-image class="close" :src="require('../access/close-icon.png')" @click="detele('M')" />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
            </template>
          </div>
          <div class="master-title">Master</div>
          <div class="blazon-box">
            <template v-if="blazon">
              <el-image fit="cover" class="data-img" :src="blazonData.img" />
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
            <div v-for="item in imagList" :key="item" class="image-item" :class="{ selectMaster: true, selectBlazon: true }">
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
                  <div @click="setDataStatus(item.img, 'M')">Master</div>
                  <div @click="setDataStatus(item.img, 'B')">Blazon</div>
                </div>
                <!-- <div class="mask" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <enlarge-product v-if="isShowEnlarge" :enlarge-data="enlargeData" />
    <guide-page v-if="isShowGuidPage" />
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
      enlargeData: {},
      masterData: {
        img: ''
      },
      blazonData: {
        img: ''
      },
      blazon: {
        img: require('../access/img-1@2x.png')
      },
      imagList: [
        {
          img: require('../access/img-1@2x.png')
        },
        {
          img: require('../access/img-2@2x.png')
        },
        {
          img: require('../access/img-3@2x.png')
        },
        {
          img: require('../access/img-4@2x.png')
        },
        {
          img: require('../access/img-5@2x.png')
        },
        {
          img: require('../access/img-6@2x.png')
        }
      ]
    }
  },
  methods: {
    next() {
      this.isShowGuidPage = true
    },
    setDataStatus(item, type) {
      switch (type) {
        case 'M':
          this.masterData.img = item
          break
        default:
          this.blazonData.img = item
      }
    },
    detele(type) {
      switch (type) {
        case 'M':
          this.masterData.img = ''
          break
        default:
          this.blazonData.img = ''
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
          margin-bottom: 50px;
          width: 280px;
          height: 374px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .dec {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #f5f5f5;
            position: absolute;
            bottom: 20px;
            .name {
              margin-bottom: 10px;
            }
          }
          .hover-mark {
            display: none;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: auto;
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
