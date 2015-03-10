var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NetLoding = (function (_super) {
    __extends(NetLoding, _super);
    function NetLoding() {
        _super.call(this);
        this.skinName = "skins.UIlodingSkin";
        this.touchChildren = false;
        this.touchEnabled = false;
    }
    NetLoding.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return NetLoding;
})(egret.gui.SkinnableComponent);
NetLoding.prototype.__class__ = "NetLoding";
