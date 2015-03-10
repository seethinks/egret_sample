var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UICheckBox = (function (_super) {
    __extends(UICheckBox, _super);
    function UICheckBox() {
        _super.call(this);
        this.selectIndex = 0;
        this.isOpen = false;
        this.skinName = "skins.SkillCheckSkin";
    }
    UICheckBox.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._duihao) {
            this._duihao.visible = false;
        }
        if (instance == this._noopen) {
            this.setOpen();
        }
    };
    UICheckBox.prototype.setCheck = function () {
        if (!this._duihao)
            return;
        if (this.selectIndex == 0) {
            this._duihao.visible = true;
            this.selectIndex = 1;
        }
        else {
            this.selectIndex = 0;
            this._duihao.visible = false;
        }
        return this.selectIndex;
    };
    UICheckBox.prototype.setOpen = function (b) {
        if (b === void 0) { b = false; }
        if (this._noopen) {
            this._noopen.visible = !b;
        }
    };
    return UICheckBox;
})(egret.gui.CheckBox);
UICheckBox.prototype.__class__ = "UICheckBox";
