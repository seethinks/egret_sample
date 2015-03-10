var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShopDialog = (function (_super) {
    __extends(ShopDialog, _super);
    function ShopDialog() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    ShopDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new UIOriginalDialog();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.top = 0;
        this.m_dialog.setTitleVis();
        this.m_UI = new UIShop();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.list.skinName = "skins.ShopListSkin";
        this.list.height = 540;
        this.list.width = 510;
        this.list.horizontalCenter = 0;
        this.list.top = 183;
        this.list.itemRenderer = new egret.gui.ClassFactory(ShopItemReader);
        this.list.itemRendererSkinName = "skins.ShopItemReaderSkin";
        this.list.dataProvider = this.dp;
        this.addElement(this.list);
        this.m_UI.shop_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.m_UI.shop_btn_buymoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.m_UI.shop_btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
    };
    ShopDialog.prototype.onClickBtn = function (e) {
        switch (e.target) {
            case this.m_UI.shop_btn_buy:
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0035&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "    确定要购买全部商品？");
                break;
            case this.m_UI.shop_btn_buymoney:
                DialogManager.open(BuyMoneyDialog, "BuyMoneyDialog");
                break;
            case this.m_UI.shop_btn_refresh:
                var shop = Main.player.m_shops["mall"];
                var rfc = Number(shop.refreshCount) + 1;
                if (rfc > 20)
                    rfc = 20;
                var refD = GameManager.JSON_SHOP_REF[rfc];
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0036&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "    您确定花费" + refD["goldMoney"] + "元宝刷新商店吗？");
                break;
        }
    };
    ShopDialog.prototype.onClickIcon = function (e) {
    };
    ShopDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var shopData = Main.player.m_shops["mall"];
        if (shopData) {
            this.m_UI.shop_label_gailv.text = shopData.luck + "%";
            for (var i in shopData.goods) {
                var item = shopData.goods[i];
                this.dp.addItem(item);
            }
        }
        else {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0033&sid=" + GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, param);
        }
        if (this.dp.length < 7) {
            var self = this;
            egret.callLater(function () {
                if (self.list.dataGroup && self.list.dataGroup.verticalScrollPosition)
                    self.list.dataGroup.verticalScrollPosition = 0;
            }, this.list);
        }
    };
    ShopDialog.prototype.delGood = function (ids) {
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
    ShopDialog.prototype.onUpdatePlayer = function () {
        this.m_UI.shop_label_gold.text = "" + Main.player.gold;
        this.m_UI.shop_label_level.text = "Lv." + Main.player.level;
        this.m_UI.shop_label_money.text = "" + Main.player.money;
        this.m_UI.shop_vip.source = "vip" + Main.player.vip;
    };
    ShopDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
        this.onUpdatePlayer();
    };
    ShopDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ShopDialog;
})(Dialog);
ShopDialog.prototype.__class__ = "ShopDialog";
