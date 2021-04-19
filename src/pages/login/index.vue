<template>
  <div class="loginbox">
    <!-- <img src="../../../static/images/login_tit.png" alt="" class="title" />
    <img src="../../../static/images/login_text.png" alt="" class="text" /> -->
    <div class="title">
      <p class="tit">嘀嘀哒水</p>
      <p class="text">要喝水!找哒水!</p>
    </div>
    <button>账号</button>
    <button>密码</button>
    <button class="grey">登录</button>
    <p class="quick">快捷登录</p>
    <div class="login_type">
      <div class="border">
        <span class="iconfont icon-weixin1 icon"></span>
        <span>我的微信登录</span>
      </div>
      <div>
        <span class="iconfont icon-QQ icon"></span>
        <span>我的微信登录</span>
      </div>
    </div>
    <div>还没有账号？<span class="set">马上注册 </span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
  },

  created() {
    // let app = getApp()
  },
};
</script>

<style scoped lang="scss">
.loginbox {
  height: 100%;
  background: #007eff;
  text-align: center;
  padding: 0 35rpx;
  color: #fff;
  font-size: 22rpx;
  & button {
    height: 103rpx;
    line-height: 103rpx;
    border: 1rpx solid #49a3fe;
    background-color: #007eff;
    margin-bottom: 48rpx;
    color: #fff;
    font-size: 22rpx;
  }
  & button:active {
    opacity: 0.7;
  }
  & .grey {
    background-color: #0691ce;
    border: none;
  }
}
.border {
  border-right: 1rpx solid #638bb5;
}
.title {
  padding: 150rpx 0;
}
.quick {
  color: #fff;
  font-size: 22rpx;
  margin-bottom: 48rpx;
}
.login_type {
  border: 1rpx solid #49a3fe;
  border-radius: 10rpx;
  display: flex;
  height: 62rpx;
  width: 100%;
  padding: 21rpx 0;
  margin-bottom: 48rpx;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .icon {
    color: #4cbf00;
    font-size: 50rpx;
    padding-right: 10rpx;
  }
}
/* .text {
  height: 46rpx;
  width: 266rpx;
} */
.set {
  border-bottom: 1px solid #ccc;
}
.tit {
  font-size: 90rpx;
  color: #fff;
}
.text {
  font-size: 36rpx;
  color: #fff;
}
</style>
