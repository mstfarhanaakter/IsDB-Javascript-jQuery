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

// $('#two').hide(6000);
// $('#two').show(6000);

$(document).ready(function(){
    $('#hide').click(function(){
        $('#one').hide(5000);
        $('#two').hide(6000);
    })
    $('#show').click(function(){
        $('#one').show(3000)
        $('#two').show(4000)

    })
})

//for table odd and even one 

$(document).ready(function(){

    //hide odd rows
    $('.hide').click(function(){
        $('tr:odd').hide(5000);
    })

    //hide even rows
    $('.show').click(function(){
         $('tr:even').hide(5000);
    })

    //table even rows 
    $('.toggle').click(function(){
        $('table').toggle(3000);
    })
})

// for ul 
 $(document).ready(function(){
    $('.first').click(function(){
         $("ul li:first-child").hide(4000);
    })
    $('.last').click(function(){
         $('ul li:last-child').hide(4000);
    })
    $('.toggle-ul').click(function(){
          $('ul li').toggle(4000)
    })
   
   })

    
       
        

