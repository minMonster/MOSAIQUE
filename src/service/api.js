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

// 获取平台收录NFT合约地址
export function getNftContractAddr(data) {
  return request(
    {
      url: 'pbgcp.do',
      method: 'post',
      data
    }
  )
}

// 获取当前钱包地址用户信息（头像、昵称、介绍）
export function getUserInfo(data) {
  return request(
    {
      url: 'pbqui.do',
      method: 'post',
      data
    }
  )
}

// 修改用户信息
export function modifyUserInfo(data) {
  return request(
    {
      url: 'pbsui.do',
      method: 'post',
      data
    }
  )
}
// 修改用户信息前 - 获取签名参数
export function getModifyParams(data) {
  return request(
    {
      url: 'pbgsp.do',
      method: 'post',
      data
    }
  )
}

// 修改用户信息前 - 校验签名参数，获得token
export function getModifyToken(data) {
  return request(
    {
      url: 'pbcls.do',
      method: 'post',
      data
    }
  )
}

