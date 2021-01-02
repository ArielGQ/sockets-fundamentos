var socket = io();
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor')
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Ariel',
    mensaje: 'Hola Mundillo'
}, function(resp) {
    console.log('Respueta de server:', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje)
});