import express from "express"
import morgan from "morgan"
import { fileURLToPath } from "url"
import path from "path"


const app = express()
const Port = 4000

app.use(morgan("dev"))
app.use(express.json())

// Obtén la ruta completa del archivo actual (app.js)
const __filename = fileURLToPath(import.meta.url);

// Usa path.dirname para obtener el directorio
const __dirname = path.dirname(__filename);

// Sirve archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname)));  // Usa __dirname para servir el directorio actual



// Servir el archivo index.html en la raíz
app.get("/", (req, res) => {
    const filePath = path.resolve("index.html"); // Usamos path.resolve para obtener la ruta absoluta
    res.sendFile(filePath);
});


app.listen(Port, () =>{
    console.log(`Servidor corriendo en http://localhost:${Port}`)
})