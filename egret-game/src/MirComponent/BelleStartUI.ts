class BelleStartUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.BelleStartSkin";
    }

    public _label_prop0:egret.gui.Label;

    public _label_prop1:egret.gui.Label;

    public _start_group:egret.gui.Group;

    public _label_exp:egret.gui.Label;

    public _label_desc:egret.gui.Label;

    public _title_exp:egret.gui.Label;

    public _btn_uplevel:egret.gui.Button;

    public _btn_uplevelall:egret.gui.Button;

    public belle_start1:egret.gui.UIAsset;

    public belle_start2:egret.gui.UIAsset;

    public belle_start3:egret.gui.UIAsset;

    public belle_start4:egret.gui.UIAsset;

    public belle_start5:egret.gui.UIAsset;

    public belle_start6:egret.gui.UIAsset;

    public belle_start7:egret.gui.UIAsset;

    public belle_start8:egret.gui.UIAsset;

    public belle_start9:egret.gui.UIAsset;

    public belle_start10:egret.gui.UIAsset;

    public _icon1:egret.gui.UIAsset;

    public _icon2:egret.gui.UIAsset;

    public _icon3:egret.gui.UIAsset;

    public _icon4:egret.gui.UIAsset;

    public _count1:egret.gui.Label;

    public _count2:egret.gui.Label;

    public _count3:egret.gui.Label;

    public _count4:egret.gui.Label;

    public _f1:egret.gui.UIAsset;

    public _f2:egret.gui.UIAsset;

    public _f3:egret.gui.UIAsset;

    public _f4:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._count1)
        {
            this._count1.touchEnabled = false;

            this._count1.text = "";
        }

        if(instance == this._count2)
        {
            this._count2.touchEnabled = false;

            this._count2.text = "";
        }

        if(instance == this._count3)
        {
            this._count3.touchEnabled = false;

            this._count3.text = "";
        }

        if(instance == this._count4)
        {
            this._count4.touchEnabled = false;

            this._count4.text = "";
        }

        if(instance == this._f1)
        {
            this._f1.visible = false;

            this._f1.touchEnabled = false;
        }

        if(instance == this._f2)
        {
            this._f2.visible = false;

            this._f2.touchEnabled = false;
        }

        if(instance == this._f3)
        {
            this._f3.visible = false;

            this._f3.touchEnabled = false;
        }

        if(instance == this._f4)
        {
            this._f4.visible = false;

            this._f4.touchEnabled = false;
        }
    }
}