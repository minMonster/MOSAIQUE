<template>
  <div class="footer">
    <a name="Contact Us" />
    <div class="edition-center">
      <div class="footer-left">
        <p>©2021MOSAIQUE</p>
        <div class="item-imgs">
          <img src="../../access/07-Contact01.png" alt="">
          <img src="../../access/07-Contact02.png" alt="">
          <img src="../../access/07-Contact03.png" alt="">
          <img src="../../access/07-Contact04.png" alt="">
          <img src="../../access/07-Contact05.png" alt="">
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
  height: 225px;
  background: linear-gradient(to right, #DA6464 0%, #DA6464 50%, #454953 50%, #454953 100%);
  .edition-center {
    display: flex;
    background: linear-gradient(to right, #DA6464 0%, #DA6464 76%, #454953 76%, #454953 100%);
    .footer-left {
      padding-top: 25px;
      width: 76%;
      font-size: 22px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      p {
        padding-top: 20px;
      }
    }
    .footer-right {
      position: relative;
      p {
        position: absolute;
        left: 18px;
        top: 43px;
        width: 400px;
      }
      font-size: 30px;
      font-family: Arial Black;
      font-weight: 400;
      color: #FFFFFF;
    }
    .item-imgs {
      img {
        margin-right: 25px;
      }
    }
  }
}
</style>
