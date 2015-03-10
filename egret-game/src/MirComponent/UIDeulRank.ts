class UIDeulRank extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.DeulRankSkin";
    }

    public rank_labels:egret.gui.Label;

    public _btn_refrsh:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn_refrsh)
        {
            this._btn_refrsh.visible = false;
        }

    }
}