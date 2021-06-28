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
        <div class="nav-item" @click="$router.push('/')">Home</div>
        <div class="nav-item" @click="$router.push('/team')">Team</div>
        <div class="nav-item" @click="$router.push('/writing')">Writing</div>
        <!--        <a class="nav-item" href="#Three Functions">Three Functions</a>-->
        <!--        <div class="nav-item" @click="$router.push('/team')">Team</div>-->
        <!--        <a class="nav-item" href="#Partners">Partners</a>-->
        <!--        <a class="nav-item" href="#Contact Us">Contact Us</a>-->
      </div>
      <!--      <div class="navbar-right">-->
      <!--        <div class="box" />-->
      <!--        <img src="../../access/seach-icon.png" alt="">-->
      <!--      </div>-->
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
  .edition-center {
    width: 1200px;
    padding: 0 90px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  height: 70px;
  position: relative;
  background: linear-gradient(to right, #DA6464 0%, #DA6464 50%, #454953 50%, #454953 100%);
  .edition-center {
    background: linear-gradient(to right, #DA6464 0%, #DA6464 79%, #454953 79%, #454953 100%);
    position: relative;
    display: flex;
    align-items: center;
    .navbar-right {
      display: flex;
      position: absolute;
      right: 100px;
      img {
        width: 20px;
      }
      .box {
        width: 117px;
        height: 21px;
        top: 27px;
        background-color: #DA6464;
        opacity: 0.5;
        margin-right: 5px;
      }
    }
    .logo-box {
      display: flex;
      align-items: center;
      margin-right: 102px;

      .logo {
        width: 47px;
        cursor: pointer;
      }

      .logo-text {
        margin-left: 20px;
        width: 160px;
      }
    }

    .nav-tabs {
      flex: 1;
      display: flex;
      font-size: 14px;
      font-family: Verdana;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 21px;

      .nav-item {
        width: 130px;
        text-align: center;
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

        cursor: pointer;
        position: relative;

        &:before {
          content: ' ';
          height: 34px;
          background-color: #454953;
          position: absolute;
          width: 1px;
          right: 0;
          top: 50%;
          margin-top: -17px;
        }

        &:first-child {
          &:after {
            content: ' ';
            height: 34px;
            background-color: #454953;
            position: absolute;
            width: 1px;
            left: 0;
            top: 50%;
            margin-top: -17px;
          }
        }
      }
    }
  }

}
</style>
