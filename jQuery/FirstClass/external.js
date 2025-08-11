$(document).ready(function(){
    $('.click').click(function(){
        $('h1').hide(5000)
    })
    $('.click').click(function(){
        $('h1').show(5000)
    })
})


// toggle 
$(document).ready(function(){
    $('#toggle').click(function(){
        $('h1').toggle(5000)
    })
})


// $('#one').hide(5000);
// $('#one').show(5000);

// $('.two').hide(6000);
// $('.two').show(6000);

$(document).ready(function(){
    $('#hide').click(function(){
        $('#one').hide(5000);
        $('.two').hide(6000);
    })
    $('.show').click(function(){
        $('#one').show(3000)
        $('.two').show(4000)

    })
})