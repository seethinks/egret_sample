var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 会员管理
 */
var MemberManagerUI = (function (_super) {
    __extends(MemberManagerUI, _super);
    function MemberManagerUI() {
        _super.call(this);
        this.skinName = "skins.MemberInfoSkin";
    }
    MemberManagerUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn_renmin) {
            this._btn_renmin.visible = false;
        }
        if (instance == this._btn_tichu) {
            this._btn_tichu.visible = false;
        }
    };
    return MemberManagerUI;
})(egret.gui.SkinnableComponent);
MemberManagerUI.prototype.__class__ = "MemberManagerUI";
