var _0x0127 = (function () {
    function _0x0127() {
    }
    _0x0127.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["list"];
        var my = obj["players"];
        if (list && list.length > 0) {
            var rank = DialogManager.findDialog(SocietyBossDevote, "SocietyBossDevote");
            if (rank) {
                rank.bossList = list;
                rank.show();
            }
        }
    };
    return _0x0127;
})();
_0x0127.prototype.__class__ = "_0x0127";
