// import express
const express = require("express");
// creo istanza
const app = express();
//prendo port dall file .env se non la trovo gli assegno 3000
const port = process.env.PORT || 3000;
// importo tutte le cose che andro a usare
const exampleRouter = require("./routes/examples");
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const corsPolicy = require("./middlewares/corsPolicy");
// definisco asset statici
app.use(express.static("public"));
// faccio una chiamata di prova a index
app.get("/", (req, res) => {
  res.send(`sto funzionando,sono la Home page`);
});
// tutte le rotte
app.use("/", exampleRouter);
app.use(errorsHandler);
app.use(notFound);
app.use(corsPolicy);
// metto il server in ascolto sulla mia porta
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
