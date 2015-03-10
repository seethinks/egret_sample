class UIEqptSelectList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.EqptSelectListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _item_icon:UIIcon;

    public _label_shuxing:egret.gui.Label;

    public _label_buwei:egret.gui.Label;

    public _check:UICheckBox;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._check)
        {
            this._check.setOpen(true);

            this._check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        }
    }

    private onCheck(e:egret.TouchEvent):void
    {
        if(this.data)
        {
            this.data["index"] = this._check.setCheck();
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            this._item_icon.data = this.data;

            this._item_icon.dataChanged();

            this._label_shuxing._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(this.data);

            this._label_shuxing.textColor = GameManager.COLOR[Number(this.data["qly"])];

            this._label_buwei.text = GameManager.EQPT_TYPE[Number(this.data.tpl["ePostion"])];

            if(this.data["index"])
            {
                var index:number = Number(this.data["index"]);

                if(Number(index) == 1)
                {
                    this._check.selectIndex = 1;

                    this._check._duihao.visible = true;
                }
                else
                {
                    this._check.selectIndex = 0;

                    this._check._duihao.visible = false;
                }
            }
            else
            {
                this._check.selectIndex = 0;

                this._check._duihao.visible = false;
            }
        }
    }

}