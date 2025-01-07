const posts = require('../data/posts.js');

// index
const index = (req,res) => {
  // res.send(`Visualizzo la lista dei posts`);
  res.json(posts);
};

// show
const show = (req,res) =>{
  res.send(`Visualizzo il post con titolo ${req.params.title}`);
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