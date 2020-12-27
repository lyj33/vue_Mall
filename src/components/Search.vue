<template>
  <div>
    <div class="container" style="height: 145px;margin-bottom: 0;margin-top: 0">
      <img src="../../static/img/navlog.jpg" height="145" width="600"/></div>
    <div class="container">
      <i-input v-model="sreachData" size="large" class="sreach" placeholder="搜索">
        <Button slot="append" icon="ios-search" @click="sreach"></Button>
      </i-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      sreachData: ''
    };
  },
  methods: {
    sreach () {
      this.$router.push({path: '/goodsList', query: { sreachData: this.sreachData }});
    }
  }
};
</script>

<style scoped>
.container {
  height: 60px;
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 660px;
}
.sreach {
  margin: 5px 0px;
}
</style>
