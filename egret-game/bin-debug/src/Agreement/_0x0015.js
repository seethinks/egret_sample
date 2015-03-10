var _0x0015 = (function () {
    function _0x0015() {
    }
    _0x0015.prototype.constuctor = function () {
    };
    _0x0015.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["skillarray"];
        if (list && list.length > 0) {
            Main.player.m_skillArr = list;
            var skill = DialogManager.findDialog(SkillDialog, "SkillDialog");
            if (skill && skill.showing) {
                skill.onUpdate();
            }
        }
    };
    return _0x0015;
})();
_0x0015.prototype.__class__ = "_0x0015";
