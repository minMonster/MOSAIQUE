<template>
  <div class="home">
    <img class="bg-all" src="../access/bg.png" alt="">
    <img class="bg-all bg-all-2" src="../access/bg.png" alt="">
    <!--    <div id="anim" style="width: 100px;height: 100px;" />-->
    <section class="section section-1">
      <div class="edition-center">
        <p class="wow">
          An Interactive Collector-Centered NFT Infrastructure
        </p>
        <h2 class="wow">Mosaique Protocol</h2>
        <div class="button">Go to Mosaique</div>
        <div class="tabs-button">
          <input v-model="email" :class="{'force': email!==''}" class="email" placeholder="Email Address"></input>
          <div class="sub" @click="submit">Subscribe</div>
        </div>
        <img class="section-img" src="../access/section-img.png" alt="">
      </div>
    </section>
    <section class="section section-2">
      <a name="Three Functions" />
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="core-text">How does MOSAIQUE work?</p>
        </div>
        <div class="dec">
          <div id="anim" />
          <div class="info">
            <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">Imprinting</div>
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp">The e-blazon and e-inscription functions<strong>visualize and </strong></div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp"><strong>personalize collecting footprints.</strong>Such interactive</div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">experience deeply attracts and engages collectors across</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">fields. And the collectors add to the value of NFTs by</div>
              <div style="-webkit-animation-delay: 1s;" class="wow animate__animated animate__fadeInUp">participating in the creation of the life of NFTs.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-3">
      <div class="edition-center">
        <div class="dec">
          <img class="gif-img" src="../access/04-Values02.gif" alt="">
          <div class="info">
            <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">Snapshot</div>
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp">Snapshot allows NFTs and NFT-collectors to be active players</div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">in the market constantly. It entitles collectors to generate</div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">NFT derivatives and promises value realization even when</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">collectors do not want to sell their NFTs.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-4">
      <div class="edition-center">
        <div class="dec">
          <img class="gif-img" src="../access/04-Values03.gif" alt="">
          <div class="info">
            <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">MoScan</div>
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp">MoScan is a cross-platform NFT explorer that records the</div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">lifecycle of NFTs and their interactive activities. It provides</div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">a visualized data tracker for users, developers, and</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">researchers.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-5">
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="core-text">Tech Roadmap</p>
        </div>
        <div class="line-dos">
          <div class="line-item">
            <img style="-webkit-animation-delay: 0s;" class="wow animate__animated animate__fadeInUp" src="../access/section-5-icon-1.png" alt="">
            <div class="info-dev">
              <div style="-webkit-animation-delay: 0.2s;" class="timer wow animate__animated animate__fadeInUp">2021.05</div>
              <div>
                <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">Product Prototype</div>
                <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">Front-end UX/UI design</div>
              </div>
            </div>
          </div>
          <div class="line-item">
            <img style="-webkit-animation-delay: 0s;" class="wow animate__animated animate__fadeInUp" src="../access/section-5-icon-2.png" alt="">
            <div class="info-dev">
              <div style="-webkit-animation-delay: 0.2s;" class="timer wow animate__animated animate__fadeInUp">2021.06</div>
              <div>
                <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">Contract Interface</div>
                <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">V1 Development and Test</div>
                <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp"> MVP Testnet Launch</div>
              </div>
            </div>
          </div>
          <div class="line-item">
            <img style="-webkit-animation-delay: 0s;" class="wow animate__animated animate__fadeInUp" src="../access/section-5-icon-5.png" alt="">
            <div class="info-dev">
              <div style="-webkit-animation-delay: 0.2s;" class="timer wow animate__animated animate__fadeInUp">2021.Q3</div>
              <div>
                <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">V1 Mainnet Launch</div>
                <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">MoScan Function Development</div>
                <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">Business Development</div>
              </div>
            </div>
          </div>
          <div class="line-item">
            <img style="-webkit-animation-delay: 0s;" class="wow animate__animated animate__fadeInUp" src="../access/section-5-icon-3.png" alt="">
            <div class="info-dev">
              <div style="-webkit-animation-delay: 0.2s;" class="timer wow animate__animated animate__fadeInUp">2021.Q4</div>
              <div>
                <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">MoScan Function Launch</div>
                <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">Multi-chain Environment Compatibility</div>
                <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">Product Iteration based on User Feedback</div>
              </div>
            </div>
          </div>
        </div>
        <img src="../access/05-roadmap.png" class="roadmap-img" alt="">
      </div>
    </section>
    <section class="section section-6">
      <a name="Partners" />
      <div class="edition-center">
        <div class="core">
          <p class="core-text">Partners</p>
        </div>
        <div class="items">
          <a href="https://puzzle.ventures/" target="_blank"><img style="-webkit-animation-delay: 0s;" class="wow animate__animated animate__fadeInUp" src="../access/06-Partners01.png" alt=""></a>
          <a href="https://ethsign.xyz/#/" target="_blank"><img style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp" src="../access/06-Partners02EthSign.png" alt=""></a>
          <a href="https://twitter.com/reva_fyw" target="_blank"><img style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp" src="../access/06-Partners03-reva.png" alt=""></a>
          <a href="https://www.incuba.capital/" target="_blank"><img style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp" src="../access/06-Partners04-IncubaAlpha.png" alt=""></a>
          <a href="https://dodonft.io/" target="_blank"><img style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp" src="../access/06-Partners05-dodo.png" alt=""></a>
        </div>
        <img src="" class="gif-4" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import WOW from 'wowjs'
export default {
  name: 'Home',
  data: function() {
    return {
      email: ''
    }
  },
  created() {},
  mounted() {
    // 初始化动画
    new WOW.WOW().init()
    lottie.loadAnimation({
      container: document.getElementById('anim'),
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_szotb4jl.json'
    })
  },
  methods: {
    submit() {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (reg.test(this.email)) {

      } else {
        this.$message({
          message: '请输入正确的邮箱地址',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  .bg-all {
    position: fixed;
    height: 1080px;
    left: 50%;
    top: 0;
    z-index: -1;
    margin-left: -960px;
    &.bg-all-2 {
      top: 1080px;
    }
  }
.section {
  width: 100%;
  overflow: hidden;
  position: relative;
}
  .section-1 {
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    padding-top: 292px;
    padding-bottom: 335px;
    p {
      font-size: 18px;
      font-family: Verdana;
      font-weight: 400;
      color: #454953;
    }
    h2 {
      margin-top: 23px;
      font-size: 51px;
      font-family: Arial Black;
      font-weight: 400;
      color: #454953;
      margin-bottom: 51px;
    }
    .button {
      width: 200px;
      height: 40px;
      background: #DA6464;
      border-radius: 10px;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
    }
    .tabs-button {
      width: 305px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      margin-top: 34px;
      .email {
        &::-webkit-input-placeholder {
          color: #DA6464;
        }
        &.force {
          padding-left: 10px;
        }

        width: 183px;
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);// 透明背景
        flex: 1;
        box-sizing: border-box;
        line-height: 40px;
        height: 40px;
        border: 2px solid #DA6464;
        border-radius: 10px;
        font-size: 16px;
        font-family: Verdana;
        font-weight: 400;
        color: #DA6464;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: 37px;
      }
      .sub {
        width: 120px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #DA6464;
        border-radius: 10px;
        font-size: 16px;
        font-family: Verdana;
        font-weight: 400;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #FFFFFF;
      }
    }
    .section-img {
      width: 796px;
      position: absolute;
      top: -210px;
      left: 420px;
    }
  }
  .section-2, .section-3, .section-4 {
    .edition-center {
      padding-top: 287px;
      padding-bottom: 273px;
      .dec {
        display: flex;
        justify-content: center;
        .info {
          width: 633px;
          font-size: 18px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          line-height: 32px;
          .h2 {
            font-size: 60px;
            font-family: Arial Black;
            font-weight: 400;
            color: #454953;
            line-height: 60px;
            position: relative;
            margin-bottom: 102px;
            &:after {
              bottom: -51px;
              left: 0;
              position: absolute;
              content: ' ';
              width: 96px;
              height: 2px;
              background-color: #DA6464;
            }
          }
        }
        .gif-img {
          width: 350px;
          margin-right: 101px;
        }
        #anim {
          width: 350px;
          margin-top: -20px;
          margin-right: 101px;
        }
      }
    }
  }
  .section-5 {
    .edition-center {
      display: flex;
      padding-top: 184px;
      padding-bottom: 49px;
      .line-dos {
        width: 451px;
        .line-item {
          display: flex;
          font-size: 18px;
          margin-bottom: 79px;
          line-height: 25px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          &:last-child {
            margin-bottom: 0;
          }
          .info-dev {
            flex: 1;
          }
          img {
            width: 53px;
            height: 53px;
            margin-right: 24px;
            margin-top: -5px;
          }
          .timer {
            margin-bottom: 39px;
            font-size: 30px;
            font-family: Arial Black;
            font-weight: 400;
            color: #454953;
            position: relative;
            &:after {
              bottom: -20px;
              left: 0;
              position: absolute;
              content: ' ';
              width: 75px;
              height: 2px;
              background-color: #DA6464;
            }
          }
        }
      }
      .roadmap-img {
        position: absolute;
        left: 541px;
        width: 620px;
        top: 55px;
      }
    }
  }
  .section-6 {
    .edition-center {
      padding-top: 297px;
      padding-bottom: 307px;
      .items {
        display: flex;
        width: 100%;
        justify-content: center;
        a {
          margin-right: 38px;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 172px;
          }
        }
      }
    }
  }
  .core {
    position: absolute;
    left: 91px;
    top: 60px;
    .core-text {
      font-size: 36px;
      font-family: Arial Black;
      font-weight: 400;
      color: #DA6464;
    }
  }
}
</style>
