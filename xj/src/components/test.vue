<template>
  <div class="">
    <div class="test_header">
      <p>标题：{{ title }}</p>
    </div>

    <div class="test">
      <div class="delete_div" v-for="(item , key) in content" :key="key">
        <left-slider :index="item.id" @deleteItem="deleteItem" @shoucang="shoucang">
          <div class="content">
            <div class="left">
              <img v-lazy="item.img">
            </div>
            <div class="right">
              <p class="title">{{item.name}}</p>
              <p class="des">{{item.des}}</p>
            </div>
          </div>
        </left-slider>
      </div>

    </div>


  </div>
</template>

<script>
  import { mapState , mapGetters , mapActions } from 'vuex'
  import LeftSlider from '../components/left_delete.vue'
  export default {
    prop: {
      index:Number
    },
    components:{
      LeftSlider
    },
    methods:{
      deleteItem :function (index) {
        alert('删除操作：'+index)
      },
      shoucang :function (index) {
        alert('收藏操作：'+index)
      }
    },
    computed: {
      ...mapGetters([
//          getters.js
          'title',
          'content'
      ])
    }
  }
</script>

<style lang="less" scoped>
  @import '../components/test.less';
.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
  p{
    line-height: 1rem;
    text-align: center;
    .midlab(.4rem,@white);
  }
}

.test{
  display: flex;
  flex-direction: column;
  margin-top: .3rem;
  /*min-height: 1rem;*/
  background: peachpuff;
  .content{
    display: flex;
    flex-direction: row;
    background-color: #ececec;
    width: 100%;
    /*height: 2rem;*/
    .left{
      flex: 1;
      img{
        height: 1.6rem;
        display: block;
        margin: .2rem;
        .shadow-lower-right;
      }
    }
    .right{
      flex: 3;
      .title{
        text-align: left;
        .midlab(.4rem,black);
        font-weight: bold;
        line-height: 1.2;
        padding: .1rem;
      }
      .des{
        text-align: left;
        .midlab(.25rem,@gray);
        line-height: 1.2;
        padding: .1rem;
      }
    }
  }
  .delete_div{
    position: relative;
    border-bottom: 2px solid @gray;
  }
  .delete_div:last-child{
    border-bottom: none;
  }
}
</style>
