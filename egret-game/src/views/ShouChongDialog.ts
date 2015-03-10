
class ShouChongDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:FristChangeUI;

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

        this.m_UI = new FristChangeUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("首冲奖励");

        this.top = 30;

        this.m_UI.top = this.top + 45;

        this._dialog.height = 570;

        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.m_UI._btn._getLabel() == "前往充值")
        {
            DialogManager.open(ChargeDialog, "ChargeDialog");
        }
        else
        {

        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var gift = GameManager.JSON_GIFT["401"];

        if(gift)
        {
            var balkstone = gift["balkstone"];

            var des = gift["des"];

            var itemstr:string = gift["item"];

            var arr:Array<any> = itemstr.split("#");

            var itemId = arr[1];

            var item:any;

            if(Number(itemId) > 0)
            {
                item = GameManager.JSON_ITEM[itemId];
            }

            var itemNum = arr[2];

            if(item)
            {
                this.m_UI._icon1.setItems(item["icon"]);

                this.m_UI._icon1.setCount("" + itemNum);

                this.m_UI._icon1.setName("" + item["name"]);

                this.m_UI._icon1.setQuality(4);
            }

            var money = gift["money"];

            this.m_UI._icon2.setItems("1");

            this.m_UI._icon2.setCount("" + money);

            this.m_UI._icon2.setName("金币");

            this.m_UI._icon2.setQuality(4);

            var str:string = "送" + money + "金币";

            if(item) str += "\n送" + item["name"] + "*" + itemNum;

            this.m_UI._label.text = "";

        }

        if(Main.player.vipexp > 0)
        {
            this.m_UI._btn._setLabel("已经领取");
        }
        else
        {
            this.m_UI._btn._setLabel("前往充值");
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
