/**
 * Created by Administrator on 2018/11/13.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//相当于data
const state = {
  count:0
}

//包含n个用于直接更新状态数据方法的对象
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  },
}


//包含n个用于简介更新状态数据方法的对象
// 调用commit()来触发mutation的调用
const actions = {
  increment ({commit}){
    //提交mutation，触发对呀的mutation调用
    commit('INCREMENT')
  },
  decrement ({commit}){
    //提交mutation，触发对呀的mutation调用
    commit('DECREMENT')
  },
  incrementIfOdd ({commit}){
    //提交mutation，触发对呀的mutation调用
    if (state.count % 2 === 1){
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}){
    //提交mutation，触发对呀的mutation调用
    setTimeout(() => {
      commit('INCREMENT')
    },1000)
  },
}

//包含n个基于state数据的getter计算属性方法的对象
const getters ={
  eventOrOdd(state){
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
