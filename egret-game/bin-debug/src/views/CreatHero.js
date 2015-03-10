var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CreatHero = (function (_super) {
    __extends(CreatHero, _super);
    function CreatHero() {
        _super.call(this);
        this.sex = 1;
        this.job = 1;
        //private txt_name:egret.TextInput = new egret.TextInput();
        this.txt_name = new egret.TextField();
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
    }
    CreatHero.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.sound = RES.getRes("chooserole_music");
        this.sound.play(true);
        this.UIch = new UICreatHero();
        this.addElement(this.UIch);
        this.UIch.horizontalCenter = 0;
        this.UIch.verticalCenter = 0;
        this.UIch.btn_changename.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_daoshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_fashi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_nan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_nv.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.UIch.btn_zhanshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        //this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE,this.init,this.UIch);
        this.txt_uiaseet = new egret.gui.UIAsset();
        this.txt_uiaseet.source = this.txt_name;
        this.txt_name.x = this.UIch.hero_name.x + 130;
        this.txt_name.y = this.UIch.hero_name.y + 13;
        this.txt_name.width = 304;
        this.txt_name.height = 37;
        this.txt_name.text = this.createRandomName();
        this.txt_name.type = egret.TextFieldType.INPUT;
        this.txt_uiaseet.touchChildren = true;
        this.addElement(this.txt_uiaseet);
    };
    CreatHero.prototype.onTouch = function (e) {
        switch (e.currentTarget) {
            case this.UIch.btn_changename:
                this.txt_name.text = this.createRandomName();
                break;
            case this.UIch.btn_create:
                //Main.guiLayer.removeAllElements();
                //Main.guiLayer.addElement(Main.LogingDialog);
                if (this.txt_name.text && this.txt_name.text.trim() == "") {
                    var txt = new egret.gui.Label();
                    Main.guiLayer.addElement(txt);
                    txt.horizontalCenter = 0;
                    txt.y = Main.guiLayer.height / 2;
                    txt.textColor = GameManager.COLOR[5];
                    txt.text = "角色名不能为空！";
                    var tw = egret.Tween.get(txt, { loop: false });
                    tw.to({ y: 50 }, 1500).to({ y: 50 }, 3000).call(function () {
                        if (txt.parent)
                            Main.guiLayer.removeElement(txt);
                    });
                    return;
                }
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                HttpMessage.sendMsg(url, "type=0x0002&sid=" + GameManager.SESSION_ID + "&job=" + this.job + "&sex=" + this.sex + "&name=" + this.txt_name.text);
                break;
            case this.UIch.btn_daoshi:
                this.job = 2;
                break;
            case this.UIch.btn_fashi:
                this.job = 3;
                break;
            case this.UIch.btn_zhanshi:
                this.job = 1;
                break;
            case this.UIch.btn_nan:
                this.sex = 1;
                break;
            case this.UIch.btn_nv:
                this.sex = 0;
                break;
        }
        this.refreshHero();
    };
    //生成随机名字
    CreatHero.prototype.createRandomName = function () {
        var randomName = "";
        var xn = Math.floor(Math.random() * 404 + 1);
        var nn = Math.floor(Math.random() * 404 + 1);
        var xs = GameManager.JSON_NAME[xn]["xing"];
        var ms = GameManager.JSON_NAME[nn][this.sex];
        randomName = xs + ms;
        return randomName;
    };
    CreatHero.prototype.refreshHero = function () {
        if (this.sex == 1) {
            this.UIch.lan_daoshi.source = this.UIch.lan_fashi.source = this.UIch.lan_zhanshi.source = "frier_lan";
            this.UIch.huang_nan.visible = true;
            this.UIch.huang_nv.visible = false;
        }
        else if (this.sex == 0) {
            this.UIch.lan_daoshi.source = this.UIch.lan_fashi.source = this.UIch.lan_zhanshi.source = "frier_hong";
            this.UIch.huang_nan.visible = false;
            this.UIch.huang_nv.visible = true;
        }
        switch (this.job) {
            case 1:
                this.UIch.lan_zhanshi.visible = true;
                this.UIch.lan_daoshi.visible = false;
                this.UIch.lan_fashi.visible = false;
                this.UIch.creat_text_1.visible = true;
                this.UIch.creat_text_2.visible = false;
                this.UIch.creat_text_3.visible = false;
                break;
            case 2:
                this.UIch.lan_zhanshi.visible = false;
                this.UIch.lan_daoshi.visible = true;
                this.UIch.lan_fashi.visible = false;
                this.UIch.creat_text_2.visible = true;
                this.UIch.creat_text_3.visible = false;
                this.UIch.creat_text_1.visible = false;
                break;
            case 3:
                this.UIch.lan_zhanshi.visible = false;
                this.UIch.lan_daoshi.visible = false;
                this.UIch.lan_fashi.visible = true;
                this.UIch.creat_text_3.visible = true;
                this.UIch.creat_text_1.visible = false;
                this.UIch.creat_text_2.visible = false;
                break;
        }
        this.UIch.hero_zhanshi.source = "hero_" + this.sex + "_" + this.job;
    };
    return CreatHero;
})(egret.gui.Group);
CreatHero.prototype.__class__ = "CreatHero";
