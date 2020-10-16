$(document).ready(function(){
    consultaAPI("pikachu")
    canvas()
    
    })
    
    $("button").click(function(){
        let pokemon = $("#input").val()
        consultaAPI(pokemon)
    })
    
    function consultaAPI(nombrePokemon) {
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
            success: function (data) {
                
                $("#pokemon").html(data.name)
                let defensa = data.stats[2].base_stat
                canvas(defensa)
            },
            dataType: 'json'
        });
    }
    
    
    
    
    // Canvas
    
    function canvas(defensa){
        var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Desktop Browser Market Share in 2016"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: [
                { y: defensa, label: "defensa" },
            ]
        }]
    });
    chart.render();
    }
    
    
    