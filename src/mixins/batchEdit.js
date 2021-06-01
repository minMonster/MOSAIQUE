export default {
  data() {
    return {
      batch_types: {}
    }
  },
  mounted() {
  },
  methods: {
    deepEdit(keys, obj, value) {
      if (typeof keys === 'string') {
        keys = keys.split('.')
      }
      if (keys.length > 1) {
        // copy 一份 keys，防止修改源数据
        keys = [...keys]
        const key = keys.shift()
        this.deepEdit(keys, obj[key], value)
      } else {
        obj[keys[0]] = value
      }
    },
    editValue(type, tableList) {
      if (tableList.length > 0) {
        this.$prompt(this.$t('form_schema.please_enter') + this.$t(this.batch_types[type].nameI18n), this.$t('goodsManage.batch_editing'), {
          confirmButtonText: this.$t('common.sure'),
          cancelButtonText: this.$t('common.cancel'),
          inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
          inputErrorMessage: this.$t('route.require') + ' ' + this.$t(this.batch_types[type].nameI18n)
        }).then(({ value }) => {
          tableList.forEach(i => {
            this.deepEdit(this.batch_types[type].key, i, value)
          })
          this.$message.success(this.$t('route.success'))
        }).catch((err) => {
          console.log(err)
          this.$message({
            type: 'info',
            message: this.$t('common.cancel')
          })
        })
      }
    }
  }
}
