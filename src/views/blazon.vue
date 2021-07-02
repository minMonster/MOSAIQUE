<template>
  <div class="blazon">
    <section class="section-1">
      <div class="edition-center">
        <div class="left-box">
          <div class="title">
            Recently Used
          </div>
          <div class="master-box" :class="{ active: true }">
            <template v-if="masterData">
              <el-image fit="cover" class="data-img" :src="masterData.img" />
              <el-image
                class="close"
                :src="require('../access/close-icon.png')"
              />
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
              <el-image
                class="close"
                :src="require('../access/close-icon.png')"
              />
              <div class="dec">
                <p class="name">Collection name</p>
                <p class="type">Artwork</p>
              </div>
            </template>
          </div>
          <div class="master-title">Blazon</div>
          <div class="button-next">Next</div>
        </div>
        <div class="right-box">
          <div class="title">Select a Master & Blazon</div>
          <div class="image-list">
            <div
              v-for="item in imagList"
              :key="item"
              class="image-item"
              :class="{ selectMaster: true, selectBlazon: true }"
              @click="selectData(item)"
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
                  <div>Master</div>
                  <div>Blazon</div>
                </div>
                <!-- <div class="mask" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <enlarge-product v-if="isShowEnlarge" :enlarge-data="enlargeData" />
  </div>
</template>
<script>
import enlargeProduct from './components/enlarge.vue'
export default {
  name: 'Blazon',
  components: {
    enlargeProduct
  },
  data: function() {
    return {
      isShowEnlarge: false,
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
          img: require('../access/img-1@2x.png'),
          type: 'M'
        },
        {
          img: require('../access/img-2@2x.png'),
          type: 'B'
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
    selectData(item) {
      switch (item.type) {
        case 'M':
          this.masterData.img = item.img
          break
        default:
          this.blazonData.img = item.img
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
            bottom: 0;
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
            .enlarge-icon{
              width: 20px;
              height: 20px;
              position: absolute;
              right: 10px;
              top: 20px
            }
            .select-item {
              margin-top: 350px;
              display: flex;
              justify-content: space-around;
              div{
                width: 130px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                border-radius: 10px;
                background-color: rgba(187, 182, 182, 0.5);
                color: #FFFEFE;
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
