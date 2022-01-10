$(document).ready(function() {
    $(".thumb img").click(function() {
        $("#mainImg").attr("src", $(this).attr('src'))
    })

    $(".buttons img").click(function() {
        var c = $(this).attr('data')
        $("#mainImg").attr("src", `images/galaxys8/${c}_1.jpg`)

        var images = $(".thumb img");
        for (var i = 0; i < images.length; i++)
            $(images[i]).attr('src', `images/galaxys8/${c}_${i+1}.jpg`)
    })

    $(".tab-content > div:not(#mobile)").hide()

    $(".tab a").click(function() {
        $(".tab a").removeClass('active')
        $(this).addClass('active')

        var h = $(this).attr('href')
        $(".tab-content > div").hide()
        $(h).show();
    })
})