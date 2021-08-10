<template>
  <div class="make-program">
    <h1>contractAddress111: {{ contractAddress }}</h1>
    <el-image
      class="minted-image"
      style="width: 431px;position: relative;"
      :src="image"
    />
    <div @click="copy">Make Programmable</div>
    <div>{{ tx }}</div>
  </div>
</template>
<script>
import * as contract from '@/contract'
import * as connector from '@/connector'
export default {
  data: function() {
    return {
      contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
      image: 'https://ipfs.io/ipfs/Qme46XFBDEEv5F8uhxB1eQdTQR37vRmCCUo21nxGnyqsL2',
      tokenOfOwnerByIndex: '6',
      tx: null
    }
  },
  methods: {
    async copy() {
      connector.eth.sign(connector.web3.utils.utf8ToHex('Hello world'), '0x8A3c226f02a692894643d070214B9495F8b40D58').then(function(ee) {
        console.log(ee)
      })
      // console.log(connector.web3.utils.utf8ToHex('0x37bd087c6c5c1d7af667c81146ce0d70d78c826ad421ef5a4f0ca233deb0ca23'))
      // console.log(connector.eth.accounts.hashMessage('0xe5f897cd55b1481f0e3e18b76d6d83ea8109949c2fc63a46f30366b9130fcec0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000033030300000000000000000000000000000000000000000000000000000000000'))
      // this.tx = await contract.makeProgrammable(this.contractAddress, this.tokenOfOwnerByIndex)
    }
  }
}
</script>
