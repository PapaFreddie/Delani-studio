
//Click mouse function
$('#btn0').on('click', function(){
    $('.about').toggle(1000);
    

});

//What we do section
$('#btn1').on('click');
$('.paragraph').hide();
$('#btn1').on('click', function(){
    $('.paragraph').toggle(2000,function(){
        $('#dicon').hide(200);
    });
});

$('#btn1').on('click',  function(){
    $('#dicon').show();


});




$('#btn2').on('click');
$('.paragraph1').hide();
$('#btn2').on('click', function(){
    $('.paragraph1').toggle(2000,function(){
        $('#dev').hide(200);
    });
});

$('#btn2').on('click',  function(){
    $('#dev').show();


});

$('#btn3').on('click');
$('.paragraph2').hide();
$('#btn3').on('click', function(){
    $('.paragraph2').toggle(2000,function(){
        $('#product').hide(200);
    });
});

$('#btn3').on('click',  function(){
    $('#product').show();


});

//Contact us section
$('#submit').load('text.html', function(responseTxt, statusTxt, xhr){
    if(statusTxt == 'success'){
        alert('Thanks for reaching us');
    }else if(statusTxt == 'error'){
        alert('Error: '+xhr.statusText);
    }

});




