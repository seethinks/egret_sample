declare class dataEyeApi{
    pushEvent(eventid:string, duration:number, data:any);
    init(data:dataEye_initData);

}

declare class dataEye_initData{
    appId:string;
    appVer:string;
    interval:number;
    errorReport:boolean;
    excludes:string[];
    virus:boolean;
}