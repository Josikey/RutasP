const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010;

// Servir archivos estáticos desde 'src'
app.use(express.static(path.join(__dirname, 'src')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'C:/Users/Jose Ilikey/OneDrive/Documentos/Progra Web2/RutasP' });
});

// Ruta para la página "Quiénes Somos"
app.get('/quiene_soy', (req, res) => {
    res.sendFile('quiene_soy.html', { root: 'C:/Users/Jose Ilikey/OneDrive/Documentos/Progra Web2/RutasP' });
});

// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
    res.sendFile('contacto.html', { root: 'C:/Users/Jose Ilikey/OneDrive/Documentos/Progra Web2/RutasP' });
});

// Iniciar el servidor en el puerto 3010
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

