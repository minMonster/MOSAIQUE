<template>
  <div class="navbar">
    <div class="edition-center">
      <div
        class="logo-box"
      >
        <img class="logo" src="../../access/logo.png" alt="">
        <img class="logo-text" src="../../access/logo-text.png" alt="">
      </div>
      <div class="nav-tabs">
        <div class="nav-item">Hero Banner</div>
        <div class="nav-item">Three Functions</div>
        <div class="nav-item">Team</div>
        <div class="nav-item">Hero Banner</div>
        <div class="nav-item">Contact Us</div>
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
.navbar {
  height: 111px;
  background: linear-gradient(to right, #DA6464 0%, #DA6464 75%, #454953 75%, #454953 100%);
  .edition-center {
    position: relative;
    display: flex;
    align-items: center;
    .logo-box {
      display: flex;
      align-items: center;
      margin-right: 77px;
      .logo {
        width: 53px;
        height: 53px;
      }
      .logo-text {
        margin-left: 22px;
        width: 179px;
        height: 28px;
      }
    }
    .nav-tabs {
      flex: 1;
      display: flex;
      font-size: 15px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 21px;
      .nav-item {
        margin-right: 29px;
        position: relative;
        &:before {
          content: ' ';
          height: 34px;
          background-color: #454953;
          position: absolute;
          width: 1px;
          right: -15px;
          top: 50%;
          margin-top: -17px;
        }
        &:last-child{
          &:before {
            content: none;
          }
        }
      }
    }
  }

}
</style>
