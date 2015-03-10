var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UINotice = (function (_super) {
    __extends(UINotice, _super);
    function UINotice() {
        _super.call(this);
        this.skinName = "skins.FightFeedbackSkin";
    }
    UINotice.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.fk_button) {
            this.fk_button._setLabel("确 定");
        }
        if (instance == this.fk_label) {
            this.fk_label.text = "狂挂传奇【大梦初醒】1服震撼开启";
        }
    };
    return UINotice;
})(egret.gui.SkinnableComponent);
UINotice.prototype.__class__ = "UINotice";
