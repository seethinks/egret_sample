class UIItemDetail extends egret.gui.SkinnableComponent {

    public constructor(){
        super();
        this.skinName = "skins.ItemDetailSkin";
    }

    public _item_icon:UIIcon;
    public _item_detail_label:egret.gui.Label;
    public _item_btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);
    }

}