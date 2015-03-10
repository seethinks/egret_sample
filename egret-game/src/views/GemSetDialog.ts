
class GemSetDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIGem;

    private items:Equip;

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

        this.m_UI = new UIGem();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("宝石镶嵌");

        this.top = 30;

        this.m_UI.top = this.top + 40;

        this.m_UI._event1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem1, this);

        this.m_UI._event2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem2, this);

        this.m_UI._event3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem3, this);

        this.m_UI._event4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem4, this);

        this.m_UI.xq_btn_remove.addEventListener(egret.TouchEvent.TOUCH_TAP, this.allRemove, this);
    }

    private allRemove(e:egret.TouchEvent):void
    {
        if(!this.items) return;

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0122&sid="+GameManager.SESSION_ID + "&itemId=" + this.items["id"];

        HttpMessage.sendMsg(url, param);
    }

    private clickItem1(e:egret.gui.ListEvent):void
    {
        if(this.items)
        {
            var self = this;

            var hole:number = Number(this.items.hole1);

            if(hole < 0)
            {
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                        var param:string = "type=0x0120&sid="+GameManager.SESSION_ID + "&itemId=" + self.items["id"] + "&hole=1";

                        HttpMessage.sendMsg(url, param);
                    }
                },"    开孔需要消耗31000金币,确定继续?");
            }
            else if(hole == 0)
            {
                DialogManager.open(GemCheckDialog, "GemCheckDialog");
            }
        }
    }

    private clickItem2(e:egret.gui.ListEvent):void
    {
        if(this.items)
        {
            var self = this;

            var hole:number = Number(this.items.hole2);

            if(hole < 0)
            {
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                        var param:string = "type=0x0120&sid="+GameManager.SESSION_ID + "&itemId=" + self.items["id"] + "&hole=2";

                        HttpMessage.sendMsg(url, param);
                    }
                },"    开孔需要消耗小铜锤一个,确定继续?");
            }
            else if(hole == 0)
            {
                DialogManager.open(GemCheckDialog, "GemCheckDialog");
            }
        }
    }

    private clickItem3(e:egret.gui.ListEvent):void
    {
        if(this.items)
        {
            var self = this;

            var hole:number = Number(this.items.hole3);

            if(hole < 0)
            {
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                        var param:string = "type=0x0120&sid="+GameManager.SESSION_ID + "&itemId=" + self.items["id"] + "&hole=3";

                        HttpMessage.sendMsg(url, param);
                    }
                },"    开孔需要消耗小银锤一个,确定继续?");
            }
            else if(hole == 0)
            {
                DialogManager.open(GemCheckDialog, "GemCheckDialog");
            }
        }
    }

    private clickItem4(e:egret.gui.ListEvent):void
    {
        if(this.items)
        {
            var self = this;

            var hole:number = Number(this.items.hole4);

            if(hole < 0)
            {
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                        var param:string = "type=0x0120&sid="+GameManager.SESSION_ID + "&itemId=" + self.items["id"] + "&hole=4";

                        HttpMessage.sendMsg(url, param);
                    }
                },"    开孔需要消耗小金锤一个,确定继续?");
            }
            else if(hole == 0)
            {
                DialogManager.open(GemCheckDialog, "GemCheckDialog");
            }
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var item:Equip = Main.player.m_clickItme;

        this.items = item;

        if(item)
        {
            for(var i = 1; i <= 4; i++)
            {
                var hole:number = Number(item["hole" + i]);

                var ui:egret.gui.UIAsset = this.m_UI["_bs_img" + i];

                var label_k:egret.gui.Label = this.m_UI["xq_label_k" + i];

                var label_s:egret.gui.Label = this.m_UI["xq_label_s" + i];

                if(ui)
                {
                    if(Number(hole) < 0)
                    {
                        ui.source = "xq_weikaiqi";

                        label_k.text = "点击开孔";

                        label_s.text = "";
                    }
                    else if(Number(hole) == 0)
                    {
                        ui.source = "test_icon";

                        label_k.text = "点击选择";

                        label_s.text = "";
                    }
                    else
                    {
                        var stone:any = GameManager.JSON_BAOSHI[hole];

                        ui.source = "" + stone["icon"];

                        ui.width = 68;

                        ui.height = 68;

                        label_k.text = stone["name"];

                        label_s.text = GameManager.STONE_TYPE[Number(stone["miniType"])] + "+" + stone["value"];
                    }
                }
            }

            this.m_UI._icon.data = item;

            this.m_UI._icon.dataChanged();

            this.m_UI.xq_label_eqptname.text = item.tpl["name"];

            this.m_UI.xq_label_eqptname.textColor = GameManager.COLOR[Number(item.qly)];
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

        this.m_UI._icon.data = null;

        this.m_UI._icon.setCount("");

        this.m_UI._icon.setItems("test_icon");

        this.m_UI._icon.setName("");

        this.m_UI._icon.setQuality(0);

        this.m_UI._icon.setText("");

        this.m_UI._icon.setStrength("");

        this.m_UI._icon.setEffVis();

        this.m_UI._bs_img1.source = this.m_UI._bs_img2.source = this.m_UI._bs_img3.source = this.m_UI._bs_img4.source = "test_icon";

        this.m_UI.xq_label_eqptname.text = "";

        this.m_UI.xq_label_k1.text = this.m_UI.xq_label_k2.text = this.m_UI.xq_label_k3.text = this.m_UI.xq_label_k4.text = "";

        this.m_UI.xq_label_s1.text = this.m_UI.xq_label_s2.text = this.m_UI.xq_label_s3.text = this.m_UI.xq_label_s4.text = "";
    }
}
