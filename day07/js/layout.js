let ele_mainmenu=
document.getElementsByClassName('main_menu')[0];

ele_mainmenu.addEventListener('click'
    , function(){

    console.log('hello!!');
   document.getElementsByTagName('nav')[0]
       .classList.toggle('visible');



});
