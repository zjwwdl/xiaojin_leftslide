<template>
  <div class="left-delete">
    <div
      class="move"
      @touchstart="_touchStart"
      @touchmove="_touchMove"
      @touchend="_touchEnd"
      :style="txtStyle">
      <slot></slot>
    </div>
    <div class="deleteIcon" :style="zIndex">
      <div class="first" @click.prevent="shoucang(index)">
        <p>收藏</p>
      </div>
      <div class="second" @click.prevent="deleteItem(index)">
        <p>删除</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number
  },
  data () {
    return {
      startX: 0,
      moveX: 0,
      disX: 0,
      txtStyle: '',
      delWidth: 320,
      top: '',
      zIndex: 'z-index:-1'
    }
  },
  methods: {
    _touchStart: function (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        // 手指按下的时候记录按下的位置
        this.startX = ev.touches[0].clientX
        // console.log(this.startX)
      }
    },
    _touchMove: function (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        // 滑动过程中的实时位置
        this.moveX = ev.touches[0].clientX
        // 滑动过程中实时计算滑动距离
        this.disX = this.startX - this.moveX
        // console.log('disX==>', this.disX)
        // console.log(this.delWidth / 100)
        // 如果是向右滑动或者只是点击，不改变滑动位置
        if (this.disX <= 100 || this.disX === 0) {
          // console.log('没有移动');
          this.txtStyle = 'transform:translateX(0rem)'
        } else if (this.disX > 100) {
          // 如果是向左滑动，则实时给这个根元素一个向左的偏移-left，当偏移量到达固定值delWidth时，固定元素的偏移量为 delWidth
          this.txtStyle = 'transform:translateX(-' + this.disX / 100 + 'rem)'
          if (this.disX >= this.delWidth / 100) {
            this.txtStyle = 'transform:translateX(-' + this.delWidth / 100 + 'rem)'
            this.zIndex = 'z-index:' + 10 + 'rem'
            // console.log(this.txtStyle + '和' + this.zIndex)
          }
        }
      }
    },
    _touchEnd: function (ev) {
      if (event.changedTouches.length === 1) {
        this.startX = 0
        this.zIndex = 'z-index:' + -1 + 'rem'
        // console.log(event.changedTouches[0].clientX)
        // 手指移动结束后的水平位置
        let endX = event.changedTouches[0].clientX
        // 触摸开始与结束,手指移动的距离
        this.disX = this.startX - endX
      }
    },
    deleteItem: function (index) {
      this.$emit('deleteItem', index)
    },
    shoucang: function (index) {
      this.$emit('shoucang', index)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../components/test.less';
.left-delete{
  width:100%;
  height:100%;
  position:relative;
  z-index:2;
}

.move{
  position: relative;
  transition-duration: 300ms;
  /*     以下三值为默认值，稍后会详细介绍 */
  transition-property: all;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.deleteIcon{
  width: 3.2rem;
  height:100%;
  position: absolute;
  right:0;
  top:0;
  background: blanchedalmond;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .first{
    width: 1.6rem;
    height: 100%;
    background: #C8C8C8;
  }
  .second{
    width: 1.6rem;
    height: 100%;
    background: #EC7773;
  }
  p{
    .midlab(.34rem,@white);
    text-align: center;
    line-height: 2rem;
  }
}
</style>
