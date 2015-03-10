var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会排行,Boss贡献榜通用
 */
var UISocietyRank = (function (_super) {
    __extends(UISocietyRank, _super);
    function UISocietyRank() {
        _super.call(this);
        this.skinName = "skins.SocietyRankSkin";
    }
    UISocietyRank.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._create_btn)
            this._create_btn.visible = false;
    };
    return UISocietyRank;
})(egret.gui.SkinnableComponent);
UISocietyRank.prototype.__class__ = "UISocietyRank";
