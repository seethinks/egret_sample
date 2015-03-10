var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会管理
 */
var UISocietyManager = (function (_super) {
    __extends(UISocietyManager, _super);
    function UISocietyManager() {
        _super.call(this);
        this.skinName = "skins.HangHuiManageSkin";
    }
    UISocietyManager.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UISocietyManager;
})(egret.gui.SkinnableComponent);
UISocietyManager.prototype.__class__ = "UISocietyManager";
