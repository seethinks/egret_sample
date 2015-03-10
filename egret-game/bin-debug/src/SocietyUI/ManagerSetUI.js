var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 入会条件设置
 */
var ManagerSetUI = (function (_super) {
    __extends(ManagerSetUI, _super);
    function ManagerSetUI() {
        _super.call(this);
        this.skinName = "skins.ManagerSetSkin";
    }
    ManagerSetUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return ManagerSetUI;
})(egret.gui.SkinnableComponent);
ManagerSetUI.prototype.__class__ = "ManagerSetUI";
