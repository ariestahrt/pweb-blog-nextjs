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

    $.ajax({
        url: "https://analytics.nyakit.in/data/"+domain+".json",
        type: "get",
        async: false,
        success: function(msg) {
            for (const [key, value] of Object.entries(msg.data)) {
                if(key == path){
                    $('#views').html(value + " views");
                }
            }
        }
    });
}

setTimeout(track, 3000);