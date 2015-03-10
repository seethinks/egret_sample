class PageLoadUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.PageLoadSkin";
    }

    public btn_android:egret.gui.Button;

    public btn_ios:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}