class Dialog extends egret.gui.Group
{

    public initUI:boolean = false;

    public showing:boolean = false;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();
    }

    public show()
    {
        this.initUI = true;

        if(!this.parent)
        {
            Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);

            this.showing = true;
        }
        else
        {
            Main.guiLayer.removeElement(this);
        }

        this.horizontalCenter = 0;
    }

    public hide()
    {
        if(this.parent)
        {
            Main.guiLayer.removeElement(this);

            this.showing = false;
        }
    }

    public onUpdatePlayer()
    {

    }

}