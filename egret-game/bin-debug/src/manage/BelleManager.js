var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleManager = (function () {
    function BelleManager() {
    }
    return BelleManager;
})();
var GirlHero = (function (_super) {
    __extends(GirlHero, _super);
    function GirlHero() {
        _super.apply(this, arguments);
        //装备集合
        this.m_item = new ItemManager();
    }
    GirlHero.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
            //特殊K处理
            if (k == "templateid") {
                this.tpl = GameManager.JSON_HERO[this.templateid];
            }
            if (k == "starlevel") {
                var slt = GameManager.JSON_HERO_UPSTAR[Number(this.starlevel) + 1];
                if (slt) {
                    this.nextstarexp = slt["exp"];
                }
            }
            else
                this.nextstarexp = 0;
        }
    };
    return GirlHero;
})(PropBase);
