/**
 * Boss贡献榜
 */
class SocietyBossDevote extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyRank;

    private list:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public bossList:Array<any> = [];

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

        this.m_UI = new UISocietyRank();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("Boss贡献榜");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.list.skinName = "skins.ListSkin";

        this.list.height = 400;

        this.list.width = 530;

        this.list.horizontalCenter = 0;

        this.list.top = 250;

        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);

        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";

        this.list.dataProvider = this.dp;

        this.list.touchChildren = true;

        this.addElement(this.list);

        this.m_UI._title_index.text = "等级";

        this.m_UI._title_id.text = "姓名";

        this.m_UI._title_level.text = "伤害";

        this.m_UI._title_sname.text = "百分比";

        this.m_UI._title_pname.text = "";
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        if(this.bossList && this.bossList.length > 0)
        {
            for(var i = 0; i < this.bossList.length; i++)
            {
                var obj = this.bossList[i];

                obj["type"] = 4;

                this.dp.addItem(obj);
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
