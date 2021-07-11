<template>
  <div class="edit-blazon">
    <div class="edition-center">
      <div class="left" style="position: relative;">
        <el-image
          v-if="status === 2"
          class="minted-image"
          style="width: 431px;position: relative;"
          :src="mintedImage"
        />
        <el-image
          v-if="status === 0 || status === 1"
          ref="master"
          :src="masterSrc"
          style="width: 431px;position: relative;"
        />
        <div
          v-if="status === 0 || status === 1"
          ref="blazon"
          v-drag="status===0"
          style="top: 230px;left: 0;"
          class="blazon-box"
          :style="{
            left: blazonX + 'px',
            top: blazonY + 'px',
            transform:
              'scale(' + blazonZoom + ') ' + 'rotateZ(' + blazonDeg + 'deg)'
          }"
          @mousemove="bMousemove"
        >
          <span class="decorate-left">@theworId</span>
          <span class="text" v-html="introduceText" />
          <span class="decorate-right">@elonmusk</span>
        </div>
        <!-- <el-image
          v-if="status === 0 || status === 1"
          ref="blazon"
          v-drag="status===0"
          style="left: 0;top: 230px;position: absolute;width: 431px"
          :src="blazonSrc"
          :style="{
            transform:
              'scale(' + blazonZoom + ') ' + 'rotateZ(' + blazonDeg + 'deg)'
          }"
          @mousemove="bMousemove"
        /> -->
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
        <div v-if="status === 0" class="options">
          <i class="el-icon-circle-plus" @click="optionClick('plus')" />
          <i class="el-icon-remove" @click="optionClick('remove')" />
          <i class="el-icon-caret-left" @click="optionClick('left')" />
          <i class="el-icon-caret-right" @click="optionClick('right')" />
          <i class="el-icon-caret-bottom" @click="optionClick('bottom')" />
          <i class="el-icon-caret-top" @click="optionClick('top')" />
          <i
            class="el-icon-refresh-right"
            @click="optionClick('refresh-right')"
          />
          <i
            class="el-icon-refresh-left"
            @click="optionClick('refresh-left')"
          />
        </div>
        <div
          v-if="status === 2"
          class="dow"
          :style="{ top: 画板高度 + 230 + 'px' }"
        >
          <p class="title-tip">Minted!</p>
          <p class="item-info"><label>Time</label>2021.04.19,08:15pm EST</p>
          <p class="item-info">
            <label>Collection</label>Imprint Rarible<span>(0x79544b2341067e9bb314a67f6d7495908b047e)</span>
          </p>
          <p class="item-info"><label>Token ID</label>23456</p>
          <p class="item-info"><label># of Imprints</label>1</p>
        </div>
      </div>
      <div class="right">
        <div v-if="status === 0" class="right-mint-box">
          <p class="return-icon" @click="$route.go(-1)">
            <img src="../icons/return.png" alt="">
          </p>
          <div class="set-message">
            <p class="title">Edit Inscription</p>
            <p class="label">Master</p>
            <p class="introduce">The NFT Song</p>
            <p class="label">Inscription</p>
            <div>
              <el-input v-model="introduceText" />
            </div>
            <div
              ref="blazon-img"
              class="blazon-box"
            >
              <span class="decorate-left">@theworId</span>
              <span class="text" v-html="introduceText" />
              <span class="decorate-right">@elonmusk</span>
            </div>
            <p class="label">Style</p>
            <div class="introduce-items">
              <div class="item">
                123
              </div>
              <div class="item">
                123
              </div>
              <div class="item">
                123
              </div>
              <div class="item">
                123
              </div>
              <div class="item">
                123
              </div>
              <div class="item">
                123
              </div>
            </div>
            <p class="label">Font Size</p>
            <div class="coordinate-mess">
              <div class="itme">
                <el-input :value="blazonX" size="small" @input="xChange" />
              </div>
            </div>
            <p class="label">Coordinate</p>
            <div class="coordinate-mess">
              <div class="itme">
                <span style="margin-right: 10px">X</span>
                <el-input :value="blazonX" size="small" @input="xChange" />
              </div>
              <div class="itme">
                <span style="margin-left: 10px; margin-right: 10px">Y</span>
                <el-input :value="blazonY" size="small" @input="yChange" />
              </div>
            </div>
            <p class="label">Size</p>
            <div class="coordinate-mess size-itme">
              <div class="itme">
                <el-input v-model="blazonZoom" size="small" /><span
                  style="margin-left: 10px"
                >
                  %</span>
              </div>
            </div>

            <p class="label" style="margin-top: 20px">Rotate</p>
            <div class="coordinate-mess size-itme">
              <div class="itme">
                <el-input v-model="blazonDeg" style="" size="small" /><span
                  style="margin-left: 10px"
                >
                  °</span>
              </div>
            </div>
            <div class="icon-box">
              <img src="../icons/icon-3.png" alt="">
              <img src="../icons/icon-2.png" alt="">
            </div>
            <p
              class="label"
              style="margin-top: 55px; margin-bottom: 17px; font-weight: bold"
            >
              Estimated Gas
            </p>
            <p style="font-size: 14px; font-weight: bold">
              0.0245 ETH (about $54.53)
            </p>
            <p class="btn" @click="download">Mint</p>
          </div>
        </div>
        <template v-if="status === 1">
          <el-image
            style="margin-top: 300px"
            :src="require('../access/Loading_20210708.gif')"
          />
        </template>
        <div v-if="status === 2" class="minted-btn" @click="">
          Imprint another one
        </div>
      </div>
    </div>
    <div
      ref="blazon-img"
      style="position: relative;left: 0;top: 0;display: inline-block"
      class="blazon-box"
      :style="{
      }"
      @mousemove="bMousemove"
    >
      <span class="decorate-left">@theworId</span>
      <span class="text" v-html="introduceText" />
      <span class="decorate-right">@elonmusk</span>
    </div>
  </div>
</template>
<script>
// import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import domtoimage from 'dom-to-image'
import * as api from '@/service/api'

export default {
  name: 'EditButton',
  // components: { VueCropper },
  data() {
    return {
      introduceText: '',
      blazonZoom: 1,
      blazonDeg: 0,
      blazonX: 0,
      blazonY: 230,
      masterSrc: '',
      blazonSrc: '',
      masterIndex: 0,
      blazonIndex: 0,
      cropperDom: null,
      masterWidth: 431,
      画板高度: 0,
      status: 0, // 0: edit , 1: loading, 2: minted
      mintedImage: '',
      blazonImgWidth: 120
    }
  },
  created() {
    const { master } = this.$route.query
    const imgM = new Image()
    const that = this
    imgM.src = master
    imgM.onload = function() {
      that.masterSrc = master
      that.masterWidth = this.width
    }
  },
  mounted() {
    this.cropperDom = this.$refs.cropper
  },
  methods: {
    xChange(e) {
      const blazonDom = this.$refs['blazon']
      blazonDom.style.left = parseInt(e || 0) + 'px'
      this.blazonX = parseInt(blazonDom.style.left)
    },
    yChange(e) {
      const blazonDom = this.$refs['blazon']
      blazonDom.style.top = parseInt(e || 0) + 'px'
      this.blazonY = parseInt(blazonDom.style.top)
    },
    bMousemove() {
      const blazonDom = this.$refs['blazon']
      this.blazonX = parseInt(blazonDom.style.left)
      this.blazonY = parseInt(blazonDom.style.top)
    },
    download() {
      const bDom = this.$refs['blazon'].getBoundingClientRect()
      const mDom = this.$refs['master'].$el.getBoundingClientRect()
      const bDomX = bDom.left
      const bDomY = bDom.top
      const bDomW = bDom.width
      const bDomH = bDom.height
      const mDomX = mDom.left
      const mDomY = mDom.top
      const mDomW = mDom.width
      const mDomH = mDom.height
      const X边界值 = bDomX < mDomX ? bDomX : mDomX
      const Y边界值 = bDomY < mDomY ? bDomY : mDomY
      const 画板宽度 = (bDomX + bDomW > mDomX + mDomW ? bDomX + bDomW : mDomX + mDomW) - X边界值
      const 画板高度 = (bDomY + bDomH > mDomY + mDomH ? bDomY + bDomH : mDomY + mDomH) - Y边界值
      this.画板高度 = 画板高度
      const zoom = mDomW / this.masterWidth
      const bZoom = this.blazonZoom
      this.status = 1
      const scale = 2
      this.blazonImgWidth = bDomW
      console.log(this.$refs['blazon-img'].clientWidth)
      domtoimage.toPng(this.$refs['blazon-img'], {
        width: this.$refs['blazon-img'].getBoundingClientRect().width * scale,
        height: this.$refs['blazon-img'].getBoundingClientRect().height * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left'
        }
      }).then(e => {
        api.inscriptionMint({
          drawing_board_width: Number(画板宽度 / zoom).toFixed(0) + '',
          drawing_board_height: Number(画板高度 / zoom).toFixed(0) + '',
          master_contract: this.masterSrc,
          master_tokenid: '2106',
          master_x: Number((mDomX - X边界值) / zoom).toFixed(0) + '',
          master_y: Number((mDomY - Y边界值) / zoom).toFixed(0) + '',
          image_txt: e.split(',')[1],
          image_txt_x: Number((bDomX - X边界值) / zoom).toFixed(0) + '',
          image_txt_y: Number((bDomY - Y边界值) / zoom).toFixed(0) + '',
          image_txt_rotate: Number(this.blazonDeg).toFixed(0) + '',
          image_txt_scale: Number(bZoom / zoom / scale).toFixed(2) + '',
          jsoninfo: '7b0a20202020227469746c65223a202262756c6c222c0a2020202022696d6167655f75726c223a202268747470733a2f2f696d67312e6d706179732e696f2f6d7061792f696d672f616e696d616c2f636174746c652f62756c6c2e706e67220a7d'
        })
          .then(res => {
            this.status = 2
            this.mintedImage = res.data.compose_image
          })
      })
    },
    optionClick(type) {
      const blazonDom = this.$refs['blazon']
      console.log(blazonDom)
      switch (type) {
        case 'plus':
          this.blazonZoom += 0.1
          break
        case 'remove':
          this.blazonZoom -= 0.1
          break
        case 'left':
          blazonDom.style.left = parseInt(blazonDom.style.left || 0) - 10 + 'px'
          this.blazonX = parseInt(blazonDom.style.left)
          break
        case 'right':
          blazonDom.style.left = parseInt(blazonDom.style.left || 0) + 10 + 'px'
          this.blazonX = parseInt(blazonDom.style.left)
          break
        case 'bottom':
          blazonDom.style.top = parseInt(blazonDom.style.top || 0) + 10 + 'px'
          this.blazonY = parseInt(blazonDom.style.top)
          break
        case 'top':
          blazonDom.style.top = parseInt(blazonDom.style.top || 0) - 10 + 'px'
          this.blazonY = parseInt(blazonDom.style.top)
          break
        case 'refresh-right':
          this.blazonDeg += 45
          break
        case 'refresh-left':
          this.blazonDeg -= 45
          break
      }
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
}
</script>
<style lang="scss">
.edit-blazon {
  background-color: #f5f5f5;
   .blazon-box {
        position: absolute;
        top: 230px;
        left: 0;
        height: 60px;
        background-color: #fff;
        padding: 0 20px;
        .decorate-left {
          position: absolute;
          color: #DA6464;
          left: 10px;
          top: 5px;
        }
        .text {
          display: block;
          line-height: 60px;
          font-size: 20px;
          min-width: 100px;
        }
        .decorate-right {
          position: absolute;
          color: #DA6464;
          right: 10px;
          bottom: 5px;
        }
      }
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
      .blazon-box {
        position: absolute;
        top: 230px;
        left: 0;
        height: 60px;
        background-color: #fff;
        padding: 0 20px;
        .decorate-left {
          position: absolute;
          color: #DA6464;
          left: 10px;
          top: 5px;
        }
        .text {
          display: block;
          line-height: 60px;
          min-width: 100px;
        }
        .decorate-right {
          position: absolute;
          color: #DA6464;
          right: 10px;
          bottom: 5px;
        }
      }
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
        background-image: url("../access/nico.jpg");
        background-size: 100% auto;
      }
      .dow {
        padding-left: 140px;
        position: absolute;
        top: 0;
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
    }
    .right {
      width: 316px;
      min-height: 1000px;
      margin-top: 158px;
      margin-bottom: 252px;
      box-sizing: border-box;
      position: relative;
      .blazon-box {
        position: relative;
        display: none;
      }
      .introduce-items {
        display: flex;
        flex-wrap: wrap;
      }
      .right-mint-box {
        padding: 40px;
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
      }
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
          .itme {
            display: flex;
            align-items: center;
          }
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
  .minted-btn {
    width: 309px;
    height: 43px;
    background: #da6464;
    border-radius: 22px;
    text-align: center;
    line-height: 43px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 300px;
  }
}
</style>
