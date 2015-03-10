var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillDpDialog = (function (_super) {
    __extends(SkillDpDialog, _super);
    function SkillDpDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.skillid = {};
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
    }
    SkillDpDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.height = 760;
        this.m_dialog.setTitle("更换技能");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_skill = new UISkill();
        this.m_skill.horizontalCenter = 0;
        this.m_skill.top = 70;
        this.addElement(this.m_skill);
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 587;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.top = 79;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SkillItemDp);
        this.taskList1.itemRendererSkinName = "skins.SkillItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.m_skill.skill_btn_ghjn._setLabel("保  存");
        this.m_skill.skill_btn_ghjn.skinName = "skins.ButtonYellowSkin";
        this.m_skill.skill_btn_jjjn._setLabel("取  消");
        this.m_skill.skill_btn_ghjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSendMsg, this);
        this.m_skill.skill_btn_jjjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    SkillDpDialog.prototype.onSendMsg = function (e) {
        var skillLength = 0;
        var arr = [0, 0, 0, 0];
        for (var i = 0; i < this.dp.length; i++) {
            var item = this.dp.getItemAt(i);
            if (item && item["postion"]) {
                if (item["postion"] == 1) {
                    if (skillLength >= 4) {
                        GameManager.flyText({ t: "最多只能装备四个技能", q: 1 });
                        return;
                    }
                    arr[skillLength] = item["id"];
                    skillLength++;
                }
            }
        }
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0016&sid=" + GameManager.SESSION_ID + "&ad=" + Main.player.m_skillType + "&objid1=" + arr[0] + "&objid2=" + arr[1] + "&objid3=" + arr[2] + "&objid4=" + arr[3];
        HttpMessage.sendMsg(url, param);
        this.onTouch();
    };
    SkillDpDialog.prototype.onTouch = function (e) {
        if (e === void 0) { e = null; }
        if (this.parent) {
            var skillDialog = DialogManager.findDialog(SkillDialog, "SkillDialog");
            if (skillDialog) {
                skillDialog.removeElement(this);
            }
        }
    };
    SkillDpDialog.prototype.onUpdate = function () {
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
            var obj = skillModel[key];
            if (list[j]) {
                obj = list[j];
            }
            obj["type"] = 3;
            this.dp.addItem(obj);
            j++;
        }
    };
    SkillDpDialog.prototype.sortArr = function (a, b) {
        var sa = GameManager.JSON_SKILLS[a["id"]];
        var sb = GameManager.JSON_SKILLS[b["id"]];
        var la = Number(sa["openlevel"]);
        var lb = Number(sb["openlevel"]);
        if (la > lb) {
            return 1;
        }
        else {
            return -1;
        }
    };
    SkillDpDialog.prototype.refreshList = function () {
        this.dp.refresh();
    };
    return SkillDpDialog;
})(Dialog);
SkillDpDialog.prototype.__class__ = "SkillDpDialog";
