     setInterval(function(){
            var str_c='';
            for (var i = 0; i < 6; i++) {
                var ran = Math.floor(Math.random()*10);
                str_c+=ran;
                }
            document.getElementById('name').style.color='#'+str_c;
        },1000);
                    