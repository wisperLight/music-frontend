<template>
  <div class="login">
    <el-card class="box-card" :style="size">
      <!-- 头部header -->
      <div class="header">
        <div class="logo-name">
          <img class="logo" src="../assets/img/logo.png" alt="" />
          <h3 class="name">LyricEase</h3>
        </div>
        <button class="setting-btn icon-cog"></button>
      </div>
      <!-- 导航栏 -->
      <div class="nav">
        <router-link active-class="active" to="/login/psw"
          ><span>密码登录</span></router-link
        >
        <router-link active-class="active" to="/login/qr"
          ><span>扫描二维码登录</span></router-link
        >
      </div>
      <!-- 登录方式路由切换 -->
      <router-view></router-view>
      <!-- 请求帮助区域 -->
      <button
        :class="[needHelp ? 'btn-help-activated' : 'btn-help-unActivated']"
        @click="showHelp"
      >
        获取帮助
      </button>
      <p v-show="needHelp" v-html="str"></p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      needHelp: false,
      size: {
        width: 260 + "px",
        height: 310 + "px",
      },
      str: "",
    };
  },
  methods: {
    // 展示帮助信息
    showHelp() {
      this.needHelp = !this.needHelp;
      if (this.needHelp === false) {
        this.size = {
          width: 260 + "px",
          height: 310 + "px",
        };
      } else {
        this.size = {
          width: 580 + "px",
          height: 510 + "px",
        };
        this.str = `
        LyricEase是网易云音乐的第三方客户端。<br><br>
        请选择以上三种方式中的一种登陆您的网易云音乐帐户。我们承诺，您的隐私将受到保护。您的所有个人数据将仅被用于与网易云音乐官方服务进行通信。<br><br>
        `;
      }
    },
  },
  beforeDestroy() {
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/lessConfig.less";

.login {
  position: relative;
  background-color: #f3f3f3;
  height: 100%;
}

.box-card {
  position: absolute;
  // overflow: hidden;
  /*   width: 260px;
  height: 310px; */
  // 水平垂直居中
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 6px 15px 20px 4px #d0d0d0, 0px 0px 20px 1px #dcdcdc;
}

.header {
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 35px;
  height: 35px;
  // 图片和文字居中对齐
  vertical-align: middle;
}

.name {
  display: inline-block;
  margin-left: 5px;
}

.setting-btn {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #fbfbfb;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  border-bottom: 1.5px solid #cccccc;

  // &::before {
  //   content: "\e994";
  //   font-family: "icomoon";
  //   // 需要将字体图标脱离文档流才可以旋转
  //   position: absolute;
  //   left: 8px;
  //   top: 7px;
  //   transition: all 0.1s;
  // }

  // &:hover {
  //   background-color: #f6f6f6;
  // }

  // &:active::before {
  //   transform: rotate(-45deg);
  // }
}

.nav {
  margin-top: 15px;

  .active {
    color: black;
    font-weight: 900;
  }

  a {
    display: inline-block;
    color: #717171;
    padding: 10px;
    text-decoration: none;
    transition: all 0.1s;

    &:hover {
      background-color: #f6f6f6;
    }

    &:active span {
      font-size: 15.6px;
      color: #afafaf;
    }

    &:nth-of-type(2) {
      margin-left: 2px;
    }
  }
}

.btn-help-activated {
  .btn(80px;32px;#26a69a;white);
  float: right;
  position: relative;
  bottom: 32px;
  border: none;
  border-bottom: 1.5px solid #17645c;
  &:hover {
    background-color: #3baea3;
  }
}

.btn-help-unActivated {
  .btn(80px;32px;#fbfbfb;black);
  float: right;
  position: relative;
  bottom: 32px;
  border: 1px solid #e5e5e5;
  border-bottom: 1.5px solid #ccc;
  &:hover {
    background-color: #f6f6f6;
  }
}

p {
  font-size: 14px;
  margin-top: 20px;
  // overflow: scroll;
}
</style>