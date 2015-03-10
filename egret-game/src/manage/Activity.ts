//活动
class ActivityManager {

    public gifs:any[] = new Array();
    public acts:any[] = new Array();



    public constructor() {

    }

}

class Activity {

    public id:string;
    public name:string;
    public desc:string;
    public type:string;

    public constructor() {

    }

    public init(data:any) {
        for(var k in data){
            this[k] = data[k];
        }
    }


}


class Activity_1 extends Activity {


    public init(data:any) {
        super.init(data);
        alert(this.id);
    }
}


class Activity_2 extends Activity {

    public init(data:any) {
        super.init(data);
    }
}

class Activity_3 extends Activity {

    public init(data:any) {
        super.init(data);
    }
}



