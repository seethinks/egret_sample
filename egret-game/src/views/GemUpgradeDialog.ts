
class GemUpgradeDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:GemUpgradeUI;

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

        this.m_UI = new GemUpgradeUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("宝石合成");

        this.top = 30;

        this.m_UI.top = this.top + 40;

        this.m_UI.xq_btn_upgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._icon._eqpetName.textColor = 0x00ff00;

        this.m_UI._icon._eqpetName.bold = true;
    }

    private onClick(e:egret.TouchEvent):void
    {
        if(!Main.player.m_clickItme)
        {
            GameManager.flyText({t:"宝石不足！", q:1});

            return;
        }

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0123&sid="+GameManager.SESSION_ID + "&gemId=" + Main.player.m_clickItme["id"];

        HttpMessage.sendMsg(url, param);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var item:ItemBase = Main.player.m_clickItme;

        if(!item)
        {
            this.m_UI._name1.text = "";

            this.m_UI._bs_img1.source = "test_icon";

            this.m_UI._label.text = "";

            this.m_UI.xq_label_eqptname.text = "";

            return;
        }

        if(item.maxType != 1) return;

        var nextId = item.tpl["upTarget"];

        if(Number(nextId) == 0)
        {
            this.hide();

            GameManager.flyText({t:"该宝石已达顶级！", q:1});

            return;
        }

        var nextItem:ItemBase = GameManager.JSON_BAOSHI[nextId];

        if(nextItem)
        {
            this.m_UI._icon.setItems(nextItem["icon"]);

            this.m_UI._icon.setName(nextItem["name"]);
        }

        if(item.count > 0)
        {
            this.m_UI._name1.text = item.tpl["name"] + "x" + item.count;

            this.m_UI._bs_img1.source = "" + item.tpl["icon"];

            this.m_UI._bs_img1.width = this.m_UI._bs_img1.height = 68;

            if(item.count < 3) this.m_UI._name1.textColor = 0xff0000;
            else this.m_UI._name1.textColor = 0x00ff00;

            var str:string = "合成消耗：\n\n";

            str += "" + item.tpl["name"] + "：3（当前拥有" + item.count + "）\n\n";

            str += "需要金币："+item.tpl["upMoney"]+"（当前拥有："+Main.player.money+"）";

            this.m_UI._label.text = str;

            this.m_UI.xq_label_eqptname.text = "合成后将获得：" + nextItem["name"] + "（"+nextItem["des"]+"）";
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

        this.clear();
    }

    private clear():void
    {
        this.m_UI._icon.setItems("test_icon");

        this.m_UI._icon.setName("");

        this.m_UI.xq_label_eqptname.text = "";

        this.m_UI._name1.text = "";

        this.m_UI._bs_img1.source = "test_icon";

        this.m_UI._label.text = "";

        this.m_UI.xq_label_eqptname.text = "";
    }

}
