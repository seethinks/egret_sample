
class EqptRongLian extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIRongLian;

    private iconList:any = {};

    public idList:Array<string> = ["0","0","0","0","0","0"];

    private isCan:boolean = false;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.layout = new egret.gui.BasicLayout();

        this.m_dialog = new DialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.setTitle("装备熔炼");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp,this);

        this.m_UI = new UIRongLian();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.rl_btn_screen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);

        this.m_UI.rl_btn_ronglin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRonglian, this);

        this.m_UI.rl_btn_cast.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onMake, this);

        for(var j = 1; j<=6; j ++)
        {
            var icon:UIIcon = this.m_UI["rl_icon_" + j];

            this.iconList[j] = icon;

            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearIcon, this);

            icon.name = "" + j;

            icon.setText("点击选择");
        }

        this.top = 30;

        this.m_UI.top = this.top + 50;
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 3;

            if(help.showing)
            {
                help.showText();
            }
            else
            {
                help.show();
            }
        }
    }

    private onMake(e:egret.TouchEvent):void
    {
        DialogManager.open(EqptMakeDialog, "EqptMakeDialog");
    }

    private clearIcon(e:egret.TouchEvent):void
    {
        var num:number = Number(e.currentTarget.name);

        var icon:UIIcon = this.iconList[num];

        if(icon.data)
        {
            this.idList[num-1] = "0";

            icon.setCount("");

            icon.setItems("test_icon");

            icon.setName("");

            icon.setQuality(0);

            icon.setStrength("");

            icon.data = null;
        }
        else
        {
            DialogManager.open(EqptSelectDialog, "EqptSelectDialog");
        }
    }

    private checkIcon():boolean
    {
        for(var i = 1; i<=6; i ++)
        {
            var icon:UIIcon = this.iconList[i];

            if (icon.data)
            {
                var qly:number = Number(icon.data["qly"]);

                if(qly >= 4) return true;
            }
        }

        return false;
    }

    private onRonglian(e:egret.TouchEvent):void
    {
        if(!this.isCan)return;

        if(this.checkIcon())
        {
            var self = this;

            GameManager.msgBox.showMsg(function (r)
            {
                if(r)
                {
                    self.sendMsg();
                }
            }, "所选装备包含橙色装备您确定熔炼？");
        }
        else
        {
            this.sendMsg();
        }

    }

    public setList(list:Array<any>):void
    {
        if(list && list.length > 0)
        {
            this.clear();

            this.isCan = true;

            for(var i = 0; i < list.length; i++)
            {
                if(i > 5) break;

                var icon:UIIcon = this.iconList[i + 1];

                icon.data = list[i];

                icon.dataChanged();

                this.idList[i] = "" + list[i].id;
            }
        }
    }

    private sendMsg():void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "objid1="+this.idList[0]+"&objid2="+this.idList[1]+"&objid3="+this.idList[2]+"&objid4="+this.idList[3]+"&objid5="+this.idList[4]+"&objid6="+this.idList[5]+"&type=0x0014&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    private onCheck(e:egret.TouchEvent):void
    {
        var temp:Equip[] = new Array();
        var equips:Equip[] = Main.player.m_items.equips;
        if(equips.length > 0) {
            for(var i = equips.length -1; i >= 0; i--){

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

            if(temp.length > 0)this.isCan = true;
            else this.isCan = false;

        }else this.isCan = false;

        for(var k = 0;k<temp.length;k++) {
            if(k > 5) break;
            var icon:UIIcon = this.iconList[k+1];
            icon.data = temp[k];

            icon.dataChanged();
            this.idList[k] = ""+temp[k].id;
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.clear();
        this.hide();
    }

    public clear():void
    {
        this.idList = ["0","0","0","0","0","0"];

        for(var j = 1; j <= 6; j ++)
        {

            var icon:UIIcon = this.iconList[j];

            icon.setCount("");

            icon.setItems("test_icon");

            icon.setName("");

            icon.setQuality(0);

            icon.setStrength("");

            icon.data = null;
        }
    }

    public onUpdatePlayer( ):void
    {
        this.m_UI.rl_label_rlnum.text = "当前熔炼值：" + Main.player.smelt;
    }

    public show()
    {
        super.show();

        this.clear();

        this.onUpdatePlayer();
    }

    public hide()
    {
        super.hide();
    }
}
