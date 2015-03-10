/**
 * 帮会管理
 */
class UISocietyManager extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.HangHuiManageSkin";
    }

   public hh_label_set:egret.gui.Label;
   public hh_label_edit:egret.gui.Label;
   public hh_btn_edit:egret.gui.Button;
   public hh_btn_close:egret.gui.Button;
   public hh_btn_set:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }

}