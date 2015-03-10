/**
 * 服务器列表
 */
class ServerbtnRender extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.touchChildren = true;
        this.touchEnabled = true;
    }


    public serverListLabel:egret.gui.Label;

    public dataChanged()
    {
        super.dataChanged();

        if(this.serverListLabel)
        {
            this.serverListLabel.text = this.data.name;
        }
    }

    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);

        if (instance == this.serverListLabel)
        {
            this.serverListLabel.text = this.data.name;
        }
    }
}