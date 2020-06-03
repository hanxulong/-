/**
 parameter1    请求方法
 parameter2    数据接口的url
 par            请求数据的参数
 callback        回调函数，将请求到的数据作为参数
 */
function sharedmethod(parameter1,parameter2,par,callback) {
    //第一步：创建一个网络请求对象（http),去服务端要数据，接收服务端数据
    var xhr = new XMLHttpRequest();
//第二步：与服务端建立连接（get/post)请求方式，连接哪个服务器，用连接这个服务器的哪个接口
    xhr.open(parameter1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+parameter2);
//设置请求头，告诉服务器咱们传递过去的数据式仪表单的形式传递过去的
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//第三步：向服务器发送请求（传参)
    xhr.send(par);
//第四步：接收服务器返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4  代表数据请求完成
        //xhr.status == 200  代表数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText里面包含了服务器端返回的数据
            var responseData = JSON.parse(xhr.responseText);
            var str = responseData.data;
            callback(str,xhr.responseText);
        }
    }
}




// var btn = document.getElementById("i_btn")
// btn.onclick=function() {
//     var userName = encodeURIComponent(document.getElementById("i_account").value);
//     var pwd = encodeURIComponent(document.getElementById("i_pwd").value);
//     // 创建网络请求对象
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('post', 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login');
//
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//     var par = "username=" + userName + "&pwd=" + pwd;
//     xhr.send(par);
//     xhr.onreadystatechange = function () {
//         //xhr.readyState == 4数据请求完成
//         //xhr.status == 200数据成功返回
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             //responseText里面包含了服务端返回的数据
//
//             var responseData = JSON.parse(xhr.responseText);
//             var str = responseData.data;
//             if (str == "登录成功") {
//                 location.href = "DropleService.html";
//             } else {
//                 alert(str);
//             }
//         }
//     }
// }
