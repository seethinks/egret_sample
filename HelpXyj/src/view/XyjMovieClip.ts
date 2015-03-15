/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
class XyjMovieClip extends egret.MovieClip
{
    public constructor(data:any)
    {
        super(data)
        this.touchEnabled = true
        var posY:number = Math.random()*LayerManager.stage.stageHeight *.5
        this.x = 30+(LayerManager.stage.stageWidth-60)*Math.random();
        this.y = posY +LayerManager.stage.stageHeight *.5-160;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.saved,this)
        this.play(-1)
    }

    public saved(e:egret.TouchEvent):void
    {
        if(GlobalValue.IsEndGame) return;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.saved,this)
        var flyData = RES.getRes("xyjFly_json");
        var flyPng = RES.getRes("xyjFly_png");
        var flyDataFactory = new egret.MovieClipDataFactory(flyData, flyPng);
        var flyXyj:egret.MovieClip = new egret.MovieClip(flyDataFactory.generateMovieClipData())
        flyXyj.play(-1);
        flyXyj.x = this.x-28;
        flyXyj.y = this.y-10;
        LayerManager.TopLayer.addChild(flyXyj)

        GlobalValue.savedCount ++;
        GUIManager.getInstance().drawTxtSavedCount();

        TweenLite.to(flyXyj,2,{y:this.y-150,alpha:0,onComplete:function():void{
            flyXyj.parent.removeChild(flyXyj)
        }})
        this.destroy();
    }

    public destroy():void
    {
        this.parent.removeChild(this)
    }
}