<template>
  <div class="footer">
    <a name="Contact Us" />
    <div class="edition-center">
      <div class="footer-left">
        <p>©2021MOSAIQUE</p>
        <div class="item-imgs">
          <a href="mailto:zoe@mosaique.pro" target="_blank"><img src="../../access/07-Contact01.png" alt=""></a>
          <a href="https://twitter.com/MOSAIQUE10" target="_blank"> <img src="../../access/07-Contact02.png" alt=""></a>
          <a href="https://medium.com/mosaique-research" target="_blank"> <img src="../../access/07-Contact03.png" alt=""></a>
          <a href="https://t.me/mosaiquepro" target="_blank"> <img src="../../access/07-Contact04.png" alt=""></a>
          <a target="_blank"> <img src="../../access/07-Contact05.png" alt=""></a>
        </div>
      </div>
      <div class="footer-right">
        <p>Contact information</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.footer {
  height: 96px;
  background: linear-gradient(to right, #DA6464 0%, #DA6464 50%, #454953 50%, #454953 100%);
  .edition-center {
    display: flex;
    background: linear-gradient(to right, #DA6464 0%, #DA6464 79%, #454953 79%, #454953 100%);
    .footer-left {
      line-height: 96px;
      width: 851px;
      font-size: 18px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
    }
    .footer-right {
      position: relative;
      p {
        position: absolute;
        left: 18px;
        top: 25px;
        width: 134px;
      }
      font-size: 22px;
      font-family: Arial Black;
      font-weight: 400;
      color: #FFFFFF;
    }
    .item-imgs {
      display: flex;
      a {
        height: 100%;
        margin-right: 20px;
        display: flex;
        align-items: center;
        img {
          display: inline-block;
          width: 40px;
        }
      }
    }
  }
}
</style>
