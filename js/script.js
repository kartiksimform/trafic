let green=document.getElementsByClassName('green');
let red=document.getElementsByClassName('red');
let yellow=document.getElementsByClassName('yellow');
let timer=document.getElementsByClassName('timer');
let left=document.getElementsByClassName('left');
let right=document.getElementsByClassName('right');
let up=document.getElementsByClassName('up');



let i=0;

setInterval(main1,1000);

var currunt=3;
function main1(){


for (let i=0;i<=3;i++){
    
    let time_one=Number (timer[i].innerHTML);
  



    //currunt here 
    if((currunt ==i))
    {
        timer[i].classList.add('color-green')
        timer[i].classList.remove('color-red')


        up[i].classList.remove('visiblity-low');
        right[i].classList.remove('visiblity-low');
        
        
        timer[i].innerHTML=time_one-1;
        if (time_one==1){
            timer[i].innerHTML=90;
            if(currunt==0){
                currunt=3;
                timer[currunt].innerHTML=30;
                
            }
            else{
                currunt--
                timer[currunt].innerHTML=30;
            }
        }
        else if(time_one>5){
            green[i].classList.add('transform-scal');
            red[i].classList.remove('transform-scal');

            green[i].classList.remove('visiblity-low');
            yellow[i].classList.add('visiblity-low');
            red[i].classList.add('visiblity-low');
            
        }
        
        else{

            red[i].classList.remove('transform-scal');
            green[i].classList.remove('transform-scal');
            
            green[i].classList.add('visiblity-low');
            yellow[i].classList.remove('visiblity-low');
            red[i].classList.add('visiblity-low');
            
            
        }
        
        
        
    }
    else{

        timer[i].classList.add('color-red');
        timer[i].classList.remove('color-green');

        up[i].classList.add('visiblity-low');
        right[i].classList.add('visiblity-low');
       

        timer[i].innerHTML=time_one-1;
        if(time_one>5){
        red[i].classList.add('transform-scal');
        green[i].classList.remove('transform-scal');

            green[i].classList.add('visiblity-low');
            yellow[i].classList.add('visiblity-low');
            red[i].classList.remove('visiblity-low');
            
        }
        else if (time_one<=5 && time_one>0){
            red[i].classList.remove('transform-scal');
            green[i].classList.remove('transform-scal');

            
        }
        else{


            green[i].classList.remove('visiblity-low');
            yellow[i].classList.add('visiblity-low');
            red[i].classList.add('visiblity-low');
        }
   }
}

}