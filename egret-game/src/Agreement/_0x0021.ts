class _0x0021 {

    public constructor() {}

    public parseData(obj:any) {

        if(!obj) return;

        var tempArr:Society[] = new Array();

        for ( var i in obj["societys"] ) {
            var temp:Society = new Society();
            temp.update(obj["societys"][i]);
            tempArr.push(temp);
        }

        var dialog:SocietyRank = DialogManager.findDialog(SocietyRank, "SocietyRank");

        if(dialog && dialog.showing)
        {
            dialog.rankList = tempArr;

            dialog.onUpdate();
        }
    }
}
