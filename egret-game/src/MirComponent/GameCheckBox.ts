class GameCheckBox extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.GameCheckBoxSkin";

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    public _check_gou:egret.gui.UIAsset;

    public _check_bg:egret.gui.UIAsset;

    public selectIndex:number = 0;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._check_gou)
        {
            this.setGou(this.selectIndex);
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.selectIndex == 0)
        {
            this.selectIndex = 1;
        }
        else
        {
            this.selectIndex = 0;
        }

        this.setGou(this.selectIndex);
    }

    public setGou(_index:number = 0):void
    {
        this.selectIndex = _index;

        if(this._check_gou)
        {
            if(this.selectIndex == 0)
            {
                this._check_gou.visible = false;
            }
            else
            {
                this._check_gou.visible = true;
            }
        }
    }
}