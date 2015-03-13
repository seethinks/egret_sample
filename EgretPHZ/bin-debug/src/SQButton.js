var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by seethinks@gmail.com on 2015/3/13.
 */
var SQButton = (function (_super) {
    __extends(SQButton, _super);
    function SQButton() {
        _super.call(this);
        this.skinName = skins.compoents.ButtonSkin;
    }
    return SQButton;
})(egret.gui.SkinnableComponent);
SQButton.prototype.__class__ = "SQButton";
