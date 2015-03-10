var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SmallDialogBox = (function (_super) {
    __extends(SmallDialogBox, _super);
    function SmallDialogBox() {
        _super.call(this);
        this._title = "";
        this.skinName = "skins.SmallDialogBoxSkin";
    }
    SmallDialogBox.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._dialog_title) {
            this._dialog_title.text = this._title;
        }
    };
    SmallDialogBox.prototype.setSize = function (_h) {
        if (_h === void 0) { _h = 0; }
    };
    SmallDialogBox.prototype.setTitle = function (_s) {
        this._title = _s;
        if (this._dialog_title) {
            this._dialog_title.text = _s;
        }
    };
    return SmallDialogBox;
})(egret.gui.SkinnableComponent);
SmallDialogBox.prototype.__class__ = "SmallDialogBox";
