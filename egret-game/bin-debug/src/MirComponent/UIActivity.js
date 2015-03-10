var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIActivity = (function (_super) {
    __extends(UIActivity, _super);
    function UIActivity() {
        _super.call(this);
        this.skinName = "skins.ActivityDialogSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIActivity.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIActivity;
})(egret.gui.SkinnableComponent);
UIActivity.prototype.__class__ = "UIActivity";
