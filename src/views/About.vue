<template>
  <div class="about">
    <h1>zhumingdong</h1>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id:
          <input type="text" class="form-control" v-model="id" />
        </label>

        <label>
          Name:
          <input type="text" class="form-control" v-model="name" />
        </label>

        <!-- 在Vue中，使用事件绑定机制，为元素指定处理函数的时候，如果加了小括号，就可以给函数传参了 -->
        <input type="button" value="添加" class="btn btn-primary" @click="add()" />

        <label>
          搜索名称关键字：
          <input type="text" class="form-control" v-model="keywords" />
        </label>
      </div>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <!-- 之前， v-for 中的数据，都是直接从 data 上的list中直接渲染过来的 -->
        <!-- 现在， 我们自定义了一个 search 方法，同时，把 所有的关键字，通过传参的形式，传递给了 search 方法 -->
        <!-- 在 search 方法内部，通过 执行 for 循环， 把所有符合 搜索关键字的数据，保存到 一个新数组中，返回 -->
        <tr v-for="item in search(keywords)" :key="item.id">
          <td>{{ item.id }}</td>
          <td v-text="item.name"></td>
          <td>{{ item.ctime }}</td>
          <td>
            <a href @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      keywords: "",
      list: [
        {
          name: "benz",
          id: 1,
          ctime: new Date()
        },
        {
          name: "bmw",
          id: 2,
          ctime: new Date()
        }
      ]
    };
  },
  methods: {
    add() {
      var car = {
        id: this.id,
        name: this.name,
        ctime: new Date()
      };
      this.list.unshift(car);
      this.id = this.name = "";
    },
    del(id) {
      var index = this.list.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      });
      this.list.splice(index, 1);
    },
    search(keywords) {
      return this.list.filter(x => {
        if (x.name.indexOf(keywords) != -1) {
          return x;
        }
      });
    }
  }
};
</script>

