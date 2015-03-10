class UIItemBag extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.ItemBgDialogSkin";
    }

    public _btn_zbsx:egret.gui.UIAsset;

    public _btn_plmc:egret.gui.UIAsset;

    public _btn_kzbg:egret.gui.UIAsset;

    public bag_size_label:egret.gui.Label;

    public bstone_count_label:egret.gui.Label;

    public btn_tab1:UIBagTab;

    public btn_tab2:UIBagTab;

    public _itemwarn:egret.gui.UIAsset;

    public _eqptwarn:egret.gui.UIAsset;

    public _bag_full:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._itemwarn)
        {
            this._itemwarn.visible = this.i;

            this._itemwarn.touchEnabled = false;
        }

        if(instance == this._eqptwarn)
        {
            this._eqptwarn.visible = this.g;

            this._eqptwarn.touchEnabled = false;
        }
    }

    private i:boolean = false;

    public setItemWarn(_b:boolean = false):void
    {
        this.i = _b;

        if(this._itemwarn) this._itemwarn.visible = _b;
    }

    private g:boolean = false;

    public setEqptWarn(_m:boolean = false):void
    {
        this.g = _m;

        if(this._eqptwarn) this._eqptwarn.visible = _m;
    }

}