var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIBelle = (function (_super) {
    __extends(UIBelle, _super);
    function UIBelle() {
        _super.call(this);
        this.skinName = "skins.BelleSkin";
    }
    UIBelle.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIBelle;
})(egret.gui.SkinnableComponent);
UIBelle.prototype.__class__ = "UIBelle";
