class _0x0115
{
    public constuctor()
    {

    }

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(obj["isGo"])
        {
            var go:number = Number(obj["isGo"]);

            if(go == 0)
            {
                GameManager.msgBox.showMsg(function(r)
                {

                }, "您还没开启该玩家所在的地图，无法切换到该地图！", true);

                return;
            }
        }

        var killerId:string = obj["killerId"];

        var mapId:string = obj["mapId"];

        var map:any = GameManager.JSON_MAP[mapId];

        if(mapId)
        {
            GameManager.msgBox.showMsg(function(r)
            {
                if(r)
                {
                    Main.player.map = "" + mapId;

                    Main.MainUI.updateData();

                    DialogManager.open(FightDialog,"FightDialog");
                }
            }, "该玩家正在地图["+map["name"]+"]挂机中，是否切换到该地图追杀他？");
        }

//        if(obj["item"])
//        {
//            var item = obj["item"];
//
//            var id = item["id"];
//
//            var count = item["count"];
//
//            if(Number(count) <= 0)
//            {
//                Main.player.m_items.delItemById(id);
//
//                Main.player.m_items.sortItems();
//
//                DialogManager.Update(ItemBag, "ItemBag");
//
//            }
//        }
    }
}
