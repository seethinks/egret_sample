var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMessageBox = (function (_super) {
    __extends(UIMessageBox, _super);
    function UIMessageBox() {
        _super.call(this);
        this.str = "";
        this.skinName = "skins.MessageBoxSkin";
    }
    UIMessageBox.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.msg_label) {
            this.setText(this.str);
        }
    };
    UIMessageBox.prototype.setText = function (_str) {
        if (_str === void 0) { _str = ""; }
        this.str = _str;
        if (this.msg_label) {
            this.msg_label.text = _str;
        }
    };
    return UIMessageBox;
})(egret.gui.SkinnableComponent);
UIMessageBox.prototype.__class__ = "UIMessageBox";
