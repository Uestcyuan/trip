<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div
            class="icon-img"
          >
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            >
          </div>
          <p
            class="icon-desc"
          >
            {{ item.desc }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '广州必游'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0004',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上乐园'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '亲子游'
      }, {
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
        desc: '长隆度假区'
      }, {
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
        desc: '广州塔'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus">
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50% //屏幕宽度的50%
  .icons
    margin-top .1rem
    .icon
      width 25% //父级icons宽度的25%
      height 0
      padding-bottom 25% //父级宽度的25%
      float left
      overflow hidden
      position relative //相对定位，相对于其正常位置进行定位
      .icon-img
        position absolute //绝对定位，相对于 static 定位以外的第一个父元素进行定位
        top 0
        left 0
        right 0
        bottom 22px
        box-sizing border-box
        padding 5px
        .icon-img-content
          height 100%
          display block
          margin 0 auto //这三行让图片居中
      .icon-desc
        position absolute //绝对定位，相对于 static 定位以外的第一个父元素进行定位
        left 0
        right 0
        bottom 0
        height 22px
        line-height 22px //这两行让文字上下居中
        text-align center
        color #333
        ellipsis()//这三行让多余的字以点点点显示
</style>
