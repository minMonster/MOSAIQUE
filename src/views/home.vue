<template>
  <div class="home">
    <div id="anim" style="width: 100px;height: 100px;" />
    <section class="section section-1">
      <div class="edition-center">
        <p class="wow slideInUp">
          An Interactive Collector-Centered NFT Infrastructure
        </p>
        <h2 class="wow bounceInDown">Mosaique Protocol</h2>
        <div class="button">Go to Mosaique</div>
        <div class="tabs-button">
          <div>Email Address</div>
          <div>Subscribe</div>
        </div>
        <img class="section-img" src="../access/section-img.png" alt="">
      </div>
    </section>
    <section class="section section-2">
      <div class="edition-center">
        <div class="core">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="dec">
          <img src="" alt="">
          <div class="info">
            <h2>Imprinting</h2>
            <h3>Imprinting:</h3>
            <p>The e-blazon and e-inscription functions visualize and personalizes collecting footprints. This interactive experience engages collectors across fields and facilitates building consensus around NFTs.</p>
            <p class="red-text">
              Core Value: Interactive collecting experience.
            </p>
          </div>
        </div>
      </div>
      <!-- <img class="bg-all" src="../access/bg.png" alt=""> -->
    </section>
    <section class="section section-3">
      <div class="edition-center">
        <div class="core">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="dec">
          <img src="" alt="">
          <div class="info">
            <h2>Imprinting</h2>
            <h3>Imprinting:</h3>
            <p>The e-blazon and e-inscription functions visualize and personalizes collecting footprints. This interactive experience engages collectors across fields and facilitates building consensus around NFTs.</p>
            <p class="red-text">
              Core Value: Interactive collecting experience.
            </p>
          </div>
        </div>
      </div>
      <!-- <img class="bg-all" src="../access/bg.png" alt=""> -->
    </section>
    <section class="section section-4">
      <div class="edition-center">
        <div class="core">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="dec">
          <img src="" alt="">
          <div class="info">
            <h2>Imprinting</h2>
            <h3>Imprinting:</h3>
            <p>The e-blazon and e-inscription functions visualize and personalizes collecting footprints. This interactive experience engages collectors across fields and facilitates building consensus around NFTs.</p>
            <p class="red-text">
              Core Value: Interactive collecting experience.
            </p>
          </div>
        </div>
      </div>
      <!-- <img class="bg-all" src="../access/bg.png" alt=""> -->
    </section>
    <section class="section section-5">
      <div class="edition-center">
        <div class="core">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="line-dos">
          <div class="line-item">
            <img src="" alt="">
            <div class="info-dev">
              <h2 class="timer">2021.05</h2>
              <p>front-end UX/UI design；contract interface imprint function v| complete MVP</p>
            </div>
          </div>
          <div class="line-item">
            <img src="" alt="">
            <div class="info-dev">
              <h2 class="timer">2021.05</h2>
              <p>front-end UX/UI design；contract interface imprint function v| complete MVP</p>
            </div>
          </div>
          <div class="line-item">
            <img src="" alt="">
            <div class="info-dev">
              <h2 class="timer">2021.05</h2>
              <p>front-end UX/UI design；contract interface imprint function v| complete MVP</p>
            </div>
          </div>
        </div>
        <img src="" class="gif-4" alt="">
      </div>
    </section>
    <section class="section section-6">
      <div class="edition-center">
        <div class="core">
          <p class="fun">FUNCTIONS</p>
          <p class="core-text">Core Values</p>
        </div>
        <div class="items">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
        <img src="" class="gif-4" alt="">
      </div>
      <!-- <img class="bg-all" src="../access/bg.png" alt=""> -->
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
  height: 1080px;
  width: 100%;
  position: relative;
  margin-top: -17px;
  .bg-all {
    position: absolute;
    height: 1080px;
    left: 50%;
    top: 0;
    z-index: -1;
    margin-left: -1130px;
  }
}
}
</style>
