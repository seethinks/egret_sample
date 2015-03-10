class UIChat extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ChatSkin";
    }

    public chat_btn_set:egret.gui.Button;

    public chat_btn_hanghui:egret.gui.Button;

    public chat_btn_fight:egret.gui.Button;

    public chat_send:egret.gui.Button;

    public _btn_horn:egret.gui.UIAsset;

    public chat_btn_shijie:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.chat_btn_hanghui)
        {
            //this.chat_btn_hanghui.visible = false;
        }

        if(instance == this.chat_btn_set)
        {
            this.chat_btn_set.visible = false;
        }
    }

}