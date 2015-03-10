
class EqptSelectDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIEqptSelect;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new DialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.setTitle("装备选择");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new UIEqptSelect();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.height = 520;

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIEqptSelectList);

        this.taskList1.itemRendererSkinName = "skins.EqptSelectListSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.top = this.m_UI.top + 10;

        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    private onClick(e:egret.TouchEvent):void
    {
        this.hide();

        var list:Array<any> = new Array<any>();

        var ronglian:EqptRongLian = DialogManager.findDialog(EqptRongLian, "EqptRongLian");

        if(ronglian && ronglian.showing)
        {
            for(var i = 0; i < this.dp.length; i++)
            {
                var obj:any = this.dp.getItemAt(i);

                if(obj && obj["index"])
                {
                    var index:number = Number(obj["index"]);

                    if(Number(index) == 1)
                    {
                        list.push(obj);
                    }
                }
            }

            ronglian.setList(list);
        }
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var temp:Equip[] = new Array();

        var equips:Equip[] = Main.player.m_items.equips;

        if(equips.length > 0)
        {
            for(var i = equips.length -1; i >= 0; i--)
            {

                if(!equips[i])continue;
                if(equips[i].godEq > 0)continue;

                var b:boolean = false;

                for(var j = 1; j <= 4; j++)
                {
                    var equ:Equip = equips[i];

                    if(Number(equ["hole" + j]) > 0)
                    {
                        b = true;
                        break;
                    }
                }

                if(b) continue;

                temp.push(equips[i]);
                //if(temp.length > 5)break;
            }

        }

        var ronglian:EqptRongLian = DialogManager.findDialog(EqptRongLian, "EqptRongLian");

        if(ronglian && ronglian.showing)
        {
            for(var k = 0;k<temp.length;k++)
            {
                var data:any = temp[k];

                data["index"] = 0;

                for(var j = 0; j < ronglian.idList.length; j++)
                {
                    if(data["id"] == ronglian.idList[j])
                    {
                        data["index"] = 1;
                    }
                }

                this.dp.addItem(data);
            }
        }

    }

    public show()
    {
        super.show();

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
