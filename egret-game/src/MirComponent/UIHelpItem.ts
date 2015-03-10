class UIHelpItem extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.HelpItemSkin";
    }


    public _labels:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._labels)
        {
            this.setText(this.label_text);
        }

    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            this.setText(this.data.text);

            if(this.data["size"]){
                this._labels.size = this.data["size"];
            }
            if(this.data["color"]){
                this._labels.textColor = this.data["color"];
            }

        }
    }


    private label_text:string = "";

    public setText(_text:string):void
    {
        this.label_text = _text;

        if(this._labels)
        {
            this._labels.text = _text;
        }
    }
}