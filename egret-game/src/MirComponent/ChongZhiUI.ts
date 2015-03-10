class ChongZhiUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.ChongZhiShuangBeiSkin";

        this.touchChildren = true;
    }

    public _btn:egret.gui.Button;

    public _label_time:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}