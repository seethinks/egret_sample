var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIItemBag = (function (_super) {
    __extends(UIItemBag, _super);
    function UIItemBag() {
        _super.call(this);
        this.i = false;
        this.g = false;
        this.skinName = "skins.ItemBgDialogSkin";
    }
    UIItemBag.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._itemwarn) {
            this._itemwarn.visible = this.i;
            this._itemwarn.touchEnabled = false;
        }
        if (instance == this._eqptwarn) {
            this._eqptwarn.visible = this.g;
            this._eqptwarn.touchEnabled = false;
        }
    };
    UIItemBag.prototype.setItemWarn = function (_b) {
        if (_b === void 0) { _b = false; }
        this.i = _b;
        if (this._itemwarn)
            this._itemwarn.visible = _b;
    };
    UIItemBag.prototype.setEqptWarn = function (_m) {
        if (_m === void 0) { _m = false; }
        this.g = _m;
        if (this._eqptwarn)
            this._eqptwarn.visible = _m;
    };
    return UIItemBag;
})(egret.gui.SkinnableComponent);
UIItemBag.prototype.__class__ = "UIItemBag";
