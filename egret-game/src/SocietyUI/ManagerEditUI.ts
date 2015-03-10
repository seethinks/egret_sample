/**
 * 帮会公告编辑
 */
class ManagerEditUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ManagerEditSkin";
    }

    public btn_false:egret.gui.Button;

    public btn_true:egret.gui.Button;

    public _text:egret.gui.EditableText;

    public _label_info:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }

}