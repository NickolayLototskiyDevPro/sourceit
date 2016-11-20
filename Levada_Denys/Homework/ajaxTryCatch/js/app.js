function ajaxTryCatch() {
    $.ajax({
        url: 'https://www.google.com.ua'
    }).done(function() {
        try {
            throw new Error('Ajax complete!');
        } catch (ex) {
            console.log(ex);
        }
    })
};

ajaxTryCatch();