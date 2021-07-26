import development from './development'
import production from './production'

const config = process.env.NODE_ENV == 'development' ? development : production
// const config = development

const {
  binanceChainId, defaultDecimals, slipPages, ceaseTime, fee, BNB, wBNB, baseDigit, coin, mainCoin,
  txBaseUrl, addressBaseUrl, symbolBaseUrl, maxNum, chainConfigs, HT, wHT, mainCoinHT, mainCoins
} = config

export {
  binanceChainId, defaultDecimals, slipPages, ceaseTime, fee, BNB, wBNB, baseDigit, coin, mainCoin,
  txBaseUrl, addressBaseUrl, symbolBaseUrl, maxNum, chainConfigs, HT, wHT, mainCoinHT, mainCoins
}
