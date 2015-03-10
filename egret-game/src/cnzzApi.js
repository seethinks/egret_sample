var dataEyeApi = (function(){

    function pushEvent(eventid, duration, data){
        DCAgent.onEvent(eventid, duration, data);
    }

    function init(data){
        DCAgent.init(data);
    }

    return {
        pushEvent:pushEvent,
        init:init
    }
});

var dataEye_initData = function(){};
