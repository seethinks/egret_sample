class UIDeulList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.DeulListSkin";
    }

    public deul_img_head:egret.gui.UIAsset;

    public deul_img_job:egret.gui.UIAsset;

    public deul_label_name:egret.gui.Label;

    public deul_btn_change:egret.gui.UIAsset;

    public rank_img:egret.gui.UIAsset;

    public rank_img_bg:egret.gui.UIAsset;

    public deul_label_level:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.rank_img)
        {
            this.rank_img.visible = false;
        }

        if(instance == this.rank_img_bg)
        {
            this.rank_img_bg.visible = false;
        }

        if(instance == this.deul_label_level)
        {
            this.deul_label_level.text = "";
        }

        if(instance == this.deul_btn_change)
        {
            this.deul_btn_change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    }

    private onClick(e:egret.TouchEvent):void
    {

        var num:number = Number(Main.player.m_deulMyinfo["vsCount"]);

        if(Number(num) <= 0)
        {
            GameManager.flyText({t:"挑战次数不足！", q:1});

            return;
        }

        Main.player.m_challenge = 2;

        Main.player.m_deulData["id"] = this.data["id"];

        Main.player.m_deulData["rank"] = this.data["rank"];

        var deul:DeulDialog = DialogManager.findDialog(DeulDialog, "DeulDialog");
        if(deul) deul.hide();

        DialogManager.open(FightDialog, "FightDialog");
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)  //{"roleId":101106,"job":2,"level":"19","name":"liang2","faction":"","rank":"3","fightvalue":"846","honor":500,"prestige":500,"gold":350
        {

            var str:string = "" + this.data["name"];

            if(this.data["faction"] && this.data["faction"] != "") str += "[" + this.data["faction"] + "]";

            str += "\n\n";

            str += "排名" + this.data["rank"] + "  战力" + this.data["fightvalue"] + "\n\n";

            if(this.data.q)
            {
                this.rank_img.visible = true;

                this.rank_img_bg.visible = true;

                this.deul_btn_change.visible = false;

                if(Number(this.data["rank"]) <= 3)
                {
                    this.rank_img.source = "deul_rank_" + this.data["rank"];
                }
                else
                {
                    this.rank_img.visible = false;

                    this.rank_img_bg.visible = false;
                }

                str += "  " + this.data["signature"];

                if(this.data["pk"])
                {
                    this.deul_label_name.textColor = GameManager.getNameColor(Number(this.data["pk"]));
                }
            }
            else
            {
                this.rank_img.visible = false;

                this.rank_img_bg.visible = false;

                this.deul_btn_change.visible = true;

                str += "排名奖励: " + "元宝" + this.data["gold"] + " 荣誉" + this.data["honor"] + " 声望" + this.data["prestige"];
            }

            var job:number = Number(this.data["job"]);

            switch (job)
            {
                case 1:
                    this.deul_img_job.source = "deul_img_zhan";
                    break;
                case 2:
                    this.deul_img_job.source = "deul_img_dao";
                    break;
                case 3:
                    this.deul_img_job.source = "deul_img_fa";
                    break;
            }

            this.deul_label_level.text = "Lv." + this.data["level"];

            this.deul_img_head.source = "f_" + this.data["sex"] + "_" + this.data["job"];

            this.deul_label_name.text = str;
        }
    }
}