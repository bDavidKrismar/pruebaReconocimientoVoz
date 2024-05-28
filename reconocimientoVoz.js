document.getElementById('start-btn').addEventListener('click', function() {
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'es-ES';
        
        recognition.onstart = function() {
            // Muestra el indicador de escucha
            document.getElementById('listening-indicator').style.display = 'block';
        };

        recognition.onresult = function(event) {
            var colorHeard = event.results[0][0].transcript.trim().toLowerCase();
            var textoReconocido=document.getElementById("textoRec");
            console.log("entro");
            console.log(colorHeard);
            changeBackgroundColor(colorHeard);
        };

        recognition.onend = function() {
            // Oculta el indicador de escucha
            document.getElementById('listening-indicator').style.display = 'none';
        };

        recognition.onerror = function(event) {
            console.error('Error en el reconocimiento de voz: ', event.error);
            // Asegúrate de ocultar el indicador si hay un error
            document.getElementById('listening-indicator').style.display = 'none';
        };

        recognition.start();
    } else {
        alert('Tu navegador no soporta webkitSpeechRecognition');
    }
});


function changeBackgroundColor(color) {
    console.log("color", color);
    // Mapeo de colores en español a inglés
    var colorMap = {
        'rojo': 'red',
        'verde': 'green',
        'azul': 'blue',
        'amarillo': 'yellow',
        'naranja': 'orange',
        'negro': 'black',
        'blanco': 'white',
        'morado': 'purple',
        'rosa': 'pink'
    };

    // Verifica si el color en español tiene un equivalente en inglés
    var colorInEnglish = colorMap[color];
    if (colorInEnglish) {
        document.body.style.backgroundColor = colorInEnglish;
    } else {
        console.log('Color no reconocido o soportado');
    }
}

