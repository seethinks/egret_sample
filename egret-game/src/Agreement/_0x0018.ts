class _0x0018 {

    public constructor() {

    }

    public parseData(obj:any):void {

        if(!obj)return;

        var tempArr:SocietyMemeber[] = new Array();

        for( var i in obj["members"]) {
            var temp:SocietyMemeber = new SocietyMemeber();
            temp.update(obj["members"][i]);
            tempArr.push(temp);
        }

        obj["members"] = tempArr;

        if(!Main.player.m_society)Main.player.m_society = new Society();
        Main.player.m_society.update(obj);

        Main.player.m_society.sortMember();

        //刷新行会和成员界面
        DialogManager.open(SocietyMemberDialog, "SocietyMemberDialog");

    }

}