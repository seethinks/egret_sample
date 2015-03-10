var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIFightLog = (function (_super) {
    __extends(UIFightLog, _super);
    function UIFightLog() {
        _super.call(this);
        this.skinName = "skins.FightLogSkin";
    }
    UIFightLog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (this.log_label) {
            //            this.log_label.text = this.data.text;
            //
            //            this.log_label.textColor = this.data.color;
            this.log_label._textField.textFlow = this.data;
        }
    };
    UIFightLog.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.log_label) {
            //            this.log_label.text = this.data.text;
            //
            //            this.log_label.textColor = this.data.color;
            this.log_label._textField.textFlow = this.data;
        }
    };
    return UIFightLog;
})(egret.gui.ItemRenderer);
UIFightLog.prototype.__class__ = "UIFightLog";
