var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIFightDialog = (function (_super) {
    __extends(UIFightDialog, _super);
    function UIFightDialog() {
        _super.call(this);
        this.skinName = "skins.FightSkin";
    }
    UIFightDialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.fight_souxun) {
            this.fight_souxun.visible = false;
        }
        if (instance == this.fight_label_time) {
            this.fight_label_time.text = "";
        }
        if (instance == this._btn_fight_statistics) {
            this._btn_fight_statistics.visible = false;
        }
        if (instance == this._mapwarn) {
            this._mapwarn.visible = false;
        }
        if (instance == this.fight_label_time) {
            this.fight_label_time.stroke = 1;
            this.fight_label_time.strokeColor = 0xDDFC56;
        }
        if (instance == this._fight_img) {
            this._fight_img.alpha = 0;
        }
    };
    return UIFightDialog;
})(egret.gui.SkinnableComponent);
UIFightDialog.prototype.__class__ = "UIFightDialog";
