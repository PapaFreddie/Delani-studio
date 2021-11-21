$('#btn0').on('click', function(){
    $('.about').toggle(1000);
    

});
$('#btn1').on('click');
$('.paragraph').hide();
$('#btn1').on('click', function(){
    $('.paragraph').toggle(1000,function(){
        $('#dicon').hide(1000);
    });
});



$('#btn2').on('click');
$('.paragraph1').hide();
$('#btn2').on('click', function(){
    $('.paragraph1').toggle(1000,function(){
        $('#dev').hide(1000);
    });
});


$('#btn3').on('click');
$('.paragraph2').hide();
$('#btn3').on('click', function(){
    $('.paragraph2').toggle(1000,function(){
        $('#product').hide(1000);
    });
});






