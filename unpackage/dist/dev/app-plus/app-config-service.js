
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/mine/mine","pages/mall/mall","pages/index/index","pages/subscribe/subscribe","pages/map/map","pagesIndex/massageBusiness/massageBusiness","pagesIndexTwo/merchantDetails/merchantDetails","pagesIndexThree/projectDetails/projectDetails","pagesMine/set/set","pagesMineTwo/personalInfo/personalInfo","pagesMineTwo/accountSecurity/accountSecurity","pagesMineTwo/physicalCondition/physicalCondition","pagesMineTwo/pushSet/pushSet","pagesMineTwo/empower/empower","pagesMineTwo/aboutUs/aboutUs","pagesMineTwo/commonProblem/commonProblem","pagesMineTwo/feedback/feedback","pagesMineTwo/report/report","pagesMineTwo/allOrder/allOrder","pagesMineThree/problemDetails/problemDetails","pagesMineThree/exemptionClause/exemptionClause","pagesCommon/collection-center/collection-center","pagesMall/beautyMall/beautyMall","pagesMallTwo/goodsDetails/goodsDetails"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"preloadRule":{},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"weiiz","compilerVersion":"3.1.2","entryPagePath":"pages/mine/mine","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/mine/mine","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mall/mall","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/subscribe/subscribe","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesIndex/massageBusiness/massageBusiness","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesIndexTwo/merchantDetails/merchantDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesIndexThree/projectDetails/projectDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMine/set/set","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/personalInfo/personalInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/accountSecurity/accountSecurity","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/physicalCondition/physicalCondition","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/pushSet/pushSet","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/empower/empower","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/aboutUs/aboutUs","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/commonProblem/commonProblem","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/feedback/feedback","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/report/report","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineTwo/allOrder/allOrder","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineThree/problemDetails/problemDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMineThree/exemptionClause/exemptionClause","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesCommon/collection-center/collection-center","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMall/beautyMall/beautyMall","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pagesMallTwo/goodsDetails/goodsDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
