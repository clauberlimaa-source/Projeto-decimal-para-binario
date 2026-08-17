const app = require("./app");
const port = 5501;

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});