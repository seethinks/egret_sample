var _0x0070 = (function () {
    function _0x0070() {
    }
    _0x0070.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.m_mails = obj;
        //        var mail:MailDialog = DialogManager.findDialog(MailDialog, "MailDialog");
        //
        //        if(mail)
        //        {
        //            mail.show();
        //        }
        DialogManager.open(MailDialog, "MailDialog");
    };
    return _0x0070;
})();
_0x0070.prototype.__class__ = "_0x0070";
