var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillApDialog = (function (_super) {
    __extends(SkillApDialog, _super);
    function SkillApDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.isInit = false;
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
    }
    SkillApDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.height = 760;
        this.m_dialog.setTitle("防守技能");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_skill = new UISkill();
        this.m_skill.horizontalCenter = 0;
        this.m_skill.top = 70;
        this.addElement(this.m_skill);
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 550;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.top = 100;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SkillItemAp);
        this.taskList1.itemRendererSkinName = "skins.SkillItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.m_skill.skill_btn_ghjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_skill.skill_btn_jjjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_skill.skill_btn_jjjn.skinName = "skins.ButtonBlueSkin";
        this.m_skill.skill_btn_jjjn._setLabel("取  消");
        this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.isInit = true;
    };
    SkillApDialog.prototype.clickItem = function (e) {
        if (!e.item["dp"]) {
            var skillDialog = DialogManager.findDialog(SkillDialog, "SkillDialog");
            if (skillDialog) {
                skillDialog.showDialog("SkillDpDialog");
            }
        }
    };
    SkillApDialog.prototype.onClick = function (e) {
        switch (e.target) {
            case this.m_skill.skill_btn_ghjn:
                var skillDialog = DialogManager.findDialog(SkillDialog, "SkillDialog");
                if (skillDialog) {
                    skillDialog.showDialog("SkillDpDialog");
                }
                break;
            case this.m_skill.skill_btn_jjjn:
                break;
        }
    };
    SkillApDialog.prototype.onTouch = function (e) {
        if (this.parent) {
            var skillDialog = DialogManager.findDialog(SkillDialog, "SkillDialog");
            if (skillDialog) {
                skillDialog.removeElement(this);
            }
        }
    };
    SkillApDialog.prototype.onUpdate = function () {
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
                if (Number(skill["dp"]) > 0) {
                    obj = skill;
                }
            }
            obj["type"] = 2;
            this.dp.addItem(obj);
            j++;
        }
    };
    SkillApDialog.prototype.sortArr = function (a, b) {
        var adp = a["dp"];
        var bdp = b["dp"];
        if (Number(adp) == 0) {
            return 1;
        }
        if (Number(adp) > Number(bdp) && Number(bdp) != 0) {
            return 1;
        }
        else
            return -1;
    };
    return SkillApDialog;
})(Dialog);
SkillApDialog.prototype.__class__ = "SkillApDialog";
