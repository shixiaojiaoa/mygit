/**
 * Created by Administrator on 2018/3/20.
 */
//引入jquery文件 将文件名改为jquery.js 或者配置jquery文件
requirejs.config({
    path:{
        jquery:"jquery-3.3.1"
    }
});
// 传类
require(['jquery','dialog'],function ($,Dialog) {
    $("#open").on("click",function () {
        var settings1 = {
            width:300,
            // height:200,
            title:"注册",
            content:"content.html"
        };
        var settings2 = {
            // width:50,
            height:300,
            title:"注册",
            content:"content.html"
        };
        var d1 = new Dialog();
        d1.open(settings1);
        var d2 = new Dialog();
        d2.open(settings2);


    })
});
// 传对象
// require(['jquery','dialog'],function ($,dialog) {
//     $("#open").on("click",function () {
//         var settings = {
//             width:300,
//             height:200,
//             title:"注册",
//             content:"content.html"
//         };
//         dialog.open(settings);
//     })
// });