var _0x0001 = (function () {
    function _0x0001() {
    }
    _0x0001.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var status = obj["status"];
        GameManager.SESSION_ID = obj["sid"];
        if (Main.login.sound)
            Main.login.sound.pause();
        if (status == "0") {
            Main.guiLayer.removeAllElements();
            Main.guiLayer.addElement(Main.creatHero);
        }
        else {
            Main.guiLayer.removeAllElements();
            Main.guiLayer.addElement(Main.LogingDialog);
        }
    };
    return _0x0001;
})();
_0x0001.prototype.__class__ = "_0x0001";
