var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroManager = (function () {
    function HeroManager() {
        this.heros = {};
    }
    return HeroManager;
})();
HeroManager.prototype.__class__ = "HeroManager";
var SuperWoman = (function (_super) {
    __extends(SuperWoman, _super);
    function SuperWoman() {
        _super.apply(this, arguments);
    }
    SuperWoman.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
            //特殊K处理
            if (k == "templateid") {
                this.tpl = GameManager.JSON_HERO[this.templateid];
                this.job = this.tpl["job"];
                this.name = this.tpl["name"];
                this.sex = this.tpl["sex"];
            }
            if (k == "starlevel") {
                var slt = GameManager.JSON_HERO_UPSTAR[Number(this.starlevel) + 1];
                if (slt) {
                    this.nextstarexp = slt["exp"];
                }
                else
                    this.nextstarexp = 0;
            }
        }
    };
    return SuperWoman;
})(PropBase);
SuperWoman.prototype.__class__ = "SuperWoman";
