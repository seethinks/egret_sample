class _0x0020 {

    public constructor() {}

    public parseData(obj:any) {
        if(!obj)return;

        var addMoney:number = 0;
        addMoney = Number(obj["money"]) - Number(Main.player.money);
        Main.player.set_money(obj["money"]);

        var addSexp:number = 0;
        addSexp = Number(obj["exp"]) - Number(Main.player.m_society.exp);
        Main.player.m_society.exp = Number(obj["exp"]);

        var addContri:number = 0;
        addContri = Number(obj["curContri"]) - Number(Main.player.m_society.myInfo.curContri);
        Main.player.m_society.myInfo.curContri = Number(obj["curContri"]);
        Main.player.m_society.myInfo.allContri = Number(obj["allContri"]);

//        for ( var i in Main.player.m_society.members ) {
//            if(Main.player.m_society.members[i].roleId == obj["roleId"]) {
//                Main.player.m_society.members[i].curContri = Number(obj["curContri"]);
//            }
//        }

        //TODO 刷新行会信息 飘字 addMoney->钱 ,addSexp->行会经验 ,addContri->贡献值
        if(addSexp > 0){
            GameManager.msgArr.push({"t":"帮会经验+"+addSexp, "q":1});
        }
        if(addContri > 0){
            GameManager.msgArr.push({"t":"帮会贡献+"+addContri, "q":1});
        }


    }
}