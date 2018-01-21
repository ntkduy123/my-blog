// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '158154024825331',
//         cookie: true,
//         xfbml: true,
//         version: 'v1.0'
//     });
//     FB.AppEvents.logPageView();
//     FB.getLoginStatus(function (response) {
//         statusChangeCallback(response);
//     });
// };
//
// (function (d, s, id) {
//     let js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//         return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
//
// function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//
//
//     if (response.status == 'connected') {
//         console.log('Welcome!  Fetching your information.... ');
//         FB.api('/me', function (response) {
//             console.log(response);
//         });
//     }
//     else {
//         FB.login(function (response) {
//             console.log(response);
//         })
//     }
// }
//
// function logout() {
//     console.log('test');
//     FB.getLoginStatus(function (response) {
//         if (response.status == 'connected') {
//             FB.logout(function (response) {
//                 console.log(response);
//             })
//         }
//     });
// }
//
// function checkLoginState() {
//     FB.getLoginStatus(function (response) {
//         statusChangeCallback(response);
//     });
// }