var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DeulShop = (function (_super) {
    __extends(DeulShop, _super);
    function DeulShop() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.count = 0;
    }
    DeulShop.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIDeulRank();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this._dialog.setTitle("荣誉兑换");
        this._dialog.height = Main.guiLayer.height - 190;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.rank_labels.text = "当前荣誉值：70";
        this.taskList1.skinName = "skins.ShopListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(ShopItemReader);
        this.taskList1.itemRendererSkinName = "skins.ShopItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 68;
        this.taskList1.width = 510;
        this.taskList1.height = 538;
        this.m_UI._btn_refrsh.visible = true;
        this.m_UI._btn_refrsh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefresh, this);
    };
    DeulShop.prototype.onRefresh = function (e) {
        GameManager.msgBox.showMsg(function (r) {
            if (r) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0095&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
            }
        }, "本次刷新将消耗20荣誉，确定继续？");
    };
    DeulShop.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 2;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    DeulShop.prototype.onTouch = function (e) {
        this.hide();
    };
    DeulShop.prototype.onUpdate = function () {
        this.m_UI.rank_labels.text = "当前荣誉值：" + Main.player.honor;
        var shop = Main.player.m_shops["duel"];
        if (shop) {
            this.dp.removeAll();
            for (var i in shop.goods) {
                var item = shop.goods[i];
                this.dp.addItem(item);
            }
        }
        else {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0092&sid=" + GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, param);
        }
    };
    DeulShop.prototype.delGood = function (ids) {
        for (var i in ids) {
            for (var k in this.dp) {
                var good = this.dp.getItemAt(k);
                if (good && good["id"] == ids[i]) {
                    this.dp.removeItemAt(k);
                }
            }
        }
        this.dp.refresh();
    };
    DeulShop.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    DeulShop.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return DeulShop;
})(Dialog);
DeulShop.prototype.__class__ = "DeulShop";
