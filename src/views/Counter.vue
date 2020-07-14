<!--
 * @Author: your name
 * @Date: 2020-06-08 14:20:46
 * @LastEditTime: 2020-06-08 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemian\app\src\store\Counter.vue
-->
<template>
  <div id="app">
    number{{ count }} evenRoOdd:{{ evenRoOdd }}
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="jiaodd">jiaodd</button>
    <button @click="jiaAsync">jiaAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: { ...mapGetters(["evenRoOdd"]), ...mapGetters(["count"]) },
  methods: {
    ...mapActions(["increment", "decrement", "jiaodd", "jiaAsync"]),
    /*  hehe() {}, */
    /*  jia() {
      this.$storestore.dispatch("increment");
    },
    jian() {
      this.$storestore.dispatch("decrement");
    },
    jiaodd() {
      this.$store.dispatch("jiaodd");
    },
    jiaAsync() {
      this.$store.dispatch("jiaAsync");
    }, */
    /*   jiaodd() {
      if ((this.$store.state.count + 1) % 2 == 0) {
        this.$store.commit("increment");
      }
    },
    jiaAsync() {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$store.commit("increment");
          resolve();
        }, 1000);
      });
    }, */
  },
};
</script>

<style></style>
