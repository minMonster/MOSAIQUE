<template>
  <div class="edit-blazon">
    <div v-if="!downImg" class="edition-center">
      <div class="left" style="position: relative;">
        <el-image ref="master" :src="masterSrc" style="width: 431px;position: relative;" />
        <el-image ref="blazon" v-drag style="left: 0;top: 230px;position: absolute;width: 431px;" :src="require('../access/img/beeple-03-29-18.jpg')" :style="{transform:'scale('+blazonZoom+') ' + 'rotateZ('+blazonDeg+'deg)'}" />
        <!-- <div ref="image-box" style="width: 431px">
          <vue-cropper
            ref="cropper"
            class="ccccc"
            :style="{ backgroundImage: 'url(' + masterSrc + ')' }"
            style="width: 431px"
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
        </div> -->
        <div class="options">
          <i class="el-icon-circle-plus" @click="optionClick('plus')" />
          <i class="el-icon-remove" @click="optionClick('remove')" />
          <i class="el-icon-caret-left" @click="optionClick('left')" />
          <i class="el-icon-caret-right" @click="optionClick('right')" />
          <i class="el-icon-caret-bottom" @click="optionClick('bottom')" />
          <i class="el-icon-caret-top" @click="optionClick('top')" />
          <i class="el-icon-refresh-right" @click="optionClick('refresh-right')" />
          <i class="el-icon-refresh-left" @click="optionClick('refresh-left')" />
          <i class="el-icon-refresh-left" @click="getImgData" />
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
            <div class="itme"><span>X</span> <el-input v-model="parameter.left" disabled size="small" /></div>
            <div class="itme"><span>Y</span> <el-input v-model="parameter.top" disabled size="small" /></div>
          </div>
          <p class="label">Size</p>
          <div class="coordinate-mes size-itme">
            <div class="itme"><span>width</span> <el-input v-model="parameter.width" disabled size="small" /></div>
            <div class="itme"><span>height</span> <el-input v-model="parameter.height" disabled size="small" /></div>
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

          <p class="label" style="margin-top: 20px">Rotate</p>
          <div class="rotate-itme"><el-input v-model="parameter.rotate" disabled style="width: 90px; display: inline-block" size="small" /><span>°</span></div>
          <div class="icon-box">
            <img src="../icons/icon-3.png" alt="">
            <img src="../icons/icon-2.png" alt="">
          </div>
          <p class="label" style="margin-top: 55px; margin-bottom: 17px; font-weight: bold">Estimated Gas</p>
          <p style="font-size: 14px; font-weight: bold">0.0245 ETH (about $54.53)</p>
          <p class="btn" @click="download">Mint</p>
        </div>
      </div>
    </div>
    <div v-else class="edition-center-minted">
      <div class="top">
        <el-image style="width: 430px" :src="downImg" />
        <div class="btn" @click="$router.push({path:'/select-blazon'})">Imprint another one</div>
      </div>
      <div class="dow">
        <p class="title-tip">Minted!</p>
        <p class="item-info"><label>Time</label>2021.04.19,08:15pm EST</p>
        <p class="item-info"><label>Collection</label>Imprint Rarible<span>(0x79544b2341067e9bb314a67f6d7495908b047e)</span></p>
        <p class="item-info"><label>Token ID</label>23456</p>
        <p class="item-info"><label># of Imprints</label>1</p>
      </div>
    </div>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import domtoimage from 'dom-to-image'

export default ({
  name: 'EditButton',
  components: { VueCropper },
  data() {
    return {
      blazonZoom: 1,
      blazonDeg: 0,
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
      ],
      masterIndex: 0,
      blazonIndex: 0,
      cropperDom: null,
      downImg: false
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
  },
  methods: {
    getImgData() {
      const blazonDom = this.$refs['blazon']
      const masterDom = this.$refs['master']
      console.log(blazonDom, blazonDom.$el.style.left, blazonDom.$el.style.top)
      console.log(
        `left: ${masterDom.$el.offsetLeft - blazonDom.$el.offsetLeft}`,
        `top: ${masterDom.$el.offsetTop - blazonDom.$el.offsetTop}`,
        `zoom: ${this.blazonZoom}`,
        `initialWidth: ${blazonDom.$el.clientWidth}`,
        `initialHeight: ${blazonDom.$el.clientHeight}`,
        `width: ${blazonDom.$el.clientWidth * this.blazonZoom}`,
        `height: ${blazonDom.$el.clientHeight * this.blazonZoom}`,
      )
    },
    download() {
      const domNode = this.$refs['image-box']
      const scale = 2
      domtoimage.toJpeg(this.$refs['image-box'], {
        width: domNode.clientWidth * scale,
        height: domNode.clientHeight * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left'
        }
      }).then(dataUrl => {
        this.downImg = dataUrl
        window.localStorage.setItem('downImg', dataUrl)
      })
      // html2canvas(this.$refs['image-box'], {
      //   dpi: 300
      // }).then(canvas => {
      //   const dataURL = canvas.toDataURL('image/png')
      //   this.downImg = dataURL
      //   console.log(dataURL)
      // })
    },
    optionClick(type) {
      const blazonDom = this.$refs['blazon']
      switch (type) {
        case 'plus':
          this.blazonZoom += 0.1
          break
        case 'remove':
          this.blazonZoom -= 0.1
          break
        case 'left':
          blazonDom.$el.style.left = parseInt(blazonDom.$el.style.left || 0) - 10 + 'px'
          console.log(blazonDom.$el.style.left)
          break
        case 'right':
          blazonDom.$el.style.left = parseInt(blazonDom.$el.style.left || 0) + 10 + 'px'
          break
        case 'bottom':
          blazonDom.$el.style.top = parseInt(blazonDom.$el.style.top || 0) + 10 + 'px'
          break
        case 'top':
          blazonDom.$el.style.top = parseInt(blazonDom.$el.style.top || 0) - 10 + 'px'
          break
        case 'refresh-right':
          this.blazonDeg += 45
          break
        case 'refresh-left':
          this.blazonDeg -= 45
          break
      }
      // const { left, top } = this.cropperDom.getCanvasData()
      // const { rotate, width, height } = this.cropperDom.getImageData()
      // this.parameter = { left, top, rotate: rotate | 0, width, height }
      // console.log(`left: ${left}`, `top: ${top}`, `rotate: ${rotate | 0}`, `width: ${width}`, `height: ${height}`)
    },
    ready() {
      this.cropperDom.relativeZoom(-2)
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
    .left {
      flex: 1;
      display: flex;
      padding-top: 230px;
      align-items: center;
      flex-direction: column;
      .options {
        margin-top: 20px;
        font-size: 25px;
        user-select: none;
        i {
          user-select: none;
          background-color: #454953;
          color: #fff;
        }
      }
      .cropper-modal {
        opacity: 0;
      }
      .ccccc {
        background-image: url('../access/nico.jpg');
        background-size: 100% auto;
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
        .size-itme,
        .rotate-itme {
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

  .edition-center-minted {
    width: 1200px;
    margin: 0 auto;
    min-height: 1000px;
    position: relative;
    .top {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 153px;
    }
    .dow {
      padding-left: 140px;
      p {
        display: block;
        font-size: 14px;
        font-family: Verdana;
        font-weight: Regular;
        color: #454953;
        margin-bottom: 12px;
        span {
          color: #da6464;
        }
        label {
          width: 130px;
          color: #454953;
          font-weight: bold;

          display: inline-block;
        }
      }
      .title-tip {
        margin-top: 35px;
        margin-bottom: 52px;
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
      }
    }
    .btn {
      width: 309px;
      margin-left: 180px;
      height: 43px;
      background: #da6464;
      border-radius: 22px;
      font-size: 20px;
      font-family: Verdana;
      font-weight: bold;
      color: #ffffff;
      line-height: 43px;
      text-align: center;
    }
  }
}
</style>
