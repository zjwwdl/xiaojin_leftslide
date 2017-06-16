import Vue from 'vue';
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  title:'小金的左滑标题',
  content:[{
    id:1,
    name:'滑板是世界上最酷的运动',
    des:'Rodney Mullen,滑板界的传奇，神话般的人物，所有SK8心中的神！',
    img:'http://img3.gamersky.com/upload-news/200706/20070625200923724.jpg'
  },
  {
    id:2,
    name:'血吼',
    des:'血吼名称来自挥舞时斧子上的孔洞发出的尖啸',
    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497605130679&di=343282cc717fb1598ac6aa7d6101d468&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_201411%2F18%2F-5363500_546b0d5adb1dc.jpg'
  }]
}

const mutations = {

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
