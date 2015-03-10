
class BelleSkillDesc extends egret.gui.Group
{
    private m_UI:BelleSkillDescUI;

    public skillModel:any;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new BelleSkillDescUI();

        this.addElement(this.m_UI);

        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
    }

    public update():void
    {
        if(this.skillModel)
        {
            this.m_UI._label_desc.text = "" + this.skillModel["des"];

            this.m_UI._label_name.text = "" + this.skillModel["name"];

            this.m_UI._label_mp.text = "MP " + this.skillModel["consumemp"];
        }
    }

    private hide(e:egret.TouchEvent = null):void
    {
        var b:BelleDialog = DialogManager.findDialog(BelleDialog, "BelleDialog");

        if(b && this.parent)
        {
            b.removeElement(this);

            this.skillModel = null;
        }
    }
}
