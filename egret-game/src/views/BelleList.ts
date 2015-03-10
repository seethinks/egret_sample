
class BelleList extends egret.gui.Group
{
    private m_UI:BelleListUI;

    public pos:number = 0;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new BelleListUI();

        this.addElement(this.m_UI);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
    }

    public update():void
    {
        this.m_UI._group.removeAllElements();

        this.m_UI._labels.visible = true;

        for(var k in Main.player.m_heros.heros)
        {
            var sm:SuperWoman = Main.player.m_heros.heros[k];

            if(Number(sm.postion) == 0 && Number(sm.action) <= 0)
            {
                var head:BelleHead = new BelleHead();

                this.m_UI._group.addElement(head);

                head._head.source = "hero_head_" + sm.tpl["id"];

                head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

                head.name = "" + sm.id;

                this.m_UI._labels.visible = false;
            }
        }
    }

    private hide(e:egret.TouchEvent = null):void
    {
        var b:BelleZhenfa = DialogManager.findDialog(BelleZhenfa, "BelleZhenfa");

        if(b)
        {
            if(this.parent)
            {
                this.m_UI._group.removeAllElements();

                b.removeElement(this);
            }
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        var id = e.currentTarget.name;

        if(!(this.pos > 0)) this.pos = 0;

        if(!id)return;

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0062&sid="+GameManager.SESSION_ID + "&heroid=" + id + "&postion=" + this.pos;

        HttpMessage.sendMsg(url, param);

        this.hide();

    }
}
