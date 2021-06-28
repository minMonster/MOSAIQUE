<template>
  <div class="m-navbar">
    <div class="edition-center">
      <div
        class="logo-box"
        @click="$router.push('/')"
      >
        <img class="logo" src="../../access/logo.png" alt="">
        <img class="logo-text" src="../../access/logo-text.png" alt="">
      </div>
      <div class="nav-tabs">
        <!--        <div class="nav-item" @click="$router.push('/')">Home</div>-->
        <!--        <div class="nav-item" @click="$router.push('/team')">Team</div>-->
        <!--        <a class="nav-item" href="#Three Functions">Three Functions</a>-->
        <!--        <div class="nav-item" @click="$router.push('/team')">Team</div>-->
        <!--        <a class="nav-item" href="#Partners">Partners</a>-->
        <!--        <a class="nav-item" href="#Contact Us">Contact Us</a>-->
      </div>
      <div class="navbar-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="../../access/形状 1 拷贝 4.png" alt="">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push('/')">Home</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push('/team')">Team</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push('/writing')">Writing</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
.m-navbar {
  background: linear-gradient(to right, #DA6464 0%, #DA6464 77%, #454953  77%, #454953 100%);
  height: .7rem;
  .edition-center {
    display: flex;
  }
  .logo-box {
    width: 77%;
    display: flex;
    align-items: center;
    height: .7rem;
    margin-left: .35rem;
    img.logo {
      height: .35rem;
      width: .35rem;
    }
    img.logo-text {
      margin-left: .15rem;
      height: .2rem;
      width: 1.32rem;
    }
  }
  .navbar-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: .27rem;
    padding-top: .25rem;
    img {
      width: .26rem;
      height: .22rem;
    }
  }
}
</style>
