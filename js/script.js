let green=document.getElementsByClassName('green');
let red=document.getElementsByClassName('red');
let yellow=document.getElementsByClassName('yellow');
let timer=document.getElementsByClassName('timer');
let left=document.getElementsByClassName('left');
let right=document.getElementsByClassName('right');
let up=document.getElementsByClassName('up');


// left[0].classList.add('visiblity-low');
// green[0].classList.add('visiblity-low');
// green[1].classList.add('visiblity-low');
// green[2].classList.add('visiblity-low');
// green[3].classList.add('visiblity-low');

let i=0;
// setInterval(start,500);

// // for (j=0;j<=5;j++)
// function start()
// {
//     console.log('-------------------');
//     console.log('1st : ' + i);
    
//     green[i].classList.remove('visiblity-low')
//     i=(i+1)%4;
//     console.log('2st : ' + i);
//     green[i].classList.add('visiblity-low')
//     i=(i+1)%4;
//     console.log('3st : ' + i);
//     green[i].classList.add('visiblity-low')
//     i=(i+1)%4;
//     console.log('4st : ' + i);
//     green[i].classList.add('visiblity-low')
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



    //currunt here 
    if(!(time_one!=0 && currunt !=i))
    {
        timer[i].classList.add('color-green')
        timer[i].classList.remove('color-red')


        // left[i].classList.remove('visiblity-low');
        up[i].classList.remove('visiblity-low');
        right[i].classList.remove('visiblity-low');
        
        
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
            green[i].classList.add('transform-scal');
            red[i].classList.remove('transform-scal');

            green[i].classList.remove('visiblity-low');
            yellow[i].classList.add('visiblity-low');
            red[i].classList.add('visiblity-low');
            
        }
        
        else{
            // green[i].classList.add('transform-scal');

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
       

        // console.log(i);
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

            // green[i].classList.add('visiblity-low');
            // yellow[i].classList.remove('visiblity-low');
            // red[i].classList.add('visiblity-low');

            
        }
        else{


            green[i].classList.remove('visiblity-low');
            yellow[i].classList.add('visiblity-low');
            red[i].classList.add('visiblity-low');
        }
   }
}

}