var Society = (function () {
    function Society() {
        //公告
        this.notice = "";
        //成员列表
        this.members = new Array();
        this.bossLv = 0;
        this.bossContribution = 0;
        this.bossTime = 0;
        this.bossHp = 0;
        this.curHurt = 0;
        this.inspireCount = 0;
    }
    Society.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
        }
    };
    //排序成员列表
    Society.prototype.sortMember = function () {
        this.members.sort(function (x, y) {
            if (x.sJob > y.sJob) {
                return 1;
            }
            else if (x.sJob == y.sJob) {
                if (x.lv < y.lv)
                    return 1;
                else if (x.lv == y.lv) {
                    if (x.fv < y.fv)
                        return 1;
                }
            }
            return -1;
        });
    };
    Society.prototype.findMemeber = function (id) {
        for (var i in this.members) {
            if (!this.members[i])
                continue;
            var sm = this.members[i];
            if (Number(sm.roleId) == id)
                return sm;
        }
        return null;
    };
    return Society;
})();
Society.prototype.__class__ = "Society";
var SocietyMemeber = (function () {
    function SocietyMemeber() {
        //总贡献
        this.allContri = 0;
    }
    SocietyMemeber.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
        }
    };
    return SocietyMemeber;
})();
SocietyMemeber.prototype.__class__ = "SocietyMemeber";
