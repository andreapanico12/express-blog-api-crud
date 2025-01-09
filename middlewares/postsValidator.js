const posts = require(`../data/posts`);

function validatePost (req,res,next){
  let error = ``;
  if(!req.body.title || !req.body.content || !req.body.image || !req.body.tags){
    error = `Tutti i campi sono obbligatori`;
    res.status(400);
    return res.json({
      message:`Errore di validazione`,
      status:400,
      error
    })
  }

  next();
}

module.exports = validatePost;