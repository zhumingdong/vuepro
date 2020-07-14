/*
 * @Author: your name
 * @Date: 2020-06-08 13:59:03
 * @LastEditTime: 2020-07-08 23:20:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemian\app\src\store\index.js
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/* 
const state = {
  count: 0,
}; */
/* const getters = {
  evenRoOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
}; */
/* const mutations = {
  increment(state) {
    state.count++;
  }, */
/*   decrement(state) {
    state.count--;
  },
};
 */
const actions = {
  increment({ commit }) {
    commit("increment");
  },
  decrement({ commit }) {
    commit("decrement");
  },
  jiaodd({ state, commit }) {
    if ((state.count + 1) % 2 == 0) {
      commit("increment");
    }
  },
  jiaAsync({ commit }) {
    new Promise((resolve) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 1000);
    });
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions,
  modules: {},
  getters: {},
});
