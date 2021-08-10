<template>
  <div class="make-program">
    <h1>contractAddress: {{ contractAddress }}</h1>
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
      this.tx = await contract.makeProgrammable(this.contractAddress, this.tokenOfOwnerByIndex)
    }
  }
}
</script>
