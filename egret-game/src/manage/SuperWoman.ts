class HeroManager {

    public heros:any = {};

    public constructor(){}

}


class SuperWoman extends PropBase{

    public templateid:number;
    //星级
    public starlevel:number;
    //星级经验
    public starexp:number;
    //下一星级经验
    public nextstarexp:number;
    //是否出战 1出战 0未出战
    public action:number;
    //阵中位置
    public postion:number;
    //模板
    public tpl:any;

    public update(data:any){
        for(var k in data){

            this[k] = data[k];
            //特殊K处理
            if(k == "templateid"){
                this.tpl = GameManager.JSON_HERO[this.templateid];
                this.job = this.tpl["job"];
                this.name = this.tpl["name"];
                this.sex = this.tpl["sex"];
            }
            if(k == "starlevel"){
                var slt:any = GameManager.JSON_HERO_UPSTAR[Number(this.starlevel) + 1];
                if(slt){
                    this.nextstarexp = slt["exp"];
                }else this.nextstarexp = 0;
            }
        }
    }

}