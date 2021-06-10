<template>
  <div class="m-home">
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
          <form v-show="false" id="mc-embedded-subscribe-form" action="https://mosaique.us6.list-manage.com/subscribe/post?u=de359772d6f2c446015ab3b07&amp;id=542a378cc8" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <input id="mce-EMAIL" v-model="email" type="email" name="EMAIL" class="email" placeholder="email address" required>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_de359772d6f2c446015ab3b07_542a378cc8" tabindex="-1" value=""></div>
              <div class="clear"><input id="mc-embedded-subscribe" ref="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="button"></div>
            </div>
          </form>
          <input v-model="email" :class="{'force': email!==''}" class="email" placeholder="Email Address">
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
          <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">Imprinting</div>
          <div class="info">
            <div id="anim" />
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp">The e-blazon and e-inscription functions</div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp"><strong>visualize and personalize collecting </strong></div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp"><strong>footprints.</strong>Such interactive experience</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">deeply attracts and engages collectors across </div>
              <div style="-webkit-animation-delay: 1s;" class="wow animate__animated animate__fadeInUp">fields. And the collectors add to the value of </div>
              <div style="-webkit-animation-delay: 1.2s;" class="wow animate__animated animate__fadeInUp">NFTs by participating in the creation of the life</div>
              <div style="-webkit-animation-delay: 1.4s;" class="wow animate__animated animate__fadeInUp">of NFTs.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-3">
      <div class="edition-center">
        <div class="dec">
          <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">Snapshot</div>
          <div class="info">
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp"> Snapshot allows NFTs and NFT-collectors to</div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">be active players in the market constantly. It</div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">entitles collectors to generate NFT derivatives</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">and promises value realization even when</div>
              <div style="-webkit-animation-delay: 1s;" class="wow animate__animated animate__fadeInUp">collectors do not want to sell their NFTs.</div>
            </div>
            <img class="gif-img" src="../access/04-Values02.gif" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section section-4">
      <div class="edition-center">
        <div class="dec">
          <div style="-webkit-animation-delay: 0s;" class="h2 wow animate__animated animate__fadeInUp">MoScan</div>
          <div class="info">
            <img class="gif-img" src="../access/04-Values03.gif" alt="">
            <div>
              <div style="-webkit-animation-delay: 0.2s;" class="wow animate__animated animate__fadeInUp">MoScan is a cross-platform NFT explorer that</div>
              <div style="-webkit-animation-delay: 0.4s;" class="wow animate__animated animate__fadeInUp">records the lifecycle of NFTs and their</div>
              <div style="-webkit-animation-delay: 0.6s;" class="wow animate__animated animate__fadeInUp">interactive activities. It provides a visualized</div>
              <div style="-webkit-animation-delay: 0.8s;" class="wow animate__animated animate__fadeInUp">data tracker for users, developers, and</div>
              <div style="-webkit-animation-delay: 1s;" class="wow animate__animated animate__fadeInUp">researchers.</div>
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
        <img src="../access/m-05-roadmap.png" class="roadmap-img" alt="">
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
        </div>
        <div class="items" style="padding-top: .74rem;">
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
        this.$refs['mc-embedded-subscribe'].click()
      } else {
        this.$message({
          message: 'Please enter a valid email address',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.m-home {
  .section {
    position: relative;
  }
  .core {
    position: absolute;
    top: 1.63rem;
    text-align: center;
    left: 0;
    width: 7.5rem;
    .core-text {
      font-size: .36rem;
      font-family: Arial Black;
      font-weight: 400;
      color: #DA6464;
    }
  }
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
  .section-1 {
    height: 12.2rem;
    box-sizing: border-box;
    background-color: #fff;
    padding-left: .89rem;
    p {
      padding-top: 1.74rem;
      font-size: .22rem;
      font-family: Verdana;
      font-weight: 400;
      color: #454953;
      line-height: .21rem;
    }
    h2 {
      font-size: .63rem;
      padding-top: .26rem;
      margin: 0;
      font-family: Arial Black;
      font-weight: 400;
      color: #454953;
      margin-left: -.05rem;
    }
    .button {
      margin-top: .38rem;
      text-align: center;
      line-height: .4rem;
      width: 2rem;
      height: .4rem;
      background: #DA6464;
      border-radius: .1rem;
      font-size: .16rem;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
    }
    .tabs-button {
      width: 2.9rem;
      display: flex;
      height: .4rem;
      align-items: center;
      border-radius: .10rem;
      margin-top: .34rem;
      .email {
        &::-webkit-input-placeholder {
          color: #DA6464;
        }
        &.force {
          padding-left: 10px;
        }

        width: 1.83rem;
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);// 透明背景
        flex: 1;
        box-sizing: border-box;
        line-height: .40rem;
        height: .40rem;
        border: .02rem solid #DA6464;
        border-radius: .10rem;
        font-size: .16rem;
        font-family: Verdana;
        font-weight: 400;
        color: #DA6464;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: .37rem;
      }
      .sub {
        width: 1.2rem;
        text-align: center;
        height: .4rem;
        line-height:.4rem;
        background: #DA6464;
        border-radius: .1rem;
        font-size: .16rem;
        font-family: Verdana;
        font-weight: 400;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #FFFFFF;
      }
    }
    .section-img {
      width: 7.23rem;
      height: 7.86rem;
      position: absolute;
      left: 0;
      bottom: -.51rem;
    }
  }
  .section-2, .section-3, .section-4 {
    padding: 0 .4rem;
    box-sizing: border-box;
    padding-top: 3.24rem;
    .h2 {
      text-align: center;
      font-size: .48rem;
      font-family: Arial Black;
      font-weight: 400;
      color: #454953;
      position: relative;
      margin-bottom: .63rem;
      &:after {
        bottom: -.27rem;
        left: 50%;
        position: absolute;
        content: ' ';
        margin-left: -.48rem;
        width: .96rem;
        height: 2px;
        background-color: #DA6464;
      }
    }
    .dec {
      .info {
        display: flex;
        font-size: .18rem;
        font-family: Verdana;
        font-weight: 400;
        color: #454953;
        line-height: .3rem;
      }
    }
    .gif-img {
      width: 2rem;
      height: 2rem;
      margin-right: .42rem;
    }
    #anim {
      width: 2rem;
      height: 2rem;
      margin-right: .42rem;
    }
  }
  .section-3 {
    padding-top: 1.4rem;
    img.gif-img {
      margin-left: .42rem;
      margin-right: 0;
    }
  }
  .section-4 {
    padding-top: 1.4rem;
    padding-bottom: 2rem;
  }
  .section-5 {
    height: 11.94rem;
    background-color: #fff;
    .roadmap-img {
      position: absolute;
      top: .86rem;
      max-width: 3.68rem;
      min-width: 3.68rem;
      max-height: 9.75rem;
      min-height: 9.75rem;
      right: -(3.68rem - 2.45rem);
    }
    .core {
      top: .94rem;
    }
    .line-dos {
      padding-top: 2.59rem;
      .line-item {
        display: flex;
        padding-left: .89rem;
        margin-bottom: .58rem;
        img {
          margin-right: .24rem;
          width: .53rem;
          height: .53rem;
        }
        .info-dev {
          font-size: .16rem;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          line-height: .3rem;
        }
        .timer {
          font-size: .30rem;
          font-family: Arial Black;
          font-weight: 400;
          color: #454953;
          margin-bottom: .39rem;
          position: relative;
          &:after {
            bottom: -.20rem;
            left: 0;
            position: absolute;
            content: ' ';
            width: .75rem;
            height: 2px;
            background-color: #DA6464;
          }
        }
      }
    }
  }
  .section-6 {
    padding-top: 2.1rem;
    padding-bottom: 1.49rem;
    .core {
      top: .52rem;
    }
    .items {
      display: flex;
      justify-content: center;
      a {
        margin-right: .4rem;
        &:last-child {
          margin-top: 0;
        }
      }
      img {
        width: 1.72rem;
      }
    }
  }
}
</style>
