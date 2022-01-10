$(document).ready(function() {
    $("#gototop").hide

    $(window).scroll(function() {
        if ( $(this).scrollTop() >= 330 )
        {
            $("#gototop").show("slow")
        }
        else $("#gototop").hide("slow")
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 15000);
    })
})