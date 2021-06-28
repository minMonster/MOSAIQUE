<template>
  <div class="team">
    <section class="section">
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="core-text">Team</p>
        </div>
        <div class="user-list">
          <div class="user-item">
            <el-image
              :src="require('../access/nico.jpg')"
              fit="cover"
            />
            <p class="name">Nico Y.</p>
            <p class="dec">Co-founder</p>
            <p class="info">
              Nico is a Research Partner at Puzzle Ventures. He studied in the
              School of Government at Peking University. He is also an
              experienced art collector and connoisseur, especially in the field
              of traditional Chinese paintings and Japanese paintings.
            </p>
          </div>
          <div class="user-item">
            <el-image
              :src="require('../access/tianshu.jpg')"
              fit="cover"
            />
            <p class="name">Tianshu (Zoe)</p>
            <p class="dec">Co-founder</p>
            <p class="info">
              Zoe is a designer and a developer with an interdisciplinary
              background in science and art. She previously worked at Yale and
              startups.
            </p>
          </div>
          <div class="user-item">
            <el-image
              :src="require('../access/bowen.jpg')"
              fit="cover"
            />
            <p class="name">Bowen</p>
            <p class="dec">Tech Lead</p>
            <p class="info">
              Bowen is responsible for the economic model design of the
              Mosaique. He is a researcher at Puzzle Ventures. He graduated
              Peking University with double degrees in physics and computer
              science, and currently a doctoral student at UCLA.
            </p>
          </div>
        </div>
        <div class="dividing-line">Early Contributors and Advisors</div>
        <div style="padding-top: 0;" class="user-list">
          <div class="user-item">
            <el-image
              :src="require('../access/jerry.jpg')"
              fit="cover"
            />
            <p class="name">Ziqi<span>(Jerry)</span>Zhou</p>
            <p class="info">
              Jerry is the Managing Partner of Puzzle Ventures. He graduated
              from the Cheriton School of Computer Science, University of
              Waterloo. He led a series of investments, including DODO,
              BoringDAO, Kine, Nuts Finance, etc.
            </p>
          </div>
          <div class="user-item">
            <el-image
              :src="require('../access/melody.jpg')"
              fit="cover"
            />
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
            <el-image
              :src="require('../access/reva.jpg')"
              fit="cover"
            />
            <p class="name">Reva</p>
            <p class="info">
              Reva is an algorithmic artist on MakersPlace. She is also an
              engineer of computer graphics, exploring on topics of generative
              art, real-time interactive installation and GPU shader
              programming.
            </p>
          </div>
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
.team {
  .edition-center {
    width: 1200px;
    padding: 0 90px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  padding-bottom: 100px;
  .core {
    position: absolute;
    left: 91px;
    top: 60px;
    .core-text {
      font-size: 36px;
      font-family: Arial Black;
      font-weight: 400;
      color: #da6464;
    }
  }
  .dividing-line {
    width: 100%;
    font-size: 27px;
    font-family: Verdana;
    font-weight: 400;
    color: #d15f5f;
    margin-top: 128px;
    margin-bottom: 92px;
    text-align: center;
    position: relative;
    &:before {
      content: " ";
      left: 50%;
      top: 15px;
      position: absolute;
      width: 300px;
      margin-left: 256px;
      height: 1px;
      border: 1px solid #d15f5f;
    }
    &:after {
      content: " ";
      left: 50%;
      top: 15px;
      position: absolute;
      width: 300px;
      margin-left: -558px;
      height: 1px;
      border: 1px solid #d15f5f;
    }
  }
  .user-list {
    padding-top: 253px;
    display: flex;
    .user-item {
      display: flex;
      flex-direction: column;
      margin-right: 115px;
      width: 270px;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 260px;
        height: 260px;
        border-radius: 130px;
      }
      .name {
        margin-top: 62px;
        position: relative;
        font-size: 32px;
        font-family: Arial Black;
        font-weight: 400;
        padding-left: 20px;
        color: #454953;
        span {
          font-size: 25px;
        }
        &:before {
          content: " ";
          z-index: -1;
          width: 56px;
          height: 56px;
          border-radius: 28px;
          background-color: #d15f5f;
          position: absolute;
          left: -8px;
          top: -23px;
        }
      }
      .dec {
        font-size: 28px;
        padding-left: 20px;
        padding-top: 23px;
        font-family: Arial Black;
        font-weight: 400;
        color: #d15f5f;
      }
      .info {
        font-size: 15px;
        padding-top: 41px;
        font-family: Verdana;
        font-weight: 400;
        color: #454953;
        line-height: 29px;
      }
    }
  }
}
</style>
