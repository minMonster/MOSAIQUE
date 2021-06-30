<template>
  <div class="test">
    <div class="images">
      <el-image
        style="margin: 0 auto;width: 300px;height:300px;"
        :src="downImg"
      />
      <div ref="image-box" style="margin: 0 auto;width: 300px;height:300px;">
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
      <h1>艺术字</h1>
      <span ref="word-art" class="word-art">{{ wordArtTest }}</span>
      <el-input v-model="wordArtTest" />
    </div>
    <el-button @click="download">截图</el-button>
    <el-button @click="wordArtToCro">艺术字</el-button>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
import html2canvas from 'html2canvas'
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
      html2canvas(this.$refs['word-art'], {
        backgroundColor: null
      }).then(canvas => {
        const dataURL = canvas.toDataURL('image/png')
        this.downImg = dataURL
        this.$refs.cropper.replace(dataURL)
        console.log(dataURL)
      })
    },
    download() {
      html2canvas(this.$refs['image-box'], {
        backgroundColor: null
      }).then(canvas => {
        const dataURL = canvas.toDataURL('image/png')
        this.downImg = dataURL
        console.log(dataURL)
      })
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
}
</style>
