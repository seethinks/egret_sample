var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChargeDialog = (function (_super) {
    __extends(ChargeDialog, _super);
    function ChargeDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.charges = { 5: { "name": "￥5", "fee": 5, "subject": "50元宝" }, 10: { "name": "￥10", "fee": 10, "subject": "100元宝" }, 50: { "name": "￥50", "fee": 50, "subject": "500元宝" }, 100: { "name": "￥100", "fee": 100, "subject": "1000元宝" }, 500: { "name": "￥500", "fee": 500, "subject": "5000元宝" } };
    }
    ChargeDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UICharge();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("充值");
        this.top = 30;
        this.m_UI.top = this.top + 40;
        this.m_UI._vip_xq_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onVipBtn, this);
        this.taskList1.skinName = "skins.ShopListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(ShopItemReader);
        this.taskList1.itemRendererSkinName = "skins.ShopItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 100;
        this.taskList1.width = 510;
        this.taskList1.height = 540;
        this._dialog.height = 725;
    };
    ChargeDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ChargeDialog.prototype.onVipBtn = function (e) {
        this.hide();
        DialogManager.open(ViperDialog, "ViperDialog");
    };
    ChargeDialog.prototype.onUpdate = function () {
        if (!this.m_UI)
            return;
        var nVipLv = Number(Main.player.vip) + 1;
        if (nVipLv > 15)
            nVipLv = 15;
        var nVipTpl = GameManager.JSON_VIP[Number(nVipLv) + 1];
        if (nVipTpl) {
            var num = 0;
            if (Number(nVipTpl["exp"]) - Main.player.vipexp < 0) {
                num = 0;
            }
            else {
                num = Number(nVipTpl["exp"]) - Main.player.vipexp;
            }
            this.m_UI._charge_ppt.text = "再充值 " + num + " 元宝可成为" + nVipTpl["name"];
            this.m_UI._now_vipLv.source = "vip" + Main.player.vip;
            this.m_UI._next_vipLv.source = "vip" + nVipLv;
            var exr = Math.floor(Main.player.vipexp / Number(nVipTpl["exp"]));
            this.m_UI._vip_exp.width = exr > 1 ? 320 : Main.player.vipexp / Number(nVipTpl["exp"]) * 320;
            var shop = Main.player.m_shops["charge"];
            if (!shop) {
                //初始充值商店
                shop = new ShopData();
                shop.type = "charge";
                shop.name = "充值";
                shop.goods = new Array();
                Main.player.m_shops["charge"] = shop;
                for (var key in this.charges) {
                    var item = new ShopItemData();
                    item.id = this.charges[key]["fee"];
                    item.cost = this.charges[key]["fee"];
                    item.costType = 5;
                    item.num = 1;
                    item.quality = 4;
                    item.tplIcon = "itemicon_gold";
                    item.tplName = this.charges[key]["subject"];
                    item.tplLv = 0;
                    item.discount = 300;
                    shop.goods.push(item);
                }
            }
            this.dp.removeAll();
            for (var k in shop.goods) {
                var item = shop.goods[k];
                if (!item)
                    continue;
                if (Main.player.vipexp > 0) {
                    item.discount = 0;
                }
                else {
                    item.discount = 300;
                }
                this.dp.addItem(item);
            }
        }
    };
    ChargeDialog.prototype.onUpdatePlayer = function () {
        this.onUpdate();
    };
    ChargeDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    ChargeDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ChargeDialog;
})(Dialog);
ChargeDialog.prototype.__class__ = "ChargeDialog";
