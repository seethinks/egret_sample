class Skill {
    public skills:any = {};
    public apSkills:any = {};
    public dpSkills:any = {};

    public constructor(){
        this.init();
    }

    public init(){
        var temp:any[] = new Array();

        for(var i in GameManager.JSON_SKILLS){
            var skill:any = GameManager.JSON_SKILLS[i];
            if(skill && skill["job"] == Main.player.job){
                temp.push(skill);
            }
        }

        temp.sort(function(x:any, y:any){
            if(x["openlevel"] > y["openlevel"]){
                return 1;
            }else return -1;
        });

        for(var i in temp){
            var skill:any = temp[i];
            var open:number = 0;
            if(Main.player.level >= skill["openlevel"])open = 1;
            this.skills[skill["planId"]] = open;
        }
    }



}