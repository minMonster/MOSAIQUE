/**
 * 监听 window.resize, 并赋予vue实例新的监听能力
 *
 * 屏幕大小变化时, 会触发 resize
 * 可以通过 this.$on('resize')监听
 *
 * 短暂延时后, 会再次触发 resizeLazy
 * 短时间内多次触发 resize, 只会触发一次 resizeLazy
 * 可以通过this.$on('resizeLazy')监听
 *
 * 延时的时间可以通过 this.resizeLazyTime__ = 毫秒数  的方式来设置, 该值默认 150毫秒
 *
 *
 * 内部变量, 函数 都加了下划线, 防止mixin时 与被混入的实例属性方法冲突
 */

import debounce from '@/utils/debounce'

export default {
  data() {
    return {
      resizeLazyTime__: 150
    }
  },
  watch: {
    resizeLazyTime__: {
      immediate: true,
      handler(time) {
        this.__emitResizeLazy = debounce(e => this.$emit('resizeLazy', e), time)
      }
    }
  },
  created() {
    this.__resizeCallback = this.onWindowResize__.bind(this)
    window.addEventListener('resize', this.__resizeCallback)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeCallback)
    this.__resizeCallback = null
  },
  methods: {
    onWindowResize__(e) {
      this.$emit('resize', e)
      this.__emitResizeLazy(e)
    }
  }
}
