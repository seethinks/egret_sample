var _0x0016 = (function () {
    function _0x0016() {
    }
    _0x0016.prototype.constuctor = function () {
    };
    _0x0016.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (obj["hasSociety"] == 1) {
            //有行会
            if (!Main.player.m_society)
                Main.player.m_society = new Society();
            //我的信息
            var myInfo = new SocietyMemeber();
            myInfo.update(obj["myInfo"]);
            obj["myInfo"] = myInfo;
            Main.player.m_society.update(obj);
            Main.player.faction = Main.player.m_society.name;
            //打开行会界面
            DialogManager.Update(SocietyDialog, "SocietyDialog");
            //
            var dialog = DialogManager.findDialog(SocietyLiebiao, "SocietyLiebiao");
            if (dialog && dialog.showing)
                dialog.hide();
            if (obj["new"]) {
                if (Number(obj["new"]) == 1) {
                    GameManager.flyText({ t: "加入行会成功！！", q: 1 });
                }
                else if (Number(obj["new"]) == 2) {
                    GameManager.flyText({ t: "创建行会成功！！", q: 1 });
                }
            }
        }
        else {
            Main.player.faction = "";
            // 没有行会 obj["societys"] 传入列表数组 societys
            var dialog = DialogManager.findDialog(SocietyLiebiao, "SocietyLiebiao");
            if (dialog)
                dialog.initList(obj["societys"]);
            //
            var dialog1 = DialogManager.findDialog(SocietyMemberDialog, "SocietyMemberDialog");
            if (dialog1 && dialog1.showing)
                dialog1.hide();
            var dialog2 = DialogManager.findDialog(SocietyDialog, "SocietyDialog");
            if (dialog2 && dialog2.showing)
                dialog2.hide();
        }
    };
    return _0x0016;
})();
_0x0016.prototype.__class__ = "_0x0016";
