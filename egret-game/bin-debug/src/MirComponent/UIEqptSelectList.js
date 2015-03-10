var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIEqptSelectList = (function (_super) {
    __extends(UIEqptSelectList, _super);
    function UIEqptSelectList() {
        _super.call(this);
        this.skinName = "skins.EqptSelectListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIEqptSelectList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._check) {
            this._check.setOpen(true);
            this._check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        }
    };
    UIEqptSelectList.prototype.onCheck = function (e) {
        if (this.data) {
            this.data["index"] = this._check.setCheck();
        }
    };
    UIEqptSelectList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this._item_icon.data = this.data;
            this._item_icon.dataChanged();
            this._label_shuxing._textField.textFlow = GameManager.GetEqptPropStr(this.data);
            this._label_shuxing.textColor = GameManager.COLOR[Number(this.data["qly"])];
            this._label_buwei.text = GameManager.EQPT_TYPE[Number(this.data.tpl["ePostion"])];
            if (this.data["index"]) {
                var index = Number(this.data["index"]);
                if (Number(index) == 1) {
                    this._check.selectIndex = 1;
                    this._check._duihao.visible = true;
                }
                else {
                    this._check.selectIndex = 0;
                    this._check._duihao.visible = false;
                }
            }
            else {
                this._check.selectIndex = 0;
                this._check._duihao.visible = false;
            }
        }
    };
    return UIEqptSelectList;
})(egret.gui.ItemRenderer);
UIEqptSelectList.prototype.__class__ = "UIEqptSelectList";
