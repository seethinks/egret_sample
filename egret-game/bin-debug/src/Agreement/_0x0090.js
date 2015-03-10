var _0x0090 = (function () {
    function _0x0090() {
    }
    _0x0090.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.m_deuiList = new Array();
        var list = obj["vsPlayers"];
        Main.player.m_deulMyinfo = obj["myInfo"];
        if (!list)
            return;
        for (var i = 0; i < list.length; i++) {
            Main.player.m_deuiList.push(list[i]);
        }
        var deul = DialogManager.findDialog(DeulDialog, "DeulDialog");
        if (deul && deul.showing) {
            deul.onUpdate();
        }
    };
    return _0x0090;
})();
_0x0090.prototype.__class__ = "_0x0090";
