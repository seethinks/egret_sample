/**
 * 帮会争霸赛布阵
 */
class UISocietyArrange extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SocietyArrangeSkin";
    }

    public _title_index:egret.gui.Label;
    public _title_id:egret.gui.Label;
    public _title_level:egret.gui.Label;
    public _title_sname:egret.gui.Label;
    public _title_pname:egret.gui.Label;

    public _label_level:egret.gui.Label;
    public _label_renshu:egret.gui.Label;

    public _btn_exit:egret.gui.Button;
    public _btn_buzhen:egret.gui.Button;
    public _btn_manager:egret.gui.Button;


    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }

}