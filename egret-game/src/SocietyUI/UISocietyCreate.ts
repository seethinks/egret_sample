class UISocietyCreate extends egret.gui.SkinnableComponent {

    public constructor()
    {
        super();
        this.skinName = "skins.SocietyCreatSkin";
    }

    public btn_cancel:egret.gui.Button;
    public btn_create:egret.gui.Button;
    public _name_input:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }

}