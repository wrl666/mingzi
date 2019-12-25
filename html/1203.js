$(function(){
	var tm = setInterval(updateTime,1000);//第一次会延迟1秒，需要手动调用一次
	updateTime();


	function updateTime(){
		var td_now = new Date();
		var td_new = new Date(2019,11,12);//月份是从0-11
		//var td_new = new Date(2019,11,12);//跨年份
		
		var new_t = td_new.getTime();//单位为毫秒
		var now_t = td_now.getTime();//单位为毫秒
	  
	    var time = (new_t-now_t)/1000;//单位为秒

	    if(time<0){
	    	time = 0;
	    	alert("日期已过")
	    	if(tm!=null){
	    		clearInterval(tm);
	    	}
	    }

	    var day = Math.floor(time/(24*60*60));//向下取整，单位为天
	    time = time%(24*60*60);//

	    var hour = Math.floor(time/(60*60));//向下取整，单位为天
	    time = time%(60*60);

	    var min = Math.floor(time/60);//向下取整，单位为天
	    time = time%60;

	    var second = Math.floor(time);

	    day = changeNum(day,3);
	    hour = changeNum(hour,2);
	    min = changeNum(min,2);
	    second = changeNum(second,2);

	    $("#day").text(day);
	    $("#hour").text(hour);
	    $("#min").text(min);
	    $("#second").text(second);

	}
	

    function changeNum(num,digit){
    	var str = num+'';
    	while(str.length<digit){
    		str = '0'+str;
    	}
    	return str;
    }

})