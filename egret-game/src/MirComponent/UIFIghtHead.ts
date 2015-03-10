class UIFIghtHead extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.FightHeadPlayerSkin";
    }

    public _hp:egret.gui.UIAsset;

    public _mp:egret.gui.UIAsset;

    public _head:egret.gui.UIAsset;

    public _text_name:egret.gui.Label;

    public _text_hp:egret.gui.Label;

    public _label_buff:egret.gui.Label;

    public _img_siwang:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._head)
        {
            this.setHead(this.m_head);
        }

        if(instance == this._hp)
        {
            if(this.skinName == "skins.MonsterHeadSkin")
            {
                this._hp.scaleX *= -1;

                this._hp.x += 182;
            }

            this.m_hplenght = this._hp.width;

            this.setHp(this.m_hp, this.m_hpmax);
        }

        if(instance == this._mp)
        {
            this.m_mplenght = this._mp.width;

            this.setMp(this.m_mp, this.m_mpmax);
        }

        if(instance == this._text_name)
        {
            this.setName(this.m_name);
        }

        if(instance == this._img_siwang)
        {
            this._img_siwang.visible = false;
        }
    }

    private m_name:string = "";

    public setName(_name:string):void
    {
        this.m_name = _name;

        if(this._text_name)
        {
            this._text_name.text = _name;
        }
    }

    private m_hp:number = 0;

    private m_hpmax:number = 0;

    private m_hplenght:number = 0;

    public setHp(h:number, m:number):void
    {
        this.m_hp = h;

        this.m_hpmax = m;

        if(this._hp)
        {
            this._hp.width = (h / m) * this.m_hplenght;

            this._text_hp.text = h + "/" + m;
        }

        if(Number(this.m_hp) <= 0)
        {
            this._img_siwang.visible = true;
        }
        else
        {
            this._img_siwang.visible = false;
        }
    }

    private m_mp:number = 0;

    private m_mpmax:number = 0;

    private m_mplenght:number = 0;

    public setMp(h:number, m:number):void
    {
        this.m_mp = h;

        this.m_mpmax = m;

        if(this._mp)
        {
            this._mp.width = (h / m) * this.m_mplenght;
        }
    }

    private m_head:string = "";

    public setHead(head:string):void
    {
        this.m_head = head;

        if(this._head)
        {
            this._head.source = head;
        }
    }
}