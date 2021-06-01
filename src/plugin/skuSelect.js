import { showSkuSelect } from '@/components/SkuSelect'

const SkuSelectPlugin = {
  install(Vue) {
    Vue.prototype.$showSkuSelect = showSkuSelect
  }
}

export default SkuSelectPlugin
