export default {
  data() {
    return {
      _ready: false
    }
  },
  mounted() {
    this.$emit('ready')
  },
  methods: {
    // 扩展 onReady 方法, 当组件 mounted 时触发 callback
    onReady(callback) {
      return new Promise($resolve => {
        const resolve = () => {
          this._ready = true
          $resolve()
          callback && callback()
        }

        if (this._ready) {
          resolve()
        } else {
          this.$on('ready', resolve)
        }
      })
    }
  }
}
