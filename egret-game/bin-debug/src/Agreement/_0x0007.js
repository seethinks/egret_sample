var _0x0007 = (function () {
    function _0x0007() {
    }
    //战斗数据
    _0x0007.prototype.constuctor = function () {
    };
    _0x0007.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var fight = DialogManager.findDialog(FightDialog, "FightDialog");
        if (fight) {
            fight.startFight(obj);
        }
    };
    return _0x0007;
})();
_0x0007.prototype.__class__ = "_0x0007";
