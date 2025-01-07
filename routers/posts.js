const express = require("express");
const router = express.Router();
const postController = require(`../controllers/postController.js`)

// index
router.get(`/`, postController.index );

// show
router.get(`/:title`, postController.show);

// store
router.post(`/`,postController.store);

// update
router.put(`/:title`, postController.update);

// modify
router.patch(`/:title`, postController.modify);

// destroy
router.delete(`/:title`, postController.destroy);


module.exports = router