var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GiftDialog = (function (_super) {
    __extends(GiftDialog, _super);
    function GiftDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.actList = [];
    }
    GiftDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("礼包");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIActivity();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.textList.skinName = "skins.ListSkin";
        this.addElement(this.textList);
        this.textList.height = 520;
        this.textList.horizontalCenter = 0;
        this.textList.dataProvider = this.dp;
        this.textList.itemRenderer = new egret.gui.ClassFactory(ActivityListOne);
        this.textList.itemRendererSkinName = "skins.ActivityListSkin";
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.textList.top = this.m_UI.top + 67;
        this.m_UI._btn_cdkey.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cdKey, this);
    };
    GiftDialog.prototype.cdKey = function (e) {
        DialogManager.open(CdKey, "CdKey");
    };
    GiftDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    GiftDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var list = [];
        list = this.actList;
        if (list && list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj["tag"] == "2" || obj["tag"] == 2)
                    continue;
                var id = Number(obj["id"]);
                var gift = GameManager.JSON_GIFT[id];
                obj["str"] = gift["des"];
                obj["name"] = gift["name"];
                this.dp.addItem(obj);
            }
        }
    };
    GiftDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0135&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
        this.onUpdate();
        Main.iconMeun.setGift();
    };
    GiftDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        if (!egret.localStorage.getItem("prompt1")) {
            Main.iconMeun.setShowWarn(true);
        }
    };
    return GiftDialog;
})(Dialog);
GiftDialog.prototype.__class__ = "GiftDialog";
