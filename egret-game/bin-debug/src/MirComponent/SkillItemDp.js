var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillItemDp = (function (_super) {
    __extends(SkillItemDp, _super);
    function SkillItemDp() {
        _super.call(this);
        this.skinName = "skins.SkillItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    SkillItemDp.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.skill_panel2) {
            this.skill_panel2.visible = false;
        }
        if (instance == this.skill_btn) {
            this.skill_btn.visible = false;
        }
        if (instance == this.skill_check) {
            this.skill_check.visible = false;
            this.skill_check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        }
    };
    SkillItemDp.prototype.onCheck = function (e) {
        var skillModel = GameManager.JSON_SKILLS[this.data.id];
        if (skillModel) {
            var level = Number(skillModel["openlevel"]);
            if (level <= Number(Main.player.level)) {
                var num = this.skill_check.setCheck();
                this.data["postion"] = num;
                if (Main.player.m_skillType == 1) {
                    if (Number(num) == 0)
                        this.data["ap"] = 0;
                    else
                        this.data["ap"] = 1;
                }
                else if (Main.player.m_skillType == 2) {
                    if (Number(num) == 0)
                        this.data["dp"] = 0;
                    else
                        this.data["dp"] = 1;
                }
            }
        }
    };
    SkillItemDp.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var skillModel = GameManager.JSON_SKILLS[this.data.id]; //id  ap   dp
            if (skillModel) {
                this.skill_icon.source = "jineng_" + skillModel["planId"];
                var str = skillModel["name"] + "\n\n";
                str += skillModel["des"];
                this.skill_label.text = str;
                this._label_mp.text = "消耗：MP" + skillModel["consumemp"];
                var level = Number(skillModel["openlevel"]);
                if (level <= Number(Main.player.level)) {
                    this.skill_check.setOpen(true);
                }
                else {
                    this.skill_check.setOpen(false);
                }
                this.skill_check.visible = true;
                this.skill_check._duihao.visible = false;
                this.skill_check.selectIndex = 0;
                this.data["postion"] = 0;
                if (Main.player.m_skillType == 1) {
                    if (Number(this.data["ap"]) > 0) {
                        this.skill_check._duihao.visible = true;
                        this.skill_check.selectIndex = 1;
                        this.data["postion"] = 1;
                    }
                }
                else if (Main.player.m_skillType == 2) {
                    if (Number(this.data["dp"]) > 0) {
                        this.skill_check._duihao.visible = true;
                        this.skill_check.selectIndex = 1;
                        this.data["postion"] = 1;
                    }
                }
                this.skill_icon.visible = true;
                this.skill_panel1.visible = true;
                this.skill_panel2.visible = false;
            }
            else {
                var model = this.data;
                var level = model["openlevel"];
                if (Number(Main.player.level) < level) {
                    this.skill_label.text = "\n\n达到" + level + "级解锁技能";
                }
                this.skill_icon.visible = false;
                this.skill_btn.visible = false;
                this.skill_panel1.visible = false;
                this.skill_panel2.visible = true;
                this.skill_check.visible = false;
                this._label_mp.text = "";
            }
        }
    };
    return SkillItemDp;
})(egret.gui.ItemRenderer);
SkillItemDp.prototype.__class__ = "SkillItemDp";
