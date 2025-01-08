const posts = require('../data/posts.js');

// index
const index = (req,res) => {

  let listTaggedPosts= posts;
  let tag = req.query.tag;

  if(tag){
    listTaggedPosts = posts.filter(post => post.tags.includes(tag));
  }


  res.json(listTaggedPosts);
};

// show
const show = (req,res) =>{
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

  const post = posts.find(post => post.title == req.params.title)

  if (!post){
 
   res.status(404)
 
   return res.json({
     message: `articolo non trovato`,
     status: 404,
     error: `not found`
   })
  }
 
  posts.splice(posts.indexOf(post),1)
  console.log(posts)
  res.sendStatus(204)
 };
 
  


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}