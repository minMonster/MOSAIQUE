import request from '@/service'

// 获取 nft 图片列表
export function getImages() {
  return request(
    {
      url: 'pbgpm.do',
      method: 'post',
      data: {
        'keyinfo': 'oss_image'
      }
    }
  )
}

/**
   * 获取 newTokenUrl
   * 文档地址：http://124.71.16.205:15566/mosaique/doc/blob/master/api.md
   */
export function getNewtokenUrl(data) {
  return request(
    {
      url: 'pbiwm.do',
      method: 'post',
      data
    }
  )
}

/**
   * mint
   * 文档地址：http://124.71.16.205:15566/mosaique/doc/blob/master/api.md
   */
export function mint(data) {
  return request(
    {
      url: 'pbiwmm.do',
      method: 'post',
      data
    }
  )
}
// 提拔
export function getInscriptionNewtokenUrl(data) {
  return request(
    {
      url: 'pbihd.do',
      method: 'post',
      data
    }
  )
}

// 提拔
export function inscriptionMint(data) {
  return request(
    {
      url: 'pbihdm.do',
      method: 'post',
      data
    }
  )
}

// get snapshots
export function getSnapshots(data) {
  return request(
    {
      url: 'pbgsl.do',
      method: 'get',
      data
    }
  )
}

// get snapshots
export function createSnapshotSupply(data) {
  return request(
    {
      url: 'pbcss.do',
      method: 'post',
      data
    }
  )
}
