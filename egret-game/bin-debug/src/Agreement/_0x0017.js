var _0x0017 = (function () {
    function _0x0017() {
    }
    _0x0017.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (Main.player.m_society) {
            Main.player.m_society.update(obj);
            var manage = DialogManager.findDialog(SocietyManager, "SocietyManager");
            if (manage && manage.showing) {
                manage.onUpdate();
            }
            var society = DialogManager.findDialog(SocietyDialog, "SocietyDialog");
            if (society && society.showing) {
                society.onUpdate();
            }
        }
    };
    return _0x0017;
})();
_0x0017.prototype.__class__ = "_0x0017";
