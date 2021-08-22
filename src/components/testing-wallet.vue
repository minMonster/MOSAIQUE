<template>
  <div class="testing-wallet">
    <div class="edition-center">
      <div class="marking" @click="close" />
      <div v-if="!userAddress" class="content">
        <p class="title">Connect your wallet</p>
        <p class="tips">
          <span>By connecting your wallet</span>
          <span>you agree to our terms of Service</span>
          <span>and our Privacy Policy.</span>
        </p>
        <div class="MateMask-box same-sty" @click="init">MetaMask</div>
        <div class="WalletCon-box same-sty">WalletConnect</div>
        <p style="text-decoration: underline;">New to Ethereum?</p>
        <p style="text-decoration: underline;">Learn more about wallets</p>
      </div>
      <div v-else v-loading="loading" class="content linking">
        <div class="user-box">
          <!-- <el-image class="user-img" /> -->
          <!-- 用户头像 -->
          <div class="user-img" @mouseover="modifyAvatar = true" @mouseout="modifyAvatar = false">
            <!-- <el-image v-if="user_avatar" class="image" :src="'data:image/jpeg;base64,' + user_avatar" /> -->
            <el-image v-if="user_avatar" class="image" :src="user_avatar" />
            <el-upload v-show="modifyAvatar" ref="uploadversion" class="mask" accept=".jpg, .png, .jepg, .bmp" :limit="1" action="" :auto-upload="false" :show-file-list="false" :on-change="getAvatarFile">
              <i class="el-icon-edit" />
              <span>Edit</span>
            </el-upload>
          </div>
          <!-- 用户信息 -->
          <div v-if="!userInfoStatus" class="user-info">
            <p class="name">{{ user_nickname || 'username not set' }}</p>
            <p class="dec">{{ user_introduce|| 'Nothing...' }}</p>
          </div>
          <!-- 用户信息输入框 -->
          <div v-if="userInfoStatus" class="user-form">
            <el-input v-model="userInfoForm.userName" placeholder="User Name" size="mini" />
            <el-input v-model="userInfoForm.introduce" placeholder="Introduce" size="mini" />
          </div>
          <!-- 修改按钮 -->
          <div class="modify">
            <!-- 未修改 -->
            <i v-if="!userInfoStatus" class="el-icon-edit" @click="modify" />
            <!-- 修改中 -->
            <p v-if="userInfoStatus" class="btn">
              <span @click="userInfoStatus = false">cancel</span>
              <span class="sure" @click="modifySure">sure</span>
            </p>
          </div>
        </div>
        <p v-loading="!formatEth" class="eth">{{ formatEth }}<span>ETH</span></p>
        <p class="address">
          {{ userAddress.substring(0, 19) }}...{{
            userAddress.substring(userAddress.length - 4, userAddress.length)
          }}
        </p>
        <div v-loading="nftListLoading" class="nfts">
          <div v-for="(item, index) in userNfts" :key="index">
            <el-image v-if="index < 3" :src="item.image" />
          </div>
          <span class="more">...</span>
        </div>
        <div class="my-collections" @click="jump">My Collections</div>
        <div class="disconnect" @click="logout">Disconnect</div>
        <p class="support" @click="toSupport">Support</p>
      </div>
    </div>
  </div>
</template>
<script>
// import { status } from 'koa/lib/response'
import * as api from '@/service/api'
import { mapState } from 'vuex'
// import { eth, web3 } from '@/connector'
// import { Message } from 'element-ui'
export default {
  name: 'TestingWallet',
  data: function() {
    return {
      isLink: false,
      nftListLoading: false,
      ethNumber: '',
      // onmouseover时 控制修改头像按钮
      modifyAvatar: false,
      userInfoStatus: false,
      loading: false,
      userInfoForm: {
        userName: '',
        introduce: ''
      }
    }
  },
  computed: {
    ...mapState({
      userAddress: state => state.walletAccount['userAddress'],
      user_nickname: state => state.walletAccount.user_nickname,
      user_introduce: state => state.walletAccount.user_introduce,
      user_avatar: state => state.walletAccount.user_avatar,
      formatEth: state => state.walletAccount.formatEth,
      userNfts: state => state.nft.userNfts
    })
  },
  created() {

  },
  methods: {
    toSupport() {
      this.close()
      this.$router.push('/support')
    },
    async init() {
      // 链接钱包
      await this.$store.dispatch('walletAccount/_getUserAddress')
      if (!this.userAddress) {
        await window.ethereum.enable()
        this.init()
      }
      if (this.userAddress) {
        await this.$store.dispatch('walletAccount/getEth')
        await this.$store.dispatch('nft/getERC721Balance')
        this.$store.dispatch('walletAccount/_getUserInfo')
      }
    },
    // 上传图片
    getAvatarFile(file) {
      console.log('-----------file---------', file)
      this.getBase64(file.raw).then(res => {
        const base64 = res.split(',')
        const params = {
          address: this.userAddress,
          images: base64[1]
        }
        this.modifyUserInfo(params, 'avatar')
        this.$refs.uploadversion.uploadFiles = []
      })
    },
    // 修改用户信息
    modify() {
      this.userInfoForm = {
        userName: this.user_nickname || '',
        introduce: this.user_introduce || ''
      }
      this.userInfoStatus = true
    },
    // 修改用户信息 - 确定
    modifySure() {
      if (!this.userInfoForm.userName && !this.userInfoForm.introduce) {
        this.userInfoStatus = false
        return false
      }
      const params = {
        address: this.userAddress
      }
      if (this.userInfoForm.userName) {
        params.name = this.userInfoForm.userName
      }
      if (this.userInfoForm.introduce) {
        params.introduction = this.userInfoForm.introduce
      }
      this.modifyUserInfo(params, 'userInfo')
    },
    // 修改用户信息
    modifyUserInfo(params, type) {
      this.loading = true
      api.modifyUserInfo(params).then(res => {
        this.loading = false
        console.log(res)
        if (type === 'avatar') {
          this.$store.commit('walletAccount/set_user_avatar', 'data:image/jpeg;base64,' + params.images)
        }
        if (type === 'userInfo') {
          // this.set_user_userInfo(params)
          this.$store.commit('walletAccount/set_user_userInfo', params)
          this.userInfoStatus = false
        }
      }).catch(err => {
        this.loading = false
        this.$message.error(err.message || err.msg)
      })
    },
    // 跳转至 my-collections页面
    jump() {
      this.$router.push('/my-collections')
      this.close()
    },
    close() {
      this.loading = false
      this.$emit('close')
    },
    // 将获取的图片文件 转换成base64
    getBase64(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function() {
          imgResult = reader.result
        }
        reader.onerror = function(error) {
          reject(error)
        }
        reader.onloadend = function() {
          resolve(imgResult)
        }
      })
    },
    test() {
      //     if (config.url === 'pbsui.do') {
      //   const token = store.state.walletAccount.user_token
      //   const userAddress = store.state.walletAccount.userAddress
      //   if (token) {
      //     config.headers['smid'] = token
      //   } else {
      //     console.log('无法获取token')
      //     const nonce = await getModifySignData().catch(err => console.log(err))
      //     if (nonce) {
      //       let signature = ''
      //       const message = `Welcome to Mosaique!\n\nI accept the Mosaique Terms of Service: https://mosaique.pro\n\nWallet address:\n${userAddress}\n\nNonce:\n${nonce}`
      //       await eth.personal.sign(web3.utils.fromUtf8(message), userAddress, (e, i) => {
      //         if (e && e.code === 4001) {
      //           // Message.error(e.message)
      //         }
      //         signature = i
      //       }).catach(err => {
      //         console.log(err)
      //       })
      //       if (signature) {
      //         const params = {
      //           address: userAddress,
      //           signature,
      //           message
      //         }
      //         const token = await getModifyToken(params).catch(err => console.log(err))
      //         console.log('--------token------', token)
      //         if (token) {
      //           store.commit('walletAccount/set_user_token', token)
      //         }
      //       }
      //     }
      //   }
      // }
    },
    // 退出登录
    logout() {
      this.$store.commit('walletAccount/remove_user_address')
      this.$store.commit('walletAccount/clear_user_info')
    }
  }
}
</script>
<style lang="scss" scoped>
.testing-wallet {
  z-index: 9999;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .edition-center {
    position: relative;
    width: 1200px;
    margin: 0;

    justify-content: flex-end;
    .marking {
      width: 100vw;
      height: 100vh;
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      top: 0;
      z-index: 100;
      bottom: 0;
      left: 0;
    }
    .content {
      text-align: center;
      position: relative;
      z-index: 101;
      margin-top: 86px;
      float: right;
      padding: 108px 50px 112px;
      width: 401px;
      //   height: 600px;
      background: #ffffff;
      border-radius: 10px;
      z-index: 9999;
      .title {
        font-size: 20px;
        font-family: Verdana;
        font-weight: bold;
        color: #454953;
        margin-bottom: 23px;
      }
      .tips {
        text-align: center;
        margin-bottom: 40px;
        span {
          display: block;
          font-size: 14px;
          font-family: Verdana;
          color: #454953;
          margin-bottom: 6px;
        }
      }
      .same-sty {
        width: 300px;
        height: 60px;
        line-height: 60px;
        border-radius: 10px;
        color: #fff;
        margin-bottom: 23px;
      }
      .MateMask-box {
        background-color: #454953;
      }
      .WalletCon-box {
        background-color: #da6464;
      }
    }
    .linking {
      padding: 55px 45px;
      /deep/ .el-loading-spinner .path{
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #da6464;
        stroke-linecap: round;
      }
      .user-box {
        display: flex;
        align-items: center;
        margin-bottom: 42px;

        .user-img {
          min-width: 80px;
          height: 80px;
          border-radius: 40px;
          margin-right: 25px;
          position: relative;
          background: rgba(44, 14, 14, 0.1);
          .image{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          .mask{
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 40px;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.3);
            transition: display 0.2s ease-in;
            /deep/ .el-upload{
              display: flex !important;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 80px !important;
              height: 80px !important;
              border-radius: 50%;
            }
            i{
              color: #ffffff;
              font-size: 16px;
              margin-bottom: 4px;
            }
            span{
              color: #ffffff;
              font-size: 12px;
            }
          }
        }
        .user-info {
          margin-right: 35px;
          .name {
            font-size: 24px;
            font-family: Verdana;
            font-weight: bold;
            color: #454953;
            margin-bottom: 16px;
          }
          .dec {
            font-size: 14px;
            font-family: Verdana;
            font-weight: 400;
            color: #454953;
          }
        }
        .user-form{
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .modify{
          margin-left: 20px;
          cursor: pointer;
          height: 55px;
          .el-icon-edit {
            font-size: 28px;
            color: #da6464;
          }
          .btn{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span{
              padding: 4px 8px;
              color: #da6464;
              border: 1px solid #da6464;
              border-radius: 5px;
              &.sure{
                color: #fff;
                background: #da6464;
              }
            }
          }
        }

      }
      .eth {
        font-size: 18px;
        font-family: Verdana;
        font-weight: bold;
        text-align: left;
        color: #454953;
      }
      .address {
        margin-bottom: 50px;
        font-size: 18px;
        font-family: Verdana;
        font-weight: bold;
        color: #da6464;
        margin-top: 25px;
      }
      .nfts {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .el-image {
          width: 78px;
          margin-right: 10px;
          height: 78px;
          border-radius: 10px;
        }
        .more {
          font-size: 18px;
          font-family: Verdana;
          font-weight: bold;
          color: #595959;
        }
        margin-bottom: 50px;
      }
      .my-collections {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        background: #da6464;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-family: Verdana;
        font-weight: 400;
        margin: 0 auto;
      }
      .disconnect {
        width: 160px;
        height: 40px;
        border-radius: 20px;
        background: #ffffff;
        text-align: center;
        color: #da6464;
        border: 2px solid #da6464;
        margin: 0 auto;
        line-height: 36px;
        font-size: 18px;
        font-family: Verdana;
        font-weight: 400;
        margin-top: 17px;
        margin-bottom: 20px;
      }
      .support {
        display: block;
        font-size: 14px;
        text-align: center;
        font-family: Verdana;
        font-weight: 400;
        text-decoration: underline;
        color: #da6464;
      }
    }
  }
}
</style>
