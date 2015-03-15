/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
var GameManager = (function () {
    function GameManager() {
        this._createNum = 0;
        this._startTime = 0;
        this._second = 5;
        this._curSec = 0;
        var xyjData = RES.getRes("xyj_json");
        var xyjBmp = RES.getRes("xyj_png");
        this.xyjDataFactory = new egret.MovieClipDataFactory(xyjData, xyjBmp);
    }
    GameManager.getInstance = function () {
        if (!GameManager._instance) {
            GameManager._singleton = false;
            GameManager._instance = new GameManager();
            GameManager._singleton = true;
        }
        return GameManager._instance;
    };
    GameManager.prototype.doStart = function () {
        GUIManager.getInstance().createGUI();
        if (!this._xyjContainer) {
            this._xyjContainer = new egret.DisplayObjectContainer();
            LayerManager.GameLayer.addChild(this._xyjContainer);
        }
        var timer = new egret.Timer(10, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.run, this);
        timer.start();
        this._startTime = egret.getTimer();
    };
    GameManager.prototype.run = function (e) {
        var curSecond = Math.floor((egret.getTimer() - this._startTime) / 1000);
        if (GlobalValue.djsSecond != this._second - curSecond) {
            if (GlobalValue.djsSecond <= 0) {
                e.currentTarget.stop();
                e.currentTarget.removeEventListener(egret.TimerEvent.TIMER, this.run, this);
                GlobalValue.IsEndGame = true;
                GUIManager.getInstance().createEndScree();
                return;
            }
        }
        GlobalValue.djsSecond = this._second - curSecond;
        GUIManager.getInstance().drawTxtTimer();
        if (this._xyjContainer.numChildren < 80) {
            this._createNum = 4;
        }
        if (this._createNum < 10) {
            var i = 0;
            var l = 10;
            for (i = 0; i < l; i++) {
                var xyj = new XyjMovieClip(this.xyjDataFactory.generateMovieClipData());
                this._xyjContainer.addChild(xyj);
            }
            this.sortZ(this._xyjContainer);
            this._createNum++;
        }
    };
    GameManager.prototype.sortZ = function (dParent) {
        var i = 0;
        for (var i = dParent.numChildren - 1; i > -1; i--) {
            var bFlipped = false;
            var o = 0;
            for (o = 0; o < i; o++) {
                if (dParent.getChildAt(o).y > dParent.getChildAt(o + 1).y) {
                    dParent.swapChildrenAt(o, o + 1);
                    bFlipped = true;
                }
            }
            if (!bFlipped)
                return;
        }
        //        TweenLite.to(xyj,2,{x:200,y:200,onComplete:function():void{
        //            xyj.frameRate = 60;
        //        }})
    };
    GameManager._singleton = true;
    return GameManager;
})();
GameManager.prototype.__class__ = "GameManager";
