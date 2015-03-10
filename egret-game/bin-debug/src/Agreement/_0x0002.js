var _0x0002 = (function () {
    function _0x0002() {
    }
    _0x0002.prototype.constuctor = function () {
    };
    _0x0002.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (Main.creatHero.sound)
            Main.creatHero.sound.pause();
        Main.guiLayer.removeAllElements();
        Main.guiLayer.addElement(Main.LogingDialog);
    };
    return _0x0002;
})();
_0x0002.prototype.__class__ = "_0x0002";
