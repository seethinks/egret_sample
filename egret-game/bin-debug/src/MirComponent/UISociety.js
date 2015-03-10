var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UISociety = (function (_super) {
    __extends(UISociety, _super);
    function UISociety() {
        _super.call(this);
        this.skinName = "skins.SocietySkin";
    }
    UISociety.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._label_desc) {
            this._label_desc.visible = false;
        }
        if (instance == this._label_time) {
            this._label_time.visible = false;
        }
        if (instance == this._btn_gonxian) {
            this._btn_gonxian.visible = false;
        }
        if (instance == this._btn_guwu) {
            this._btn_guwu.visible = false;
        }
        if (instance == this._label_guwu) {
            this._label_guwu.visible = false;
        }
        if (instance == this._label_my_guwu) {
            this._label_my_guwu.visible = false;
        }
        if (instance == this._boss_title_bg) {
            this._boss_title_bg.visible = false;
        }
        if (instance == this._boss_title) {
            this._boss_title.visible = false;
        }
    };
    return UISociety;
})(egret.gui.SkinnableComponent);
UISociety.prototype.__class__ = "UISociety";
