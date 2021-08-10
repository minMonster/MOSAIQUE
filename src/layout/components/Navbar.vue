<template>
  <div class="navbar">
    <div class="edition-center">
      <div class="logo-box" @click="$router.push('/')">
        <img class="logo" src="../../access/logo.png" alt="">
        <img class="logo-text" src="../../access/logo-text.png" alt="">
      </div>
      <div class="nav-tabs">
        <div class="nav-item" @click="goRoute('/home')">Imprint</div>
        <div class="nav-item" @click="goRoute('/snapshotable')">Snapshot</div>
        <div class="nav-item" @click="goRoute('/drops')">Drops</div>
        <div class="nav-item" @click="goRoute('/MoScan')">MoScan</div>
      </div>
      <div class="navbar-right">
        <p class="com-iconBg" @click="showWallet">
          <img src="../../icons/user.png" alt="">
        </p>
        <!-- <p class="com-iconBg">
          <img src="../../icons/wallet.png" alt="">
        </p> -->
      </div>
    </div>
    <testing-wallet v-show="walletDig" @close="walletDig = false" />
  </div>
</template>
<script>
import TestingWallet from '@/components/testing-wallet.vue'
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    TestingWallet
  },
  data: function() {
    return {
      walletDig: false
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress'],
      formatEth: state => state.walletAccount.formatEth,
      userNfts: state => state.nft.userNfts
    })
  },
  methods: {
    goRoute(url) {
      if (!this.userAddress) {
        this.$message('Please link Wallet')
        return
      } else {
        this.$router.push(url)
      }
    },
    showWallet() {
      this.walletDig = true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .edition-center {
    width: 1200px;
    padding: 0 90px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  height: 70px;
  position: relative;
  background: linear-gradient(to right, #da6464 0%, #da6464 50%, #454953 50%, #454953 100%);
  .edition-center {
    background: linear-gradient(to right, #da6464 0%, #da6464 79%, #454953 79%, #454953 100%);
    position: relative;
    display: flex;
    align-items: center;
    .navbar-right {
      display: flex;
      position: absolute;
      right: 100px;
      .com-iconBg{
        width: 35px;
        height: 35px;
        background-color: #ffffff;
        border-radius: 50%;
        text-align: center;
        line-height: 45px;
        margin-left: 42px;
        img {
          width: 20px;
        }
      }
    }
    .logo-box {
      display: flex;
      align-items: center;
      margin-right: 95px;

      .logo {
        width: 47px;
        cursor: pointer;
      }

      .logo-text {
        margin-left: 20px;
        width: 160px;
      }
    }

    .nav-tabs {
      flex: 1;
      display: flex;
      font-size: 14px;
      font-family: Verdana;
      font-weight: 400;
      color: #ffffff;
      line-height: 21px;

      .nav-item {
        width: 130px;
        text-align: center;
        text-decoration: none;

        &:link {
          color: #ffffff;
          text-decoration: none;
        }

        &:visited {
          color: #ffffff;
          text-decoration: none;
        }

        &:hover {
          color: #ffffff;
          text-decoration: none;
        }

        &:active {
          color: #ffffff;
          text-decoration: none;
        }

        cursor: pointer;
        position: relative;

        &:before {
          content: ' ';
          height: 34px;
          background-color: #454953;
          position: absolute;
          width: 1px;
          right: 0;
          top: 50%;
          margin-top: -17px;
        }

        &:first-child {
          // &:after {
          //   content: ' ';
          //   height: 34px;
          //   background-color: #454953;
          //   position: absolute;
          //   width: 1px;
          //   left: 0;
          //   top: 50%;
          //   margin-top: -17px;
          // }
        }
        &:last-child {
          &:before {
            width: 0;
          }
        }
      }
    }

  }
}
</style>
