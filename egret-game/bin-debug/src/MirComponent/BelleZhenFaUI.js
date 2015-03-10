var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleZhenFaUI = (function (_super) {
    __extends(BelleZhenFaUI, _super);
    function BelleZhenFaUI() {
        _super.call(this);
        this.skinName = "skins.BelleZhenFaSkin";
    }
    BelleZhenFaUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._open1) {
            this._open1.visible = false;
        }
        if (instance == this._open2) {
            this._open2.visible = false;
        }
        if (instance == this._open3) {
            this._open3.visible = false;
        }
        if (instance == this._open4) {
            this._open4.visible = false;
        }
        if (instance == this._open5) {
            this._open5.visible = false;
        }
    };
    return BelleZhenFaUI;
})(egret.gui.SkinnableComponent);
BelleZhenFaUI.prototype.__class__ = "BelleZhenFaUI";
