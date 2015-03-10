class Society {

    //基础信息
    public id:string;
    public lv:number;
    public name:string;
    //会长名字
    public pname:string;
    //最大成员数
    public maxNum:number;
    public num:number;
    public exp:number;
    public maxExp:number;
    //公告
    public notice:string = "";
    //我的信息
    public myInfo:SocietyMemeber;
    //成员列表
    public members:SocietyMemeber[] = new Array();

    public bossLv:number = 0;

    public bossContribution:number = 0;

    public bossTime:number = 0;

    public weekCount:number;

    public openBoss:number;

    public isJoin:number;

    public bossHp:number = 0;

    public curHurt:number = 0;

    public inspireCount:number = 0;

    public countdown:number;

    //管理-入会条件 战力大于joinCount才可加入
    public fv:number;

    public constructor(){

    }

    public update(data:any){
        for (var k in data) {
            this[k] = data[k];
        }
    }


    //排序成员列表
    public sortMember():void {
        this.members.sort(function(x:SocietyMemeber, y:SocietyMemeber){
            if(x.sJob > y.sJob){
                return 1;
            }else if(x.sJob == y.sJob){
                if(x.lv < y.lv)return 1;
                else if(x.lv == y.lv){
                    if(x.fv < y.fv)return 1;
                }
            }
            return -1;
        });
    }

    public findMemeber(id:number):SocietyMemeber{

        for(var i in this.members){
            if(!this.members[i])continue;

            var sm:SocietyMemeber = this.members[i];
            if(Number(sm.roleId) == id)return sm;
        }
        return null;
    }

}

class SocietyMemeber {
    public roleId:number;
    public name:string;
    public lv:number;
    //战斗力
    public fv:number;
    //帮会职位标识 1会长 2副会长 3会员 4
    public sJob:number;
    //职业
    public pos:number;
    //离线状态-0在线 >1离线时间数
    public status:number;
    //贡献
    public curContri:number;
    //总贡献
    public allContri:number = 0;
    //签到 1已签 0未签
    public isSignIn:number;
    //争霸位置 1前排 2后排
    public fightPlace:number;

    public sex:number;
    //对公会boss伤害
    public hurtBoss:number;

    public constructor(){

    }

    public update(data:any){
        for( var k in data ) {
            this[k] = data[k];
        }
    }
}
