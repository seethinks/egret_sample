var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UICreatHero = (function (_super) {
    __extends(UICreatHero, _super);
    function UICreatHero() {
        _super.call(this);
        this.skinName = "skins.CreateHeroSkin";
    }
    UICreatHero.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.lan_fashi) {
            this.lan_fashi.visible = false;
        }
        if (instance == this.lan_daoshi) {
            this.lan_daoshi.visible = false;
        }
        if (instance == this.huang_nv) {
            this.huang_nv.visible = false;
        }
        if (instance == this.creat_text_2) {
            this.creat_text_2.visible = false;
        }
        if (instance == this.creat_text_3) {
            this.creat_text_3.visible = false;
        }
    };
    return UICreatHero;
})(egret.gui.SkinnableComponent);
UICreatHero.prototype.__class__ = "UICreatHero";
