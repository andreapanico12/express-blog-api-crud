const express = require('express');
const app = express();
const postRouter = require('./routers/posts')
const port = 3000;



app.use(express.json());

app.use(`/imgs`, express.static(`public/imgs`));

app.use(`/posts`,postRouter);


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})