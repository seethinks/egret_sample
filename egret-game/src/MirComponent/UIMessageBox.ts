class UIMessageBox extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MessageBoxSkin";
    }

    public msg_label:egret.gui.Label;

    public msg_btn_false:egret.gui.Button;

    public msg_btn_true:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.msg_label)
        {
            this.setText(this.str);
        }
    }

    private str:string = "";

    public setText(_str:string = ""):void
    {
        this.str = _str;

        if(this.msg_label)
        {
            this.msg_label.text = _str;
        }
    }
}