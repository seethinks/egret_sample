class UIChangeEqptItemReader extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ChangeEqptItemReaderSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public xz_itembtn_check:egret.gui.Button;

    public xz_itemlabel_type:egret.gui.Label;

    public xz_itemlabel_propey:egret.gui.Label;

    public xz_reader_icon:UIIcon;

    public xz_label_bufu:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.xz_label_bufu)
        {
            this.xz_label_bufu.visible = false;

            if(this.data && this.data.tpl)
            {
                var job:number = Number(this.data.tpl["ejob"]);

                if(job == Number(Main.player.job))
                {
                    this.xz_label_bufu.visible = false;
                }
                else
                {
                    this.xz_label_bufu.visible = true;
                }
            }
        }

        if(instance == this.xz_reader_icon)
        {
            this.xz_reader_icon.data = this.data;

            this.xz_reader_icon.dataChanged();
        }

        if(instance == this.xz_itemlabel_propey)
        {
            this.xz_itemlabel_propey.padding = 10;
            this.xz_itemlabel_propey._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(this.data);
        }

        if(instance == this.xz_itemlabel_type)
        {
             this.xz_itemlabel_type.text = GameManager.EQPT_TYPE[this.data.tpl["ePostion"]];
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.xz_label_bufu)
        {
            if(this.data && this.data.tpl)
            {
                if(Main.player.m_operateObjid > 0)
                {
                    var operateObj:any = Main.player.m_heros.heros[Main.player.m_operateObjid];

                    if(this.data.tpl["ejob"] == 0 || this.data.tpl["ejob"] == operateObj.job)
                    {
                        this.xz_label_bufu.visible = false;
                    }
                    else
                    {
                        this.xz_label_bufu.visible = true;
                    }
                }
                else
                {
                    var job:number = Number(this.data.tpl["ejob"]);

                    if(job == Number(Main.player.job) || job == 0)
                    {
                        this.xz_label_bufu.visible = false;
                    }
                    else
                    {
                        this.xz_label_bufu.visible = true;
                    }
                }
            }
        }



        if(this.xz_reader_icon)
        {
            this.xz_reader_icon.data = this.data;

            this.xz_reader_icon.dataChanged();
        }

        if(this.xz_itemlabel_propey)
        {
            this.xz_itemlabel_propey._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(this.data);
        }

        if(this.xz_itemlabel_type)
        {
            this.xz_itemlabel_type.text = GameManager.EQPT_TYPE[this.data.tpl["ePostion"]];
        }
    }
}