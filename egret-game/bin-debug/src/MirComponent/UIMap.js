var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMap = (function (_super) {
    __extends(UIMap, _super);
    function UIMap() {
        _super.call(this);
        this.skinName = "skins.MapSkin";
    }
    UIMap.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.map_btn_buy) {
        }
        if (instance == this.map_label_num) {
        }
    };
    return UIMap;
})(egret.gui.SkinnableComponent);
UIMap.prototype.__class__ = "UIMap";
