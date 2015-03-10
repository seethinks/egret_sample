var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BatchSellDialog = (function (_super) {
    __extends(BatchSellDialog, _super);
    function BatchSellDialog() {
        _super.call(this);
    }
    BatchSellDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.horizontalCenter = 0;
        this.verticalCenter = -100;
        this.m_dialog = new SmallDialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.height = 420;
        this.m_dialog.setTitle("批量卖出");
        this.m_UI = new UIBatchSell();
        this.m_UI.horizontalCenter = 0;
        this.m_UI.verticalCenter = 30;
        this.addElement(this.m_UI);
        this.m_dialog._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.m_UI._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.m_UI._blue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._white_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._green_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._violet_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
    };
    BatchSellDialog.prototype.onCloseBtn = function (e) {
        this.hide();
    };
    BatchSellDialog.prototype.onUpdate = function () {
        var items = Main.player.m_items.equips;
        var w = 0;
        var g = 0;
        var b = 0;
        var v = 0;
        for (var i in items) {
            var equip = items[i];
            if (!equip)
                continue;
            if (equip.godEq > 0)
                continue;
            if (equip.qly == 0)
                w++;
            if (equip.qly == 1)
                g++;
            if (equip.qly == 2)
                b++;
            if (equip.qly == 3)
                v++;
        }
        this.m_UI._white_label.text = "白色装备x" + w;
        this.m_UI._green_label.text = "绿色装备x" + g;
        this.m_UI._blue_label.text = "蓝色装备x" + b;
        this.m_UI._violet_label.text = "紫色装备x" + v;
    };
    BatchSellDialog.prototype.onSellBtn = function (e) {
        var qly = -1;
        switch (e.target) {
            case this.m_UI._white_btn:
                qly = 0;
                break;
            case this.m_UI._blue_btn:
                qly = 2;
                break;
            case this.m_UI._green_btn:
                qly = 1;
                break;
            case this.m_UI._violet_btn:
                qly = 3;
                break;
        }
        if (qly > -1) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var params = "type=0x0076&sid=" + GameManager.SESSION_ID + "&quality=" + qly;
            HttpMessage.sendMsg(url, params);
        }
    };
    BatchSellDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    BatchSellDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        Main.player.m_clickItme = null;
    };
    return BatchSellDialog;
})(Dialog);
BatchSellDialog.prototype.__class__ = "BatchSellDialog";
