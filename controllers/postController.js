const posts = require('../data/posts.js');

// index
const index = (req,res) => {

  let listTaggedPosts= posts;
  let tag = req.query.tag;

// test per errore 500
  // funzioneTestErrore500() 

  if(tag){
    listTaggedPosts = posts.filter(post => post.tags.includes(tag));
  }


  res.json(listTaggedPosts);
};

// show
const show = (req,res) =>{
 const post = posts.find(post => post.title == req.params.title)

//  if (!post){

//   res.status(404)

//   return res.json({
//     message: `articolo non trovato`,
//     status: 404,
//     error: `not found`
//   })
//  }

 res.json(post)
};

// store
const store = (req,res) => {
  // console.log(req.body);
// creazione nuovo id
  const id = posts.at(posts.length - 1).id +1;
// creazione nuovo oggetto
  const newPost = {
    id,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }

  posts.push(newPost);

  res.status(201);
  res.json(posts);
  
};

// update
const update = (req,res) =>{
  const title = req.params.title;
  const post = posts.find(post => post.title == title);

  if (!post){

    res.status(404);
    return res.json({
      message: `articolo non trovato`,
      status: 404,
      error: `not found`
    })
  }
  post.title =req.body.title;
  post.content=req.body.content;
  post.image=req.body.image;
  post.tags= req.body.tags;

  res.json(post)
  // res.send(`Modifico interamente il post con titolo ${req.params.title}`);
}

// modify
const modify = (req,res) =>{
  res.send(`Modifico parzialmente il post con titolo ${req.params.title}`);
};

// destroy
const destroy = (req,res) =>{

  const post = posts.find(post => post.title == req.params.title)

  // if (!post){
 
  //  res.status(404)
 
  //  return res.json({
  //    message: `articolo non trovato`,
  //    status: 404,
  //    error: `not found`
  //  })
  // }
 
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