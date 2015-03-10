/**
 * 帮会商店
 */
class SocietyShop extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyShop;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this._dialog = new DialogBox();

        this.addElement(this._dialog);

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UISocietyShop();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("行会商店");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ShopListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SocietyShopList);

        this.taskList1.itemRendererSkinName = "skins.ShopItemReaderSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 100;

        this.taskList1.width = 510;

        this.taskList1.height = 520;

        var shop = GameManager.JSON_SOCIETY_SHOP;

        if(shop)
        {
            for(var i in shop)
            {
                this.dp.addItem(shop[i]);
            }
        }

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

    }

    public onUpdatePlayer():void
    {
        this.m_UI._label_shop.text = "当前贡献/总贡献：" + Main.player.curContri + "/" + Main.player.allContri;
    }

    public show()
    {
        super.show( );

        this.onUpdatePlayer();
    }

    public hide()
    {
        super.hide();
    }
}
