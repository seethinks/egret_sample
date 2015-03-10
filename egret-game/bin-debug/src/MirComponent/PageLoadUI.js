var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PageLoadUI = (function (_super) {
    __extends(PageLoadUI, _super);
    function PageLoadUI() {
        _super.call(this);
        this.skinName = "skins.PageLoadSkin";
    }
    PageLoadUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return PageLoadUI;
})(egret.gui.SkinnableComponent);
PageLoadUI.prototype.__class__ = "PageLoadUI";
