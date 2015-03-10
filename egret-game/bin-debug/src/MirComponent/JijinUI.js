var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JijinUI = (function (_super) {
    __extends(JijinUI, _super);
    function JijinUI() {
        _super.call(this);
        this.skinName = "skins.JijinSkin";
    }
    JijinUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return JijinUI;
})(egret.gui.SkinnableComponent);
JijinUI.prototype.__class__ = "JijinUI";
