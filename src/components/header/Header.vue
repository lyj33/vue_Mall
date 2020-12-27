<template>
  <div class="box">
    <div class="nav">
      <router-link to="/"> <img src="../../../static/img/logo.png" height="60" width="60"/></router-link>
      <ul class="detail">
        <li class="first" v-show="!userInfo.username">
          你好，请<router-link to="/login">登录 <Icon type="person"></Icon></router-link> |<span class="text-color-red"><router-link to="/SignUp">免费注册 <Icon type="person-add"></Icon></router-link></span>
        </li>
        <li>
          <Dropdown  placement="bottom-start">
            <a href="javascript:void(0)" @click="goToPay">
              <Icon type="ios-cart-outline" ></Icon> 购物车
            </a>
          </Dropdown>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'M-Header',
  data () {
    return {};
  },
  computed: {
    ...mapState(['userInfo', 'shoppingCart'])
  },
  methods: {
    goToPay () {
      this.$router.push('/order');
    }
  },
  store
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 60px;
  background-color: #777ee4;
}
.nav {
  height: 60px;
  margin: 0% auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: left;
  font-size: 14px;
  line-height: 60px;
  margin-right: 15px;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #0732c9;
  padding-left: 15px;
  cursor: pointer;
}
.nav a:hover {
  color: #a9d8e3;
}
.first {
  color: #0732c9;
}
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.shopping-cart-img img {
  width: 100%;
}
.shopping-cart-null span {
  color: #1bbeee;
  font-size: 12px;
  line-height: 16px;
}
.username-p {
  cursor: pointer;
}
.my-page {
  padding: 3px 5px;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-page a {
  margin: 0px;
  padding: 0px;
  border: none;
}

.my-info i {
  font-size: 28px;
}
.my-info p {
  font-size: 12px;
}
.sign-out {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.sign-out:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.sign-out i {
  font-size: 28px;
}
.sign-out p {
  font-size: 12px;
}
</style>
