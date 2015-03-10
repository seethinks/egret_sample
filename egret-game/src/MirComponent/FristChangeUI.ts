class FristChangeUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.FristChangeSkin";
    }

    public _btn:egret.gui.Button;

    public _icon1:UIIcon;

    public _icon2:UIIcon;

    public _label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}