<template>
  <!-- 只能暴露一个标签，所加上router-link就得用个外部div包裹 -->
  <div>
    <home-swiper />
    <home-icons />
    <home-recommend />
    <home-weekend />
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
