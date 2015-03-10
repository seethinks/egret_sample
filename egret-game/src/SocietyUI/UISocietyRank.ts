/**
 * 帮会排行,Boss贡献榜通用
 */
class UISocietyRank extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SocietyRankSkin";
    }

    public _label_level:egret.gui.Label;
    public _label_renshu:egret.gui.Label;
    public _btn_close:egret.gui.Button;
    public _create_btn:egret.gui.Button;

    public _title_index:egret.gui.Label;
    public _title_id:egret.gui.Label;
    public _title_level:egret.gui.Label;
    public _title_sname:egret.gui.Label;
    public _title_pname:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._create_btn)this._create_btn.visible = false;

    }

}