var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
var XyjMovieClip = (function (_super) {
    __extends(XyjMovieClip, _super);
    function XyjMovieClip(data) {
        _super.call(this, data);
        this.touchEnabled = true;
        var posY = Math.random() * LayerManager.stage.stageHeight * .5;
        this.x = 30 + (LayerManager.stage.stageWidth - 60) * Math.random();
        this.y = posY + LayerManager.stage.stageHeight * .5 - 160;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saved, this);
        this.play(-1);
    }
    XyjMovieClip.prototype.saved = function (e) {
        if (GlobalValue.IsEndGame)
            return;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.saved, this);
        var flyData = RES.getRes("xyjFly_json");
        var flyPng = RES.getRes("xyjFly_png");
        var flyDataFactory = new egret.MovieClipDataFactory(flyData, flyPng);
        var flyXyj = new egret.MovieClip(flyDataFactory.generateMovieClipData());
        flyXyj.play(-1);
        flyXyj.x = this.x - 28;
        flyXyj.y = this.y - 10;
        LayerManager.TopLayer.addChild(flyXyj);
        GlobalValue.savedCount++;
        GUIManager.getInstance().drawTxtSavedCount();
        TweenLite.to(flyXyj, 2, { y: this.y - 150, alpha: 0, onComplete: function () {
            flyXyj.parent.removeChild(flyXyj);
        } });
        this.destroy();
    };
    XyjMovieClip.prototype.destroy = function () {
        this.parent.removeChild(this);
    };
    return XyjMovieClip;
})(egret.MovieClip);
XyjMovieClip.prototype.__class__ = "XyjMovieClip";
