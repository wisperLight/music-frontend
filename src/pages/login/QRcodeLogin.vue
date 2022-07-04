<template>
  <div class="container">
    <!-- 二维码展示 -->
    <img :src="imgData" />
  </div>
</template>

<script>
import { createQr, getQrKey, checkQr } from "@/api/user.js";

export default {
  name: "QRcodeLogin",
  data() {
    return {
      key: "",
      imgData: "",
      qrType: "",
      message: "",
    };
  },
  methods: {
    /* 获取二维码key */
    async getKey() {
      const res = await getQrKey();
      if (res.code !== 200) return this.$message.error("获取二维码失败");
      this.key = res.data.unikey;
      this.createQr();
    },
    // 生成二维码
    async createQr() {
      const res = await createQr(this.key);
      if (res.code !== 200) return this.$message.error("生成二维码失败");
      this.imgData = res.data.qrimg;
      console.log(res.data.qrimg);
      this.checkQr();
    },
    /* 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies) */
    /* 检查二维码状态 */
    async checkQr() {
      console.log("检查二维码的状态中");
      const res = await checkQr(this.key);
      console.log(res);
      this.qrType = res.code;
      this.message = res.message;
      if (res.code === 801 || res.code === 802) {
        this.timer = window.setTimeout(() => {
          this.checkQr();
        }, 5000);
      } else if (res.code === 803) {
        this.$message.success("登录成功");
        this.$router.push("/home");
      }
    },
  },
  mounted() {
    this.getKey();
  },
  beforeDestroy() {
    console.log("销毁二维码组件");
    // 清除定时器
    window.clearTimeout(this.timer);
  },
};
</script>

<style lang="less" scoped>
img {
  display: block;
  width: 140px;
  height: auto;
  margin: 5px auto 37px auto;
}
</style>