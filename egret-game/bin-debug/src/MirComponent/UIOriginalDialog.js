var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIOriginalDialog = (function (_super) {
    __extends(UIOriginalDialog, _super);
    function UIOriginalDialog() {
        _super.call(this);
        this.str = "";
        this.bool = false;
        this.skinName = "skins.OriginalDialogSkin";
    }
    UIOriginalDialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._title) {
            this.setTitle(this.str);
        }
    };
    UIOriginalDialog.prototype.setTitle = function (_str) {
        this.str = _str;
        if (this._title) {
            this._title.text = "" + _str;
        }
    };
    UIOriginalDialog.prototype.setTitleVis = function (_bool) {
        if (_bool === void 0) { _bool = false; }
        this.bool = _bool;
        if (this.dialog_title) {
            this.dialog_title.visible = _bool;
        }
    };
    return UIOriginalDialog;
})(egret.gui.SkinnableComponent);
UIOriginalDialog.prototype.__class__ = "UIOriginalDialog";
