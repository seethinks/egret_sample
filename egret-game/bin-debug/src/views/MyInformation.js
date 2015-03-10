var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyInformation = (function (_super) {
    __extends(MyInformation, _super);
    function MyInformation() {
        _super.call(this);
    }
    MyInformation.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("我的设置");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIMy();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.my_btn_voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeVoice, this);
        this.m_UI.my_btn_logout.addEventListener(egret.TouchEvent.TOUCH_TAP, this.logOut, this);
        //        this.m_UI.my_btn_logout.visible = false; //除9G 其它注释
        this.m_UI._bind_acc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bindAcc, this);
        this.m_UI._bind_acc.visible = false; //H5用绑定账号 快用H5账号系统版注释
        this.m_UI.my_btn_voice._setLabel("关闭声音");
        this.m_UI.my_btn_vip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showVip, this);
        this.m_UI.my_btn_ghqm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setQm, this);
        //        this.m_UI.my_btn_ghch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoad, this);
        this.m_UI.my_btn_ghch.visible = false;
    };
    MyInformation.prototype.onLoad = function (e) {
        //        DialogManager.open(PageLoadDialog, "PageLoadDialog");
    };
    MyInformation.prototype.setQm = function () {
        DialogManager.open(MyInformationNotice, "MyInformationNotice");
    };
    MyInformation.prototype.showVip = function (e) {
        this.hide();
        DialogManager.open(ViperDialog, "ViperDialog");
    };
    MyInformation.prototype.logOut = function (e) {
        egret.ExternalInterface.call("pt_logout", "logout");
    };
    MyInformation.prototype.bindAcc = function (e) {
    };
    MyInformation.prototype.closeVoice = function (e) {
        if (Main.MainUI.sound) {
            if (Main.MainUI.palySound) {
                Main.MainUI.sound.pause();
                Main.MainUI.palySound = false;
                this.m_UI.my_btn_voice._setLabel("开启声音");
            }
            else {
                Main.MainUI.sound.play(true);
                Main.MainUI.sound.setVolume(0.3);
                Main.MainUI.palySound = true;
                this.m_UI.my_btn_voice._setLabel("关闭声音");
            }
        }
    };
    MyInformation.prototype.onTouch = function (e) {
        this.hide();
    };
    MyInformation.prototype.onUpdate = function () {
        this.m_UI._bind_acc.visible = false;
        if (GameManager.account && GameManager.account["userstatus"] == 1) {
            this.m_UI._bind_acc.visible = true;
        }
    };
    MyInformation.prototype.onUpdatePlayer = function () {
        if (!this.initUI)
            return;
        this.m_UI.my_label_name.text = Main.player.name + "";
        this.m_UI.my_label_name.textColor = GameManager.getNameColor();
        var roleData = GameManager.JSON_ROLE[Main.player.level];
        var minexp = roleData["minexp"];
        var maxexp = roleData["maxexp"];
        var exp = Number(Main.player.exp) - Number(minexp);
        var expMax = Number(maxexp) - Number(minexp);
        //str += "我的ID："+Main.player.m_id+"\n";
        var str = "账号：" + GameManager.account["username"] + "\n";
        str += "称号：无\n";
        str += "职业：" + GameManager.JOB_NAME[Number(Main.player.job)] + "\n";
        str += "等级：" + Main.player.level + "\n";
        str += "声望：" + Main.player.prestige + "\n";
        str += "经验：" + exp + "/" + expMax + "\n";
        str += "vip等级：" + Main.player.vip + "\n";
        str += "PK值：" + Main.player.pk + "\n";
        this.m_UI.my_label_1.text = str;
        this.m_UI.my_label_1.lineSpacing = 8;
        this.m_UI.my_vip_img.source = "vip" + Main.player.vip;
        this.m_UI.my_head_img.source = "f_" + Main.player.sex + "_" + Main.player.job;
        this.setSignature();
    };
    MyInformation.prototype.setSignature = function () {
        this.m_UI.my_label_2.text = Main.player.signature;
    };
    MyInformation.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdatePlayer();
        this.onUpdate();
    };
    MyInformation.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MyInformation;
})(Dialog);
MyInformation.prototype.__class__ = "MyInformation";
