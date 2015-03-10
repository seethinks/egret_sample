class _0x0053 {

    public constructor() {}

    public parseData(obj:any) {
        if(!obj) return;
        var time:number = obj["time"];
        if(!time)time = 0;
        if(time >= GameManager.nextFightTime)GameManager.nextFightTime = time;
    }
}