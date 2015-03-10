class Login extends egret.gui.Group
{
    private btn_login:egret.gui.UIAsset;

    private btn_trial:egret.gui.UIAsset;

    private myGrop:egret.gui.Group;

    private txt_verson:egret.gui.Label;

    private btn_userId:egret.gui.UIAsset;

    private bg:egret.gui.UIAsset;

    public sound:egret.Sound;

    private btnGroup:egret.gui.Group;

    public constructor()
    {
        super();

        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);
    }

    public createChildren():void
    {
        super.createChildren();

        this.sound = RES.getRes("land_music");

        this.sound.play(true);

        this.btnGroup = new egret.gui.Group();

        this.addElement(this.btnGroup);

        this.btn_trial = new egret.gui.UIAsset();

        this.btn_trial.source = "btn_trial";


        this.btn_login = new egret.gui.UIAsset();

        this.btn_login.source = "btn_login";


//        this.btnGroup.addElement(this.btn_trial);  //一键试玩按钮，不需要时注释 这句就行

        this.btnGroup.addElement(this.btn_login);

        this.btnGroup.layout = new egret.gui.HorizontalLayout();

        this.btnGroup.top = 700;

        this.btnGroup.horizontalCenter = 0;

        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLogin,this);

//        this.btn_trial.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrial, this);

        this.btn_userId = new egret.gui.UIAsset();

        this.btn_userId.source = "btn_zhanghao";

        this.addElement(this.btn_userId); //9g需注释

        this.btn_userId.right = 0;

        this.btn_userId.top = 0;

        this.btn_userId.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChekUser,this);

        this.txt_verson = new egret.gui.Label();

        this.addElement(this.txt_verson);

        this.txt_verson.text = GameManager.version;

        this.txt_verson.textAlign = "center";

        this.txt_verson.left = 0;

        this.txt_verson.top = 0;

        this.txt_verson.size = 20;


        this.myGrop = new egret.gui.Group();

        this.bg =  new egret.gui.UIAsset();

        this.bg.source = "server_bg";

        this.addElement(this.bg);

        this.addElement(this.myGrop);

        this.myGrop.horizontalCenter = 0;

        this.myGrop.bottom = 160;

        this.bg.horizontalCenter = 0;

        this.myGrop.layout = new egret.gui.VerticalLayout();

        this.showLogin(GameManager.server);

    }

    public showLogin(server:any = null):void
    {
        if(!server || !server["name"])
        {
            server = {"name":"请选择服务器"};
        }

        this.myGrop.removeAllElements();

        this.bg.height = 200;

        this.bg.bottom = this.myGrop.bottom - 25;

        this.btnGroup.visible = true;

        for(var i = 0; i < 2; i++)
        {
            if(i == 1) {
                var btn:egret.gui.UIAsset = new egret.gui.UIAsset();

                btn.source = "btn_select";

                this.myGrop.addElement(btn);

                btn.horizontalCenter = 0;

                btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectServer, this);
            }
            else
            {
                var _btn:ServerListButton = new ServerListButton();

                _btn.skinName = "skins.SeverlistBtnSkin";

                _btn.setLabelText(server["name"]);

                _btn.width = 392;

                _btn.height = 59;

                this.myGrop.addElement(_btn);

                _btn.horizontalCenter = 0;
            }
        }
    }

    private showList():void
    {
        this.myGrop.removeAllElements();

        this.bg.height = 215;

        this.btnGroup.visible = false;

        this.bg.bottom = this.myGrop.bottom - 15;

        var taskList1:egret.gui.List = new egret.gui.List();

        taskList1.skinName = "skins.ListSkin";

        taskList1.horizontalCenter = 0;

        taskList1.verticalCenter = 0;

        var dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

        var serverCount:number = GameManager.servers.length;

        if(serverCount>=8)
        {
            this.bg.height += 62 * 6;

            taskList1.height = 530;
        }
        else if(serverCount > 2)
        {
            this.bg.height += 62 * (serverCount - 2);
        }

        for(var a in GameManager.servers)
        {
            dp.addItem(GameManager.servers[a]);
        }

        taskList1.itemRenderer = new egret.gui.ClassFactory(ServerbtnRender);

        taskList1.itemRendererSkinName = "skins.SeverlistBtnSkin";

        taskList1.dataProvider = dp;

        taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.onLoginGame, this);

        this.myGrop.addElement(taskList1);


    }

    private selectServer(e:egret.TouchEvent):void
    {
        if(GameManager.servers.length <= 0)
        {
            var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/getServerList.php";
            var param:string = "";
            var self:Login = this;
            HttpMessage.sendMsgCallBack(url, param, function(obj:any) {
                var servers:any[] = new Array();
                for(var sid in obj)
                {
                    servers.push(obj[sid]);
                }
                servers.sort(function(a:any, b:any){
                    if(a["sid"] < b["sid"])return 1;
                    return -1;
                });
                GameManager.servers = servers;
                self.showList();
            });
        }
        else this.showList();
    }

    private onLoginGame(e:egret.gui.ListEvent):void
    {
        this.showLogin(e.item);

        GameManager.server = e.item;
    }

    private onTrial(e:egret.TouchEvent):void
    {
        //一键试玩
        if(!GameManager.server){
            GameManager.flyText({"t":"请先选择区服", "q":5});
            return;
        }
        if(GameManager.server["status"] == 2){ //限制
            GameManager.flyText({t:"服务器尚未开放...", q:5}, 0);
            return;
        }
        //生成账号
        var fastid:string = egret.localStorage.getItem("kgcqfastid");

        if(fastid){
            GameManager.account = {"guid":fastid, "username":"未绑定账号", "userstatus":1};
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0001&name="+GameManager.account["guid"];
            HttpMessage.sendMsg(url, param);
            egret.localStorage.setItem("lastLoginServer", GameManager.server["sid"]);
        }else{
            var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/fastGame.php";
            var params:string = "fastid=1";
            HttpMessage.sendMsgCallBack(url, params,function(obj:any){
                if(obj && obj['fastid']){
                    GameManager.account = {"guid":obj["fastid"], "username":"未绑定账号", "userstatus":1};
                    var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                    var param:string = "type=0x0001&name="+GameManager.account["guid"];
                    HttpMessage.sendMsg(url, param);
                    egret.localStorage.setItem("lastLoginServer", GameManager.server["sid"]);
                    egret.localStorage.setItem("kgcqfastid", obj["fastid"]);
                }
            });
        }
    }

    private onLogin(e:egret.TouchEvent):void
    {

        if(!GameManager.account || !GameManager.account.guid)
        {
            egret.ExternalInterface.call("pt_login", "login");
            return;
        }


//        if(GameManager.account["status"] == 0)
//        {
//            //显示激活界面
//            DialogManager.open(UserActivate, "UserActivate");
//            return;
//        }

        //登录
        if(GameManager.server)
        {
            if(GameManager.server["status"] == 2 && GameManager.account["status"] != 88){ //限制
                GameManager.flyText({t:"服务器尚未开放...", q:5}, 0);
                return;
            }
            if(GameManager.server["status"] == 3){ //维护
                GameManager.flyText({t:"服务器正在维护中...开启时间请留意官方公告", q:5}, 0);
                return;
            }

            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0001&name="+GameManager.account["guid"]+"&p=";
            HttpMessage.sendMsg(url, param);
            egret.localStorage.setItem("lastLoginServer", GameManager.server["sid"]);
        }
    }

    private onChekUser(e:egret.TouchEvent):void
    {
        egret.ExternalInterface.call("pt_logout", "logout");
    }
}