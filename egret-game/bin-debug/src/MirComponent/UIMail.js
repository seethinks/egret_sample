var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMail = (function (_super) {
    __extends(UIMail, _super);
    function UIMail() {
        _super.call(this);
        this.skinName = "skins.MailDialogSkin";
    }
    UIMail.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIMail;
})(egret.gui.SkinnableComponent);
UIMail.prototype.__class__ = "UIMail";
