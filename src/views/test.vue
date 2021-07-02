<template>
  <div class="test">
    <div class="images">
      <el-image
        style="width: 300px;height:300px;"
        :src="downImg"
      />
      <div ref="image-box" style="margin: 0;width: 300px;height:300px;">
        <vue-cropper
          ref="cropper"
          class="ccccc"
          style="margin: 0 auto;width: 300px;height:300px;"
          :src="imgSrc"
          rotatable
          :background="false"
          drag-mode="move"
          :auto-crop="false"
          alt="Source Image"
        />
      </div>
    </div>
    <div>
      <p>艺术字</p>
      <div ref="word-art" class="word-art text">{{ wordArtTest }}<span style="color: pink;">123213</span></div>
      <el-input v-model="wordArtTest" />
    </div>
    <el-button @click="download">截图</el-button>
    <el-button @click="wordArtToCro">艺术字</el-button>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'
import 'cropperjs/dist/cropper.css'
export default {
  name: 'Test',
  components: { VueCropper },
  data: function() {
    return {
      wordArtTest: '',
      imgSrc: require('../access/tianshu.jpg'),
      downImg: ''
    }
  },
  methods: {
    wordArtToCro() {
      const domNode = this.$refs['image-box']
      const scale = 10
      domtoimage.toJpeg(this.$refs['image-box'], {
        width: domNode.clientWidth * scale,
        height: domNode.clientHeight * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left'
        }}).then(dataUrl => {
        this.downImg = dataUrl
        this.$refs.cropper.replace(dataUrl)
      })
      // html2canvas(this.$refs['word-art'], {
      //   dpi: 300
      // }).then(canvas => {
      //   const dataURL = canvas.toDataURL('image/png')
      //   this.downImg = dataURL
      //   this.$refs.cropper.replace(dataURL)
      //   console.log(dataURL)
      // })
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
        }}).then(dataUrl => {
        this.downImg = dataUrl
      })
      // html2canvas(this.$refs['image-box'], {
      //   dpi: 300
      // }).then(canvas => {
      //   const dataURL = canvas.toDataURL('image/png')
      //   this.downImg = dataURL
      //   console.log(dataURL)
      // })
    }
  }
}
</script>
<style lang="scss">
.test {
  .images {
    display: flex;
  }
  .ccccc {
    background: url("../access/nico.jpg");
    background-size: 100% 100%;
  }
  .word-art {
    color: red;
  }
  .word-art {
    display: inline-block;
    font-size: 30px;
    // transform: scale(0.5);
    // text-shadow: 3px 3px 0 yellow, 6px 6px 0 blue, 9px 9px red, 12px 12px 0 black;
    // font-family: var(--ff-title);
    // font-weight: var(--fw-title);
    // text-transform: uppercase;
    // font-size: 190px;
    // text-align: center;
    // margin: 0;
    // color: #ee6352;
  }
}
</style>
