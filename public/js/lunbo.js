var imgs = ['t1.jpg','t4.jpg','l4.jpg','t3.jpg'];
		var imgindex = 0;
		var timer;
		function show(){
			tu.src = '/public/img/'+ imgs[imgindex];
		}


		function start(){


		   timer = setInterval(function(){
		   	showdian();
			show();
			imgindex++;
			if (imgindex > imgs.length-1 ) {
				imgindex=0;
			}
		},2000);
		}

		

		lunbo.onmouseenter = function (){
			clearInterval(timer);
		}
		lunbo.onmouseleave = function (){
			start();
			showdian();
		}
		start();



		function go(a){
			// console.dir(a);
			imgindex = a;
			// console.dir(imgindex);
			show();
			showdian();

		}
		function showdian(){
			var dian = document.getElementsByClassName('dian1');
			for(var i = 0; i <dian.length; i++){
				dian[i].classList.remove('active');
			}
			dian[imgindex].classList.add('active');

		}
		     