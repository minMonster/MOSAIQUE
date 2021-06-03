<template>
  <div class="home">
    <!--    <div id="anim" style="width: 100px;height: 100px;" />-->
    <section class="section section-1">
      <div class="edition-center">
        <p class="wow bounceInRight">
          An Interactive Collector-Centered NFT Infrastructure
        </p>
        <h2 class="wow bounceInDown">Mosaique Protocol</h2>
        <div class="button">Go to Mosaique</div>
        <div class="tabs-button">
          <div class="email">Email Address</div>
          <div class="sub">Subscribe</div>
        </div>
        <img class="section-img bounceInRight wow" src="../access/section-img.png" alt="">
      </div>
    </section>
    <section class="section section-2">
      <a name="Three Functions" />
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="dec">
          <div id="anim" />
          <div class="info">
            <div class="h2 wow bounceInDown">Imprinting</div>
            <div class="h3 wow rollIn">Imprinting:</div>
            <p class="wow bounceInRight">The e-blazon and e-inscription functions visualize and personalizes collecting footprints. This interactive experience engages collectors across fields and facilitates building consensus around NFTs.</p>
            <p class="red-text wow bounceInRight">
              Core Value:
              <br>
              Interactive collecting experience.
            </p>
          </div>
        </div>
      </div>
      <img class="bg-all" src="../access/bg.png" alt="">
    </section>
    <section class="section section-3">
      <div class="edition-center">
        <div class="dec">
          <img class="gif-img" src="../access/04-Values02.gif" alt="">
          <div class="info">
            <div class="h2 wow bounceInDown">Snapshot</div>
            <div class="h3 rollIn wow">Snapshot:</div>
            <p class="wow bounceInRight">Snapshot allows NFTs and NFT-collectors to be active players in the market constantly. It entitles collectors to generate NFT derivatives and promises value realization even when collectors do not want to sell their NFT.</p>
            <p class="red-text wow bounceInRight">
              Core Value:
              <br>
              Value Realization
            </p>
          </div>
        </div>
      </div>
      <img class="bg-all" src="../access/bg.png" alt="">
    </section>
    <section class="section section-4">
      <div class="edition-center">
        <div class="dec">
          <img class="gif-img" src="../access/04-Values03.gif" alt="">
          <div class="info">
            <div class="h2 wow bounceInDown">MoScan</div>
            <div class="h3 rollIn wow">MoScan:</div>
            <p class="wow bounceInRight">MoScan is a cross-platform NFT explorer that records the lifecycle of NFTs and their interactive activities. It provides a visualized data tracker for users, developers, and researchers.</p>
            <p class="red-text wow bounceInRight">
              Core Value:
              <br>
              NFT Lifecycle Explorer
            </p>
          </div>
        </div>
      </div>
      <img class="bg-all" src="../access/bg.png" alt="">
    </section>
    <section class="section section-5">
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="fun">ROADMAP</p>
          <p class="core-text">Tech Roadmap</p>
        </div>
        <div class="line-dos">
          <div class="line-item">
            <img src="../access/section-5-icon-1.png" alt="">
            <div class="info-dev">
              <div class="timer wow bounceInDown">2021.05</div>
              <p class="wow bounceInRight">front-end UX/UI design；contract interface imprint function v| complete MVP</p>
            </div>
          </div>
          <div class="line-item">
            <img src="../access/section-5-icon-2.png" alt="">
            <div class="info-dev">
              <div class="timer  wow bounceInDown">2021.06</div>
              <p class="wow bounceInRight">mosaique v| testnet launch (w/ <em>imprint</em> & snapshot functions)</p>
            </div>
          </div>
          <div class="line-item">
            <img src="../access/section-5-icon-3.png" alt="">
            <div class="info-dev">
              <div class="timer  wow bounceInDown">2021.Q3</div>
              <p class="wow bounceInRight">explorer v| complete Mainnet Launch Multi-chain Environment</p>
            </div>
          </div>
        </div>
        <img src="../access/05-roadmap.png" class="roadmap-img wow bounceInRight" alt="">
      </div>
    </section>
    <section class="section section-6">
      <a name="Partners" />
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="fun">PARTNERS</p>
          <p class="core-text">Partners</p>
        </div>
        <div class="items">
          <img class=" wow bounceInDown" src="../access/06-Partners01.png" alt="">
          <img class=" wow bounceInDown" src="../access/06-Partners02EthSign.png" alt="">
          <img class=" wow bounceInDown" src="../access/06-Partners03-reva.png" alt="">
          <img class=" wow bounceInDown" src="../access/06-Partners04-IncubaAlpha.png" alt="">
          <img class=" wow bounceInDown" src="../access/06-Partners05-dodo.png" alt="">
        </div>
        <img src="" class="gif-4" alt="">
      </div>
      <img class="bg-all" src="../access/bg.png" alt="">
    </section>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import WOW from 'wowjs'
export default {
  name: 'Home',
  created() {
    console.log('created')
  },
  mounted() {
    // 初始化动画
    new WOW.WOW().init()
    lottie.loadAnimation({
      container: document.getElementById('anim'),
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_szotb4jl.json'
    })
  }
}
</script>

<style lang="scss">
.home {
.section {
  width: 100%;
  overflow: hidden;
  position: relative;
  .bg-all {
    position: absolute;
    height: 1080px;
    left: 50%;
    top: 0;
    z-index: -1;
    margin-left: -1130px;
  }
}
  .section-1 {
    height: 700px;
    position: relative;
    box-sizing: border-box;
    padding-top: 149px;
    p {
      font-size: 26px;
      font-family: Verdana;
      font-weight: 400;
      color: #454953;
      line-height: 21px;
    }
    h2 {
      margin-top: 28px;
      font-size: 70px;
      font-family: Arial Black;
      font-weight: 400;
      color: #454953;
    }
    .button {
      width: 235px;
      height: 60px;
      background: #DA6464;
      border-radius: 10px;
      text-align: center;
      line-height: 60px;
      font-size: 18px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
    }
    .tabs-button {
      width: 400px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      margin-top: 44px;
      .email {
        flex: 1;
        box-sizing: border-box;
        line-height: 60px;
        height: 60px;
        border: 2px solid #DA6464;
        border-radius: 10px;
        font-size: 22px;
        font-family: Verdana;
        font-weight: 400;
        color: #DA6464;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: 37px;
      }
      .sub {
        width: 155px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background: #DA6464;
        border-radius: 10px;
        font-size: 22px;
        font-family: Verdana;
        font-weight: 400;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #FFFFFF;
      }
    }
    .section-img {
      width: 500px;
      position: absolute;
      top: -40px;
      right: 0px;
    }
  }
  .section-2, .section-3, .section-4 {
    .edition-center {
      padding: 100px 0;
      .dec {
        display: flex;
        justify-content: center;
        .info {
          width: 633px;
          font-size: 22px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          line-height: 36px;
          .h2 {
            font-size: 50px;
            font-family: Arial Black;
            font-weight: 400;
            color: #454953;
            line-height: 50px;
            position: relative;
            margin-bottom: 55px;
            &:after {
              bottom: -20px;
              left: 0;
              position: absolute;
              content: ' ';
              width: 96px;
              height: 2px;
              background-color: #DA6464;
            }
          }
          .h3 {
            font-size: 22px;
          }
          .red-text {
            margin-top: 40px;
            color: #D15F5F;
          }
        }
        .gif-img {
          width: 284px;
          height: 284px;
          margin-right: 150px;
        }
        #anim {
          width: 284px;
          height: 284px;
          margin-right: 150px;
        }
      }
    }
  }
  .section-2 {
    .edition-center {
      padding-top: 230px;
    }
  }
  .section-5 {
    .edition-center {
      display: flex;
      padding-bottom: 100px;
      .line-dos {
        width: 462px;
        padding-top: 203px;
        .line-item {
          display: flex;
          font-size: 18px;
          margin-bottom: 79px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          .info-dev {
            flex: 1;
          }
          img {
            width: 53px;
            height: 53px;
            margin-right: 25px;
          }
          .timer {
            margin-bottom: 29px;
            font-size: 40px;
            font-family: Arial Black;
            font-weight: 400;
            color: #454953;
            position: relative;
            &:after {
              bottom: -15px;
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
        left: 650px;
        width: 520px;
        top: 100px;
      }
    }
  }
  .section-6 {
    .edition-center {
      padding-top: 256px;
      padding-bottom: 140px;
      .items {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
          margin-right: 65px;
          width: 154px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .core {
    position: absolute;
    left: 91px;
    top: 53px;
    &:after {
      content: ' ';
      left: -91px;
      top: 11px;
      position: absolute;
      width: 78px;
      height: 1px;
      border: 1px solid #454953;
    }
    .fun {
      font-size: 18px;
      font-family: Verdana;
      font-weight: 400;
      color: #454953;
    }
    .core-text {
      font-size: 30px;
      font-family: Arial Black;
      font-weight: 400;
      color: #DA6464;
      padding-top: 30px;
    }
  }
}
</style>
