<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="img" :src="item.imgUrl" />
　　　</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 子组件的data必须是个函数
  data () {
    return {
      swiperOption: {
        pagination: 'swiper-pagination'
      },
      swiperList: [{ id: '0001', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/80db5f108330091ac33f395d2e9d36d0.jpg_750x200_33c191ce.jpg' }, { id: '0002', imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg' }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //三个箭头是穿透，这样就突破了scoped的限制
  //这个class名从何而来，是从页面中审查元素得到的
  .wrapper >>> .swiper-pagination-bullet-active
    background red !important
  .wrapper
    overflow: hidden
    width:100%
    height:0
    padding-bottom: 30%   //(宽高比,如果写在height，那么是和父级元素的高度,不是对比wrapper的宽度)
</style>
