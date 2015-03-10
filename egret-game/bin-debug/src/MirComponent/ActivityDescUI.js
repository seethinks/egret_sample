var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityDescUI = (function (_super) {
    __extends(ActivityDescUI, _super);
    function ActivityDescUI() {
        _super.call(this);
        this.skinName = "skins.AddUpRechargeSkin";
        this.touchChildren = true;
    }
    ActivityDescUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return ActivityDescUI;
})(egret.gui.SkinnableComponent);
ActivityDescUI.prototype.__class__ = "ActivityDescUI";
