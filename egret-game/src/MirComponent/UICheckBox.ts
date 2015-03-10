class UICheckBox extends egret.gui.CheckBox
{
    public constructor()
    {
        super();
        this.skinName = "skins.SkillCheckSkin";
    }

    public _duihao:egret.gui.UIAsset;

    public _dizi:egret.gui.UIAsset;

    public _noopen:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._duihao)
        {
            this._duihao.visible = false;
        }

        if(instance == this._noopen)
        {
            this.setOpen();
        }
    }

    public selectIndex:number = 0;

    public setCheck():number
    {
        if(!this._duihao) return;

        if(this.selectIndex == 0)
        {
            this._duihao.visible = true;

            this.selectIndex = 1;
        }
        else
        {
            this.selectIndex = 0;

            this._duihao.visible = false;
        }

        return this.selectIndex;
    }

    public isOpen:boolean = false;

    public setOpen(b:boolean = false):void
    {
        if(this._noopen)
        {
            this._noopen.visible = !b;
        }
    }
}