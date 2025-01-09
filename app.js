const express = require('express');
const app = express();
const postRouter = require('./routers/posts')
const port = 3000;
const errorsHandler = require(`./middlewares/errorsHandler`)
const notFound = require(`./middlewares/notFoundError`)


// body-parser
app.use(express.json());

app.use(`/imgs`, express.static(`public/imgs`));

app.use(`/posts`,postRouter);

// middlewares di gestione errori
app.use ( errorsHandler );
app.use (notFound);


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})