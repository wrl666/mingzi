window.onload = function () {
	var div_Obj = document.getElementById('box1');
	div_Obj.innerHTML='软件工程';
	document.getElementById('btn').onclick=function(){
        div_Obj.innerHTML='软件工程';	
    }

    document.getElementById('btn1').onclick = function(){
    	//var div_Obj=
    	div_Obj.innerText = '<a href = "#">软件工程</a>';
    	//alert('div的内容为'+str)
    }


    document.getElementById('btn2').onclick = function(){
    	div_Obj.innerText = '软件工程';
    }
     document.getElementById('btn3').onclick = function(){
    	//div_Obj.style.color='#fff';
    	//div_Obj.style.fontSize='30px';
    	//div_Obj.style.background='blue';
    	div_Obj.className='out_c';
    }
     document.getElementById('btn4').onclick = function(){
    	//div_Obj.style.color='#fff';
    	//div_Obj.style.fontSize='30px';
    	//div_Obj.style.background='blue';
    	div_Obj.className='out_c2';
    }
	// body...
}

