<template>
  <div class="m-team">
    <section class="section">
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="core-text">Team</p>
        </div>
        <div class="user-item">
          <el-image :src="require('../access/nico.jpg')" fit="cover" />
          <p class="name">Nico Y.</p>
          <p class="dec">Co-founder</p>
          <p class="info">
            Nico is a Research Partner at Puzzle Ventures. He studied in the
            School of Government at Peking University. He is also an experienced
            art collector and connoisseur, especially in the field of
            traditional Chinese paintings and Japanese paintings.
          </p>
        </div>
        <div class="user-item">
          <el-image :src="require('../access/tianshu.jpg')" fit="cover" />
          <p class="name">Tianshu (Zoe)</p>
          <p class="dec">Co-founder</p>
          <p class="info">
            Zoe is a designer and a developer with an interdisciplinary
            background in science and art. She previously worked at Yale and
            startups.
          </p>
        </div>
        <div class="user-item" style="margin-bottom: 1rem;">
          <el-image :src="require('../access/bowen.jpg')" fit="cover" />
          <p class="name">Bowen</p>
          <p class="dec">Tech Lead</p>
          <p class="info">
            Bowen is responsible for the economic model design of the Mosaique.
            He is a researcher at Puzzle Ventures. He graduated Peking
            University with double degrees in physics and computer science, and
            currently a doctoral student at UCLA.
          </p>
        </div>
        <div class="dividing-line">Early Contributors and Advisors</div>
        <div class="user-item" style="margin-top: 2rem;">
          <el-image :src="require('../access/jerry.jpg')" fit="cover" />
          <p class="name">Ziqi<span>(Jerry)</span>Zhou</p>
          <p class="info">
            Jerry is the Managing Partner of Puzzle Ventures. He graduated from
            the Cheriton School of Computer Science, University of Waterloo. He
            led a series of investments, including DODO, BoringDAO, Kine, Nuts
            Finance, etc.
          </p>
        </div>
        <div class="user-item">
          <el-image :src="require('../access/melody.jpg')" fit="cover" />
          <p class="name">Melody Taira</p>
          <p class="info">
            Melody is the founder of Incuba Alpha. She is an expert in
            incubating and investing in early stage bloackchain projects since
            2017. Part of the portfolios: Phala Network, Litentry, Serum,
            Horizon Finance, Naos Finance, Maskbook, Mcdex, DeepDao,
            DoraFactory.
          </p>
        </div>
        <div class="user-item">
          <el-image :src="require('../access/reva.jpg')" fit="cover" />
          <p class="name">Reva</p>
          <p class="info">
            Reva is an algorithmic artist on MakersPlace. She is also an
            engineer of computer graphics, exploring on topics of generative
            art, real-time interactive installation and GPU shader programming.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import WOW from 'wowjs'
export default {
  name: 'Team',
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
  }
}
</script>

<style lang="scss">
.m-team {
  .section {
    position: relative;
    padding: 0 1.1rem;
  }
  .edition-center {
    padding-top: 2.81rem;
  }
  .dividing-line {
    font-size: 0.24rem;
    text-align: center;
    font-family: Verdana;
    font-weight: 400;
    color: #d15f5f;
  }
  .user-item {
    position: relative;
    margin-bottom: 1.85rem;
    .el-image {
      position: absolute;
      width: 1.36rem;
      top: -0.89rem;
      right: 0;
      img {
        width: 1.36rem;
        height: 1.36rem;
        border-radius: 50%;
      }
    }

    .name {
      font-size: 0.3rem;
      font-weight: 700;
      color: #454953;
      position: relative;
      &:before {
        content: " ";
        z-index: -1;
        width: 0.56rem;
        height: 0.56rem;
        border-radius: 0.28rem;
        background-color: #d15f5f;
        position: absolute;
        left: -0.24rem;
        top: -0.23rem;
      }
    }
    .dec {
      font-size: 0.3rem;
      font-weight: 700;
      color: #d15f5f;
      margin-top: 0.12rem;
    }
    .info {
      margin-top: 0.3rem;
      font-size: 0.17rem;
      font-family: Verdana;
      font-weight: 400;
      color: #454953;
      line-height: 0.3rem;
    }
  }
  .core {
    position: absolute;
    top: 0.56rem;
    left: 0;
    width: 7.5rem;
    text-align: center;
    .core-text {
      font-size: 0.36rem;
      font-weight: 700;
      color: #da6464;
    }
  }
}
</style>
