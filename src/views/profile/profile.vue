<template>
  <div class="profile_page">
    <head-top go-back="true" :head-title="profiletitle"></head-top>
    <section>
      <section class="profile-number">
        <router-link
          :to="userInfo && userInfo.user_id ? '/profile/info' : '/login'"
          class="profile-link"
        >
          <img
            :src="baseImgUrl+userInfo.avatar"
            class="privateImage"
            v-if="userInfo && userInfo.user_id"
          />
          <span class="privateImage" v-else>
            <!-- <svg class="privateImage-svg">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg> -->
            <img src="../../assets/images/akari.jpg" style="width: 100%; height:100%; border-radius: 50%;" alt="">
          </span>
          <div class="user-info">
            <p>{{ username }}</p>
            <p>
              <span class="user-icon">
                <!-- <svg class="icon-mobile" fill="#fff">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    
                  >
                    <path
                      d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"
                    ></path>
                  </use>
                </svg> -->
                <Icon class="icon-mobile" type="ios-phone-portrait" style="font-size: .8rem;"></Icon>
              </span>
              <span class="icon-mobile-number">{{ mobile }}</span>
            </p>
          </div>
          <span class="arrow">
            <!-- <svg class="arrow-svg" fill="#fff">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg> -->
            <Icon type="ios-arrow-forward" color='#fff' />
          </span>
        </router-link>
      </section>
      <section class="info-data">
        <ul class="clear">
          <router-link to="/balance" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ parseInt(balance).toFixed(2) }}</b
              >元</span
            >
            <span class="info-data-bottom">我的余额</span>
          </router-link>
          <router-link to="/benefit" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ count }}</b
              >个</span
            >
            <span class="info-data-bottom">我的优惠</span>
          </router-link>
          <router-link to="/points" tag="li" class="info-data-link">
            <span class="info-data-top"
              ><b>{{ pointNumber }}</b
              >分</span
            >
            <span class="info-data-bottom">我的积分</span>
          </router-link>
        </ul>
      </section>
      <section class="profile-1reTe">
        <!-- 我的订单 -->
        <router-link to="/order" class="myorder">
          <aside>
            <svg fill="#4aa5f0">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#order"
              ></use>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>我的订单</span>
            <span class="myorder-divsvg">
              <!-- <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                ></use>
              </svg> -->
              <Icon type="ios-arrow-forward" />
            </span>
          </div>
        </router-link>
        <!-- 积分商城 -->
        <a href="https://home.m.duiba.com.cn/#/chome/index" class="myorder">
          <aside>
            <!-- <svg fill="#fc7b53">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#point"
              ></use> -->
              <Icon type="logo-hackernews" color='#FC7B53'  />
            </svg>
          </aside>
          <div class="myorder-div">
            <span>积分商城</span>
            <span class="myorder-divsvg">
              <!-- <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                ></use>
              </svg> -->
              <Icon type="ios-arrow-forward"  />
            </span>
          </div>
        </a>
        <!-- 饿了么会员卡 -->
        <router-link to="/vipcard" class="myorder">
          <aside>
            <!-- <svg fill="#ffc636">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vip"
              ></use>
            </svg> -->
            <Icon type="md-star" size='.16rem' color='#FFC636' />
          </aside>
          <div class="myorder-div">
            <span>饿了么会员卡</span>
            <span class="myorder-divsvg">
              <!-- <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                ></use>
              </svg> -->
              <Icon type="ios-arrow-forward" />
            </span>
          </div>
        </router-link>
      </section>
      <section class="profile-1reTe">
        <!-- 服务中心 -->
        <router-link to="/service" class="myorder">
          <aside>
            <!-- <svg fill="#4aa5f0">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#service"
              ></use>
            </svg> -->
            <div style="display: inline-block; width: 100%; height: 100%; background-color: #4AA5F0;"></div>
          </aside>
          <div class="myorder-div">
            <span>服务中心</span>
            <span class="myorder-divsvg">
              <!-- <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                ></use>
              </svg> -->
              <Icon type="ios-arrow-forward" />
            </span>
          </div>
        </router-link>
        <!-- 下载饿了么APP -->
        <router-link to="/download" class="myorder">
          <aside>
            <!-- <svg fill="#3cabff">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#download"
              ></use>
            </svg> -->
            <img src="../../assets/images/elmlogo.jpeg" style="width:100%; height:100%" alt="">
          </aside>
          <div class="myorder-div" style="border-bottom:0;">
            <span>下载饿了么APP</span>
            <span class="myorder-divsvg">
              <!-- <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                ></use>
              </svg> -->
              <Icon type="ios-arrow-forward" />
            </span>
          </div>
        </router-link>
      </section>
    </section>
    <foot-guide></foot-guide>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import headTop from "../../components/header/head";
import footGuide from "../../components/footer/footGuide";
import { baseUrl,baseImgUrl } from "../../config";
import { mapState, mapMutations,mapActions } from "vuex";
import { getImgPath } from "../../assets/js/mixin";
import {Icon} from 'view-design'
export default {
  data() {
    return {
      profiletitle: "我的",
      username: "登录/注册", //用户名
      resetname: "",
      mobile: "暂无绑定手机号", //电话号码
      balance: 0, //我的余额
      count: 0, //优惠券个数
      pointNumber: 0, //积分数
      avatar: "", //头像地址  没有登陆的话就默认头像
      imgBaseUrl: baseUrl,
      baseImgUrl
    };
  },
  components: {
    headTop,
    footGuide,
    Icon
  },
  mixins: [getImgPath],
  computed: {
    ...mapState(["userInfo"]),
    imgpath() {
      let path;
      if (this.avatar.indexOf("/") !== -1) {
        //使用本地 默认头像
        path = "../../assets/images" + this.avatar;
      } else {
        path = this.getImgPath(this.avatar);
      }
      this.SAVE_AVANDER(path);
      return path;
    },
  },
  created() {
    if(!this.userInfo||!this.userInfo.user_id){
        this.getUserInfo()
    }
    this.initData();
  },
  methods: {
    ...mapMutations(["SAVE_AVANDER"]),
    ...mapActions(['getUserInfo']),
    //初始化
    initData() {
      if (this.userInfo && this.userInfo.user_id) {
        this.avatar = this.userInfo.avatar;
        this.username = this.userInfo.username;
        this.mobile = this.userInfo.mobile || "暂无绑定手机号";
        this.balance = this.userInfo.balance;
        this.count = this.userInfo.gift_amount;
        this.pointNumber = this.userInfo.point;
      } else {
        this.username = "登录/注册";
        this.mobile = "暂无绑定手机号";
      }
    },
  },
  watch: {
    // userInfo(value) {
    //   this.initData();
    // },
    userInfo:{
      handler(){
        console.log(33);
        this.initData();
      },
      deep: true
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/mixin";

.profile_page {
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.profile-number {
  padding-top: 1.95rem;
  .profile-link {
    display: block;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: $blue;
    padding: 0.666667rem 0.6rem;
    .privateImage {
      display: inline-block;
      @include wh(2.5rem, 2.5rem);
      border-radius: 50%;
      vertical-align: middle;
      .privateImage-svg {
        background: $fc;
        border-radius: 50%;
        @include wh(2.5rem, 2.5rem);
      }
    }
    .user-info {
      margin-left: 0.48rem;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      p {
        font-weight: 700;
        @include sc(0.8rem, $fc);
        .user-icon {
          @include wh(0.5rem, 0.75rem);
          display: inline-block;
          vertical-align: middle;
          line-height: 0.75rem;
          margin-right: .25rem;
          .icon-mobile {
            @include wh(100%, 100%);
          }
        }
        .icon-mobile-number {
          display: inline-block;
          @include sc(0.57333rem, $fc);
        }
      }
    }
    .arrow {
      @include wh(0.46667rem, 0.98rem);
      display: inline-block;
      svg {
        @include wh(100%, 100%);
      }
    }
  }
}
.info-data {
  width: 100%;
  background: $fc;
  box-sizing: border-box;
  ul {
    .info-data-link {
      float: left;
      width: 33.33%;
      display: inline-block;
      border-right: 1px solid #f1f1f1;
      span {
        display: block;
        width: 100%;
        text-align: center;
      }
      .info-data-top {
        @include sc(0.55rem, #333);
        padding: 0.853333rem 0 0.453333rem;
        b {
          display: inline-block;
          @include sc(1.2rem, #f90);
          font-weight: 700;
          line-height: 1rem;
          font-family: Helvetica Neue, Tahoma;
        }
      }
      .info-data-bottom {
        @include sc(0.57333rem, #666);
        font-weight: 400;
        padding-bottom: 0.453333rem;
      }
    }
    .info-data-link:nth-of-type(2) {
      .info-data-top {
        b {
          color: #ff5f3e;
        }
      }
    }
    .info-data-link:nth-of-type(3) {
      border: 0;
      .info-data-top {
        b {
          color: #6ac20b;
        }
      }
    }
  }
}
.profile-1reTe {
  margin-top: 0.4rem;
  background: $fc;
  .myorder {
    padding-left: 1.6rem;
    display: flex;
    align-items: center;
    aside {
      @include wh(0.7rem, 0.7rem);
      margin-left: -0.866667rem;
      margin-right: 0.266667rem;
      display: flex;
      align-items: center;
      svg {
        @include wh(100%, 100%);
      }
    }
    .myorder-div {
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      padding: 0.433333rem 0.266667rem 0.433333rem 0;
      @include sc(0.7rem, #333);
      display: flex;
      justify-content: space-between;
      span {
        display: block;
      }
      .myorder-divsvg {
        @include wh(0.46667rem, 0.466667rem);
        svg {
          @include wh(100%, 100%);
        }
      }
    }
  }
  .myorder:nth-of-type(3) .myorder-div {
    border: 0;
  }
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
<style scoped>
    .icon-mobile{
        color: #fff;
        transform: translate(-.08rem,-.03rem);
        margin-right: 0.05rem;
    }
    a.myorder aside i{
      font-size: .7rem;
    }
</style>
