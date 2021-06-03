<template>
  <div class="navbar">
    <div class="edition-center">
      <div
        class="logo-box"
        @click="$router.push('/')"
      >
        <img class="logo" src="../../access/logo.png" alt="">
        <img class="logo-text" src="../../access/logo-text.png" alt="">
      </div>
      <div class="nav-tabs">
        <div class="nav-item">Hero Banner</div>
        <a class="nav-item" href="#Three Functions">Three Functions</a>
        <div class="nav-item" @click="$router.push('/team')">Team</div>
        <a class="nav-item" href="#Partners">Partners</a>
        <a class="nav-item" href="#Contact Us">Contact Us</a>
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
  height: 80px;
  background: linear-gradient(to right, #DA6464 0%, #DA6464 50%, #454953 50%, #454953 100%);
  .edition-center {
    background: linear-gradient(to right, #DA6464 0%, #DA6464 86%, #454953 86%, #454953 100%);
    position: relative;
    display: flex;
    align-items: center;
    .logo-box {
      display: flex;
      align-items: center;
      margin-right: 77px;
      .logo {
        width: 43px;
        cursor: pointer;
      }
      .logo-text {
        margin-left: 22px;
        width: 139px;
      }
    }
    .nav-tabs {
      padding-left: 200px;
      flex: 1;
      display: flex;
      font-size: 15px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 21px;
      .nav-item {
        text-decoration: none;
        &:link {
          color: #FFFFFF;
          text-decoration: none;
        }
        &:visited {
          color: #FFFFFF;
          text-decoration: none;
        }
        &:hover {
          color: #FFFFFF;
          text-decoration: none;
        }
        &:active {
          color: #FFFFFF;
          text-decoration: none;
        }
        margin-right: 29px;
        cursor: pointer;
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
