var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityDialog = (function (_super) {
    __extends(ActivityDialog, _super);
    function ActivityDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.huodongList = [];
    }
    ActivityDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("活动");
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
        this.textList.itemRenderer = new egret.gui.ClassFactory(ActivityListTwo);
        this.textList.itemRendererSkinName = "skins.ActivityListToSkin";
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.textList.top = this.m_UI.top + 67;
        this.m_UI._btn_cdkey.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cdKey, this);
    };
    ActivityDialog.prototype.cdKey = function (e) {
        DialogManager.open(CdKey, "CdKey");
    };
    ActivityDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ActivityDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var list = [];
        list = this.huodongList;
        if (list && list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                this.dp.addItem(obj);
            }
        }
        var shouchong = { "activityType": "shouchong" };
        this.dp.addItem(shouchong);
    };
    ActivityDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0135&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
        this.onUpdate();
    };
    ActivityDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ActivityDialog;
})(Dialog);
ActivityDialog.prototype.__class__ = "ActivityDialog";
