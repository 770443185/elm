<template>
  <div class="restContainer">
    <head-top head-title="重置密码" goBack="true"></head-top>
    <form class="restForm">
      <section class="input_container phone_number">
        <Input
          type="text"
          placeholder="账号"
          name="phone"
          v-model="phoneNumber"
          @input="inputPhone"
        />
        <!-- <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button> -->
      </section>
      <section class="input_container">
        <Input
          type="password"
          password
          placeholder="旧密码"
          name="oldPassWord"
          v-model="oldPassWord"
        />
      </section>
      <section class="input_container">
        <Input
          type="password"
          password
          name="newPassWord"
          placeholder="新密码"
          v-model="newPassWord"
        />
      </section>
      <section class="input_container">
        <Input
          type="password"
          password
          placeholder="请确认密码"
          name="confirmPassWord"
          v-model="confirmPassWord"
        />
      </section>
      <section class="input_container captcha_code_container">
        <input
          type="text"
          placeholder="验证码"
          name="mobileCode"
          maxlength="6"
          v-model="mobileCode"
        />
        <div class="img_change_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg" />
          <div class="change_img" @click="getCaptchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="resetButton">确认修改</div>
    <alert-tip
      v-show="showAlert"
      :showHide="showAlert"
      @closeTip="closeTip"
      :alertText="alertText"
    ></alert-tip>
  </div>
</template>
<script>
import headTop from "../../components/header/head.vue";
import alertTip from "../../components/common/alertTip";
import { getcaptchas, changePassword } from "../../api";
import { Input } from "view-design";
export default {
  data() {
    return {
      phoneNumber: null, //电话号码/账号
      oldPassWord: null,
      newPassWord: null, //新密码
      rightPhoneNumber: false, //输入的手机号码是否符合要求
      confirmPassWord: null, //确认密码
      captchaCodeImg: null, //验证码图片
      mobileCode: null, //验证码
      computedTime: 0, //倒数记时
      showAlert: false, //显示提示组件
      alertText: null, //提示的内容
      accountType: "mobile", //注册方式
    };
  },
  components: {
    headTop,
    alertTip,
    Input,
  },
  methods: {
    inputPhone() {
      if (/.{8,11}/gi.test(this.phoneNumber)) {
        this.rightPhoneNumber = true;
      } else {
        this.rightPhoneNumber = false;
      }
    },
    //获取验证码 // 弃用
    async getVerifyCode() {
      return false;
    },
    async resetButton() {
      if (!this.phoneNumber) {
        this.showAlert = true;
        this.alertText = "请输入正确的账号";
        return;
      } else if (!this.oldPassWord) {
        this.showAlert = true;
        this.alertText = "请输入旧密码";
        return;
      } else if (!this.newPassWord) {
        this.showAlert = true;
        this.alertText = "请输入新密码";
        return;
      } else if (!this.confirmPassWord) {
        this.showAlert = true;
        this.alertText = "请输确认密码";
        return;
      } else if (this.newPassWord !== this.confirmPassWord) {
        this.showAlert = true;
        this.alertText = "两次输入的密码不一致";
        return;
      } else if (!this.mobileCode) {
        this.showAlert = true;
        this.alertText = "请输验证码";
        return;
      }
      // 发送重置信息
      let res = await changePassword(
        this.phoneNumber,
        this.oldPassWord,
        this.newPassWord,
        this.confirmPassWord,
        this.mobileCode
      );
      if (res.message) {
        this.showAlert = true;
        this.alertText = res.message;
        this.getCaptchaCode();
        return;
      } else {
        this.showAlert = true;
        this.alertText = "密码修改成功";
      }
    },
    async getCaptchaCode() {
      const res = await getcaptchas();
      this.captchaCodeImg = res.code;
    },
    //关闭提示
    closeTip() {
      this.showAlert = false;
    },
  },
  created() {
    this.getCaptchaCode();
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.restContainer {
  padding-top: 1.95rem;
}
.restForm {
  background-color: #fff;
  margin-top: 0.6rem;
  .input_container {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid #f1f1f1;
    input {
      @include sc(0.7rem, #666);
    }
    button {
      @include sc(0.65rem, #fff);
      font-family: Helvetica Neue, Tahoma, Arial;
      padding: 0.28rem 0.4rem;
      border: 1px;
      border-radius: 0.15rem;
    }
    .right_phone_number {
      background-color: #4cd964;
    };
    div{
      input {
        border: none !important;
      }
    }
  }
  .phone_number {
    padding: 0.3rem 0.8rem;
  }
  .captcha_code_container {
    height: 2.2rem;
    .img_change_img {
      display: flex;
      align-items: center;
      img {
        @include wh(3.5rem, 1.5rem);
        margin-right: 0.2rem;
      }
      .change_img {
        display: flex;
        flex-direction: "column";
        flex-wrap: wrap;
        width: 2rem;
        justify-content: center;
        p {
          @include sc(0.55rem, #666);
        }
        p:nth-of-type(2) {
          color: #3b95e9;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
.captcha_code_container {
  height: 2.2rem;
  .img_change_img {
    display: flex;
    align-items: center;
    img {
      @include wh(3.5rem, 1.5rem);
      margin-right: 0.2rem;
    }
    .change_img {
      display: flex;
      flex-direction: "column";
      flex-wrap: wrap;
      width: 2rem;
      justify-content: center;
      p {
        @include sc(0.55rem, #666);
      }
      p:nth-of-type(2) {
        color: #3b95e9;
        margin-top: 0.2rem;
      }
    }
  }
}
.login_container {
  margin: 1rem 0.5rem;
  @include sc(0.7rem, #fff);
  background-color: #4cd964;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
</style>
<style>
  .input_container  input{
    border: none !important;
  }
  .input_container input:focus{
    border: none !important;
  }
</style>