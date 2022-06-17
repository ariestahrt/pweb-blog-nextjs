function track(){
    let domain = window.location.host;
    let path = window.location.pathname;

    $.ajax({
        url: "https://analytics.nyakit.in/hits.php?secret=__secret__",
        type: "post",
        async: false,
        data: {
            "domain": domain,
            "path": path
        },
        success: function(msg) {
            // alert(msg);
        }
    });

    let data_analytics = null;

    $.ajax({
        url: "https://analytics.nyakit.in/data/"+domain+".json",
        type: "get",
        async: false,
        success: function(msg) {
            data_analytics = msg;
            // console.log(data_analytics);
        }
    });

    $('#post > .list_post').each(function () {
        // console.log(data_analytics);
        let data_slug = $(this).attr('data-slug');
        for (const [key, value] of Object.entries(data_analytics.data)) {
            if(key == data_slug){
                $(this).find(".views_count").html(value + " views");
            }
        }
    });
}

setTimeout(track, 3000);
