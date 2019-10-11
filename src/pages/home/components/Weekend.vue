<template>
  <div>
    <div class="title">
      周末去哪
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
          >
        </div>
        <div class="item-info">
          <p
            class="item-title"
          >
            {{ item.title }}
          </p>
          <p
            class="item-desc"
          >
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城周末撒欢', desc: '在帝都过周末，不仅仅是城中游！' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城周末撒欢', desc: '在帝都过周末，不仅仅是城中游！' },
        { id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城周末撒欢', desc: '在帝都过周末，不仅仅是城中游！' },
        { id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城周末撒欢', desc: '在帝都过周末，不仅仅是城中游！' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background  #eee
    text-indent .2rem //首行缩进
  .item-img-wrapper
    height 137px
    overflow hidden
    .item-img
      height 100%
  .item-info
    flex 1
    padding 1px
    .item-title
      line-height 40px
      font-size 16px
      ellipsis()
    .item-desc
      line-height 26px
      color #ccc
      ellipsis()
</style>
