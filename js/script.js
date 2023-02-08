let green=document.getElementsByClassName('green');
let red=document.getElementsByClassName('red');
let yellow=document.getElementsByClassName('yellow');
let timer=document.getElementsByClassName('timer');

// green[0].classList.add('visiblity-hidden');
// green[1].classList.add('visiblity-hidden');
// green[2].classList.add('visiblity-hidden');
// green[3].classList.add('visiblity-hidden');

let i=0;
// setInterval(start,500);

// // for (j=0;j<=5;j++)
// function start()
// {
//     console.log('-------------------');
//     console.log('1st : ' + i);
    
//     green[i].classList.remove('visiblity-hidden')
//     i=(i+1)%4;
//     console.log('2st : ' + i);
//     green[i].classList.add('visiblity-hidden')
//     i=(i+1)%4;
//     console.log('3st : ' + i);
//     green[i].classList.add('visiblity-hidden')
//     i=(i+1)%4;
//     console.log('4st : ' + i);
//     green[i].classList.add('visiblity-hidden')
//     if(i!=0 && i!=1){
//         console.log(' l');
//         i=(i-2)%3;
//     }
//     else{
//         i=i+2;
//     }

//     // console.log('after'+i);

// }

setInterval(main1,1000);
// main1();

var currunt=3;
function main1(){

// console.log( ( Number (timer[0].innerHTML)));

for (let i=0;i<=3;i++){
    
    let time_one=Number (timer[i].innerHTML);

    if(!(time_one!=0 && currunt !=i))
    {
        
        timer[i].innerHTML=time_one+1;
        if (time_one==30){
            timer[i].innerHTML=90;
            if(currunt==0){
                currunt=3;
            }
            else{
                currunt--
            }
       }
       else if(time_one<25){
            green[i].classList.remove('visiblity-hidden');
            yellow[i].classList.add('visiblity-hidden');
            red[i].classList.add('visiblity-hidden');

        }
        
        else{
            green[i].classList.add('visiblity-hidden');
            yellow[i].classList.remove('visiblity-hidden');
            red[i].classList.add('visiblity-hidden');

            
        }

 

    }
    else{
      
        timer[i].innerHTML=time_one-1;
        if(time_one>5){
            green[i].classList.add('visiblity-hidden');
            yellow[i].classList.add('visiblity-hidden');
            red[i].classList.remove('visiblity-hidden');
            
        }
        else if (time_one<=5 && time_one>0){
            green[i].classList.add('visiblity-hidden');
            yellow[i].classList.remove('visiblity-hidden');
            red[i].classList.add('visiblity-hidden');

            
        }
        else{

            green[i].classList.remove('visiblity-hidden');
            yellow[i].classList.add('visiblity-hidden');
            red[i].classList.add('visiblity-hidden');
        }
   }
}

}