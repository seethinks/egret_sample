var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIGamePrompt = (function (_super) {
    __extends(UIGamePrompt, _super);
    function UIGamePrompt() {
        _super.call(this);
        this.skinName = "skins.GamePromptSkin";
    }
    UIGamePrompt.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIGamePrompt;
})(egret.gui.SkinnableComponent);
UIGamePrompt.prototype.__class__ = "UIGamePrompt";
