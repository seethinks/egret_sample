var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Horn = (function (_super) {
    __extends(Horn, _super);
    function Horn() {
        _super.call(this); //GameManager.horn.play();
        this.text = new egret.gui.Label();
        _super.prototype.createChildren.call(this);
        this.m_UI = new HornUI();
        this.addElement(this.m_UI);
        this.m_UI.width = Main.guiLayer.width;
        this.text.textColor = 0xffff00;
        this.text.height = 40;
        this.text.size = 30;
        this.text.y = 10;
        this.text.x = Main.guiLayer.width;
    }
    Horn.prototype.play = function (obj) {
        if (!obj)
            return;
        GameManager.hornStop = true;
        Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);
        this.top = 300;
        this.x = 0;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onStart, this);
        this.addElement(this.text);
        var num = Number(obj["id"]);
        if (num && num == 1) {
            this.text.text = "  [" + obj["name"] + "]说：" + obj["msg"];
        }
        else {
            this.text.text = obj["times"] + "  [" + obj["name"] + "]说：" + obj["msg"];
        }
        this.m_UI._laba.visible = true;
    };
    Horn.prototype.onStart = function (e) {
        if (this.text) {
            if (this.text.x < -this.text.width) {
                this.stop();
            }
            this.text.x--;
            this.m_UI._laba.x--;
        }
    };
    Horn.prototype.stop = function () {
        this.text.text = "";
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onStart, this);
        this.text.x = Main.guiLayer.width;
        if (this.parent)
            Main.guiLayer.removeElement(this);
        if (this.text._parent)
            this.removeElement(this.text);
        this.m_UI._laba.visible = false;
        this.m_UI._laba.x = Main.guiLayer.width - 43;
        GameManager.hornStop = false;
    };
    return Horn;
})(egret.gui.Group);
Horn.prototype.__class__ = "Horn";
