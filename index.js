$(document).ready(function(){
    $('.menu').on('click', le);
    
});

function le(){
    if($('nav ').is(':hidden'))
    {
        $('nav').slideDown();
        $('.menu').html(' &laquo;');
    }else
    {
        $('nav').slideUp();
        $('.menu').html(' &raquo;');
    }    
}