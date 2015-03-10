class MainUI extends egret.gui.Group
{
    private m_UI:UIMainUI;

    private effect_hp:egret.MovieClip;

    private effect_mp:egret.MovieClip;

    private rect_hp:egret.Rectangle;

    private rect_mp:egret.Rectangle;

    public sound:egret.Sound;

    public palySound:boolean = true;

    private tan_eff:egret.MovieClip;

    public constructor()
    {
        super();

        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new UIMainUI();

        this.addElement(this.m_UI);

        this.sound = RES.getRes("background_music");

        this.sound.play(true);

        this.sound.setVolume(0.3);

        this.palySound = true;

        this.m_UI._ronglian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI._shangdian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI._hanghui.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI._chuangtianguan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_UI._jingjichang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI._act_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAct, this);

        this.updateData();

        this.rect_hp = new egret.Rectangle(0, 0, 64, 120);

        this.rect_mp = new egret.Rectangle(0, 0, 64, 120);

        this.m_UI._hp_group.mask = this.rect_hp;

        this.m_UI._mp_group.mask = this.rect_mp;

        this.m_UI._hp_group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroup, this);

        this.m_UI._mp_group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroup, this);

        egret.setTimeout(this.play, this, 1000);
    }

    private onAct(e:egret.TouchEvent):void
    {
        DialogManager.open(ActivityDialog, "ActivityDialog");
        //DialogManager.open(ZhuanPanDialog, "ZhuanPanDialog");
    }

    private play():void
    {
        this.playFlash(this.m_UI._eff_hp, this.effect_hp, "effect_hp");

        this.playFlash(this.m_UI._eff_mp, this.effect_mp, "effect_mp");

        if(!egret.localStorage.getItem("prompt1"))
        {
            DialogManager.open(GamePrompt, "GamePrompt");

            //egret.localStorage.setItem("prompt1", "true");
        }
        else
        {
            DialogManager.open(NoticeDialog, "NoticeDialog");
        }

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0046&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);


        var datas = RES.getRes("actionicon_json");

        var textures = RES.getRes("actionicon_png");


        this.tan_eff = new egret.MovieClip(datas, textures);

        this.m_UI._act_eff.source = this.tan_eff;

        this.tan_eff.frameRate = 10;

        this.tan_eff.gotoAndPlay("actionicon");

        this.m_UI._act_eff.touchChildren = false;

        this.m_UI._act_eff.touchEnabled = false;
    }

    private clickGroup(e:egret.TouchEvent):void
    {
        DialogManager.open(FightDialog, "FightDialog");
    }

    private playFlash(uiass:egret.gui.UIAsset, move:egret.MovieClip, str:string):void
    {
        var data = RES.getRes(str + "_json");

        var texture = RES.getRes(str + "_png");

        move = new egret.MovieClip(data, texture);

        uiass.source = move;

        move.frameRate = 5;

        move.gotoAndPlay(str);
    }

    public setNum1(name:string = "暂无"):void
    {
        if(this.m_UI)
        {
            this.m_UI._txt_num1.text = name;
        }
    }

    public setHP(hp:number, hpmax:number):void
    {
        if(this.rect_hp)
        {
            if(Number(hp) > Number(hpmax))
            {
                this.rect_hp.y = 0;

                return;
            }

            if(Number(hp) == 0)
            {
                this.rect_hp.y = 120;

                return;
            }

            if(Number(hp) == Number(hpmax))
            {
                this.rect_hp.y = 0;

                return;
            }

            this.rect_hp.y = Math.floor((1 - Number(hp) / Number(hpmax)) * 120);
        }
    }

    public setMP(mp:number, mpmax:number):void
    {
        if(this.rect_mp)
        {
            if(Number(mp) > Number(mpmax))
            {
                this.rect_mp.y = 0;
                return;
            }

            if(Number(mp) == 0)
            {
                this.rect_mp.y = 120;

                return;
            }

            if(Number(mp) == Number(mpmax))
            {
                this.rect_mp.y = 0;

                return;
            }

            this.rect_mp.y = Math.floor((1 - Number(mp) / Number(mpmax)) * 120);
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        DialogManager.clear();
        Main.iconMeun.setSmallIconVis(true);
        switch (e.target)
        {
            case this.m_UI._jingjichang:
                if(Main.player.level >= 20)
                {
                    DialogManager.open(DeulDialog, "DeulDialog");
                    Main.iconMeun.setSmallIconVis(false);
                }
                else
                {
                    GameManager.flyText({t:"达到20级开启！", q:1});
                }
                break;
            case this.m_UI._ronglian:
                DialogManager.open(EqptRongLian, "EqptRongLian");
                break;
            case this.m_UI._shangdian:
                DialogManager.open(ShopDialog, "ShopDialog");
                Main.iconMeun.setSmallIconVis(false);
                break;
            case this.m_UI._hanghui:
                if(Main.player.level >= 12)
                {
                    this.clickSociety();
                }
                else GameManager.flyText({t:"达到12级开启！", q:1});
                break;
            case this.m_UI._chuangtianguan:
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0132&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);
                break;
            default :
                GameManager.flyText({t:"暂未开放！", q:1});
                break;
        }
    }

    private clickSociety():void
    {
        if(Main.player.faction){

            DialogManager.open(SocietyDialog, "SocietyDialog");
        }
        else{
            DialogManager.open(SocietyLiebiao, "SocietyLiebiao");
        }
        //请求服务器获取行会信息
        var url:string = "http://"+GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params:string = "type=0x0018&sid="+GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, params);
    }

    public updateData():void
    {
        if(this.m_UI)
        {
//            this.m_UI._xueqiu.height = Math.floor(Main.player.hp/Main.player.hpmax>1?192:Main.player.hp/Main.player.hpmax*147);

            var roleData = GameManager.JSON_ROLE[Main.player.level];

            if(roleData)
            {
                var minexp = roleData["minexp"];

                var maxexp = roleData["maxexp"];

                var exp = Number(Main.player.exp) - Number(minexp);

                var expMax = Number(maxexp) - Number(minexp);

                if(this.m_UI._exp_title) this.m_UI._exp_title.width = (Number(exp) / Number(expMax)) * 192;

                if(this.m_UI.main_label_exp) this.m_UI.main_label_exp.text = "经验：" + Math.floor((exp) / Number(expMax) * 100) + "%";
            }

            if(this.m_UI.main_label_fightvalue) this.m_UI.main_label_fightvalue.text = "" + Main.player.fightvalue;

            if(this.m_UI.main_label_frame) this.m_UI.main_label_frame.text = Main.player.faction;

            if(this.m_UI.main_label_money) this.m_UI.main_label_money.text = Main.player.money+"";

            if(this.m_UI.main_label_name)
            {
                if(Main.player.inPrison == 0) this.m_UI.main_label_name.text = Main.player.name;
                else this.m_UI.main_label_name.text = Main.player.name + "（囚）";

                this.m_UI.main_label_name.textColor = GameManager.getNameColor();
            }

            if(this.m_UI.main_label_map)
            {
                var map:any = GameManager.JSON_MAP[Main.player.map];

                if(map) this.m_UI.main_label_map.text = "地图：" + map["name"];
            }

            if(this.m_UI.main_label_shenglv)
            {
                this.m_UI.main_label_shenglv.text = "胜率：" + Main.player.winrate + "%";

                this.m_UI._shenglv_title.width = Number(Main.player.winrate) / 100 * 197;

                if(Number(Main.player.winrate) >= 80)
                {
                    var dialog:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog");

                    if(dialog && dialog.initUI)
                    {
                        dialog.setBossWram();
                    }
                }
            }

            if(this.m_UI.main_label_level) this.m_UI.main_label_level.text = "Lv." + Main.player.level;

            if(this.m_UI.main_label_gold) this.m_UI.main_label_gold.text = "" + Main.player.gold;

            if(this.m_UI.main_img_vip && Main.player.vip) this.m_UI.main_img_vip.source = "vip" + Main.player.vip;


            if(Main.player.job == 1)
            {
                this.m_UI.niu_dao.visible = false;

                this.m_UI.niu_fa.visible = false;
            }
            else if(Main.player.job == 2)
            {
                this.m_UI.niu_dao.visible = true;

                this.m_UI.niu_fa.visible = false;
            }
            else if(Main.player.job == 3)
            {
                this.m_UI.niu_dao.visible = false;

                this.m_UI.niu_fa.visible = true;
            }
        }
    }
}