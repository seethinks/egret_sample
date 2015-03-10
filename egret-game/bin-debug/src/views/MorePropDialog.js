var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MorePropDialog = (function (_super) {
    __extends(MorePropDialog, _super);
    function MorePropDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    MorePropDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIHelp();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("更多属性");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIHelpItem);
        this.taskList1.itemRendererSkinName = "skins.HelpItemSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 7;
        this.taskList1.width = 478;
        this.taskList1.height = 585;
    };
    MorePropDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    MorePropDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        this.dp.addItem({ "text": "" });
        var text = "Lv." + Main.player.level + " " + Main.player.name + "[" + GameManager.JOB_NAME[Main.player.job] + "]";
        var color = GameManager.getNameColor();
        var size = 18;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "战力： " + Main.player.fightvalue;
        color = 0xf66026;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "属性：总属性值[效果]";
        color = 0x2753e5;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "基础属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "攻击：" + Main.player.atk + " [防御+" + Main.player.atk + " 命中+" + Math.floor(Main.player.atk * 0.6) + "]";
        color = 0xa129f5;
        size = 18;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        if (Main.player.job == 1) {
            text = "(主属性：[最小伤害+" + Math.floor(Main.player.atk / 2) + " 最大伤害+" + Main.player.atk + "])";
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        text = "道术：" + Main.player.tois + " [暴击+" + Main.player.tois + " 闪避+" + Math.floor(Main.player.tois * 0.2) + "]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        if (Main.player.job == 2) {
            text = "(主属性：[最小伤害+" + Math.floor(Main.player.tois / 2) + " 最大伤害+" + Main.player.tois + "])";
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        text = "魔法：" + Main.player.magic + " [魔法防御+" + Main.player.magic + " 每回合回复+" + Math.floor(Math.sqrt(Main.player.magic / 3)) + "MP]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        if (Main.player.job == 3) {
            text = "(主属性：[最小伤害+" + Math.floor(Main.player.magic / 2) + " 最大伤害+" + Main.player.magic + "])";
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        text = "耐力：" + Main.player.exer + "[HP+" + Main.player.exer * 10 + " 韧性+" + Main.player.exer + "]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "生命值：" + Main.player.hpmax;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "魔法值：" + Main.player.mpmax;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "战斗属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "[" + "对" + Main.player.level + "级敌人的效果" + "]";
        color = 0xa129f5;
        size = 18;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "最小伤害：" + Main.player.hurtmin;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "最大伤害：" + Main.player.hurtmax;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        var rate = Main.player.armor / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) * 8);
        text = "护甲：" + Main.player.armor + " [减少" + (Math.round(rate * 1000) / 10).toFixed(1) + "%受到的伤害]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = Main.player.def / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) * 4);
        text = "防御：" + Main.player.def + " [减少" + (Math.round(rate * 1000) / 10).toFixed(1) + "%受到的物理伤害]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = Main.player.mdef / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) * 4);
        text = "魔法防御：" + Main.player.mdef + " [减少" + (Math.round(rate * 1000) / 10).toFixed(1) + "%受到的魔法伤害]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = 5 + Number(Main.player.crit / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) / 40));
        text = "暴击：" + Main.player.crit + " [攻击造成暴击的概率" + (Math.round(rate * 100) / 100).toFixed(1) + "%]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = Main.player.hit / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) * 0.6 / 25);
        text = "命中：" + Main.player.hit + " [攻击命中目标的概率提高" + (Math.round(rate * 100) / 100).toFixed(1) + "%]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = 5 + Number(Main.player.ten / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) / 40));
        text = "韧性：" + Main.player.ten + " [降低被暴击的概率" + (Math.round(rate * 100) / 100).toFixed(1) + "%]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        rate = Main.player.dodge / (Number(Number(10 * Main.player.level * Main.player.level) + Number(60 * Main.player.level + 240)) * 0.2 / 25);
        text = "闪避：" + Main.player.dodge + " [提高闪避攻击几率" + (Math.round(rate * 100) / 100).toFixed(1) + "%]";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "神器属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        color = 0xF92338;
        size = 18;
        for (var pos in Main.player.m_items.holdEq) {
            var equip = Main.player.m_items.holdEq[pos];
            if (!equip)
                continue;
            if (equip.godEq > 0) {
                if (equip.gevalue1 > 0) {
                    text = GameManager.GetGodEqDesc(Number(equip.gekey1), equip.gevalue1);
                    this.dp.addItem({ "text": text, "color": color, "size": size });
                }
                if (equip.gevalue2 > 0) {
                    text = GameManager.GetGodEqDesc(Number(equip.gekey2), equip.gevalue2);
                    this.dp.addItem({ "text": text, "color": color, "size": size });
                }
            }
        }
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "美人属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({ "text": text, "color": color, "size": size });
        text = "";
        this.dp.addItem({ "text": text, "color": color, "size": size });
        color = 0xF92338;
        size = 18;
        if (Number(Main.player.hg_52) > 0) {
            text = GameManager.GetGodEqDesc(52, Number(Main.player.hg_52));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        if (Number(Main.player.hg_60) > 0) {
            text = GameManager.GetGodEqDesc(60, Number(Main.player.hg_60));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        if (Number(Main.player.hg_61) > 0) {
            text = GameManager.GetGodEqDesc(61, Number(Main.player.hg_61));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        if (Number(Main.player.hg_65) > 0) {
            text = GameManager.GetGodEqDesc(65, Number(Main.player.hg_65));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        if (Number(Main.player.hg_67) > 0) {
            text = GameManager.GetGodEqDesc(67, Number(Main.player.hg_67));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
        if (Number(Main.player.hg_68) > 0) {
            text = GameManager.GetGodEqDesc(68, Number(Main.player.hg_68));
            this.dp.addItem({ "text": text, "color": color, "size": size });
        }
    };
    MorePropDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    MorePropDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MorePropDialog;
})(Dialog);
MorePropDialog.prototype.__class__ = "MorePropDialog";
