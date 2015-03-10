class _0x0070
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        Main.player.m_mails = obj;

//        var mail:MailDialog = DialogManager.findDialog(MailDialog, "MailDialog");
//
//        if(mail)
//        {
//            mail.show();
//        }
        DialogManager.open(MailDialog, "MailDialog");
    }
}