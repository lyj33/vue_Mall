var express = require('express');
var app = express();
var debug = require('debug')('my-application'); // debug模块


//跨域配置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/guideArr', function (req, res) {

    var data = [ ["购物指南", "购物流程", "生活旅行", "常见问题", "联系客服"],
    ["配送方式", "上门自提", "211限时达", "配送服务查询"],
    ["支付方式", "货到付款", "在线支付", "分期付款"],
    ["售后服务", "售后政策", "价格保护", "退款说明", "取消订单"] ];

    res.json(data);
})

app.get("/carouselItems",function (req,res){

    var data = {
        carouselItems: [
            'static/img/nav/1.jpg',
            'static/img/nav/2.jpg',
            'static/img/nav/3.jpg',
            'static/img/nav/4.jpg',
            'static/img/nav/5.jpg'
        ],
        activity: [
            'static/img/nav/nav_showimg1.jpg',
            'static/img/nav/nav_showimg2.jpg'
        ]
    }
    res.json(data);
})

app.get('/getComputer', function (req, res) {

    var data = {
        title: '数码办公',
        link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
        detail: [
            {
                bigImg: 'static/img/index/computer/item-computer-1.jpg',
                itemFour: [
                    {
                        title: '电脑馆',
                        intro: '笔记本999元限量秒！',
                        img: 'static/img/index/computer/item-computer-2.jpg'
                    },
                    {
                        title: '外设装备',
                        intro: '1000减618',
                        img: 'static/img/index/computer/item-computer-1-3.jpg'
                    },
                    {
                        title: '电脑配件',
                        intro: '联合满减最高省618',
                        img: 'static/img/index/computer/item-computer-1-4.jpg'
                    },
                    {
                        title: '办公生活',
                        intro: '5折神券 精品文具',
                        img: 'static/img/index/computer/item-computer-1-5.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/computer/item-computer-1-6.jpg',
                    'static/img/index/computer/item-computer-1-7.jpg',
                    'static/img/index/computer/item-computer-1-8.jpg'
                ]
            },
            {
                bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
                itemFour: [
                    {
                        title: '平板电脑',
                        intro: '爆款平板12期免息',
                        img: 'static/img/index/computer/item-computer-2-2.jpg'
                    },
                    {
                        title: '智能酷玩',
                        intro: '抢999减666神券',
                        img: 'static/img/index/computer/item-computer-2-3.jpg'
                    },
                    {
                        title: '娱乐影音',
                        intro: '大牌耳机低至5折',
                        img: 'static/img/index/computer/item-computer-2-4.jpg'
                    },
                    {
                        title: '摄影摄像',
                        intro: '大牌相机5折抢',
                        img: 'static/img/index/computer/item-computer-2-5.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/computer/item-computer-2-6.jpg',
                    'static/img/index/computer/item-computer-2-7.jpg',
                    'static/img/index/computer/item-computer-2-8.jpg'
                ]
            }
        ]
    };

    res.json(data);
})

app.get('/getEat', function (req, res) {

    var data = {
        title: '居家休闲',
        link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
        detail: [
            {
                bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
                itemFour: [
                    {
                        title: '粮油调味',
                        intro: '买2免1',
                        img: 'static/img/index/eat/item-eat-1-2.jpg'
                    },
                    {
                        title: '饮料冲调',
                        intro: '第二件半价',
                        img: 'static/img/index/eat/item-eat-1-3.jpg'
                    },
                    {
                        title: '休闲零食',
                        intro: '满99减40',
                        img: 'static/img/index/eat/item-eat-1-4.jpg'
                    },
                    {
                        title: '中外名酒',
                        intro: '满199减100',
                        img: 'static/img/index/eat/item-eat-1-5.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/eat/item-eat-1-6.jpg',
                    'static/img/index/eat/item-eat-1-7.jpg',
                    'static/img/index/eat/item-eat-1-8.jpg'
                ]
            },
            {
                bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
                itemFour: [
                    {
                        title: '东家菜',
                        intro: '丰富好味',
                        img: 'static/img/index/eat/item-eat-2-2.jpg'
                    },
                    {
                        title: '东家菜',
                        intro: '丰富好味',
                        img: 'static/img/index/eat/item-eat-2-2.jpg'
                    },
                    {
                        title: '东家菜',
                        intro: '丰富好味',
                        img: 'static/img/index/eat/item-eat-2-2.jpg'
                    },
                    {
                        title: '东家菜',
                        intro: '丰富好味',
                        img: 'static/img/index/eat/item-eat-2-2.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/eat/item-eat-2-6.jpg',
                    'static/img/index/eat/item-eat-2-7.jpg',
                    'static/img/index/eat/item-eat-2-8.jpg'
                ]
            }
        ]
    };

    res.json(data);
})

app.get('/getGoodsList',function (req,res){
    var data =  {
        asItems: [
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                price: 5399,
                intro: '小米10智能手机官方正品128G+8G',
                num: 3140,
                sale: 9000
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                price: 1499,
                intro: '苹果Apple Watch S3 智能穿戴手表',
                num: 6160,
                sale: 8900
            },
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                price: 5399,
                intro: '小米10智能手机官方正品128G+8G',
                num: 3140,
                sale: 9000
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                price: 1499,
                intro: '苹果Apple Watch S3 智能穿戴手表',
                num: 6160,
                sale: 8900
            },
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                price: 5399,
                intro: '小米10智能手机官方正品128G+8G',
                num: 3140,
                sale: 9000
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                price: 1499,
                intro: '苹果Apple Watch S3 智能穿戴手表',
                num: 6160,
                sale: 8900
            }
        ],
        goodsList:[
            {
                gid:0,
                img: 'static/img/goodsList/item-show-1.jpg',
                price: 66.60,
                intro: '秋裤 保暖 纯棉',
                remarks: 6160,
                shopName: '商城小店',
                sale: 9900
            },
            {
                gid:1,
                img: 'static/img/goodsList/item-show-2.jpg',
                price: 28.00,
                intro: '早餐面包 夹心 网红零食',
                remarks: 3000,
                shopName: '商城小店',
                sale: 9600
            },
            {
                gid:2,
                img: 'static/img/goodsList/item-show-3.jpg',
                price: 15.00,
                intro: '烤芝士土司',
                remarks: 2800,
                shopName: '商城小店',
                sale: 8900
            },
            {
                gid:3,
                img: 'static/img/goodsList/item-show-4.jpg',
                price: 29.90,
                intro: '蜜枣 儿时回忆',
                remarks: 9000,
                shopName: '商城小店',
                sale: 8600
            },
            {
                gid: 4,
                img: 'static/img/goodsList/item-show-5.jpg',
                price: 15.00,
                intro: '龙虾枣片 蟹黄枣片',
                remarks: 6160,
                shopName: '商城小店',
                sale: 8560
            },
            {
                gid: 5,
                img: 'static/img/goodsList/item-show-6.jpg',
                price: 288.00,
                intro: '保暖外套女',
                remarks: 9006,
                shopName: '商城小店',
                sale: 8530
            },
            {
                gid: 6,
                img: 'static/img/goodsList/item-show-7.jpg',
                price: 15.00,
                intro: '薯片进口 多种口味组合装',
                remarks: 8666,
                shopName: '商城小店',
                sale: 8360
            },
            {
                gid: 7,
                img: 'static/img/goodsList/item-show-8.jpg',
                price: 12888.99,
                intro: 'iMAC 苹果一体机 P3广色域显示屏',
                remarks: 6080,
                shopName: '商城小店',
                sale: 7560
            },
            {
                gid:8,
                img: 'static/img/goodsList/item-show-9.jpg',
                price: 369.60,
                intro: '男士皮鞋',
                remarks: 6160,
                shopName: '商城小店',
                sale: 7360
            },
            {
                gid: 9,
                img: 'static/img/goodsList/item-show-10.jpg',
                price: 289.00,
                intro: '男式皮鞋 头层牛皮',
                remarks: 3000,
                shopName: '商城小店',
                sale: 6960
            },
            {
                gid:10,
                img: 'static/img/goodsList/item-show-11.jpg',
                price: 159.00,
                intro: '皮鞋男 高帮',
                remarks: 2800,
                shopName: '商城小店',
                sale: 6560
            },
            {
                gid: 12,
                img: 'static/img/goodsList/item-show-12.jpg',
                price: 29.90,
                intro: '俄罗斯进口 紫皮糖 巧克力',
                remarks: 9000,
                shopName: '商城小店',
                sale: 6360
            },
            {
                gid: 12,
                img: 'static/img/goodsList/item-show-13.jpg',
                price: 15.00,
                intro: '雪地靴 男/女 加厚加绒 零下20度',
                remarks: 6160,
                shopName: '商城小店',
                sale: 5530
            },
            {
                gid: 13,
                img: 'static/img/goodsList/item-show-14.jpg',
                price: 8999.00,
                intro: '惠普笔记本电脑 i7-10510u 512G 16G',
                remarks: 9006,
                shopName: '商城小店',
                sale: 5560
            },
            {
                gid: 14,
                img: 'static/img/goodsList/item-show-15.jpg',
                price: 195.00,
                intro: '男士外套 冬季加绒',
                remarks: 8666,
                shopName: '商城小店',
                sale: 5260
            },
            {
                gid: 15,
                img: 'static/img/goodsList/item-show-16.jpg',
                price: 29.90,
                intro: '老婆饼 经典味道',
                remarks: 6080,
                shopName: '商城小店',
                sale: 3560
            },
            {
                gid: 16,
                img: 'static/img/goodsList/item-show-17.jpg',
                price: 299.90,
                intro: '男士外套 冲锋衣 防风防水',
                remarks: 6080,
                shopName: '商城小店',
                sale: 3560
            },
            {
                gid: 17,
                img: 'static/img/goodsList/item-show-18.jpg',
                price: 599.90,
                intro: '运动鞋女 全新配色',
                remarks: 6080,
                shopName: '商城小店',
                sale: 3560
            },
            {
                gid: 18,
                img: 'static/img/goodsList/item-show-19.jpg',
                price: 599.90,
                intro: '运动鞋女 小白鞋',
                remarks: 6080,
                shopName: '商城小店',
                sale: 3560
            },
            {
                gid: 19,
                img: 'static/img/goodsList/item-show-20.jpg',
                price: 3999.90,
                intro: '华为平板 pencil 手绘板',
                remarks: 6080,
                shopName: '商城小店',
                sale: 3560
            }]
    };

    res.json(data);
})

app.get("/getPanelData1",function (req,res){

    const data = {
        navTags: [ '清洁用品', '美妆商城', '美妆馆', '妆比社', '全球购美妆', '宠物馆' ],
        classNav: [
            {
                title: '面部护肤',
                tags: [ '补水保湿', '卸妆', '洁面', '爽肤水', '乳液面霜', '精华', '眼霜', '防晒', '面膜', '剃须', '套装' ]
            },
            {
                title: '洗发护发',
                tags: [ '洗发', '护发', '染发', '造型', '假发', '美发工具', '套装' ]
            },
            {
                title: '身体护理',
                tags: [ '补水保湿', '沐浴', '润肤', '精油', '颈部', '手足', '纤体塑形', '美胸', '套装' ]
            },
            {
                title: '口腔护理',
                tags: [ '牙膏/牙粉', '牙刷/牙线', '漱口水', '套装' ]
            },
            {
                title: '女性护理',
                tags: [ '卫生巾', '卫生护垫', '私密护理', '脱毛膏' ]
            },
            {
                title: '香水彩妆',
                tags: [ 'BB霜', '化妆棉', '女士香水', '男士香水', '底妆', '眉笔', '睫毛膏', '眼线', '眼影', '唇膏/彩' ]
            },
            {
                title: '清洁用品',
                tags: [ '纸品湿巾', '衣物清洁', '清洁工具', '家庭清洁', '一次性用品', '驱虫用品', '皮具护理' ]
            },
            {
                title: '宠物生活',
                tags: [ '水族世界', '狗粮', '猫粮', '猫狗罐头', '狗零食', '猫零食', '医疗保健', '宠物玩具', '宠物服饰' ]
            },
            {
                title: '香水彩妆',
                tags: [ 'BB霜', '化妆棉', '女士香水', '男士香水', '底妆', '眉笔', '睫毛膏', '眼线', '眼影', '唇膏/彩' ]
            },
            {
                title: '清洁用品',
                tags: [ '纸品湿巾', '衣物清洁', '清洁工具', '家庭清洁', '一次性用品', '驱虫用品', '皮具护理' ]
            },
            {
                title: '宠物生活',
                tags: [ '水族世界', '狗粮', '猫粮', '猫狗罐头', '狗零食', '猫零食', '医疗保健', '宠物玩具', '宠物服饰' ]
            }
        ]
    };

    res.json(data);

})

app.get("/getPanelData2",function (req,res){

    const data = {
        navTags: [ '赛事', '运动城', '户外馆', '健身房', '骑行馆', '钟表城' ],
        classNav: [
            {
                title: '2020新品',
                tags: [ '休闲鞋', '商务休闲鞋', '正装鞋', '帆布鞋', '凉鞋', '拖鞋', '功能鞋', '增高鞋', '工装鞋', '雨鞋' ]
            },
            {
                title: '运动鞋包',
                tags: [ '跑步鞋', '休闲鞋', '篮球鞋', '帆布鞋', '板鞋', '拖鞋', '运动包' ]
            },
            {
                title: '健身训练',
                tags: [ '跑步机', '健身车/动感单车', '椭圆机', '综合训练器', '划船机', '甩脂机', '倒立机', '武术搏击' ]
            },
            {
                title: '骑行运动',
                tags: [ '山地车', '公路车', '折叠车', '骑行服', '电动车', '电动滑板车', '城市自行车', '平衡车' ]
            },
            {
                title: '体育用品',
                tags: [ '乒乓球', '羽毛球', '篮球', '足球', '轮滑滑板', '网球', '高尔夫', '台球', '排球' ]
            },
            {
                title: '户外鞋服',
                tags: [ '户外风衣', '徒步鞋', 'T恤', '冲锋衣裤', '速干衣裤', '越野跑鞋', '滑雪服', '羽绒服/棉服', '休闲衣裤' ]
            },
            {
                title: '户外装备',
                tags: [ '背包', '帐篷/垫子', '望远镜', '烧烤用具', '便携桌椅床', '户外配饰', '军迷用品', '野餐用品' ]
            },
            {
                title: '垂钓用品',
                tags: [ '钓竿', '鱼线', '浮漂', '鱼饵', '钓鱼配件', '渔具包', '钓箱钓椅', '鱼线轮', '钓鱼灯' ]
            },
            {
                title: '游泳用品',
                tags: [ '女士泳衣', '比基尼', '男士泳衣', '泳镜', '游泳圈', '游泳包防水包', '泳帽', '游泳配件' ]
            },
            {
                title: '垂钓用品',
                tags: [ '钓竿', '鱼线', '浮漂', '鱼饵', '钓鱼配件', '渔具包', '钓箱钓椅', '鱼线轮', '钓鱼灯' ]
            },
            {
                title: '游泳用品',
                tags: [ '女士泳衣', '比基尼', '男士泳衣', '泳镜', '游泳圈', '游泳包防水包', '泳帽', '游泳配件' ]
            }
        ]
    };

    res.json(data);

})

app.get("/getTagsInfo",function (req,res){
    const data =  [
        {
            tagName: '品牌',
            tags: [ '华为(HUAWEI)', '良品铺子', 'GUER', 'Adidas', 'OPPO', 'Nike', '三养', '小米', '优衣库', 'Apple', '其他' ]
        },
        {
            tagName: '款式',
            tags: [ '卫衣', '加高', '经典', '边框', '运动臂包', '钱包式', '定制', '防水袋', '布袋', '其他' ]
        },
        {
            tagName: '材质',
            tags: [ '塑料/PC', '棉', '金属', '电镀', '真皮', '树脂', '木质', '镶钻', '液态硅胶', 'TPU' ]
        }
    ];
    res.json(data);
})

app.get("/getShopIntro",function (req,res){
    const data = {
        shopName: '商城小店',
        slogen:'只给你最好的'
    }
    res.json(data);
})


app.get("/getGoodsInfo",function (req,res){

    const remarks={
        goodAnalyse: 90,
            remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
            remarksNumDetail: [ 2000, 3000, 900, 1 ],
            detail: [
            {
                username: 'p****1',
                values: 3,
                content: '好！',
                goods: '商品',
                create_at: '2020-05-15 09:20'
            },
            {
                username: '13****1',
                values: 5,
                content: '很满意。物流很快。很愉快的一次购物！',
                goods: '商品',
                create_at: '2020-05-13 15:23'
            },
            {
                username: '3****z',
                values: 4.5,
                content: '店家还送了很多，非常值得！',
                goods: '商品',
                create_at: '2020-05-05 12:25'
            },
            {
                username: 'gd****c',
                values: 3.5,
                content: '就是我想要赶快下手了。',
                goods: '商品',
                create_at: '2020-04-06 16:23'
            },
            {
                username: 'r****b',
                values: 4.5,
                content: '很不错我很满意',
                goods: '商品',
                create_at: '2020-03-15 19:24'
            },
            {
                username: 'd****e',
                values: 5,
                content: '好评！',
                goods: '商品',
                create_at: '2020-03-10 10:13'
            }
        ]};


    let params = String(parseInt(req.query['gid'])+1);
    // var params = 2;
    console.log(params);
    if(params==null){
        params = '1';
    }

    var names = ['秋裤 保暖 纯棉',
        '早餐面包 夹心 网红零食',
        '烤芝士土司',
        '蜜枣 儿时回忆',
        '龙虾枣片 蟹黄枣片',
        '保暖外套女',
        '薯片进口 多种口味组合装',
        'iMAC 苹果一体机 P3广色域显示屏',
        '男士皮鞋',
        '男式皮鞋 头层牛皮',
        '皮鞋男 高帮',
        '俄罗斯进口 紫皮糖 巧克力',
        '雪地靴 男/女 加厚加绒 零下20度',
        '惠普笔记本电脑 i7-10510u 512G 16G',
        '男士外套 冬季加绒',
        '老婆饼 经典味道',
        '男士外套 冲锋衣 防风防水',
        '运动鞋女 全新配色',
        '运动鞋女 小白鞋',
        '华为平板 pencil 手绘板'];


    const data = {
        goodsImg: [
            'static/img/goodsDetail/'+params+'/1.jpg',
            'static/img/goodsDetail/'+params+'/2.jpg',
            'static/img/goodsDetail/'+params+'/3.jpg',
            'static/img/goodsDetail/'+params+'/4.jpg'
        ],
        title: '商品'+ names[req.query['gid']]+'标题',
        tags: ['满69-20元', '关注享好礼', '配次日达'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
            [
                {
                    img: 'static/img/goodsDetail/'+params+'/1.jpg',
                    intro: '标签',
                    price: 28.0
                },
                {
                    img: 'static/img/goodsDetail/'+params+'/1.jpg',
                    intro: '标签',
                    price: 29.0
                },
                {
                    img: 'static/img/goodsDetail/'+params+'/2.jpg',
                    intro: '标签',
                    price: 28.5
                }
            ],
            [
                {
                    img: 'static/img/goodsDetail/'+params+'/3.jpg',
                    intro: '标签',
                    price: 32.0
                },
                {
                    img: 'static/img/goodsDetail/'+params+'/3.jpg',
                    intro: '标签',
                    price: 32.0
                },
                {
                    img: 'static/img/goodsDetail/'+params+'/4.jpg',
                    intro: '标签',
                    price: 35.0
                }
            ]
        ],
        goodsDetail: [
            'static/img/goodsDetail/intro/1.jpg',
            'static/img/goodsDetail/intro/2.jpg',
            'static/img/goodsDetail/intro/3.jpg',
            'static/img/goodsDetail/intro/4.jpg'
        ],
        remarks: remarks
    };
    res.json(data);
})

app.get("/test",function (req,res){
    var params = req.query['gid'];
    console.log(params==null);
    res.json(params);
})

var server = app.listen(8080, function () {

    console.log("开始！！！！！！！");
    debug('Express server listening on port ' +8080);

})
