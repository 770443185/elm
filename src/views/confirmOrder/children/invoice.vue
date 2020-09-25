<template>
  <div class="rating_page">
    <head-top head-title="选择发票抬头" go-back="true"></head-top>
    <section @click="chooseInvoice" class="choose_invoice">
      <span>不需要开发票</span>
      <!-- <svg  :class="{ choosed: invoice }">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#select"
        ></use>
      </svg> -->
      <Icon type="ios-checkmark-circle" :class='{ choosed: invoice }' />
    </section>
    <div class="determine" @click="confrimInvoice">确定</div>
  </div>
</template>

<script>
import headTop from "../../../components/header/head";
import { mapMutations } from "vuex";
import { Icon } from "view-design";

export default {
  data() {
    return {
      invoice: false, //是否需要发票
    };
  },
  components: {
    headTop,
    Icon
  },
  props: [],
  methods: {
    ...mapMutations(["CONFIRM_INVOICE"]),
    //是否选择发票
    chooseInvoice() {
      this.invoice = !this.invoice;
    },
    //保存发票信息
    confrimInvoice() {
      this.CONFIRM_INVOICE(this.invoice);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";

.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.choose_invoice {
  @include fj;
  align-items: center;
  background-color: #fff;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  padding: 0 0.7rem;
  span {
    @include sc(0.75rem, #333);
  }
  svg {
    @include wh(0.8rem, 0.8rem);
    fill: #999;
  };
  i{
      color: #ccc;
      font-size: 1rem;
  }
  .choosed {
    fill: #4cd964;
    color: #4CD964;
  }
}
.determine {
  background-color: #4cd964;
  @include sc(0.7rem, #fff);
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
</style>
