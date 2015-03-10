
class GemCheckDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:GemCheckUI;

    private list:egret.gui.List = new egret.gui.List();

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

        this.m_UI = new GemCheckUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("宝石选择");

        this.top = 30;

        this.m_UI.top = this.top + 40;

        this.list.skinName = "skins.GemListSkin";

        this.list.height = 520;

        this.list.width = 430;

        this.list.itemRenderer = new egret.gui.ClassFactory(UIIcon);

        this.list.itemRendererSkinName = "skins.IconSkin";

        this.list.dataProvider = this.dp;

        this.list.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.list.top = this.m_UI.top + 73;

        this.list.horizontalCenter = 0;

        this.addElement(this.list);

    }

    private clickItem(e:egret.gui.ListEvent):void
    {
        var item = e.item;

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0121&sid="+GameManager.SESSION_ID + "&gamId=" + item["id"]+"&itemId=" + Main.player.m_clickItme["id"];

        HttpMessage.sendMsg(url, param);

        this.hide();
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var itemArr:Array<any> = Main.player.m_items.items;

        this.dp.removeAll();

        if(itemArr && itemArr.length > 0)
        {
            for(var i = 0; i < itemArr.length; i++)
            {
                var item:ItemBase = itemArr[i];

                if(item.maxType == 1)
                {
                    this.dp.addItem(item);
                }
            }
        }
    }

    public show()
    {
        super.show( );

        this.onUpdate();

    }

    public hide()
    {
        super.hide();

    }
}
