<template>
  <div class="m-footer">
    <a name="Contact Us" />
    <div class="edition-center">
      <div class="footer-left">
        <div class="item-imgs">
          <a href="mailto:zoe@mosaique.pro" target="_blank"><img src="../../access/07-Contact01.png" alt=""></a>
          <a href="https://twitter.com/MOSAIQUE10" target="_blank"> <img src="../../access/07-Contact02.png" alt=""></a>
          <a href="https://medium.com/mosaique-research" target="_blank"> <img src="../../access/07-Contact03.png" alt=""></a>
          <a href="https://t.me/mosaiquepro" target="_blank"> <img src="../../access/07-Contact04.png" alt=""></a>
          <a target="_blank"> <img src="../../access/07-Contact05.png" alt=""></a>
        </div>
        <p>©2021MOSAIQUE</p>
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
.m-footer {
  background: linear-gradient(to right, #DA6464 0%, #DA6464 77%, #454953  77%, #454953 100%);
  height: 1.51rem;
  color: #FFFFFF;
  .edition-center {
    width: 100vw;
    display: flex;
  }
  .footer-right{
    flex: 1;
    padding-top: .3rem;
    padding-left: .2rem;
    font-size: .20rem;
    font-family: Arial Black;
    p {
      width: 1.2rem;
    }
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    width: 77%;
    box-sizing: border-box;
    padding-left: .84rem;
    p {
      padding-left: 2.27rem;
      font-size: .14rem;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
    }
    .item-imgs {
      margin-bottom: .42rem;
      a {
        margin-right: .62rem;
        img {
          margin-top: .3rem;
          width: .4rem;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
