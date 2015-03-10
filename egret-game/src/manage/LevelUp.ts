class LevelUp extends egret.gui.Group
{
    private loding_ass:egret.gui.UIAsset;

    private loding_eff:egret.MovieClip;

    public constructor()
    {
        super();

        super.createChildren();

        var data = RES.getRes("LevelUp_json");

        var texture = RES.getRes("LevelUp_png");

        this.loding_ass = new egret.gui.UIAsset();

        this.loding_eff = new egret.MovieClip(data, texture);

        this.loding_ass.source = this.loding_eff;

        this.addElement(this.loding_ass);

        this.loding_ass.scaleX = 2;

        this.loding_ass.scaleY = 2;
    }

    public play():void
    {
        this.loding_eff.frameRate = 10;

        this.loding_eff.gotoAndPlay("LevelUp");

        this.loding_eff.addEventListener("thisStop", this.stop, this);

        Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);

        this.x = Main.guiLayer.width / 2 - 376;

        this.y = Main.guiLayer.height / 2 - 134;
    }

    public stop():void
    {
        this.loding_eff.stop();

        if(this.parent) Main.guiLayer.removeElement(this);
    }
}
