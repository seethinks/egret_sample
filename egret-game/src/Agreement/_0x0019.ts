class _0x0019 {

    public constructor() { }

    public parseData(obj:any) {

        if(!obj)return;

        if(!Main.player.m_society)return;
        //查找成员及索引
        var index = -1;
        var member:SocietyMemeber;// = Main.player.m_society.findMemeber(obj["roleId"]);

        for (var i in Main.player.m_society.members) {
            if( obj["roleId"] == Main.player.m_society.members[i].roleId ) {
                index = i;
                member = Main.player.m_society.members[i];
            }
        }

        switch (Number(obj["action"])) {
            case 1:
                //开除成员
                if(index > -1) {
                    Main.player.m_society.members.splice(index,1);
                    Main.player.m_society.sortMember();
                    Main.player.m_society.num --;
                }
                break;
            case 2:
                //降职副会长
                if(member) {
                    member.sJob = 3;
                    Main.player.m_society.sortMember();
                }
                break;
            case 3:
                //任命副会长
                if(member) {
                    member.sJob = 2;
                    Main.player.m_society.sortMember();
                }
                break;
            case 4:
                //转让会长
                if(member) {

                    //查找以前的会长
                    for ( var i in Main.player.m_society.members ) {
                        if( Main.player.m_society.members[i].sJob == 1 )
                        {
                            //降职成成员
                            Main.player.m_society.members[i].sJob = 3;
                        }
                    }

                    member.sJob = 1;
                    Main.player.m_society.sortMember();
                }
                break;
        }

        var dialog:SocietyMemberDialog = DialogManager.findDialog(SocietyMemberDialog, "SocietyMemberDialog");

        if(dialog && dialog.showing)
        {
            dialog.onUpdate();
        }

    }
}