class UIBatchSell extends egret.gui.SkinnableComponent {

    public constructor(){
        super();
        this.skinName = "skins.BatchSellSkin";
    }

    public _white_label:egret.gui.Label;
    public _green_label:egret.gui.Label;
    public _blue_label:egret.gui.Label;
    public _violet_label:egret.gui.Label;

    public _green_btn:egret.gui.Button;
    public _violet_btn:egret.gui.Button;
    public _blue_btn:egret.gui.Button;
    public _white_btn:egret.gui.Button;

    public _close_btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);
    }


}