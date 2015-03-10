var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LevelUp = (function (_super) {
    __extends(LevelUp, _super);
    function LevelUp() {
        _super.call(this);
        _super.prototype.createChildren.call(this);
        var data = RES.getRes("LevelUp_json");
        var texture = RES.getRes("LevelUp_png");
        this.loding_ass = new egret.gui.UIAsset();
        this.loding_eff = new egret.MovieClip(data, texture);
        this.loding_ass.source = this.loding_eff;
        this.addElement(this.loding_ass);
        this.loding_ass.scaleX = 2;
        this.loding_ass.scaleY = 2;
    }
    LevelUp.prototype.play = function () {
        this.loding_eff.frameRate = 10;
        this.loding_eff.gotoAndPlay("LevelUp");
        this.loding_eff.addEventListener("thisStop", this.stop, this);
        Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);
        this.x = Main.guiLayer.width / 2 - 376;
        this.y = Main.guiLayer.height / 2 - 134;
    };
    LevelUp.prototype.stop = function () {
        this.loding_eff.stop();
        if (this.parent)
            Main.guiLayer.removeElement(this);
    };
    return LevelUp;
})(egret.gui.Group);
LevelUp.prototype.__class__ = "LevelUp";
