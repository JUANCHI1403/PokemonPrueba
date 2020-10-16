$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        success: function (data) {
            $("#Pokemon").html(data.name)
        },
        dataType: 'json',
    });
});

