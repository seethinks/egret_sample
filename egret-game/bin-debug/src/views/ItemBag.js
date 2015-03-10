var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemBag = (function (_super) {
    __extends(ItemBag, _super);
    function ItemBag() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.type = 0;
        this.itemWain = false;
    }
    ItemBag.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.dialog = new UIOriginalDialog();
        this.addElement(this.dialog);
        this.dialog.horizontalCenter = 0;
        this.dialog.top = 0;
        this.dialog.setTitle("背包");
        this.m_UI = new UIItemBag();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.top = 0;
        this.m_UI.btn_tab1.setText("wenzi_zhuangbei");
        this.m_UI.btn_tab2.setText("wenzi_wuping");
        this.m_UI.btn_tab1.setSouoce("btn_chek1");
        this.m_UI.btn_tab2.setSouoce("btn_chek2");
        this.taskList1.skinName = "skins.TileListSkin";
        this.taskList1.width = 540;
        this.taskList1.height = 415;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.top = 320;
        this.addElement(this.taskList1);
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIIcon);
        this.taskList1.itemRendererSkinName = "skins.IconSkin";
        this.taskList1.dataProvider = this.dp;
        this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.m_UI._btn_kzbg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);
        this.m_UI._btn_plmc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);
        this.m_UI._btn_zbsx.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);
        this.m_UI.btn_tab1.touchEnabled = true;
        this.m_UI.btn_tab1.touchChildren = true;
        this.m_UI.btn_tab2.touchChildren = true;
        this.m_UI.btn_tab2.touchEnabled = true;
        this.m_UI.btn_tab1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickTab1, this);
        this.m_UI.btn_tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickTab2, this);
        this.m_UI.setItemWarn(this.itemWain);
    };
    ItemBag.prototype.onKzbag = function (e) {
        switch (e.target) {
            case this.m_UI._btn_plmc:
                DialogManager.open(BatchSellDialog, "BatchSellDialog");
                break;
            case this.m_UI._btn_kzbg:
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0080&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "您确定花费100元宝购买10个背包格子？");
                break;
            case this.m_UI._btn_zbsx:
                DialogManager.open(EqptRongLian, "EqptRongLian");
                break;
            default:
                GameManager.flyText({ t: "功能完善中，敬请期待！", q: 1 });
        }
    };
    ItemBag.prototype.clickTab1 = function (e) {
        if (e === void 0) { e = null; }
        if (this.type != 0) {
            this.type = 0;
            this.onUpdate();
            this.m_UI.btn_tab1.setSouoce("btn_chek1");
            this.m_UI.btn_tab2.setSouoce("btn_chek2");
            this.m_UI.bag_size_label.visible = true;
            this.m_UI._btn_plmc.visible = true;
            this.m_UI._btn_zbsx.visible = true;
            this.setEqptW();
        }
    };
    ItemBag.prototype.clickTab2 = function (e) {
        if (e === void 0) { e = null; }
        if (this.type != 1) {
            this.type = 1;
            this.onUpdate();
            this.m_UI.btn_tab1.setSouoce("btn_chek2");
            this.m_UI.btn_tab2.setSouoce("btn_chek1");
            this.m_UI.bag_size_label.visible = false;
            this.m_UI._btn_plmc.visible = false;
            this.m_UI._btn_zbsx.visible = false;
            this.setItemW();
        }
    };
    ItemBag.prototype.setTab = function (type) {
        if (type === void 0) { type = 0; }
        this.type = type;
    };
    ItemBag.prototype.onUpdate = function () {
        //背包占用格数显示
        if (this.initUI)
            this.m_UI.bag_size_label.text = Main.player.m_items.equips.length + "/" + Main.player.m_bagSize;
        //显示黑铁矿石数
        if (this.initUI)
            this.m_UI.bstone_count_label.text = "黑铁矿石：" + Main.player.bstone;
        this.dp.removeAll();
        var items = [];
        if (this.type == 0) {
            items = Main.player.m_items.equips;
        }
        else {
            items = Main.player.m_items.items;
        }
        for (var i in items) {
            this.dp.addItem(items[i]);
        }
        if (items.length < 16) {
            var self = this;
            egret.callLater(function () {
                if (self.taskList1.dataGroup && self.taskList1.dataGroup.verticalScrollPosition)
                    self.taskList1.dataGroup.verticalScrollPosition = 0;
            }, this.taskList1);
        }
    };
    ItemBag.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
        if (this.type == 0) {
            this.setEqptW();
        }
        else {
            this.setItemW();
        }
        Main.iconMeun.setBag();
    };
    ItemBag.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    ItemBag.prototype.setEqptW = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI)
            this.m_UI.setEqptWarn(b);
    };
    ItemBag.prototype.setItemW = function (b) {
        if (b === void 0) { b = false; }
        this.itemWain = b;
        if (this.m_UI)
            this.m_UI.setItemWarn(b);
    };
    ItemBag.prototype.clickItem = function (e) {
        Main.player.m_clickItme = e.item;
        if (!Main.player.m_clickItme)
            return;
        if (Main.player.m_clickItme && Main.player.m_clickItme.maxType == 2) {
            DialogManager.open(EqptDetailsBag, "EqptDetailsBag");
        }
        else {
            DialogManager.open(ItemDetialDialog, "ItemDetialDialog");
        }
    };
    return ItemBag;
})(Dialog);
ItemBag.prototype.__class__ = "ItemBag";
