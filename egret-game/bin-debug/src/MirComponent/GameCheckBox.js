var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameCheckBox = (function (_super) {
    __extends(GameCheckBox, _super);
    function GameCheckBox() {
        _super.call(this);
        this.selectIndex = 0;
        this.skinName = "skins.GameCheckBoxSkin";
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    GameCheckBox.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._check_gou) {
            this.setGou(this.selectIndex);
        }
    };
    GameCheckBox.prototype.onClick = function (e) {
        if (this.selectIndex == 0) {
            this.selectIndex = 1;
        }
        else {
            this.selectIndex = 0;
        }
        this.setGou(this.selectIndex);
    };
    GameCheckBox.prototype.setGou = function (_index) {
        if (_index === void 0) { _index = 0; }
        this.selectIndex = _index;
        if (this._check_gou) {
            if (this.selectIndex == 0) {
                this._check_gou.visible = false;
            }
            else {
                this._check_gou.visible = true;
            }
        }
    };
    return GameCheckBox;
})(egret.gui.SkinnableComponent);
GameCheckBox.prototype.__class__ = "GameCheckBox";
