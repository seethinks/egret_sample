var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIDeulList = (function (_super) {
    __extends(UIDeulList, _super);
    function UIDeulList() {
        _super.call(this);
        this.skinName = "skins.DeulListSkin";
    }
    UIDeulList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.rank_img) {
            this.rank_img.visible = false;
        }
        if (instance == this.rank_img_bg) {
            this.rank_img_bg.visible = false;
        }
        if (instance == this.deul_label_level) {
            this.deul_label_level.text = "";
        }
        if (instance == this.deul_btn_change) {
            this.deul_btn_change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    UIDeulList.prototype.onClick = function (e) {
        var num = Number(Main.player.m_deulMyinfo["vsCount"]);
        if (Number(num) <= 0) {
            GameManager.flyText({ t: "挑战次数不足！", q: 1 });
            return;
        }
        Main.player.m_challenge = 2;
        Main.player.m_deulData["id"] = this.data["id"];
        Main.player.m_deulData["rank"] = this.data["rank"];
        var deul = DialogManager.findDialog(DeulDialog, "DeulDialog");
        if (deul)
            deul.hide();
        DialogManager.open(FightDialog, "FightDialog");
    };
    UIDeulList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var str = "" + this.data["name"];
            if (this.data["faction"] && this.data["faction"] != "")
                str += "[" + this.data["faction"] + "]";
            str += "\n\n";
            str += "排名" + this.data["rank"] + "  战力" + this.data["fightvalue"] + "\n\n";
            if (this.data.q) {
                this.rank_img.visible = true;
                this.rank_img_bg.visible = true;
                this.deul_btn_change.visible = false;
                if (Number(this.data["rank"]) <= 3) {
                    this.rank_img.source = "deul_rank_" + this.data["rank"];
                }
                else {
                    this.rank_img.visible = false;
                    this.rank_img_bg.visible = false;
                }
                str += "  " + this.data["signature"];
                if (this.data["pk"]) {
                    this.deul_label_name.textColor = GameManager.getNameColor(Number(this.data["pk"]));
                }
            }
            else {
                this.rank_img.visible = false;
                this.rank_img_bg.visible = false;
                this.deul_btn_change.visible = true;
                str += "排名奖励: " + "元宝" + this.data["gold"] + " 荣誉" + this.data["honor"] + " 声望" + this.data["prestige"];
            }
            var job = Number(this.data["job"]);
            switch (job) {
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
    };
    return UIDeulList;
})(egret.gui.ItemRenderer);
UIDeulList.prototype.__class__ = "UIDeulList";
