var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIBuyMoney = (function (_super) {
    __extends(UIBuyMoney, _super);
    function UIBuyMoney() {
        _super.call(this);
        this.skinName = "skins.BuyMoneySkin";
    }
    UIBuyMoney.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIBuyMoney;
})(egret.gui.SkinnableComponent);
UIBuyMoney.prototype.__class__ = "UIBuyMoney";
