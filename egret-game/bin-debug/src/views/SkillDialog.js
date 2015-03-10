var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillDialog = (function (_super) {
    __extends(SkillDialog, _super);
    function SkillDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
    }
    SkillDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_UI = new UIOriginalDialog();
        this.addElement(this.m_UI);
        this.m_UI.setTitle("作战技能");
        this.m_UI.horizontalCenter = 0;
        this.m_UI.top = 0;
        this.btn_help = new egret.gui.UIAsset();
        this.btn_help.source = "skill_help";
        this.addElement(this.btn_help);
        this.btn_help.top = 2;
        this.btn_help.left = 0;
        this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this.m_skill = new UISkill();
        this.addElement(this.m_skill);
        this.m_skill.horizontalCenter = 0;
        this.m_skill.top = 100;
        this.skillAp = new SkillApDialog();
        this.skillAp.horizontalCenter = 0;
        this.skillDp = new SkillDpDialog();
        this.skillDp.horizontalCenter = 0;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 550;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.top = 130;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SkillItemReader);
        this.taskList1.itemRendererSkinName = "skins.SkillItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.m_skill.skill_btn_ghjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_skill.skill_btn_jjjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_skill.skill_btn_jnzj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        for (var i = 0; i < 4; i++) {
            this.dp.addItem({});
        }
    };
    SkillDialog.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 1;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    SkillDialog.prototype.clickItem = function (e) {
        if (!e.item["ap"]) {
            this.showDialog("SkillDpDialog");
        }
    };
    SkillDialog.prototype.onClick = function (e) {
        switch (e.target) {
            case this.m_skill.skill_btn_ghjn:
                this.showDialog("SkillDpDialog");
                break;
            case this.m_skill.skill_btn_jjjn:
                this.showDialog("SkillApDialog");
                break;
            case this.m_skill.skill_btn_jnzj:
                break;
        }
    };
    SkillDialog.prototype.showDialog = function (dName) {
        if (dName === void 0) { dName = "SkillApDialog"; }
        switch (dName) {
            case "SkillApDialog":
                this.addElement(this.skillAp);
                this.skillAp.top = 40;
                if (this.skillDp.parent)
                    this.removeElement(this.skillDp);
                this.skillAp.onUpdate();
                Main.player.m_skillType = 2;
                break;
            case "SkillDpDialog":
                this.addElement(this.skillDp);
                this.skillDp.top = 40;
                this.skillDp.onUpdate();
                break;
        }
    };
    SkillDialog.prototype.onTouch = function (e) {
    };
    SkillDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var skillModel = {};
        for (var job in GameManager.JSON_SKILLS) {
            var m = GameManager.JSON_SKILLS[job];
            if (m["job"] == Main.player.job) {
                skillModel[job] = m;
            }
        }
        var list = Main.player.m_skillArr;
        list.sort(this.sortArr);
        var j = 0;
        for (var key in skillModel) {
            if (j >= 4)
                break;
            var obj = skillModel[key];
            if (list[j]) {
                var skill = list[j];
                if (Number(skill["ap"]) > 0) {
                    obj = skill;
                }
            }
            obj["type"] = 1;
            this.dp.addItem(obj);
            j++;
        }
        if (this.skillAp && this.skillAp.isInit)
            this.skillAp.onUpdate();
    };
    SkillDialog.prototype.sortArr = function (a, b) {
        var adp = a["ap"];
        var bdp = b["ap"];
        if (Number(adp) == 0) {
            return 1;
        }
        if (Number(adp) > Number(bdp) && Number(bdp) != 0) {
            return 1;
        }
        else
            return -1;
    };
    SkillDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
        Main.player.m_skillType = 1;
        Main.iconMeun.setSkill();
    };
    SkillDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        if (this.skillDp.parent)
            this.removeElement(this.skillDp);
        if (this.skillAp.parent)
            this.removeElement(this.skillAp);
    };
    return SkillDialog;
})(Dialog);
SkillDialog.prototype.__class__ = "SkillDialog";
