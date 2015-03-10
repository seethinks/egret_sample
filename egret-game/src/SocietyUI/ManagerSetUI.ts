/**
 * 入会条件设置
 */
class ManagerSetUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ManagerSetSkin";
    }

    public btn_false:egret.gui.Button;

    public btn_true:egret.gui.Button;

    public _text:egret.gui.EditableText;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }

}