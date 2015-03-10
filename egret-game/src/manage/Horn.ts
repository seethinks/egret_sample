class Horn extends egret.gui.Group
{
    private m_UI:HornUI;

    private text:egret.gui.Label = new egret.gui.Label();

    public constructor()
    {
        super(); //GameManager.horn.play();

        super.createChildren();

        this.m_UI = new HornUI();

        this.addElement(this.m_UI);

        this.m_UI.width = Main.guiLayer.width;

        this.text.textColor = 0xffff00;

        this.text.height = 40;

        this.text.size = 30;

        this.text.y = 10;

        this.text.x = Main.guiLayer.width;
    }

    public play(obj:any):void
    {
        if(!obj) return;

        GameManager.hornStop = true;

        Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);

        this.top = 300;

        this.x = 0;

        this.addEventListener(egret.Event.ENTER_FRAME, this.onStart, this);

        this.addElement(this.text);

        var num:number = Number(obj["id"]);

        if(num && num == 1)
        {
            this.text.text = "  ["+obj["name"]+"]说：" + obj["msg"];
        }
        else
        {
            this.text.text = obj["times"] + "  ["+obj["name"]+"]说：" + obj["msg"];
        }

        this.m_UI._laba.visible = true;
    }

    private onStart(e:egret.Event):void
    {
        if(this.text)
        {
            if(this.text.x < -this.text.width)
            {
                this.stop();
            }

            this.text.x --;

            this.m_UI._laba.x --;
        }
    }

    public stop():void
    {
        this.text.text = "";

        this.removeEventListener(egret.Event.ENTER_FRAME, this.onStart, this);

        this.text.x = Main.guiLayer.width;

        if(this.parent) Main.guiLayer.removeElement(this);

        if(this.text._parent) this.removeElement(this.text);

        this.m_UI._laba.visible = false;

        this.m_UI._laba.x = Main.guiLayer.width - 43;

        GameManager.hornStop = false;
    }
}
