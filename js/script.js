let green=document.getElementsByClassName('green');

green[0].classList.add('visiblity-hidden');
green[1].classList.add('visiblity-hidden');
green[2].classList.add('visiblity-hidden');
green[3].classList.add('visiblity-hidden');

let i=0;
setInterval(start,500);

// for (j=0;j<=5;j++)
function start()
{
    console.log('-------------------');
    console.log('1st : ' + i);
    // i=i+3;
    
    green[i].classList.remove('visiblity-hidden')
    
    i=(i+1)%4;
    console.log('2st : ' + i);
    green[i].classList.add('visiblity-hidden')
    i=(i+1)%4;
    console.log('3st : ' + i);
    
    green[i].classList.add('visiblity-hidden')
    i=(i+1)%4;
    
    console.log('4st : ' + i);
    green[i].classList.add('visiblity-hidden')
    if(i!=0 && i!=1){
        
        console.log(' l');
        i=(i-2)%3;
    }
    else{
        i=i+2;
    }

    // console.log('after'+i);

}
