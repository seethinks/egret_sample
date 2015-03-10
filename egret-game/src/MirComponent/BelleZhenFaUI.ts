class BelleZhenFaUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.BelleZhenFaSkin";
    }

    public _head1:egret.gui.UIAsset;

    public _head2:egret.gui.UIAsset;

    public _head3:egret.gui.UIAsset;

    public _head4:egret.gui.UIAsset;

    public _head5:egret.gui.UIAsset;

    public _label_p:egret.gui.Label;

    public _open1:egret.gui.Label;

    public _open2:egret.gui.Label;

    public _open3:egret.gui.Label;

    public _open4:egret.gui.Label;

    public _open5:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._open1)
        {
            this._open1.visible = false;
        }

        if(instance == this._open2)
        {
            this._open2.visible = false;
        }

        if(instance == this._open3)
        {
            this._open3.visible = false;
        }

        if(instance == this._open4)
        {
            this._open4.visible = false;
        }

        if(instance == this._open5)
        {
            this._open5.visible = false;
        }

    }
}