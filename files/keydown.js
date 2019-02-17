var count=0;
    window.addEventListener('keyup',animacion());
    function animacion(){
        document.getElementById('animacion').style.color="purple";
    }
    window.addEventListener('keydown',function(e){
        count++;
        var animacion=document.getElementById('animacion');
        var codigo="KeyCode "+e.keyCode;
        var tecla="Key "+e.key.toUpperCase();
        animacion.style.color="yellow";
        animacion.innerText=tecla+' '+codigo;
        animacion.classList.add("fade");
        setTimeout(function(){
            animacion.classList.toggle("fade");
        }, 1000);
        if(count>0){
            document.getElementById('count').innerHTML="You've pressed "+count+" keys ";
            document.getElementById('count').style.color="green";
        }
        //fuck variable scope
    })
    