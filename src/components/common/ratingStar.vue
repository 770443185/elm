<template>
  <div class="rating_container">
    <section class="star_container">
      <!-- <svg class="grey_fill" v-for="num in 5" :key="num">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#star"
        ></use>
      </svg> -->
      <Icon class="grey_fill" v-for="num in 5" :key="num" type="ios-star" style="font-size: .3rem;" color='#ccc' />
    </section>
    <div :style="'width:' + (rating * 2) / 5 + 'rem'" class="star_overflow">
      <section class="star_container">
        <!-- <svg class="orange_fill" v-for="num in 5" :key="num">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#star"
          ></use>
        </svg> -->
        <Icon class="orange_fill" v-for="num in 5" :key="num" type="ios-star" style="font-size: .3rem;" color='#FF9A0D' />
      </section>
    </div>
  </div>
</template>

<script>
  import {Icon} from 'view-design'
export default {
  data() {
    return {};
  },
  components:{
    Icon
  },
  mounted() {},
  props: ["rating"],
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixin";
.rating_container {
  position: relative;
  top: 0.2rem;
  @include wh(2.5rem, 0.4rem);
  .star_overflow {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .star_container {
    position: absolute;
    display: flex;
    width: 2.5rem;
    height: 0.4rem;
    top: -0.02rem;
    left: -0.02rem;
    .grey_fill {
      fill: #d1d1d1;
    }
    .orange_fill {
      fill: #ff9a0d;
    }
  }
}
</style>
