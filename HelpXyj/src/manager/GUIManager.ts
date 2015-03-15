/**
 * Created by seethinks@gmail.com on 15/3/15.
 */
class GUIManager
{
    private static  _singleton:boolean=true;
    private static  _instance:GUIManager;

    private static _titleScreen:egret.DisplayObjectContainer;
    private _endScreen:egret.DisplayObjectContainer;

    public txtTimer:egret.TextField;
    public txtSavedCount:egret.TextField;

    public constructor()
    {

    }

    public static getInstance():GUIManager{
        if (!GUIManager._instance) {
            GUIManager._singleton=false;
            GUIManager._instance=new GUIManager();
            GUIManager._singleton=true;
        }
        return GUIManager._instance;
    }


    public createTitleScreen():void
    {
        if(!GUIManager._titleScreen)
        {
            GUIManager._titleScreen = new egret.DisplayObjectContainer()
            LayerManager.GUILayer.addChild(GUIManager._titleScreen);
        }

        var titleBmp:egret.Bitmap = new egret.Bitmap();
        titleBmp.texture = RES.getRes("gameTitle_png")
        titleBmp.x = LayerManager.stage.stageWidth *.5 - titleBmp.width*.5;
        titleBmp.y = LayerManager.stage.stageHeight *.5 - titleBmp.height*.5;
        GUIManager._titleScreen.addChild(titleBmp)

        var btnStart:egret.Bitmap = new egret.Bitmap()
        btnStart.texture = RES.getRes("startButton_png")
        btnStart.touchEnabled = true;
        btnStart.x = LayerManager.stage.stageWidth *.5 - btnStart.width*.5;
        btnStart.y = titleBmp.y + titleBmp.height - 100;
        GUIManager._titleScreen.addChild(btnStart)
        btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goGameStart,this)
    }

    private goGameStart(e:egret.TouchEvent):void
    {
        e.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.goGameStart,this)
        TweenLite.to(GUIManager._titleScreen,1,{x:-GUIManager._titleScreen.width,onComplete:this.doRemoveTitleScreen})

    }

    private doRemoveTitleScreen():void
    {
        if(GUIManager._titleScreen)
        {
            GUIManager._titleScreen.parent.removeChild(GUIManager._titleScreen)
        }
        GameManager.getInstance().doStart();
    }


    public createEndScree():void
    {
        if(!this._endScreen)
        {
            this._endScreen = new egret.DisplayObjectContainer()
            LayerManager.GUILayer.addChild(this._endScreen);
        }

        var titleBmp:egret.Bitmap = new egret.Bitmap();
        titleBmp.texture = RES.getRes("gameEnd_png")
        titleBmp.x = LayerManager.stage.stageWidth *.5 - titleBmp.width*.5;
        titleBmp.y = LayerManager.stage.stageHeight *.5 - titleBmp.height*.5;
        this._endScreen.addChild(titleBmp)

        var nickTxt:egret.TextField = new egret.TextField();
        nickTxt.size= 30;
        nickTxt.width = 400;
        nickTxt.textColor= 0x000000;
        nickTxt.textAlign = "center"
        if(GlobalValue.savedCount<50)
        {
            nickTxt.text= "获得称号:咸猪手"
        }else if (GlobalValue.savedCount>=50 && GlobalValue.savedCount<100)
        {
            nickTxt.text= "获得称号:泡椒凤爪"
        }else if (GlobalValue.savedCount>=100 && GlobalValue.savedCount<200)
        {
            nickTxt.text= "获得称号:葵花点J手"
        }else if (GlobalValue.savedCount>=200 && GlobalValue.savedCount<300)
        {
            nickTxt.text= "获得称号:驯鸡高手"
        }else if (GlobalValue.savedCount>=300 && GlobalValue.savedCount<400)
        {
            nickTxt.text= "获得称号:无影手"
        }else if (GlobalValue.savedCount>=400)
        {
            nickTxt.text= "获得称号:撸J狂魔"
        }
        nickTxt.x = LayerManager.stage.stageWidth *.5 - nickTxt.width*.5;
        nickTxt.y = LayerManager.stage.stageHeight *.5 - nickTxt.height*.5;
        this._endScreen.addChild(nickTxt)

    }

    public createGUI()
    {
        if(!this.txtTimer)
        {
            this.txtTimer = new egret.TextField();
            this.txtTimer.textColor = 0xff0000;
            this.txtTimer.textAlign = "center"
            this.txtTimer.size=24;
            this.txtTimer.width=200;
            this.txtTimer.x = LayerManager.stage.stageWidth*.5 - this.txtTimer.width*.5;
            this.txtTimer.y = 10;
            this.txtTimer.text = "剩余时间:"+GlobalValue.djsSecond;
            LayerManager.GUILayer.addChild(this.txtTimer)
        }

        if(!this.txtSavedCount)
        {
            this.txtSavedCount = new egret.TextField();
            this.txtSavedCount.textColor = 0xffff00;
            this.txtSavedCount.textAlign = "right"
            this.txtSavedCount.size=20;
            this.txtSavedCount.width=200;
            this.txtSavedCount.x = LayerManager.stage.stageWidth*.5 - 10;
            this.txtSavedCount.y = 10;
            this.txtSavedCount.text = "存活:"+GlobalValue.savedCount;
            LayerManager.GUILayer.addChild(this.txtSavedCount)
        }
    }

    public drawTxtSavedCount():void
    {
        this.txtSavedCount.text = "存活:"+GlobalValue.savedCount;
    }

    public drawTxtTimer():void
    {
        this.txtTimer.text = "剩余时间:"+GlobalValue.djsSecond;
    }
}