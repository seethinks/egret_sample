class _0x0071
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        var mailId = obj["id"];

        var mails:Array<any> = Main.player.m_mails["emails"];

        if(mails && mails.length)
        {
            for(var i = 0; i < mails.length; i++)
            {
                var m = mails[i];

                if(m)
                {
                    if(m["id"] == mailId)
                    {
                        mails.splice(i, 1);

                        break;
                    }
                }
            }
        }

        var mail:MailDialog = DialogManager.findDialog(MailDialog, "MailDialog");

        if(mail && mail.showing)
        {
            mail.onUpdate();
        }
    }
}