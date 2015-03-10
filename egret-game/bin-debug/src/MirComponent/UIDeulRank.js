var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIDeulRank = (function (_super) {
    __extends(UIDeulRank, _super);
    function UIDeulRank() {
        _super.call(this);
        this.skinName = "skins.DeulRankSkin";
    }
    UIDeulRank.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn_refrsh) {
            this._btn_refrsh.visible = false;
        }
    };
    return UIDeulRank;
})(egret.gui.SkinnableComponent);
UIDeulRank.prototype.__class__ = "UIDeulRank";
