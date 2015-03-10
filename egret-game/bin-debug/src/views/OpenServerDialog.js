var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OpenServerDialog = (function (_super) {
    __extends(OpenServerDialog, _super);
    function OpenServerDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    OpenServerDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("开服双倍");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new OpenServerUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.textList.skinName = "skins.ListSkin";
        this.addElement(this.textList);
        this.textList.height = 558;
        this.textList.horizontalCenter = 0;
        this.textList.itemRenderer = new egret.gui.ClassFactory(OpenServerList);
        this.textList.itemRendererSkinName = "skins.NewServerListSkin";
        this.textList.dataProvider = this.dp;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.textList.top = this.m_UI.top + 55;
        this.m_dialog.height = 720;
        for (var i = 1; i <= 5; i++) {
            this.dp.addItem({ num: i });
        }
    };
    OpenServerDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    OpenServerDialog.prototype.onUpdate = function () {
        if (this.actList && this.m_UI)
            this.m_UI._labels.text = "今日双倍：" + this.actList["desc"];
    };
    OpenServerDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    OpenServerDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return OpenServerDialog;
})(Dialog);
OpenServerDialog.prototype.__class__ = "OpenServerDialog";
