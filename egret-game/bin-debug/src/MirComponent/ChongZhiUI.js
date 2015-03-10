var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChongZhiUI = (function (_super) {
    __extends(ChongZhiUI, _super);
    function ChongZhiUI() {
        _super.call(this);
        this.skinName = "skins.ChongZhiShuangBeiSkin";
        this.touchChildren = true;
    }
    ChongZhiUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return ChongZhiUI;
})(egret.gui.SkinnableComponent);
ChongZhiUI.prototype.__class__ = "ChongZhiUI";
