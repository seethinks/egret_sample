var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UserActivate = (function (_super) {
    __extends(UserActivate, _super);
    function UserActivate() {
        _super.call(this);
        this.m_uiass = new egret.gui.UIAsset();
    }
    UserActivate.prototype.createChildren = function () {
        this.bottom = 500;
        _super.prototype.createChildren.call(this);
        this.m_UI = new UIJiHuo();
        this.addElement(this.m_UI);
        this.m_text = new egret.TextField();
        this.addElement(this.m_uiass);
        this.m_uiass.source = this.m_text;
        this.m_uiass.top = 20;
        this.m_uiass.left = 12;
        this.m_text.width = 375;
        this.m_text.height = 23;
        this.m_text.type = egret.TextFieldType.INPUT;
        this.m_text.size = 17;
        this.m_text.text = "输入激活码";
        this.m_uiass.touchChildren = true;
        this.m_UI._btn_jihuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    UserActivate.prototype.onTouch = function (e) {
        if (this.m_text.text == "" || this.m_text.text == "输入激活码") {
            //TODO 弹出提示 请输入激活码
            return;
        }
        var url = "http://" + GameManager.delive["ip"] + ":" + GameManager.delive["port"] + "/" + GameManager.delive["pn"] + "/actAccKey.php";
        var params = "k=" + this.m_text.text + "&u=" + GameManager.account["guid"];
        //发送激活消息
        var self = this;
        HttpMessage.sendMsgCallBack(url, params, function (obj) {
            if (obj) {
                if (obj["ret"] == 0) {
                    GameManager.account["status"] = 1;
                    //关闭激活界面
                    self.hide();
                }
                else {
                    var msg = " " + obj["msg"];
                    var txt = new egret.gui.Label();
                    Main.guiLayer.addElement(txt);
                    txt.horizontalCenter = 0;
                    txt.y = Main.guiLayer.height / 2;
                    txt.textColor = GameManager.COLOR[5];
                    txt.text = msg;
                    var tw = egret.Tween.get(txt, { loop: false });
                    tw.to({ y: 50 }, 1500).to({ y: 50 }, 3000).call(function () {
                        if (txt.parent)
                            Main.guiLayer.removeElement(txt);
                    });
                }
            }
        });
    };
    UserActivate.prototype.onUpdate = function () {
    };
    UserActivate.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    UserActivate.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return UserActivate;
})(Dialog);
UserActivate.prototype.__class__ = "UserActivate";
