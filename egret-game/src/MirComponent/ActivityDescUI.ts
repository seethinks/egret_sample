class ActivityDescUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.AddUpRechargeSkin";

        this.touchChildren = true;
    }
    public _label_time:egret.gui.Label;
    public head_bgimg:egret.gui.UIAsset;
    public _label_desc:egret.gui.Label;
    public _label_chage:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}