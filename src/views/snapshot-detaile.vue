<template>
  <div class="snapshot-detaile">
    <div class="edition-center">
      <div class="left">
        <el-image class="minted-image" :src="imageItem.uri || imageItem.image" />
      </div>
      <div v-if="imageItem.type === 'mint' || imageItem.type === 'created'" class="right">
        <section v-if="status == 0" class="edit">
          <h1>Select Price Curve</h1>
          <el-select v-model="priceCurve" :disabled="imageItem.type === 'mint'" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <div id="myChart" :style="{ width: '300px', height: '300px' }" />
          <el-form :disabled="imageItem.type === 'mint'" class="set-message">
            <p class="label">Time Limit</p>
            <div class="coordinate-mess">
              <div class="itme">
                <span style="margin-right: 10px">From</span>
                <el-input v-model="birth" size="small" />
              </div>
              <div class="itme">
                <span style="margin-left: 10px; margin-right: 10px">To</span>
                <el-input v-model="deadline" size="small" />
              </div>
            </div>
            <p class="label">Copy Limit</p>
            <div class="coordinate-mess size-itme">
              <div class="itme">
                <el-input v-model="totalSupply" size="small" />
              </div>
            </div>
            <p class="label">Initial Price</p>
            <div class="coordinate-mess size-itme">
              <div class="itme"><el-input v-model="initialPrice" size="small" /><span style="margin-left: 10px"> ETH</span></div>
            </div>
            <div v-if="imageItem && imageItem.type === 'created'" class="buttons">
              <p class="btn" @click="submit">Save</p>
              <p class="btn cancel" @click="$router.go(-1)">Cancel</p>
            </div>
            <div v-if="imageItem && imageItem.type === 'mint'" class="buttons">
              <p class="btn" @click="mintSubmit">Mint</p>
              <p class="btn cancel" @click="$router.go(-1)">Cancel</p>
            </div>
          </el-form>
        </section>
        <section v-if="status == -1" class="loading">
          <el-image :src="require('../access/Loading_20210708.gif')" />
        </section>
        <section v-if="status == 1" class="finished">
          <p class="title-tip">Finished!</p>
          <p class="title-tip black">The NFT Song</p>
          <p class="item-info"><label>Owner</label>zhangsan</p>
          <p class="item-info"><label>Time</label>2021.04.19,08:15pm EST</p>
          <p class="item-info">
            <label>Collection</label>Imprint Rarible<span>( {{ tx.blockHash.substring(0, 19) }}...{{ tx.blockHash.substring(tx.blockHash.length - 4, tx.blockHash.length) }})</span>
          </p>
          <p class="item-info"><label>Token ID</label>23456</p>
          <p class="item-info"><label># of Imprints</label>1</p>
          <div class="minted-btn">go to Imprint</div>
        </section>
      </div>
      <div v-if="imageItem.type === 'show'" class="right">
        <section class="show">
          <h2>The NFT Song <span>The {{ snapshotsMinted }}th Snapshot</span></h2>
          <p class="content">
            <label>Owner</label>
            <span class="red">elonmusk</span>
          </p>
          <p class="content">
            <label>Price Curve</label>
          </p>
          <div class="chart-box" :style="{ width: '350px', height: '350px' }">
            <div id="myChart" :style="{ width: '350px', height: '350px' }" />
            <div class="curve">Price Curve at {{ priceCurve }}</div>
            <div class="tips">Snapshot times</div>
          </div>
          <p class="content">
            <label>Price</label>
            <span>{{ initialPrice }} ETH</span>
          </p>
          <div class="minted-btn">SNAPSHOT Now!</div>
          <!-- <p>
            <label>Chain of Events</label>
          </p>
          Chain of Events -->
        </section>
      </div>
    </div>
  </div>
</template>
<script>
// import * as api from '@/service/api'
import { web3, eth } from '@/connector'
import * as api from '@/service/api'
import * as echarts from 'echarts'
import * as contract from '@/contract'
import { mapState } from 'vuex'

export default {
  name: 'SnapshotDetaile',
  data: function() {
    return {
      status: 0,
      initialPrice: 10,
      totalSupply: 100,
      priceCurve: 'const',
      birth: 0,
      deadline: 10,
      tx: null,
      options: [
        {
          value: 'const',
          label: 'Price curve at const'
        },
        {
          value: 'linear',
          label: 'Price curve at linear'
        },
        {
          value: 'exp',
          label: 'Price curve at exp'
        },
        {
          value: 'quad',
          label: 'Price curve at quad'
        }
      ],
      snapshotsMinted: 0,
      // imageItem: {
      //   address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      //   contract: '0x8F5D7348b71208D1025F84250722F9d6C35f27e1',
      //   minted_count: 0,
      //   nft_mid: '0xbb02368ab08e80f6ae9b160827f412ce087f2ef4842947c5a7b8f67d14ef08c8',
      //   supply: 10,
      //   token_id: '0',
      //   uri: 'https://img1.uapay.io/mpay/img/png/mosaique/2c9180820000000a017b36121a1e0004.png'
      // },
      imageItem: null,
      chart: null

    }
  },
  computed: {
    ...mapState({
      contractAddress: state => state.contract['contractAddress'],
      mosaique: state => state.contract['CollectionContract'].mosaique,
      userAddress: state => state.walletAccount['userAddress'],
      formatEth: state => state.walletAccount.formatEth
    })
  },
  watch: {
    priceCurve() {
      this.drawLine()
    },
    totalSupply() {
      this.drawLine()
    },
    initialPrice() {
      this.drawLine()
    }
  },
  mounted() {
    this.drawLine()
  },
  async created() {
    this.imageItem = this.$route.query
    this.imageItem.token_id = Number(this.imageItem.token_id)
    this.init()
  },
  methods: {
    async init() {
      const itemInfo = await contract.getSnapshotStatus(this.imageItem.token_id, this.imageItem.contractAddr)
      // birth: "0"
      // deadline: "10"
      // initialPrice: "10"
      // priceCurve: "0x636f6e7374000000000000000000000000000000000000000000000000000000"
      // snapshotsMinted: "0"
      // totalSupply: "100"
      const { birth, deadline, initialPrice, priceCurve, totalSupply, snapshotsMinted } = itemInfo
      // console.log(birth, deadline, initialPrice, priceCurve, snapshotsMinted, totalSupply)
      const curves = {
        '0x636f6e7374000000000000000000000000000000000000000000000000000000': 'const',
        '0x6c696e6561720000000000000000000000000000000000000000000000000000': 'linear',
        '0x6578700000000000000000000000000000000000000000000000000000000000': 'exp',
        '0x7175616400000000000000000000000000000000000000000000000000000000': 'quad'
      }
      this.initialPrice = initialPrice
      this.snapshotsMinted = snapshotsMinted
      this.totalSupply = totalSupply
      this.birth = birth
      this.deadline = deadline
      this.priceCurve = curves[priceCurve]

      console.log('getSnapshotStatus', web3.utils.toAscii(priceCurve.substr(0, 16)))
    },
    async sign() {
      // console.log(web3.utils.fromAscii('const'))
      // return
      // attributes:Array[8]
      // contractAddress:"0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21"
      // image:"https://ipfs.io/ipfs/QmcZrEbqmMjt2brrBjUw51xHoZsRkHgU5RN1EYKFP9fLpY"
      // tokenOfOwnerByIndex:"43"
      // tokenUrl:"https://bullsontheblock.com/api/tokens/43"

      // const nft_mid = await contract.getNftMID('0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21', '43').then(res => {
      //   return res
      // })
      const { initialPrice, totalSupply, priceCurve, birth, deadline } = this
      let priceCurve66 = String(web3.utils.fromAscii(priceCurve))
      if (priceCurve66.length < 66) {
        for (let i = priceCurve66.length; i < 66; i++) {
          priceCurve66 += '0'
        }
      }
      console.log(priceCurve66, 'priceCurve66')
      const signature = await contract.sign(
        [this.imageItem.contractAddr, Number(this.imageItem.token_id), initialPrice, totalSupply, priceCurve66, birth, deadline],
        ['address', 'uint256', 'uint256', 'uint256', 'bytes32', 'uint256', 'uint256']
      )
      console.log(signature, 'signature')
      return signature
    },
    async mintSign(newTokenURI) {
      console.log([this.imageItem.contractAddr, this.imageItem.token_id, newTokenURI], '[this.imageItem.contractAddr, this.imageItem.token_id, newTokenURI]')
      const signature = await contract.sign(
        [this.imageItem.contractAddr, this.imageItem.token_id, newTokenURI],
        ['address', 'uint256', 'string']
      )
      console.log(signature, 'signature')
      return signature
    },
    loadingTransferHash(transferHash, status) {
      console.log('loadingTransferHash')
      return eth.getTransactionReceipt(transferHash).then(res => {
        console.log(res, 'res')
        if (res === null || res === 0) {
          setTimeout(() => {
            return this.loadingTransferHash(transferHash, status)
          }, 1000)
        } else {
          this.status = status
          this.tx = res
          return true
        }
      }).catch(err => {
        console.log(err)
        return false
      })
    },
    async submit() {
      this.status = -1
      const { initialPrice, totalSupply, priceCurve, birth, deadline } = this
      const signature = await this.sign(this.imageItem.nft_mid)
      let priceCurve66 = String(web3.utils.fromAscii(priceCurve))
      if (priceCurve66.length < 66) {
        for (let i = priceCurve66.length; i < 66; i++) {
          priceCurve66 += '0'
        }
      }
      console.log(priceCurve66, 'priceCurve66')
      api.createSnapshotSupply({
        owner: this.userAddress,
        signature,
        contract: this.imageItem.contractAddr,
        token_id: this.imageItem.token_id,
        initialPrice,
        totalSupply,
        priceCurve: priceCurve66,
        birth,
        deadline
      }
      ).then(res => {
        this.loadingTransferHash(res.data.data, 1)
      })
    },
    async mintSubmit() {
      this.status = -1
      const contract1 = contract.createERC721Contract(this.imageItem.contractAddr)
      const newTokenURI = await contract1.methods.tokenURI(this.imageItem.token_id).call()
      console.log(newTokenURI)
      const signature = await this.mintSign(newTokenURI)
      api.createMintSnapshot({
        requester: this.userAddress,
        signature,
        contract: this.imageItem.contractAddr,
        token_id: this.imageItem.token_id,
        newTokenURI
      }).then(res => {
        this.loadingTransferHash(res.data.data, 1)
      })
    },
    drawLine() {
      const type = this.priceCurve || 'const'
      this.chart = echarts.init(document.getElementById('myChart'))
      const supply = this.totalSupply
      const initialPrice = 20
      var easingFuncs = {
        const: function(k) {
          return 1 * initialPrice
        },
        linear: function(k) {
          return k * 1.2 + initialPrice
        },
        exp: function(k) {
          return Math.exp(k / supply) + initialPrice
        },
        quad: function(k) {
          return (k / supply) ** 2 + initialPrice
        }
      }
      const seriesData = []
      const xAxis = []
      for (let i = 0; i <= supply; i++) {
        xAxis.push(i)
        seriesData.push(easingFuncs[type](i))
      }
      const option = {
        xAxis: {
          type: 'category',
          min: 0,
          max: supply,
          data: xAxis
        },
        yAxis: {
          type: 'value',
          min: initialPrice - 10
        },
        series: [
          {
            color: '#da6464',
            data: seriesData,
            showSymbol: false,
            type: 'line',
            smooth: true
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>
<style lang="scss">
.el-select-dropdown__item.selected {
  color: #da6464;
}
.snapshot-detaile {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 200px;
  .edition-center {
    display: flex;
    padding-top: 152px;
    .buttons {
      display: flex;
      margin-top: 70px;
    }
    .red {
      color: #da6464;
    }
    .btn {
      width: 120px;
      cursor: pointer;
      height: 43px;
      padding: 0 20px;
      background: #da6464;
      border-radius: 22px;
      font-size: 20px;
      color: #ffffff;
      line-height: 42px;
      text-align: center;
      margin-top: 41px;
      &.cancel {
        width: 120px;
        text-align: center;
        border: 2px solid #da6464;
        background: #ffffff;
        color: #da6464;
        line-height: 38px;
        margin-left: 31px;
      }
    }

    .left {
      flex: 1;
      .minted-image {
        width: 480px;
        padding-left: 50px;
      }
    }
    .right {
      flex: 1;
      .set-message {
        font-size: 14px;

        .title {
          font-size: 24px;
          font-family: Verdana;
          font-weight: bold;
          color: #454953;
          margin-bottom: 32px;
        }
        .label {
          font-weight: bold;
          margin-bottom: 12px;
        }
        .introduce {
          margin-bottom: 24px;
        }
        .coordinate-mess {
          display: flex;
          overflow: hidden;
          margin-bottom: 19px;
          .itme {
            display: flex;
            align-items: center;
          }
          .coordinate-mess-itme {
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              font-weight: bold;
              margin-right: 14px;
              color: #454953;
              font-size: 14px;
            }
            margin-right: 12px;
          }
        }
        .size-itme,
        .rotate-itme {
          display: flex;
          align-content: center;
        }
        .icon-box {
          margin-top: 70px;
          img {
            cursor: pointer;
            width: 32px;
            height: 32px;
            margin-right: 26px;
          }
        }
      }

      .el-select {
        .el-input .el-select__caret {
          color: #fff;
        }
        input.el-input__inner {
          color: #fff;
          background-color: #da6464;
          border-radius: 21px;
        }
      }
      .edit {
        h1 {
          font-size: 24px;
          font-family: Verdana;
          font-weight: bold;
          color: #454953;
        }
        padding: 40px;
        width: 356px;
        background-color: #fff;
        border-radius: 10px;
      }
      h2.nft-name {
        font-size: 24px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        line-height: 21px;
      }
      p.dec {
        font-size: 24px;
        font-family: Verdana;
        color: #454953;
        line-height: 21px;
        margin-bottom: 38px;
        margin-top: 27px;
      }
      .item {
        font-size: 14px;
        font-family: Verdana;
        color: #454953;
        line-height: 21px;
        margin-bottom: 20px;
        label {
          display: inline-block;
          width: 120px;
          font-weight: bold;
        }
      }
      .el-input {
        .el-input__inner {
          background-color: #ebebeb;
          border: none;
        }
      }
    }
  }
  .show {
    h2 {
      height: 25px;
      font-size: 24px;
      font-family: Verdana;
      font-weight: bold;
      color: #454953;
      span {
        margin-left: 25px;
        width: 162px;
        display: inline-block;
        height: 25px;
        border: 1px solid #da6464;
        border-radius: 11px;
        font-size: 12px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
        line-height: 23px;
        text-align: center;
      }
    }
    .chart-box {
      position: relative;
      margin-top: 20px;
      .curve {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 8px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
      }
      .tips {
        position: absolute;
        left: 50%;
        bottom: 0;
        font-size: 8px;
        font-family: Verdana;
        font-weight: bold;
        margin-left: -50px;
        color: #808fb3;
      }
    }
    .minted-btn {
      width: 279px;
      height: 43px;
      background: #da6464;
      border-radius: 22px;
      margin-top: 122px;
    }
    .content {
      margin-top: 20px;
      font-size: 14px;
      font-family: Verdana;
      font-weight: bold;
      color: #454953;
      label {
        font-size: 14px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        line-height: 21px;
      }
      .red {
        font-size: 14px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
        line-height: 21px;
      }
    }
  }
  .finished {
    p {
      display: block;
      font-size: 14px;
      font-family: Verdana;
      font-weight: Regular;
      color: #454953;
      margin-bottom: 12px;
      span {
        color: #da6464;
      }
      label {
        width: 130px;
        color: #454953;
        font-weight: bold;

        display: inline-block;
      }
    }
    .title-tip {
      margin-top: 35px;
      margin-bottom: 52px;
      font-size: 24px;
      font-family: Verdana;
      font-weight: bold;
      color: #da6464;
    }
    .black {
      color: #454953;
    }
  }
  .minted-btn {
    width: 309px;
    height: 43px;
    background: #da6464;
    border-radius: 22px;
    text-align: center;
    line-height: 43px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 100px;
  }
}
</style>
