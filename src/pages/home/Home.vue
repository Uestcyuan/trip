<template>
  <!-- 只能暴露一个标签，所加上router-link就得用个外部div包裹 -->
  <div>
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
