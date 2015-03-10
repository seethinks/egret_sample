class _0x0017 {

    public constructor(){

    }

    public parseData(obj:any)
    {
        if(!obj) return;

        if(Main.player.m_society)
        {
            Main.player.m_society.update(obj);

            var manage:SocietyManager = DialogManager.findDialog(SocietyManager, "SocietyManager");

            if(manage && manage.showing)
            {
                manage.onUpdate();
            }

            var society:SocietyDialog = DialogManager.findDialog(SocietyDialog, "SocietyDialog");

            if(society && society.showing)
            {
                society.onUpdate();
            }
        }

    }

}