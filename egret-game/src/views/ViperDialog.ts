class ViperDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIViper;

    private level:number = 0;

    private clickUI:egret.gui.UIAsset;

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

        this.m_UI = new UIViper();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("VIP");

        this.top = 30;

        this.m_UI.top = this.top + 40;

        this.m_UI._charge_xq_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onVipBtn, this);


        this.m_UI.vip_btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeft, this);

        this.m_UI.vip_btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRight, this);

        this.m_UI.vip_btn_left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);

        this.m_UI.vip_btn_right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);

        this._dialog.height = 720;

    }

    private onBegin(e:egret.TouchEvent):void
    {
        var ui:egret.gui.UIAsset = e.currentTarget;

        ui.scaleX = 0.9;

        ui.scaleY = 0.9;

        this.clickUI = ui;

        egret.setTimeout(this.onEnd, this, 50);
    }

    private onEnd(e:egret.TouchEvent):void
    {
        if(this.clickUI)
        {
            this.clickUI.scaleX = 1;

            this.clickUI.scaleY = 1;
        }
    }

    private onLeft(e:egret.TouchEvent):void
    {
        if(this.level > 0)
        {
            this.level --;

            this.refreshLevel();
        }
    }

    private onRight(e:egret.TouchEvent):void
    {
        if(this.level < 15)
        {
            this.level ++;

            this.refreshLevel();
        }
    }

    private refreshLevel():void
    {
        var vip:any = GameManager.JSON_VIP[Number(this.level)+1];

        var vip_desc:any = GameManager.JSON_VIP_DESC;

        var str:string = "累计充值"+vip["exp"]+"元宝即可享受特权\n\n";

        if(vip && vip_desc)
        {
            var rewards:string = vip["rewards"];

            var arr_rewards:Array<any> = rewards.split("|");

            for(var i = 0; i < arr_rewards.length; i++)
            {
                var str_vip:string = arr_rewards[i];

                var arr_vip:Array<any> = str_vip.split("#");

                var vip_id:string = arr_vip[0];

                var desc:string = vip_desc[vip_id]["rdesc"];

                var descArr:Array<any> = desc.split("#");

                var vip_num:string = arr_vip[1];

                if(descArr[1] == "item")
                {
                    if(Number(vip_num) > 0)
                    {
                        var item:any = GameManager.JSON_ITEM[vip_num];

                        str += descArr[0] + item["name"] + "\n\n";
                    }
                }
                else
                {
                    str += descArr[0] + vip_num + "\n\n";
                }
            }
        }

        this.m_UI.vip_label_privilege.text = str;

        this.m_UI.vip_label_level.text = "" + this.level + "级VIP特权";
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    private onVipBtn(e:egret.TouchEvent):void
    {
//        GameManager.flyText({t:"暂未开放！", q:1});
//
//        return;

        this.hide();

        DialogManager.open(ChargeDialog, "ChargeDialog");
    }

    public onUpdate():void
    {
        if(!this.m_UI)return;

        var nVipLv:number = Number(Main.player.vip) + 1;

        if(nVipLv > 15)
        {
            nVipLv = 15;
        }

        var nVipTpl:any = GameManager.JSON_VIP[Number(nVipLv)+1];

        if(nVipTpl)
        {
            var num:number = 0;

            if(Number(nVipTpl["exp"]) - Main.player.vipexp < 0)
            {
                num = 0;
            }
            else
            {
                num = Number(nVipTpl["exp"]) - Main.player.vipexp;
            }

            if(nVipLv >= 15)
            {
                this.m_UI._charge_ppt.text = "您已达到最高级VIP";
            }
            else
            {
                this.m_UI._charge_ppt.text = "再充值 "+num+" 元宝可成为"+nVipTpl["name"];
            }

            this.m_UI._now_vipLv.source = "vip"+Main.player.vip;

            this.m_UI._next_vipLv.source = "vip"+nVipLv;

            var exr:number = Math.floor(Main.player.vipexp/Number(nVipTpl["exp"]));

            this.m_UI._vip_exp.width = exr > 1?320:Main.player.vipexp/Number(nVipTpl["exp"])*320;
        }
    }

    public onUpdatePlayer():void
    {
        this.onUpdate();
    }

    public show()
    {
        super.show( );

        this.level = Number(Main.player.vip);

        this.refreshLevel();

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
