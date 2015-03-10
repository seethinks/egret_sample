var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIJiHuo = (function (_super) {
    __extends(UIJiHuo, _super);
    function UIJiHuo() {
        _super.call(this);
        this.skinName = "skins.JiHuoSkin";
    }
    UIJiHuo.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIJiHuo;
})(egret.gui.SkinnableComponent);
UIJiHuo.prototype.__class__ = "UIJiHuo";
