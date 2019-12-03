$(document).ready(function () {
   
    $('#img4').hide();
    $('#img5').hide();

    $('#button1').click(function(){
        $('#img1').hide(1000);
        $('#img4').show(1000);
    })

    $('#button2').click(function(){
        $('#img2').hide(1000);
        $('#img5').show(1000);

    })

    $('#button3').click(function(){
        $('#img4').hide(1000);
        $('#img5').hide(1000);
        $('#img1').show(1000);
        $('#img2').show(1000);
    })
})
