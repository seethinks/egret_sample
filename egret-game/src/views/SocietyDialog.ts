
class SocietyDialog extends Dialog
{
    private m_dialog:UIOriginalDialog;

    private m_UI:UISociety;

    public countDown:number = 0;

    private guwuList:Array<any> = [0, 1];

    private priceList:Array<any> = [0,0,0,500,1000,1500];

    private btn_help:egret.gui.UIAsset;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new UIOriginalDialog();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.top = 0;

        this.m_UI = new UISociety();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI._btn_chakan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_open.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick,this);

        this.m_UI._btn_guwu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick,this);

        this.m_UI._btn_gonxian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick,this);

        this.btn_help = new egret.gui.UIAsset();

        this.btn_help.source = "skill_help";

        this.addElement(this.btn_help);

        this.btn_help.top = 170;

        this.btn_help.left = 32;

        this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 11;

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

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI._btn_open:
                if(this.m_UI._btn_open._getLabel() == "加入战斗")
                {
                    var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                    var param:string = "type=0x0126&sid="+GameManager.SESSION_ID;

                    HttpMessage.sendMsg(url, param);
                }
                else if(this.m_UI._btn_open._getLabel() == "开  启")
                {
                    var count:number = Main.player.m_society.weekCount;

                    if(count >= 5)
                    {
                        GameManager.flyText({t:"已达最大次数，无法开启！", q:1});
                        return;
                    }

                    var price:number = this.priceList[Number(count) + 1];

                    var str:string = "";

                    if(price <= 0)
                    {
                        str = "  本次开启免费（本周已经开启" + count + "次，剩余" + (5 - count) + "次），确定开启?"
                    }
                    else
                    {
                        str = "  本次开启将花费"+price+"元宝（本周已经开启" + count + "次，剩余" + (5 - count) + "次），确定开启?"
                    }

                    GameManager.msgBox.showMsg(function(r)
                    {
                        if(r)
                        {
                            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                            var param:string = "type=0x0125&sid="+GameManager.SESSION_ID;

                            HttpMessage.sendMsg(url, param);
                        }
                    }, str);
                }
                break;
            case this.m_UI._btn_guwu:
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0128&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI._btn_gonxian:
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0127&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI._btn_chakan:

                break;
            default:
                GameManager.flyText({t:"暂未开放,敬请期待！", q:1});
                break;
        }
    }

    public onUpdate():void
    {
        if(this.m_UI)
        {
            this.m_UI._img_exp.width = (Number(Main.player.m_society.exp) / Number(Main.player.m_society.maxExp)) * 595;

            this.m_UI._label_exp.text = "经验：" + Main.player.m_society.exp + "/" + Main.player.m_society.maxExp;

            this.m_UI._label_gonggao.text = "" + Main.player.m_society.notice;

            this.m_UI._label_gongxian.text = "怪物经验（贡献）：" + Main.player.m_society.bossContribution;

            this.m_UI._label_guaiwu.text = "Lv."+Main.player.m_society.bossLv+" 行会BOSS";

            this.m_UI._label_id.text = "行会ID：" + Main.player.m_society.id;

            this.m_UI._label_name.text = "Lv." + Main.player.m_society.lv + " " + Main.player.m_society.name;

            this.m_UI._label_renshu.text = "人数：" + Main.player.m_society.num + "/" + Main.player.m_society.maxNum;

            this.m_UI._label_guwu.text = "本次鼓舞+20%，消耗20元宝";

            this.m_UI._label_my_guwu.text = "我的鼓舞加成：攻击+"+(Main.player.m_society.inspireCount * 20)+"%";

            this.m_UI._boss_title.width = (Main.player.m_society.curHurt / Main.player.m_society.bossHp) * 244;
        }
    }

    public countD():void
    {
        if(Main.player.m_society.countdown > 0)
        {
            Main.player.m_society.countdown --;

            if(this.initUI)
            {
                this.m_UI._label_time.text = "" + GameManager.getStringBySeconds(Main.player.m_society.countdown);

                this.m_UI._label_desc.visible = true;

                this.m_UI._label_time.visible = true;

                this.m_UI._text_open.visible = false;

                if(Main.player.m_society.isJoin == 1)
                {
                    //this.m_UI._btn_open._setLabel("鼓  舞");

                    this.m_UI._btn_gonxian.visible = true;

                    this.m_UI._btn_guwu.visible = true;

                    this.m_UI._label_guwu.visible = true;

                    this.m_UI._label_my_guwu.visible = true;

                    this.m_UI._boss_title_bg.visible = true;

                    this.m_UI._boss_title.visible = true;

                    this.m_UI._btn_open.visible = this.m_UI._label_guaiwu.visible = this.m_UI._label_gongxian.visible = false;
                }
                else
                {
                    this.m_UI._btn_open._setLabel("加入战斗");

                    this.m_UI._btn_gonxian.visible = false;

                    this.m_UI._btn_guwu.visible = false;

                    this.m_UI._label_guwu.visible = false;

                    this.m_UI._label_my_guwu.visible = false;

                    this.m_UI._boss_title_bg.visible = false;

                    this.m_UI._boss_title.visible = false;

                    this.m_UI._btn_open.visible = this.m_UI._label_guaiwu.visible = this.m_UI._label_gongxian.visible = true;
                }
            }

        }
        else
        {
            if(this.initUI)
            {
                this.m_UI._label_desc.visible = false;

                this.m_UI._label_time.visible = false;
            }
        }
    }

    public show()
    {
        super.show();

        Main.iconMeun.setHanghuiGroupVis(true);

        Main.iconMeun.setSmallIconVis(false);
    }

    public hide()
    {
        super.hide();
    }
}
