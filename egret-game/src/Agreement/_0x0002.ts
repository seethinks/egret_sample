class _0x0002
{
    public constuctor()
    {

    }

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(Main.creatHero.sound) Main.creatHero.sound.pause();

        Main.guiLayer.removeAllElements();

        Main.guiLayer.addElement(Main.LogingDialog);
    }
}
