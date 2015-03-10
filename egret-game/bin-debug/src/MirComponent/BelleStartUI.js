var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleStartUI = (function (_super) {
    __extends(BelleStartUI, _super);
    function BelleStartUI() {
        _super.call(this);
        this.skinName = "skins.BelleStartSkin";
    }
    BelleStartUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._count1) {
            this._count1.touchEnabled = false;
            this._count1.text = "";
        }
        if (instance == this._count2) {
            this._count2.touchEnabled = false;
            this._count2.text = "";
        }
        if (instance == this._count3) {
            this._count3.touchEnabled = false;
            this._count3.text = "";
        }
        if (instance == this._count4) {
            this._count4.touchEnabled = false;
            this._count4.text = "";
        }
        if (instance == this._f1) {
            this._f1.visible = false;
            this._f1.touchEnabled = false;
        }
        if (instance == this._f2) {
            this._f2.visible = false;
            this._f2.touchEnabled = false;
        }
        if (instance == this._f3) {
            this._f3.visible = false;
            this._f3.touchEnabled = false;
        }
        if (instance == this._f4) {
            this._f4.visible = false;
            this._f4.touchEnabled = false;
        }
    };
    return BelleStartUI;
})(egret.gui.SkinnableComponent);
BelleStartUI.prototype.__class__ = "BelleStartUI";
