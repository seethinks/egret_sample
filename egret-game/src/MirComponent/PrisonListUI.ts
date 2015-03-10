class PrisonListUI extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.PrisonListSkin";

    }

    public _label_level:egret.gui.Label;

    public _label_name:egret.gui.Label;

    public _label_fight:egret.gui.Label;

    public _label_pk:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            this._label_name.text = "" + this.data["name"];

            this._label_level.text = "" + this.data["lv"];

            this._label_pk.text = "" + this.data["pk"];

            this._label_fight.text = "" + this.data["fightvalue"];
        }
    }
}