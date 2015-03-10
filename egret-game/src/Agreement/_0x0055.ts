class _0x0055 {

    public constructor(){}

    public parseData(obj:any):void{
        if(!obj)return;

        var heros:any[] = obj["heros"];

        Main.player.m_heros.heros = {};

        for(var k in heros){
            if(!heros[k])continue;
            var hero:SuperWoman = new SuperWoman();
            hero.update(heros[k]);

            Main.player.m_heros.heros[hero.id] = hero;
        }

        DialogManager.Update(BelleDialog, "BelleDialog");

    }
}