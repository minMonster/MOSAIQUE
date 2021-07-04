<template>
  <div class="edit-blazon">
    <div class="edition-center">
      <div class="left">
        <div ref="image-box" style="width: 431px; height: 431px">
          <vue-cropper
            ref="cropper"
            class="ccccc"
            :style="{background: 'url(' + masterSrc + ')'}"
            style="width: 431px; height: 431px"
            :src="blazonSrc"
            rotatable
            :background="false"
            drag-mode="move"
            :auto-crop="false"
            alt="Source Image"
            @cropmove="cropmove"
            @zoom="zoom"
            @ready="ready"
          />
        </div>
        <div class="options">
          <i class="el-icon-circle-plus" @click="optionClick('plus')" />
          <i class="el-icon-remove" @click="optionClick('remove')" />

          <i class="el-icon-caret-left" @click="optionClick('left')" />
          <i class="el-icon-caret-right" @click="optionClick('right')" />
          <i class="el-icon-caret-bottom" @click="optionClick('bottom')" />
          <i class="el-icon-caret-top" @click="optionClick('top')" />

          <i class="el-icon-refresh-right" @click="optionClick('refresh-right')" />
          <i class="el-icon-refresh-left" @click="optionClick('refresh-left')" />
        </div>
      </div>
      <div class="right">
        <p class="return-icon" @click="$route.go(-1)">
          <img src="../icons/return.png" alt="">
        </p>
        <div class="set-message">
          <p class="title">Edit Blazon</p>
          <p class="label">Master</p>
          <p class="introduce">The NFT Song</p>
          <p class="label">Blazon</p>
          <p class="introduce">Pot</p>
          <p class="label">Coordinate</p>
          <div class="coordinate-mess">
            <div class="itme">
              <span>X</span> <el-input v-model="parameter.left" disabled size="small" />
            </div>
            <div class="itme">
              <span>Y</span> <el-input v-model="parameter.top" disabled size="small" />
            </div>
          </div>
          <p class="label">Size</p>
          <div class="coordinate-mes size-itme">
            <div class="itme">
              <span>width</span> <el-input v-model="parameter.width" disabled size="small" />
            </div>
            <div class="itme">
              <span>height</span> <el-input v-model="parameter.height" disabled size="small" />
            </div>
          </div>
          <!-- <p class="label">Scale</p>
          <div class="coordinate-mes size-itme">
            <div class="itme">
              <span>ScaleX</span> <el-input v-model="parameter.XCoordinate" size="small" />
            </div>
            <div class="itme">
              <span>ScaleY</span> <el-input v-model="parameter.YCoordinate" size="small" />
            </div>
          </div> -->

          <p class="label" style="margin-top: 20px;">Rotate</p>
          <div class="rotate-itme">
            <el-input v-model="parameter.rotate" disabled style="width: 90px; display: inline-block" size="small" /><span>°</span>
          </div>
          <div class="icon-box">
            <img src="../icons/icon-3.png" alt="">
            <img src="../icons/icon-2.png" alt="">
          </div>
          <p class="label" style="margin-top: 55px; margin-bottom: 17px; font-weight: bold">Estimated Gas</p>
          <p style="font-size: 14px; font-weight: bold">0.0245 ETH (about $54.53)</p>
          <p class="btn">Mint</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default ({
  name: 'EditButton',
  components: { VueCropper },
  data() {
    return {
      masterSrc: require('../access/tianshu.jpg'),
      blazonSrc: require('../access/img-1@2x.png'),
      parameter: {
        left: 0,
        top: 0,
        rotate: 0,
        width: 0,
        height: 0
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
      ],
      masterIndex: 0,
      blazonIndex: 0,
      cropperDom: null
    }
  },
  created() {
    const { masterIndex, blazonIndex } = this.$route.query
    // this.masterIndex = Number(masterIndex)
    // this.blazonIndex = Number(blazonIndex)
    this.masterSrc = this.imagList[Number(masterIndex)].img
    this.blazonSrc = this.imagList[Number(blazonIndex)].img
  },
  mounted() {
    this.cropperDom = this.$refs.cropper
    console.log(this.cropperDom)
  },
  methods: {
    optionClick(type) {
      console.log('1231312')
      switch (type) {
        case 'plus':
          this.cropperDom.relativeZoom(0.1)
          break
        case 'remove':
          this.cropperDom.relativeZoom(-0.1)
          break
        case 'left':
          this.cropperDom.move(-10, 0)
          break
        case 'right':
          this.cropperDom.move(10, 0)
          break
        case 'bottom':
          this.cropperDom.move(0, 10)
          break
        case 'top':
          this.cropperDom.move(0, -10)
          break
        case 'refresh-right':
          this.cropperDom.rotate(45)
          break
        case 'refresh-left':
          this.cropperDom.rotate(-45)
          break
      }
      const { left, top } = this.cropperDom.getCanvasData()
      const { rotate, width, height } = this.cropperDom.getImageData()
      this.parameter = { left, top, rotate: rotate | 0, width, height }
      console.log(`left: ${left}`, `top: ${top}`, `rotate: ${rotate | 0}`, `width: ${width}`, `height: ${height}`)
    },
    ready() {
      this.optionClick()
    },
    cropmove() {
      this.optionClick()
    },
    zoom() {
      this.optionClick()
    }
  }

})
</script>
<style lang="scss">
.edit-blazon {
  background-color: #f5f5f5;
  .edition-center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    display: flex;
  }
  .left {
    flex: 1;
    display: flex;
    padding-top: 303px;
    align-items: center;
    flex-direction: column;
    .options {
        margin-top: 20px;
        font-size: 25px;
        user-select:none;
        i {
user-select:none;
            background-color: #454953;
            color: #fff;
        }
    }
    .cropper-modal {
        opacity: 0;
    }
    .ccccc {
      background: url('../access/nico.jpg');
      background-size: 100% 100%;
    }
  }
  .right {
    width: 316px;
    padding: 40px;
    background-color: #fff;
    margin-top: 158px;
    margin-bottom: 252px;
    box-sizing: border-box;
    position: relative;
    .return-icon {
      position: absolute;
      left: 0;
      top: -50px;
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

    .el-input {
      width: 70px;
      border: none;
      height: 20px;
      overflow: hidden;
      .el-input__inner {
        width: 70px;
        line-height: 20px;
        height: 20px;
        background-color: #ebebeb;
        border: none;
      }
    }
    .set-message {
      font-size: 14px;

      .title {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 32px;
      }
      .label {
        font-weight: bold;
        margin-bottom: 12px;
      }
      .introduce {
        margin-bottom: 24px;
      }
      .coordinate-mess {
        display: flex;
        overflow: hidden;
        margin-bottom: 19px;
        .coordinate-mess-itme {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-weight: bold;
            margin-right: 14px;
            color: #454953;
            font-size: 14px;
          }
          margin-right: 12px;
        }
      }
      .size-itme, .rotate-itme {
          display: flex;
          align-content: center;
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
        color: #ffffff;
        line-height: 43px;
        margin-top: 41px;
      }
    }
  }
}
</style>
