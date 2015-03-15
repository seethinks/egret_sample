/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
class GameManager
{
    private _createNum:number=0;
    private _xyjContainer:egret.DisplayObjectContainer;

    private static  _singleton:boolean=true;
    private static  _instance:GameManager;

    private _startTime:number=0;
    private _second:number = 10;
    private xyjDataFactory:any;

    private _blackArea:egret.Sprite;
    private _offY:number=0;

    public constructor()
    {
        var xyjData = RES.getRes("xyj_json");
        var xyjBmp = RES.getRes("xyj_png");
        this.xyjDataFactory = new egret.MovieClipDataFactory(xyjData, xyjBmp);
    }

    public static getInstance():GameManager{
        if (!GameManager._instance) {
            GameManager._singleton=false;
            GameManager._instance=new GameManager();
            GameManager._singleton=true;
        }
        return GameManager._instance;
    }

    public doStart()
    {
        if(!this._blackArea)
        {
            this._blackArea = new egret.Sprite();
            this._blackArea.graphics.beginFill(0x000000)
            this._blackArea.graphics.drawRect(0,0,LayerManager.stage.stageWidth,LayerManager.stage.stageHeight)
            this._blackArea.graphics.endFill();
            this._blackArea.touchEnabled = true;
            this._blackArea.y=-this._blackArea.height;
            LayerManager.GUILayer.addChild(this._blackArea)
            this._offY = LayerManager.stage.stageHeight/this._second;
        }
        GUIManager.getInstance().createGUI();
        if (!this._xyjContainer) {
            this._xyjContainer = new egret.DisplayObjectContainer();
            LayerManager.GameLayer.addChild(this._xyjContainer)
        }
        var timer = new egret.Timer(10, 0)
        timer.addEventListener(egret.TimerEvent.TIMER, this.run, this);
        timer.start();
        this._startTime = egret.getTimer();
    }

    private run(e:egret.TimerEvent):void
    {
        var curSecond:number =  Math.floor((egret.getTimer() - this._startTime) / 1000);
        if(GlobalValue.djsSecond != this._second - curSecond) {
            GlobalValue.djsSecond = this._second - curSecond;
            GUIManager.getInstance().drawTxtTimer();

            this._blackArea.y += this._offY;
            if (GlobalValue.djsSecond <= 0) {
                e.currentTarget.stop();
                e.currentTarget.removeEventListener(egret.TimerEvent.TIMER, this.run, this);
                GlobalValue.IsEndGame = true;
                GUIManager.getInstance().createEndScree();
                return;
            }
        }


        if( this._xyjContainer.numChildren <80)
        {
            this._createNum=4;
        }
        if(this._createNum<10)
        {
            var i = 0;
            var l = 10;
            for (i = 0; i < l; i++) {

                var xyj = new XyjMovieClip(this.xyjDataFactory.generateMovieClipData())
                this._xyjContainer.addChild(xyj)
            }
            this.sortZ(this._xyjContainer);
            this._createNum ++;
        }
    }

    private sortZ (dParent:any):void
    {
        var i:number=0;
        for (var i:number = dParent.numChildren - 1; i > -1; i--)
        {
            var bFlipped:Boolean = false;
            var o:number=0;
            for ( o = 0; o < i; o++)
            {
                if (dParent.getChildAt(o).y > dParent.getChildAt(o + 1).y)
                {
                    dParent.swapChildrenAt(o,o+1);
                    bFlipped = true;
                }
            }
            if (!bFlipped) return;
        }

    //        TweenLite.to(xyj,2,{x:200,y:200,onComplete:function():void{
    //            xyj.frameRate = 60;
    //        }})
    }
}