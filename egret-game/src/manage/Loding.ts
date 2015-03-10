class Loding extends egret.gui.Group
{
    private loding_ass:egret.gui.UIAsset;

    private loding_eff:egret.MovieClip;

    private m_UI:NetLoding;

    public constructor()
    {
        super();

        super.createChildren();

        var data = RES.getRes("loding_json");

        var texture = RES.getRes("loding_png");

        this.loding_ass = new egret.gui.UIAsset();

        this.loding_eff = new egret.MovieClip(data, texture);

        this.loding_ass.source = this.loding_eff;

        this.loding_eff.frameRate = 20;

        this.m_UI = new NetLoding();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 0;

        this.addElement(this.loding_ass);

        this.loding_ass.top = this.m_UI.top + 45;

        this.loding_ass.x = 511 / 2 - 32 / 2;
    }

    public play():void
    {
        this.loding_eff.gotoAndPlay("loding");

        Main.guiLayer.addElement(this);

        this.horizontalCenter = 0;

        this.verticalCenter = 0;

        Main.guiLayer.touchEnabled = false;

        Main.guiLayer.touchChildren = false;
    }

    public stop():void
    {
        this.loding_eff.stop();

        if(this.parent) Main.guiLayer.removeElement(this);

        Main.guiLayer.touchEnabled = true;

        Main.guiLayer.touchChildren = true;
    }
}
