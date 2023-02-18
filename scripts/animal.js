
var name = 'cheetah'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
    headers: { 'X-Api-Key': '3LsUYQWyPw+HXBwJ/+pmbw==nfBUKvQrB3Ifq5eT'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


