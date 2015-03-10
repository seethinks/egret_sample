var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PrisonListUI = (function (_super) {
    __extends(PrisonListUI, _super);
    function PrisonListUI() {
        _super.call(this);
        this.skinName = "skins.PrisonListSkin";
    }
    PrisonListUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PrisonListUI.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this._label_name.text = "" + this.data["name"];
            this._label_level.text = "" + this.data["lv"];
            this._label_pk.text = "" + this.data["pk"];
            this._label_fight.text = "" + this.data["fightvalue"];
        }
    };
    return PrisonListUI;
})(egret.gui.ItemRenderer);
PrisonListUI.prototype.__class__ = "PrisonListUI";
