class UIFightLog extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.FightLogSkin";
    }

    public log_label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(this.log_label)
        {
//            this.log_label.text = this.data.text;
//
//            this.log_label.textColor = this.data.color;
            this.log_label._textField.textFlow = <Array<egret.ITextElement>>this.data;
        }

    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.log_label)
        {
//            this.log_label.text = this.data.text;
//
//            this.log_label.textColor = this.data.color;
            this.log_label._textField.textFlow = <Array<egret.ITextElement>>this.data;
        }
    }
}