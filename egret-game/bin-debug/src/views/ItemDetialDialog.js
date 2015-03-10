var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemDetialDialog = (function (_super) {
    __extends(ItemDetialDialog, _super);
    function ItemDetialDialog() {
        _super.call(this);
    }
    ItemDetialDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.horizontalCenter = 0;
        this.verticalCenter = -100;
        this.m_dilog = new SmallDialogBox();
        this.addElement(this.m_dilog);
        this.m_dilog.height = 350;
        this.m_dilog.setTitle("物品详情");
        this.m_UI = new UIItemDetail();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.verticalCenter = 30;
        this.m_UI._item_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtn, this);
        this.m_dilog._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
    };
    ItemDetialDialog.prototype.onTouchBtn = function (e) {
        var item = Main.player.m_clickItme;
        if (!item)
            return;
        if (item.maxType == 1) {
            DialogManager.open(GemUpgradeDialog, "GemUpgradeDialog");
        }
        else if (item.maxType == 7 || item.maxType == 6) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0081&sid=" + GameManager.SESSION_ID + "&id=" + item["id"];
            HttpMessage.sendMsg(url, param);
        }
        else {
        }
        this.hide();
    };
    ItemDetialDialog.prototype.onCloseBtn = function (e) {
        this.hide();
    };
    ItemDetialDialog.prototype.onUpdate = function () {
        var item = Main.player.m_clickItme;
        if (!item)
            return;
        if (item.maxType == 1) {
            //宝石
            this.m_UI._item_btn._setLabel("合成宝石");
        }
        else if (item.maxType == 7) {
            //神器碎片
            this.m_UI._item_btn._setLabel("合成神器");
        }
        else if (item.maxType == 6) {
            //宝石袋
            this.m_UI._item_btn._setLabel("使用");
        }
        else {
            this.m_UI._item_btn._setLabel("关闭");
        }
        this.m_UI._item_icon.data = item.getData();
        this.m_UI._item_icon.dataChanged();
        this.m_UI._item_detail_label.text = item.tpl["des"];
        this.m_UI._item_detail_label.lineSpacing = 3;
    };
    ItemDetialDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    ItemDetialDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        //Main.player.m_clickItme = null;
    };
    return ItemDetialDialog;
})(Dialog);
ItemDetialDialog.prototype.__class__ = "ItemDetialDialog";
