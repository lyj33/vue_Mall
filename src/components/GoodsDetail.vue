<template>
  <div>
    <Search></Search>
    <ShopHeader></ShopHeader>
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem to="/goodsList">商品</BreadcrumbItem>
          <BreadcrumbItem>商品详情</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <!-- 商品信息展示 -->
    <ShowGoods></ShowGoods>
    <!-- 商品详细展示 -->
    <ShowGoodsDetail></ShowGoodsDetail>
    <Spin size="large" fix v-if="isLoading"></Spin>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ShopHeader from '@/components/header/ShopHeader';
import ShowGoods from '@/components/goodsDetail/ShowGoods';
import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
import store from '@/vuex/store';
import {mapState} from 'vuex';
// , mapActions
export default {
  name: 'GoodsDetail',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadGoodsInfo();
  },
  mounted () {
    var gid = this.$route.query.gid;
    this.$http.get('/getGoodsInfo?gid=' + gid).then(res => {
      this.goodsInfo = res.data;
      console.log(res.data);
    });
  },
  data () {
    return {
      tagsColor: ['blue', 'green', 'red', 'yellow'],
      goodsInfo: {}
    };
  },
  computed: {
    ...mapState(['isLoading'])
  },
  components: {
    Search,
    ShopHeader,
    ShowGoods,
    ShowGoodsDetail
  },
  store
};
</script>

<style scoped>
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}

.shop-nav-container {
  margin: 0px auto;
  width: 80%;
}
</style>
