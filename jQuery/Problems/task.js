$(document).ready(() => {
    $(".btn").click(() => {
        $("#para1").fadeOut(5000);
        $("#para1").fadeIn(5000);
    })
})

$(document).ready(() => {
    $(".image").mouseenter(() => {
        $(".image").hide(5000)
    })
    $(".btnImg").click(() => {
        $(".image").show(5000)
    })
})


$(document).ready(function () {
    $(".hoverBox").hover(function () {
        //mouse Enter
        $(this).css('background-color', 'red')
    },
        function () {
            //Mouse leave
            $(this).css('background-color', 'lightblue')
        }
    )
})

$(document).ready(() => {
    $(".submit").click(() => {
        alert("Your submit button was clicked!")
    })
})

$(document).ready(() => {
    $(".addBtn").click(() => {
        $("#mylist").append("<li>New Item</li>")
    })
})
