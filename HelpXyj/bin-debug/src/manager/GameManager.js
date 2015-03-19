/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
var GameManager = (function () {
    function GameManager() {
        this._createNum = 0;
        this._startTime = 0;
        this._second = 60;
        this._offY = 0;
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
    GameManager.prototype.init = function () {
        this._createNum = 0;
        if (this._xyjContainer) {
            this._xyjContainer.parent.removeChild(this._xyjContainer);
            this._xyjContainer = null;
        }
    };
    GameManager.prototype.doStart = function () {
        this.init();
        if (!this._blackArea) {
            this._blackArea = new egret.Sprite();
            this._blackArea.graphics.beginFill(0x000000);
            this._blackArea.graphics.drawRect(0, 0, LayerManager.stage.stageWidth, LayerManager.stage.stageHeight);
            this._blackArea.graphics.endFill();
            this._blackArea.touchEnabled = true;
            this._blackArea.y = -this._blackArea.height;
            LayerManager.GUILayer.addChildAt(this._blackArea, 0);
            this._offY = LayerManager.stage.stageHeight / this._second;
        }
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
            GlobalValue.djsSecond = this._second - curSecond;
            GUIManager.getInstance().drawTxtTimer();
            if (this._blackArea)
                this._blackArea.y += this._offY;
            if (GlobalValue.djsSecond <= 0) {
                if (this._blackArea) {
                    this._blackArea.parent.removeChild(this._blackArea);
                    this._blackArea = null;
                }
                e.currentTarget.stop();
                e.currentTarget.removeEventListener(egret.TimerEvent.TIMER, this.run, this);
                GlobalValue.IsEndGame = true;
                GUIManager.getInstance().createEndScree();
                return;
            }
        }
        if (this._xyjContainer.numChildren < 70) {
            this._createNum = 0;
        }
        if (this._createNum < 100) {
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
    };
    GameManager._singleton = true;
    return GameManager;
})();
GameManager.prototype.__class__ = "GameManager";
