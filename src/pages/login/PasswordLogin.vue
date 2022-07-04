<template>
  <div class="container">
    <!-- username-手机登录 -->
    <div id="cellphone" v-show="isPhone">
      <input type="text" id="countryCode" value="+86" />
      <input type="text" id="username" placeholder="手机号码" />
    </div>
    <!-- username-邮箱登录 -->
    <input
      type="text"
      id="email"
      placeholder="网易邮箱地址"
      v-show="!isPhone"
    />
    <!-- 输入密码 -->
    <input type="text" id="password" placeholder="密码" />

    <a href="#" @click="choose">使用{{ chooseLoginType }}登录</a>

    <!-- 登录按钮 -->
    <button
      :class="[isActivated ? 'login-btn-activated' : 'login-btn-unactivated']"
    >
      登录
    </button>
  </div>
</template>

<script>
export default {
  name: "PasswordLogin",
  data() {
    return {
      isPhone: true,
      chooseLoginType: "网易邮箱",
      isActivated: false,
    };
  },
  methods: {
    choose() {
      this.isPhone = !this.isPhone;
      this.chooseLoginType = this.isPhone ? "网易邮箱" : "手机";
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/lessConfig.less";

.container {
  // 清除浮动
  overflow: hidden;
}

input {
  height: 35px;
  padding: 10px;
  border: 1.5px solid #e5e5e5;
  border-bottom: 1.5px solid #868686;
  border-radius: 5px;
  background-color: #fbfbfb;

  &:hover {
    background-color: #f6f6f6;
  }

  &:focus {
    border-bottom: 2px solid #26a69a;
    background-color: #fff;
  }
}

#cellphone {
  margin-top: 17px;
  display: flex;

  #countryCode {
    width: 67px;
  }

  #username {
    // 由于input元素默认有最小宽度，flex布局无法自适应
    min-width: 0px;
    flex: 1;
    margin-left: 7px;
  }
}

#email {
  margin-top: 17px;
  width: 100%;
}

#password {
  margin-top: 9px;
  width: 100%;
}

a {
  float: right;
  margin-top: 9px;
  padding: 5px 10px;
  font-size: 14px;
  color: #26a69a;
  border-radius: 3px;
  &:hover {
    background-color: #eaeaea;
  }
}

.login-btn-activated {
  margin-top: 54px;
  .btn(80px;32px;#26a69a;white);
  border: none;
  border-bottom: 1.5px solid #17645c;
  &:hover {
    background-color: #3baea3;
  }
}

.login-btn-unactivated {
  margin-top: 54px;
  .btn(80px;32px;#bfbfbf;white);
  border: none;
}
</style>