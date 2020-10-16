$(document).ready(function () {
    consultarAPI("pikachu")
});

// Conectando boton con input
$("button").click(function () {
    let pokemon = $("#input").val()
    consultarAPI(pokemon)
}
)

function consultarAPI(nombrePokemon) {
    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
        success: function (data) {
            $("#Pokemon").html(data.name)
        },
        dataType: 'json',
    });
}

