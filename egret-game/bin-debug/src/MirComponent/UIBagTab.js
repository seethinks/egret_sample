var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIBagTab = (function (_super) {
    __extends(UIBagTab, _super);
    function UIBagTab() {
        _super.call(this);
        this.str = "";
        this.souce = "";
        this.skinName = "skins.BagTabSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIBagTab.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._wenzi) {
            this.setText(this.str);
        }
        if (instance == this._img) {
            this.setSouoce(this.souce);
        }
    };
    UIBagTab.prototype.setText = function (_str) {
        this.str = _str;
        if (this._wenzi) {
            this._wenzi.source = _str;
        }
    };
    UIBagTab.prototype.setSouoce = function (_souce) {
        if (_souce === void 0) { _souce = ""; }
        this.souce = _souce;
        if (this._img) {
            this._img.source = _souce;
        }
    };
    return UIBagTab;
})(egret.gui.SkinnableComponent);
UIBagTab.prototype.__class__ = "UIBagTab";
