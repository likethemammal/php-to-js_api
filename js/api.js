function APIRequest(method, parameters) {
    parameters = parameters || {};

    var defaultEndpoint = 'api.php',
        hostname = window.location.host,
        params = $.param({params: parameters}),
        url = 'http://' + hostname + '/' + defaultEndpoint + '?method=' + method + '&' + params;

    return $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',

        success: function(data, textStatus, ajaxRequest) {
            if (!data) {
                console.warn("ajax error: status: error, returned: "+data, ajaxRequest, this);
            } else {
                console.warn("ajax success: status: "+textStatus+", returned: "+data, ajaxRequest, this);
            }
            console.log(data);
        },

        error: function(ajaxRequest, textStatus, errorThrown) {
            console.warn("ajax error: status: "+textStatus+", error: "+errorThrown, ajaxRequest, this);
        }
    });

}