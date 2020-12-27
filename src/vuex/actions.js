import axios from 'axios';
// 设置默认请求路径，发起请求时自动将前缀加在请求路径上
axios.defaults.baseURL = 'http://localhost:8080/';
// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('/carouselItems').then(res => {
      const data = res.data;
      commit('SET_CAROUSELITEMS_INFO', data);
    });
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('/getComputer').then(res => {
      const computer = res.data;
      commit('SET_COMPUTER_INFO', computer);
    });
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('/getEat').then(res => {
      const eat = res.data;
      commit('SET_EAT_INFO', eat);
    });
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {};
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    axios.get('getGoodsList').then(res => {
      const t = res.data;
      setTimeout(() => {
        const data = t;
        commit('SET_GOODS_LIST', data);
        commit('SET_LOAD_STATUS', false);
      });
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('/get').then(res => {
      const data = res.data;
      commit('SET_RECOMMEND_INFO', data);
    });
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: '买家',
        province: '江苏省',
        city: '常熟市',
        area: '天河区',
        address: '南三环路',
        phone: '1******666',
        postalcode: '215500'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '500g',
      price: 12.5,
      title: '小圆饼干网红零食'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};
