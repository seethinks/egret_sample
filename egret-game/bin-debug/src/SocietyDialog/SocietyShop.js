var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会商店
 */
var SocietyShop = (function (_super) {
    __extends(SocietyShop, _super);
    function SocietyShop() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    SocietyShop.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyShop();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("行会商店");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.skinName = "skins.ShopListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SocietyShopList);
        this.taskList1.itemRendererSkinName = "skins.ShopItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 100;
        this.taskList1.width = 510;
        this.taskList1.height = 520;
        var shop = GameManager.JSON_SOCIETY_SHOP;
        if (shop) {
            for (var i in shop) {
                this.dp.addItem(shop[i]);
            }
        }
    };
    SocietyShop.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyShop.prototype.onUpdate = function () {
    };
    SocietyShop.prototype.onUpdatePlayer = function () {
        this.m_UI._label_shop.text = "当前贡献/总贡献：" + Main.player.curContri + "/" + Main.player.allContri;
    };
    SocietyShop.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdatePlayer();
    };
    SocietyShop.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return SocietyShop;
})(Dialog);
SocietyShop.prototype.__class__ = "SocietyShop";
