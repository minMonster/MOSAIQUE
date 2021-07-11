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

// 盖章
export function mint(data) {
  return request(
    {
      url: 'pbttm.do',
      method: 'post',
      data
    }
  )
}

// 提拔
export function inscriptionMint(data) {
  return request(
    {
      url: 'pbttd.do',
      method: 'post',
      data
    }
  )
}
