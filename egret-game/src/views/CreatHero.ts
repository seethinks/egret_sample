class CreatHero extends egret.gui.Group
{
    private UIch:UICreatHero;

    private sex:number = 1;

    private job:number = 1;

    //private txt_name:egret.TextInput = new egret.TextInput();

    private txt_name:egret.TextField = new egret.TextField();

    private txt_uiaseet:egret.gui.UIAsset;

    public sound:egret.Sound;

    public constructor()
    {
        super();

        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);
    }

    public createChildren():void
    {
        super.createChildren();

        this.sound = RES.getRes("chooserole_music");

        this.sound.play(true);

        this.UIch = new UICreatHero();

        this.addElement(this.UIch);

        this.UIch.horizontalCenter = 0;

        this.UIch.verticalCenter = 0;

        this.UIch.btn_changename.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_create.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_daoshi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_fashi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_nan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_nv.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        this.UIch.btn_zhanshi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        //this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE,this.init,this.UIch);

        this.txt_uiaseet = new egret.gui.UIAsset();

        this.txt_uiaseet.source = this.txt_name;

        this.txt_name.x = this.UIch.hero_name.x + 130;

        this.txt_name.y = this.UIch.hero_name.y + 13;

        this.txt_name.width = 304;

        this.txt_name.height = 37;

        this.txt_name.text = this.createRandomName();

        this.txt_name.type = egret.TextFieldType.INPUT;

        this.txt_uiaseet.touchChildren = true;

        this.addElement(this.txt_uiaseet);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        switch (e.currentTarget)
        {
            case this.UIch.btn_changename:
                this.txt_name.text = this.createRandomName();
                break;
            case this.UIch.btn_create:
                //Main.guiLayer.removeAllElements();

                //Main.guiLayer.addElement(Main.LogingDialog);
                if(this.txt_name.text && this.txt_name.text.trim() == ""){
                    var txt:egret.gui.Label = new egret.gui.Label();
                    Main.guiLayer.addElement(txt);
                    txt.horizontalCenter = 0;
                    txt.y = Main.guiLayer.height / 2;
                    txt.textColor = GameManager.COLOR[5];
                    txt.text = "角色名不能为空！";

                    var tw = egret.Tween.get(txt,{loop:false});

                    tw.to({y:50}, 1500).to({y:50}, 3000).call(function()
                    {
                        if(txt.parent) Main.guiLayer.removeElement(txt);
                    });
                    return;
                }
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                HttpMessage.sendMsg(url, "type=0x0002&sid="+GameManager.SESSION_ID + "&job=" + this.job + "&sex=" + this.sex + "&name=" + this.txt_name.text);
                break;
            case this.UIch.btn_daoshi:
                this.job = 2;
                break;
            case this.UIch.btn_fashi:
                this.job = 3;
                break;
            case this.UIch.btn_zhanshi:
                this.job = 1;
                break;
            case this.UIch.btn_nan:
                this.sex = 1;
                break;
            case this.UIch.btn_nv:
                this.sex = 0;
                break;
        }

        this.refreshHero();
    }

    //生成随机名字
    private createRandomName():string {
        var randomName:string = "";

        var xn:number = Math.floor(Math.random()*404+1);
        var nn:number = Math.floor(Math.random()*404+1);

        var xs:string = GameManager.JSON_NAME[xn]["xing"];
        var ms:string = GameManager.JSON_NAME[nn][this.sex];

        randomName = xs+ms;
        return randomName;
    }

    private refreshHero():void
    {
        if(this.sex == 1)  //男
        {
            this.UIch.lan_daoshi.source = this.UIch.lan_fashi.source = this.UIch.lan_zhanshi.source = "frier_lan";

            this.UIch.huang_nan.visible = true;

            this.UIch.huang_nv.visible = false;
        }
        else if(this.sex == 0) //女
        {
            this.UIch.lan_daoshi.source = this.UIch.lan_fashi.source = this.UIch.lan_zhanshi.source = "frier_hong";

            this.UIch.huang_nan.visible = false;

            this.UIch.huang_nv.visible = true;
        }

        switch (this.job)
        {
            case 1:
                this.UIch.lan_zhanshi.visible = true;
                this.UIch.lan_daoshi.visible = false;
                this.UIch.lan_fashi.visible = false;
                this.UIch.creat_text_1.visible = true;
                this.UIch.creat_text_2.visible = false;
                this.UIch.creat_text_3.visible = false;
                break;
            case 2:
                this.UIch.lan_zhanshi.visible = false;
                this.UIch.lan_daoshi.visible = true;
                this.UIch.lan_fashi.visible = false;
                this.UIch.creat_text_2.visible = true;
                this.UIch.creat_text_3.visible = false;
                this.UIch.creat_text_1.visible = false;
                break;
            case 3:
                this.UIch.lan_zhanshi.visible = false;
                this.UIch.lan_daoshi.visible = false;
                this.UIch.lan_fashi.visible = true;
                this.UIch.creat_text_3.visible = true;
                this.UIch.creat_text_1.visible = false;
                this.UIch.creat_text_2.visible = false;
                break;
        }

        this.UIch.hero_zhanshi.source = "hero_" + this.sex + "_" + this.job;
    }
}