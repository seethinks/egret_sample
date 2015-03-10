class _0x0001
{
    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var status:string = obj["status"];

        GameManager.SESSION_ID = obj["sid"];

        if(Main.login.sound) Main.login.sound.pause();

        if(status == "0")
        {
            Main.guiLayer.removeAllElements();
            Main.guiLayer.addElement(Main.creatHero);
        }
        else
        {
            Main.guiLayer.removeAllElements();
            Main.guiLayer.addElement(Main.LogingDialog);
        }
    }
}
