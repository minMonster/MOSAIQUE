const binanceChainId = 1000 // 币安链id
const htChainId = 128
const defaultDecimals = 18 // 默认精度
const slipPages = [0.1, 0.5, 1] // 滑点
const ceaseTime = 60 // swap time 单位：秒
const fee = 0.0025 // 手续费比例
const maxNum = '999999999999999999999999999999999' // 最大授权值
const BNB = 'BNB' // 主币
const wBNB = 'WBNB' //
const HT = 'HT'
const wHT = 'WHT'
const coin = 'DDX' // 平台币名称
const baseDigit = 0.0000000001
const txBaseUrl = 'https://bscscan.com/tx/' // 交易查询地址
const addressBaseUrl = 'https://bscscan.com/address/' // 地址信息
const symbolBaseUrl = 'https://xxddexx.oss-cn-guangzhou.aliyuncs.com/tokens/'
const mainCoin = {
  value: '',
  symbol: BNB,
  chain_id: binanceChainId,
  icon: symbolBaseUrl + BNB + '.png',
  token_decimal: defaultDecimals,
  token_address: '',
  txBaseUrl: 'https://bscscan.com/tx/',
  addressBaseUrl: 'https://bscscan.com/address/'
}
const mainCoinHT = {
  value: '',
  symbol: HT,
  chain_id: htChainId,
  icon: symbolBaseUrl + HT + '.png',
  token_decimal: defaultDecimals,
  token_address: '', 
  txBaseUrl: 'https://hecoinfo.com/tx/',
  addressBaseUrl: 'https://hecoinfo.com/address/'
}
let bscChainConfig = [{
  chainId: '0x38',
  chainName: 'BSC',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com/']
}]
let hecoChainConfig = [{
  chainId: '0x80',
  chainName: 'HECO',
  nativeCurrency: {
    name: 'HT',
    symbol: 'HT',
    decimals: 18
  },
  rpcUrls: ['https://94.74.87.188:8545'],
  blockExplorerUrls: ['https://hecoinfo.com/'],
}]
const chainConfigs = [bscChainConfig, hecoChainConfig]
const mainCoins = [ mainCoin, mainCoinHT ]


export default { binanceChainId, defaultDecimals, slipPages, ceaseTime, fee, BNB, wBNB, baseDigit, coin, mainCoin,
  txBaseUrl, addressBaseUrl, symbolBaseUrl, maxNum, chainConfigs, HT, wHT, mainCoinHT, mainCoins
}
