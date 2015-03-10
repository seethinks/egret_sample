class _0x0057
{

    public constructor(){}

    public parseData(obj:any):void{
        if(!obj)return;

        var heros:any[] = obj["heros"];

        for(var k in heros)
        {

            if(!heros[k])continue;

            var hero:SuperWoman = Main.player.m_heros.heros[heros[k]["id"]];

            if(hero)
            {
                hero.update(heros[k]);
            }
            else
            {
                hero = new SuperWoman();
                hero.update(heros[k]);
                Main.player.m_heros.heros[hero.id] = hero;
            }
        }

        DialogManager.Update(BelleDialog, "BelleDialog");

    }
}