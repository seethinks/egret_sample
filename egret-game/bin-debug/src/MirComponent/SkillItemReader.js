var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillItemReader = (function (_super) {
    __extends(SkillItemReader, _super);
    function SkillItemReader() {
        _super.call(this);
        this.skinName = "skins.SkillItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    SkillItemReader.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.skill_panel2) {
            this.skill_panel2.visible = false;
        }
        if (instance == this.skill_btn) {
            this.skill_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        if (instance == this.skill_check) {
            this.skill_check.visible = false;
        }
    };
    SkillItemReader.prototype.onClick = function (e) {
        if (this.data && this.data["type"] != 3) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0017&sid=" + GameManager.SESSION_ID + "&ad=" + Main.player.m_skillType + "&ud=1&objid=" + this.data["id"];
            HttpMessage.sendMsg(url, param);
        }
    };
    SkillItemReader.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var skillModel = GameManager.JSON_SKILLS[this.data.id]; //id  ap   dp
            if (skillModel) {
                this.skill_icon.source = "jineng_" + skillModel["planId"];
                var str = skillModel["name"] + "\n\n";
                str += skillModel["des"];
                this.skill_label.text = str;
                this._label_mp.text = "消耗：MP" + skillModel["consumemp"];
                if (this.data["ap"] == "1") {
                    this.skill_btn.source = "skill_btn_frist";
                }
                else {
                    this.skill_btn.source = "skill_btn_up";
                }
                this.skill_icon.visible = true;
                this.skill_btn.visible = true;
                this.skill_panel1.visible = true;
                this.skill_panel2.visible = false;
            }
            else {
                this._label_mp.text = "";
                var model = this.data;
                var level = model["openlevel"];
                if (Number(Main.player.level) >= level) {
                    this.skill_label.text = "\n\n点我装备技能";
                    this.skill_close.visible = false;
                }
                else {
                    this.skill_label.text = "\n\n达到" + level + "级解锁技能";
                    this.skill_close.visible = true;
                }
                this.skill_icon.visible = false;
                this.skill_btn.visible = false;
                this.skill_panel1.visible = false;
                this.skill_panel2.visible = true;
            }
        }
    };
    return SkillItemReader;
})(egret.gui.ItemRenderer);
SkillItemReader.prototype.__class__ = "SkillItemReader";
