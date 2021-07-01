let generate = document.getElementById("generate");
let cap = document.getElementById('captcha');
let captcha = document.getElementById('cap');
let rand = document.getElementById('random');
let num;
 while(true){
        num = Math.floor((Math.random()*10000)+1);
        if(num>1000){
             cap.innerText =  num;
                  break;
         }
}

generate.addEventListener('click',()=>{
	if(num  == captcha.value){
	//	console.log(Math.floor((Math.random()*end.value)+1));
		rand.innerText = 'Valid Captcha';
	}
	else{
		rand.innerText = 'Invalid captcha';
	}
});

