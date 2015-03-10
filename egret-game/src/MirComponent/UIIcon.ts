class UIIcon extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.IconSkin";

        this.scaleX = 0.97;

        this.scaleY = 0.97;
    }

    public _items:egret.gui.UIAsset;

    public _quality:egret.gui.UIAsset;

    public _eqpetName:egret.gui.Label;

    public _labels:egret.gui.Label;

    public _count:egret.gui.Label;

    public _strength:egret.gui.Label;

    public _newEqpt:egret.gui.UIAsset;

    public _effect:egret.gui.UIAsset;

    public _move:egret.MovieClip;

    public _group:egret.gui.Group;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._newEqpt)
        {
            this._newEqpt.visible = this._showEqpt;
        }

        if(instance == this._effect)
        {
            this._effect.x = -5;

            this._effect.y = -5;

            this._effect.scaleX = 1.3;

            this._effect.scaleY = 1.3;
        }
    }

    private playFlash(uiass:egret.gui.UIAsset, move:egret.MovieClip, str:string):void
    {
        var data = RES.getRes(str + "_json");

        var texture = RES.getRes(str + "_png");

        move = new egret.MovieClip(data, texture);

        uiass.source = move;

        move.frameRate = 10;

        move.gotoAndPlay(str);

        if(this.data["effect"])
        {
            move.scaleX = 0.8;

            move.scaleY = 0.8;

            this._effect.x = -5;

            this._effect.y = -5;
        }
    }

    public dataChanged()
    {
        this._group.removeAllElements();

        super.dataChanged();

        if(!this.data) return;

        if(Number(this.data["godEq"]) > 0)
        {
            this._effect.visible = true;

            if(!this._move)
            {
                this.playFlash(this._effect, this._move, "effect_eqpt");
            }
            else
            {
                this._move.gotoAndPlay("effect_eqpt");
            }
        }
        else
        {
            this._effect.visible = false;
        }

        if(this._strength)
        {
            this.setStrength(this.data["strength"]);
        }

        if (this._quality)
        {
            this.setQuality(this.data.qly);
        }

        if (this._items)
        {
            this.setItems(this.data.tpl["icon"]);
        }

        if(this._eqpetName)
        {
            if(this.data.maxType == 2)
            {
                this.setName("Lv."+this.data.tpl["lv"]);
            }
            else
            {
                this.setName(this.data.tpl["name"]);
            }
        }

        if(this._count){
            if(this.data.maxType != 2 && this.data.count > 0){
                this.setCount("X"+this.data.count);
            }else {
                this.setCount("");
            }
        }



        for(var i = 1; i <= 4; i++)
        {
            if(this.data["hole" + i])
            {
                var hole:number = Number(this.data["hole" + i]);

                if(hole < 0)
                {

                }
                else if(hole == 0)
                {
                    var ui:egret.gui.UIAsset = new egret.gui.UIAsset();

                    ui.source = "gem_base";

                    this._group.addElement(ui);
                }
                else
                {
                    var gem:any = GameManager.JSON_BAOSHI[hole];

                    var type:number = Number(gem["miniType"]);

                    var ui:egret.gui.UIAsset = new egret.gui.UIAsset();

                    ui.source = "gem_" + type;

                    this._group.addElement(ui);
                }
            }
        }
    }

    public setEffVis():void
    {
        if(this._effect) this._effect.visible = false;
    }

    private _showEqpt:boolean = false;

    public setEqptVis(_b:boolean = false):void
    {
        this._showEqpt = _b;

        if(this._newEqpt) this._newEqpt.visible = _b;
    }


    private _streng:string = "";

    public setStrength(streng:string = ""):void
    {
        this._streng = streng;

        if(this._strength)
        {
            if(Number(streng) > 0)
            {
                this._strength.text = "+" + streng;
            }
            else
            {
                this._strength.text = "";
            }

        }
    }

    public setStart(streng:string = ""):void
    {
        this._streng = streng;

        if(this._strength)
        {
            this._strength.text = "" + streng;
        }
    }

    private str:string = "";

    public setItems(_str:string):void
    {
        this.str = _str

        if(this._items)
        {
            this._items.source = _str;
        }
    }

    private _c:string = "";

    public setCount(count:string):void
    {
        this._c = count;

        if(this._count)
        {
            this._count.text = count;
        }
    }

    private q:number = 0;

    public setQuality(_q:number = 0):void
    {
        if(!this._quality) return;

        if(_q > 0)
        {
            this.q = _q;

            this._quality.source = "_icon_" + _q;
        }
        else
        {
            this._quality.source = "test_icon";
        }
    }

    private eqpt_name:string = "";

    public setName(_name:string):void
    {
        this.eqpt_name = _name;

        if(this._eqpetName)
        {
            this._eqpetName.text = _name;

            this._eqpetName.visible = true;
        }
    }

    private label_text:string = "";

    public setText(_text:string):void
    {
        this.label_text = _text;

        if(this._labels)
        {
            this._labels.text = _text;
        }
    }

    public setGroupSize():void
    {
        if(this._group)
        {
            this._group.scaleX = 0.7;

            this._group.scaleY = 0.7;
        }
    }
}