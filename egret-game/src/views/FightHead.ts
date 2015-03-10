
class FightHead extends egret.gui.Group
{
    public m_UI:UIFIghtHead;

    private m_skinName:string = "";

    private eff:egret.MovieClip;

    private effAsset:egret.gui.UIAsset = new egret.gui.UIAsset();

    public constructor(sn:string = "skins.FightHeadPlayerSkin")
    {
        super();

        this.m_skinName = sn;
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new UIFIghtHead();

        this.m_UI.skinName = this.m_skinName;

        this.addElement(this.m_UI);

        this.addElement(this.effAsset);

        this.effAsset.y = -40;
    }

    public playHp(num:any, type:number = 0):void
    {
        var txt:egret.gui.Label = new egret.gui.Label();

        txt.textAlign = "center";

        txt.bold = true;

        txt.size = 50;

        if(type == 1)  //回血
        {
            txt.textColor = 0x00ff00;

            txt.text = "+" + num;
        }
        else if(type == 0) //回蓝 / 费蓝
        {
            txt.textColor = 0x0000ff;

            txt.text = (num>0?"+":"") + num;
        }
        else if(type == 2)   //减血
        {
            txt.textColor = 0xff0000;

            txt.text = "-" + num;
        }
        else if(type == 3)  //暴击  (也是减血)
        {
            txt.textColor = 0xF3C009;

            txt.text = "-" + num;
        }
        else if(type == 4) //MISS
        {
            txt.textColor = 0xffffff;

            txt.text = "MISS";
        }


        this.addElement(txt);

        txt.x = 30;

        txt.y = 50;

        var _y = txt.y;

        var tw = egret.Tween.get(txt,{loop:false});

        var t:FightHead = this;

        tw.to({y:_y - 60}, 1000).to({y:_y - 60}, 500).call(function()
        {
            if(txt.parent) t.removeElement(txt);
        });
    }

    public setBuff(buff:string = ""):void
    {
        this.m_UI._label_buff.text = buff;
    }

    public playEffect(num:number = 60):void
    {
        var tw = egret.Tween.get(this,{loop:false});

        var t:FightHead = this;

        var x = this.x;

        tw.to({x:x + num}, 200).to({x:x}, 200);
    }

    public playEffectB(num:number = 30, isF:boolean = true):void
    {
        var tw = egret.Tween.get(this,{loop:false});

        var t:FightHead = this;

        var x = this.x;

        tw.to({x:x + num}, 200).to({x:x}, 200);

        if(isF)this.playFlash(1);
    }

    public playDef(num:number = 60):void
    {
        var tw = egret.Tween.get(this,{loop:false});

        var t:FightHead = this;

        var x = this.x;

        tw.to({x:x - num}, 200).to({x:x}, 200);
    }

    public playDefB(num:number = 30, isF:boolean = true):void
    {
        var tw = egret.Tween.get(this,{loop:false});

        var t:FightHead = this;

        var x = this.x;

        tw.to({x:x - num}, 200).to({x:x}, 200);

        if(isF)this.playFlash();
    }

    private playFlash(n:number = 0):void
    {
        var data = RES.getRes("eff_fight_1_json");

        var texture = RES.getRes("eff_fight_1_png");

        this.eff = new egret.MovieClip(data, texture);

        this.effAsset.source = this.eff;

        if(n == 0)
        {
            //正向
            this.effAsset.x = 0;
        }
        else if(n == 1)
        {
            this.eff.scaleX *= -1;

            this.effAsset.x = 230;
        }

        this.eff.frameRate = 25;

        this.eff.gotoAndPlay("eff_fight_1");

        this.eff.addEventListener("thisStop", this.stopFlash, this);

        this.addElement(this.effAsset);
    }

    private stopFlash():void
    {
        this.eff.stop();

        if(this.effAsset.parent) this.removeElement(this.effAsset);
    }
}
