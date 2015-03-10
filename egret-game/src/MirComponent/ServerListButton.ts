class ServerListButton extends egret.gui.Button
{
    public constructor()
    {
        super();
    }

    public serverListLabel:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if (instance == this.serverListLabel)
        {
            this.serverListLabel.text = this._txt;
        }
    }


    public _txt:string;
    public setLabelText(txt:string):void
    {
        this._txt = txt;

        if(this.serverListLabel)
        {
            this.serverListLabel.text = this._txt;
        }
    }
}