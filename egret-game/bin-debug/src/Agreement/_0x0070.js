var _0x0071 = (function () {
    function _0x0071() {
    }
    _0x0071.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var mailId = obj["id"];
        var mails = Main.player.m_mails["emails"];
        if (mails && mails.length) {
            for (var i = 0; i < mails.length; i++) {
                var m = mails[i];
                if (m) {
                    if (m["id"] == mailId) {
                        mails.splice(i, 1);
                        break;
                    }
                }
            }
        }
        var mail = DialogManager.findDialog(MailDialog, "MailDialog");
        if (mail && mail.showing) {
            mail.onUpdate();
        }
    };
    return _0x0071;
})();
_0x0071.prototype.__class__ = "_0x0071";
