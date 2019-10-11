<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        >
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
          <button class="item-button">
            查看详情
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg', title: '奥林匹克塔', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg', title: '奥林匹克塔', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg', title: '奥林匹克塔', desc: '世界五大宫之首，穿越与您近在咫尺' },
        { id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg', title: '奥林匹克塔', desc: '世界五大宫之首，穿越与您近在咫尺' }
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 95px
      height 95px
      padding 1px
      box-sizing border-box
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
      .item-button
        margin-top 2px
        padding 0 .1rem
        background #ff9300
        border-radius 3px
        color #fff
        line-height 22px
</style>
