const app = require("./app");
const port = 3000;

// Novo endpoint para converter decimal para hexadecimal
app.get("/to-hex/:decimal", (req, res) => {
   const decimal = parseInt(req.params.decimal, 10);
   if (isNaN(decimal)) {
     return res.status(400).json({ error: "Invalid decimal number" });
   }
   const hex = decimal.toString(16).toUpperCase();
   res.json({ decimal, hex });
});

app.listen(port, () => {
   console.log(`Aplicação rodando em  http://localhost:${port}`);
   // ou a mensagem em português, se preferir
});