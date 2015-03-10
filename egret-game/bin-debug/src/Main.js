var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Main.prototype.onAddToStage = function (event) {
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("login");
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "login") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            //加载服务器配置
            var server_config = RES.getRes("server_config");
            if (server_config) {
                GameManager.delive = server_config["delive"];
                GameManager.version = server_config["version"];
            }
            GameManager.JSON_ERROR = RES.getRes("error");
            GameManager.JSON_NAME = RES.getRes("name");
            this.createScene();
        }
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "login") {
        }
    };
    /**
     * 创建场景界面
     */
    Main.prototype.createScene = function () {
        //最近登录过的服务器设为默认服
        var serverid = egret.localStorage.getItem("lastLoginServer");
        AgreeInit.Initialization();
        Main.player = new Player();
        //游戏场景层，游戏场景相关内容可以放在这里面。
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        Main.bitmap = new egret.gui.UIAsset();
        Main.bitmap.source = "bgImage";
        this.gameLayer.addChild(Main.bitmap);
        Main.bitmap.horizontalCenter = 0;
        Main.bitmap.verticalCenter = 0;
        //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
        Main.guiLayer = new egret.gui.UIStage();
        this.addChild(Main.guiLayer);
        Main.bitmap.width = Main.guiLayer.width;
        Main.bitmap.height = Main.guiLayer.height;
        Main.login = new Login();
        Main.login.horizontalCenter = 0;
        Main.login.verticalCenter = 0;
        //在GUI范围内一律使用addElement等方法替代addChild等方法
        Main.guiLayer.addElement(Main.login);
        Main.login.width = Main.guiLayer.width;
        Main.creatHero = new CreatHero();
        Main.creatHero.horizontalCenter = 0;
        Main.creatHero.top = 0;
        Main.LogingDialog = new LoadingUI();
        Main.LogingDialog.horizontalCenter = 0;
        Main.LogingDialog.top = 650;
        Main.MainUI = new MainUI();
        Main.MainUI.horizontalCenter = 0;
        Main.MainUI.top = 0;
        Main.iconMeun = new IconMenuViews();
        Main.iconMeun.horizontalCenter = 0;
        Main.iconMeun.bottom = 0;
        //        GameManager.account = {guid:"15000", username:"ddddddd", status:1};
        //        return;
        //SDK 接口调用
        egret.ExternalInterface.addCallback("pt_login", function (tokenKey) {
            //平台登录成功返回tokenkey 调用delive login得到guid username
            var url = "http://" + GameManager.delive["ip"] + ":" + GameManager.delive["port"] + "/" + GameManager.delive["pn"] + "/login.php";
            var param = "tokenKey=" + tokenKey + "&lastSid=" + serverid;
            HttpMessage.sendMsgCallBack(url, param, function (obj) {
                if (obj) {
                    var user = obj["user"];
                    switch (user["code"]) {
                        case 0:
                            GameManager.account = user["data"];
                            break;
                    }
                    GameManager.account["status"] = obj["accStatus"];
                    var server = obj["server"];
                    GameManager.server = server;
                    Main.login.showLogin(GameManager.server);
                    GameManager.stopGame = false;
                }
            });
        });
        egret.ExternalInterface.call("pt_login", "login");
        var self = this;
        egret.ExternalInterface.addCallback("pt_logout", function (value) {
            GameManager.stopGame = true;
            GameManager.logOutGame = true;
            GameManager.account = {};
            Main.player = new Player();
            GameManager.SESSION_ID = "";
            Main.guiLayer.removeAllElements();
            Main.bitmap.visible = true;
            Main.guiLayer.addElement(Main.login);
            RES.destroyRes("json");
            RES.destroyRes("jsontwo");
        });
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
