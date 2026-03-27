const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Endpoint de prueba (simula tu API)
app.get("/api/items", (req, res) => {
  const items = [
    {
      id: 1,
      nombre: "Jordan 1 Retro",
      marca: "Nike",
      categoria: "Sneakers",
      precio_estimado: 5000
    },
    {
      id: 2,
      nombre: "Funko Batman",
      marca: "Funko",
      categoria: "Figuras",
      precio_estimado: 800
    }
  ];

  res.json(items);
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});