/**
 * 会员管理
 */
class MemberManagerUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MemberInfoSkin";
    }

    public _head:egret.gui.UIAsset;

    public _btn_tichu:egret.gui.Button;

    public _btn_renmin:egret.gui.Button;

    public _btn_close:egret.gui.Button;

    public _label_name:egret.gui.Label;

    public _label_gongxian:egret.gui.Label;

    public _label_fight:egret.gui.Label;

    public _label_job:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn_renmin)
        {
            this._btn_renmin.visible = false;
        }

        if(instance == this._btn_tichu)
        {
            this._btn_tichu.visible = false;
        }
    }

}