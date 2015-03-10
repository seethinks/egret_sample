/**
 * 帮会成员，帮会排行，争霸赛列表通用
 */
class UISocietyRankItem extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();
        this.skinName = "skins.SocietyRankItemReaderSkin";
    }

    public _value_index:egret.gui.Label;
    public _value_id:egret.gui.Label;
    public _value_level:egret.gui.Label;
    public _value_sname:egret.gui.Label;
    public _value_pname:egret.gui.Label;
    public _join_btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._join_btn){
            this._join_btn.visible = false;
        }

    }

    public dataChanged(){
        super.dataChanged();

        if(this.data.type == 1){ //帮会选择
            this._join_btn.visible = true;
            this._join_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.choosBtn, this);
            this._value_id.text = this.data.id;
            this._value_level.text = this.data.lv;
            this._value_sname.text = this.data.name;
            this._value_pname.text = this.data.num + "/" + this.data.maxNum;
        }
        else if(this.data.type == 2)
        { //帮会排行
            this._value_index.text = "" + this.data["rank"];
            this._value_id.text = "" + this.data["id"];
            this._value_level.text = "Lv."+this.data["lv"];
            this._value_sname.text = "" + this.data["name"];
            this._value_pname.text = "" + this.data["pname"];
        }
        else if(this.data.type == 4)  //BOSS伤害排行
        {
            this._value_index.text = "Lv."+this.data["lv"];
            this._value_id.text = "" + this.data["name"];
            this._value_level.text = "" + this.data["hurt"];
            this._value_sname.text = this.data["per"] + "%";
            this._value_pname.text = "";
        }
        else
        { //成员
            var zw:any = {1:"会长", 2:"副会长", 3:"会员", 4:""};

            this._value_id.text = zw[this.data.sJob];
            this._value_level.text = "Lv."+this.data.lv;
            this._value_sname.text = this.data.name;
            this._value_pname.text = "" + this.data.fv;
            var status:string = "离线";
            if(this.data.status > 0){
                status = "在线";
            }
            this._value_index.text = status;
        }

    }

    public choosBtn(e:egret.TouchEvent):void{
        var url:string = "http://"+GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params:string = "type=0x0020&sid="+GameManager.SESSION_ID+"&id="+this.data.id;
        HttpMessage.sendMsg(url, params);
    }

}