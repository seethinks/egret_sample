
class HelpDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIHelp;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public index:number = 0;

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

        this.m_UI = new UIHelp();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("帮助");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIHelpItem);

        this.taskList1.itemRendererSkinName = "skins.HelpItemSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 7;

        this.taskList1.width = 478;

        this.taskList1.height = 585;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

    }

    public showText( ):void
    {
        this.dp.removeAll();

        if(this.index <= 0)
        {
            for(var key in GameManager.JSON_HELP)
            {
                var obj = GameManager.JSON_HELP[key];

                this.dp.addItem({text:obj["title"]});

                this.dp.addItem({text:""});

                var str:string = obj["content"];

                var arr:Array<any> = str.split("&");

                for(var i = 0; i < arr.length; i ++)
                {
                    this.dp.addItem({text:"" + arr[i]});
                }
            }
        }
        else  //1技能*  2荣誉商店*  3装备熔炼*  4装备打造*  5强化*  6洗练*  7神器传承*  8神器吞噬*  9监狱*  10美人*
        {
            var objs = GameManager.JSON_HELP_TIP[this.index];

            this.dp.addItem({text:""});

            this.dp.addItem({text:objs["title"]});

            this.dp.addItem({text:""});

            var strs:string = objs["content"];

            var arrs:Array<any> = strs.split("&");

            for(var j = 0; j < arrs.length; j ++)
            {
                this.dp.addItem({text:"" + arrs[j]});
            }
        }

        var self = this;

        egret.callLater(function()
        {
            if(self.taskList1.dataGroup && self.taskList1.dataGroup.verticalScrollPosition) self.taskList1.dataGroup.verticalScrollPosition = 0;
        }, this.taskList1);
    }

    public show()
    {
        super.show( );

        this.showText( );
    }

    public hide()
    {
        super.hide();
    }
}
