var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GemCheckDialog = (function (_super) {
    __extends(GemCheckDialog, _super);
    function GemCheckDialog() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    GemCheckDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new GemCheckUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("宝石选择");
        this.top = 30;
        this.m_UI.top = this.top + 40;
        this.list.skinName = "skins.GemListSkin";
        this.list.height = 520;
        this.list.width = 430;
        this.list.itemRenderer = new egret.gui.ClassFactory(UIIcon);
        this.list.itemRendererSkinName = "skins.IconSkin";
        this.list.dataProvider = this.dp;
        this.list.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.list.top = this.m_UI.top + 73;
        this.list.horizontalCenter = 0;
        this.addElement(this.list);
    };
    GemCheckDialog.prototype.clickItem = function (e) {
        var item = e.item;
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0121&sid=" + GameManager.SESSION_ID + "&gamId=" + item["id"] + "&itemId=" + Main.player.m_clickItme["id"];
        HttpMessage.sendMsg(url, param);
        this.hide();
    };
    GemCheckDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    GemCheckDialog.prototype.onUpdate = function () {
        var itemArr = Main.player.m_items.items;
        this.dp.removeAll();
        if (itemArr && itemArr.length > 0) {
            for (var i = 0; i < itemArr.length; i++) {
                var item = itemArr[i];
                if (item.maxType == 1) {
                    this.dp.addItem(item);
                }
            }
        }
    };
    GemCheckDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    GemCheckDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return GemCheckDialog;
})(Dialog);
GemCheckDialog.prototype.__class__ = "GemCheckDialog";
