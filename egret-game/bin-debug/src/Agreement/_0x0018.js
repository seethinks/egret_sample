var _0x0018 = (function () {
    function _0x0018() {
    }
    _0x0018.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var tempArr = new Array();
        for (var i in obj["members"]) {
            var temp = new SocietyMemeber();
            temp.update(obj["members"][i]);
            tempArr.push(temp);
        }
        obj["members"] = tempArr;
        if (!Main.player.m_society)
            Main.player.m_society = new Society();
        Main.player.m_society.update(obj);
        Main.player.m_society.sortMember();
        //刷新行会和成员界面
        DialogManager.open(SocietyMemberDialog, "SocietyMemberDialog");
    };
    return _0x0018;
})();
_0x0018.prototype.__class__ = "_0x0018";
