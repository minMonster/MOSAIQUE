<template>
  <div class="writing">
    <section class="section">
      <div class="edition-center">
        <div class="core wow pulse">
          <p class="core-text">Writing</p>
        </div>
        <div class="dec-lists">
          <div class="dec-item">
            <el-image :src="require('../access/nico.jpg')" fit="cover" />
            <div class="info">
              <div class="info-title">
                El Salvador President Announces Bitcoin Program for...
              </div>
              <p>
                El Salvador the first country to make Bitcoin a legal tender on
                June 9 is all set to airdrop bitcoin for citizens to promote its
                use. President Nayib Bukele in a state address announced they
                would be airdropping $30 worth of Bitcoin for every registered
                user in association with a mobile wallet service provider Chivo.
                https://t.co/ljgzn8DFX...
              </p>
              <div class="timer">2021.06.26. 20:10pm</div>
            </div>
          </div>
          <div class="dec-item">
            <el-image :src="require('../access/nico.jpg')" fit="cover" />
            <div class="info">
              <div class="info-title">
                El Salvador President Announces Bitcoin Program for...
              </div>
              <p>
                El Salvador the first country to make Bitcoin a legal tender on
                June 9 is all set to airdrop bitcoin for citizens to promote its
                use. President Nayib Bukele in a state address announced they
                would be airdropping $30 worth of Bitcoin for every registered
                user in association with a mobile wallet service provider Chivo.
                https://t.co/ljgzn8DFX...
              </p>
              <div class="timer">2021.06.26. 20:10pm</div>
            </div>
          </div>
          <div class="dec-item">
            <el-image :src="require('../access/nico.jpg')" fit="cover" />
            <div class="info">
              <div class="info-title">
                El Salvador President Announces Bitcoin Program for...
              </div>
              <p>
                El Salvador the first country to make Bitcoin a legal tender on
                June 9 is all set to airdrop bitcoin for citizens to promote its
                use. President Nayib Bukele in a state address announced they
                would be airdropping $30 worth of Bitcoin for every registered
                user in association with a mobile wallet service provider Chivo.
                https://t.co/ljgzn8DFX...
              </p>
              <div class="timer">2021.06.26. 20:10pm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Writing',
  data: function() {
    return {}
  }
}
</script>
<style lang="scss">
.writing {
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
  .dec-lists {
    padding-top: 244px;
    .dec-item {
      display: flex;
      padding: 70px 0;
      border-bottom: 1px solid #dcdcdc;
      .el-image {
        min-width: 202px;
        max-width: 202px;
        height: 202px;
        border-radius: 10px;
        overflow: hidden;
      }
      .info {
        flex: 1;
        max-width: 835px;
        padding-left: 67px;
        display: flex;
        flex-direction: column;
        .info-title {
          font-size: 29px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          padding-top: 20px;
          font-size: 17px;
          font-family: Verdana;
          font-weight: 400;
          color: #454953;
          line-height: 28px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
        .timer {
          margin-top: 20px;
          font-size: 17px;
          font-family: Verdana;
          font-weight: 400;
          color: #d15f5f;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
