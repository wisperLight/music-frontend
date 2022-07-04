<template>
  <div class="home">
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header height="48px">
        <button class="el-icon-back"></button>
        <span>LyricEase</span>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->

        <el-aside :width="asideWidth">
          <!-- 侧边栏菜单 -->
          <button class="btn-toggle" @click="isCollapse = !isCollapse"></button>
          <Menu :isCollapse="isCollapse"></Menu>
        </el-aside>

        <!-- 内容主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "Home",
  components: {
    Menu,
  },
  beforeCreate() {
    this.$store.dispatch("getAccount");
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    asideWidth() {
      return this.isCollapse ? "45px" : "320px";
    },
  },
  methods: {
    // 点击按钮切换菜单的折叠与展开
    // toggleCollapse() {
    //   this.isCollapse = !this.isCollapse
    // },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/less/lessConfig.less";
.home {
  height: 100%;
  background: url("../assets/img/bg.jpg") no-repeat center -100px;
  background-size: 100% auto;
}

.home-container {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  // 毛玻璃效果
  backdrop-filter: blur(20px);
}

.el-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;
  span {
    font-size: 9px;
    margin-left: 9px;
  }
  button {
    width: 39px;
    height: 35px;
    font-size: 16px;
    color: #272727;
    .btn-transparent();
  }
}

.btn-toggle {
  position: relative;
  // margin-left: 12px;
  width: 39px;
  height: 35px;
  font-size: 25px;
  color: #272727;
  .btn-transparent();

  &::before {
    font-family: "icomoon";
    position: absolute;
    left: 7px;
    top: 7px;
    content: "\e90b";
    transition: all 0.1s;
  }
  &:active::before {
    transform: scaleX(0.5);
  }
}

.el-aside {
  position: relative;
  margin-left: 3px;
  margin-right: 3px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.el-main {
  border: 1px solid #dcdfe0;
  border-radius: 10px;
  background-color: #f2f2f2;
}
</style>