var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//活动
var ActivityManager = (function () {
    function ActivityManager() {
        this.gifs = new Array();
        this.acts = new Array();
    }
    return ActivityManager;
})();
var Activity = (function () {
    function Activity() {
    }
    Activity.prototype.init = function (data) {
        for (var k in data) {
            this[k] = data[k];
        }
    };
    return Activity;
})();
var Activity_1 = (function (_super) {
    __extends(Activity_1, _super);
    function Activity_1() {
        _super.apply(this, arguments);
    }
    Activity_1.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        alert(this.id);
    };
    return Activity_1;
})(Activity);
var Activity_2 = (function (_super) {
    __extends(Activity_2, _super);
    function Activity_2() {
        _super.apply(this, arguments);
    }
    Activity_2.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
    };
    return Activity_2;
})(Activity);
var Activity_3 = (function (_super) {
    __extends(Activity_3, _super);
    function Activity_3() {
        _super.apply(this, arguments);
    }
    Activity_3.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
    };
    return Activity_3;
})(Activity);
