var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIHelpItem = (function (_super) {
    __extends(UIHelpItem, _super);
    function UIHelpItem() {
        _super.call(this);
        this.label_text = "";
        this.skinName = "skins.HelpItemSkin";
    }
    UIHelpItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._labels) {
            this.setText(this.label_text);
        }
    };
    UIHelpItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this.setText(this.data.text);
            if (this.data["size"]) {
                this._labels.size = this.data["size"];
            }
            if (this.data["color"]) {
                this._labels.textColor = this.data["color"];
            }
        }
    };
    UIHelpItem.prototype.setText = function (_text) {
        this.label_text = _text;
        if (this._labels) {
            this._labels.text = _text;
        }
    };
    return UIHelpItem;
})(egret.gui.ItemRenderer);
UIHelpItem.prototype.__class__ = "UIHelpItem";
