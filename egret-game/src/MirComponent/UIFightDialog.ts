class UIFightDialog extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.FightSkin";
    }

    public _btn_fight_census:egret.gui.UIAsset;

    public _btn_fight_statistics:egret.gui.UIAsset;

    public _btn_cut_fight:egret.gui.Button;

    public _btn_fast_fight:egret.gui.Button;

    public _btn_fight_set:egret.gui.Button;

    public _btn_fight_chat:egret.gui.Button;

    public _btn_new_event:egret.gui.UIAsset;

    public fight_souxun:egret.gui.UIAsset;

    public fight_label_time:egret.gui.Label;

    public fight_label_log:egret.gui.Label;

    public fight_label_boss:egret.gui.Label;

    public _map_name:egret.gui.Label;

    public _mapwarn:egret.gui.UIAsset;

    public _fight_img:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.fight_souxun)
        {
            this.fight_souxun.visible =false;
        }

        if(instance == this.fight_label_time)
        {
            this.fight_label_time.text = "";
        }

        if(instance == this._btn_fight_statistics)
        {
            this._btn_fight_statistics.visible = false;
        }

        if(instance == this._mapwarn)
        {
            this._mapwarn.visible = false;
        }

        if(instance == this.fight_label_time)
        {
            this.fight_label_time.stroke = 1;

            this.fight_label_time.strokeColor = 0xDDFC56;
        }

        if(instance == this._fight_img)
        {
            this._fight_img.alpha = 0;
        }

    }
}