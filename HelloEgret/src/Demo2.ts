/**
 * Created by G510 on 2015/3/7.
 */
class Demo2 extends egret.DisplayObjectContainer
{
    private logo:egret.Bitmap;
    private activityBmp:egret.Bitmap;

    public constructor ()
    {
        super();
        egret.Profiler.getInstance().run();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }

    public startGame():void
    {
        //alert("hello seethinks");
        this.loadRes();
    }

    private loadRes():void
    {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.resLoaded,this)
        RES.loadConfig("resource/resource.json","resource/")
        RES.loadGroup("Demo2")
    }

    private resLoaded():void
    {
        var stage = egret.MainContext.instance.stage;
        this.logo = new egret.Bitmap();
        this.logo.texture = RES.getRes("bgImagePng")
        this.addChild(this.logo)

        this.activityBmp = new egret.Bitmap();
        this.activityBmp.texture = RES.getRes("icons.activity_10");
        this.activityBmp.x = 50;
        this.activityBmp.y = 50;
        this.addChild( this.activityBmp)
        var scaleBmp1:egret.Bitmap;
        for(var i:number=0;i<20;i++)
        {
            scaleBmp1 = new egret.Bitmap();
            scaleBmp1.texture = RES.getRes("icons.activity_1")
            scaleBmp1.x=50;
            scaleBmp1.y=50;
            scaleBmp1.visible = false;
            scaleBmp1.scale9Grid = new egret.Rectangle(7,7,46,46)
            this.addChild(scaleBmp1)
            tns();
            function tns():void
            {
                var tweenScaleBmp = egret.Tween.get(scaleBmp1)
                tweenScaleBmp.to({width:Math.random()*500,height:Math.random()*500},Math.random()*5000+1000).to({width:50,height:50},Math.random()*5000+1000)
                tweenScaleBmp.call(tns,this)
            }
        }
        this.startAnimation();

        var chunliData = RES.getRes("chunliJson")
        var chunliPng = RES.getRes("chunliPng")
        var mcFactory = new egret.MovieClipDataFactory(chunliData,chunliPng)
        var chunliMc = new egret.MovieClip(mcFactory.generateMovieClipData("test"))
        chunliMc.x=100;
        chunliMc.y=100;
        this.addChild(chunliMc)
        chunliMc.gotoAndPlay("attack",-1)

        var myName = new egret.TextField()
        myName.text = "我的名字:seethinks\nYeah!!!!"
        myName.x=10;myName.y=300;
        myName.textColor=0x00ffff
        myName.strokeColor=0xffffff
        myName.stroke = 1;
        this.addChild(myName)

        var bitmapFont:egret.BitmapFont = RES.getRes("fontBmp");
        var bmpTxxt = new egret.BitmapText();
        bmpTxxt.font = bitmapFont;
        bmpTxxt.x=10;bmpTxxt.y=400;
        bmpTxxt.text="HelloWorld"
        this.addChild(bmpTxxt)

        var inputTxt = new egret.TextField();
        inputTxt.type = egret.TextFieldType.INPUT;
        inputTxt.x=10,inputTxt.y=500;
        inputTxt.width=200;
        this.addChild(inputTxt)
        inputTxt.text = "请输入...";

        var myObj = {info:"trace",value:2,dd:111}
        this.trace(myObj)

        var message = {
            message:"hello world",
            start:function (){
                setTimeout(()=> {console.log("this.mee")},3000)
            }
        }
        message.start();
//        enum Color{Red,Green,Blue}
//        console.log(Color.Red)

    }

    private trace(obj:{info:String;value:number},value?:number)
    {
        console.log(obj.info)
    }

    private startAnimation():void
    {
        var str:any =1;
        var strNum = <string>str;
        console.log(strNum +5);

        var arr:any[] = new Array();
        var strArr:string[] = ["a","b","c"]
//        var tw = egret.Tween.get(this.activityBmp);
//
//        tw.to({alpha:0,x:288,rotation:90,skewX:90},2500).to({alpha:1,x:280,y:300,rotation:180,skewX:-80},2500).to({alpha:1,x:80,rotation:0,skewX:0},2500)
//        tw.call(this.startAnimation,this)

        TweenLite.to(this.activityBmp,2,{alpha:1,y:300,x:300,rotation:180,skewX:-80});

    }
}