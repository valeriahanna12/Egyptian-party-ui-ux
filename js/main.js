$('.navbar .open ').click(function(){
    let linksBoxWidth=$('.links').outerWidth();
    if($('.links').css('left')=='-250px'){
        $('.links').animate({'left':0},1000)
        $('.open').animate({'left':'290px' },1000)
    }
    else{
        $('.links').animate({'left':-linksBoxWidth},1000)        
        $('.open').animate({'left':'50px' },1000)
        
    }
})
$('.close').click(function(){
    let linksBoxWidth=$('.links').outerWidth();
    if($('.links').css('left')=='0px'){
        $('.links').animate({'left':-linksBoxWidth},1000)        
        $('.open').animate({'left':'50px' },1000)
    }
})
/*************************************************/
let singers=['singer1','singer2','singer3','singer4'];
for (let i = 0; i < singers.length; i++) {
    if(singers[i] == 'singer1')
    {
        $(`.${singers[i]} p`).fadeIn(0);
    }
    else
    {
        $(`.${singers[i]} p`).fadeOut(0);
    }
    $(`.singers .${singers[i]} h2`).click(function(){
        $(`.singers p`).slideUp(400);
        $(`.singers .${singers[i]} p`).slideToggle(400);
    });
}
/*************************************************/
let countDownDate = new Date ("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
    let DateNow = new Date ().getTime();
    let dateDiff = countDownDate-DateNow;
    let Days = Math.floor(dateDiff/(1000*60*60*24));
    let hours = Math.floor(dateDiff%(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor(dateDiff%(1000*60*60)/(1000*60));
    let secounds = Math.floor(dateDiff%(1000*60)/(1000));
    
    document.querySelector('.boxDays').innerHTML=Days <10 ? `0${Days}`:Days+' D';
    document.querySelector('.boxHours').innerHTML=hours <10 ? `0${hours}`:hours+' H';
    document.querySelector('.boxMinutes').innerHTML=minutes <10 ? `0${minutes}`:minutes +' M';
    document.querySelector('.boxSecounds').innerHTML=secounds <10 ? `0${secounds}`:secounds +' S';

    if(dateDiff < 0){
        clearInterval()
    }
})
/********************************************************/
let content = document.querySelector('.content');
let countDownCharacters = document.querySelector('.countDownCharacters');
let maxChars = 100;
content.addEventListener('input',()=>{
    let remaining = maxChars - content.value.length;
    countDownCharacters.innerHTML = `${remaining} `;
    if(remaining<0){
        countDownCharacters.innerHTML=" your available character finished";
    }
});
/*******************************************************/
$(document).ready(function () {
    $('#loading').fadeOut(2000 , function(){
        $('body').css('overflow','visible')
    })    
});

