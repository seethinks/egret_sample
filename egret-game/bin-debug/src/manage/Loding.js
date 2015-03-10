var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Loding = (function (_super) {
    __extends(Loding, _super);
    function Loding() {
        _super.call(this);
        _super.prototype.createChildren.call(this);
        var data = RES.getRes("loding_json");
        var texture = RES.getRes("loding_png");
        this.loding_ass = new egret.gui.UIAsset();
        this.loding_eff = new egret.MovieClip(data, texture);
        this.loding_ass.source = this.loding_eff;
        this.loding_eff.frameRate = 20;
        this.m_UI = new NetLoding();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.top = 0;
        this.addElement(this.loding_ass);
        this.loding_ass.top = this.m_UI.top + 45;
        this.loding_ass.x = 511 / 2 - 32 / 2;
    }
    Loding.prototype.play = function () {
        this.loding_eff.gotoAndPlay("loding");
        Main.guiLayer.addElement(this);
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
        Main.guiLayer.touchEnabled = false;
        Main.guiLayer.touchChildren = false;
    };
    Loding.prototype.stop = function () {
        this.loding_eff.stop();
        if (this.parent)
            Main.guiLayer.removeElement(this);
        Main.guiLayer.touchEnabled = true;
        Main.guiLayer.touchChildren = true;
    };
    return Loding;
})(egret.gui.Group);
Loding.prototype.__class__ = "Loding";
