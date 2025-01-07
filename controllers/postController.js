const posts = require('../data/posts.js');

// index
const index = (req,res) => {

  let listaTaggedPosts= posts;
  let tag = req.query.tag;

  if(tag){
    listaTaggedPosts = posts.filter(post => post.tags.includes(tag));
  }


  res.json(listaTaggedPosts);
};

// show
const show = (req,res) =>{
 console.log(req.params);
 const post = posts.find(post => post.title == req.params.title)

 if (!post){

  res.status(404)

  return res.json({
    message: `articolo non trovato`,
    status: 404,
    error: `not found`
  })
 }

 res.json(post)
};

// store
const store = (req,res) => {
  res.send(`Creo un nuovo post nella lista post`);
};

// update
const update = (req,res) =>{
  res.send(`Modifico interamente il post con titolo ${req.params.title}`);
}

// modify
const modify = (req,res) =>{
  res.send(`Modifico parzialmente il post con titolo ${req.params.title}`);
};

// destroy
const destroy = (req,res) =>{
  res.send(`Elimino il post con titolo ${req.params.title}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}