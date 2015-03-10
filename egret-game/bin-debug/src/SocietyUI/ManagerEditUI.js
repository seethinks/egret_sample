var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会公告编辑
 */
var ManagerEditUI = (function (_super) {
    __extends(ManagerEditUI, _super);
    function ManagerEditUI() {
        _super.call(this);
        this.skinName = "skins.ManagerEditSkin";
    }
    ManagerEditUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return ManagerEditUI;
})(egret.gui.SkinnableComponent);
ManagerEditUI.prototype.__class__ = "ManagerEditUI";
