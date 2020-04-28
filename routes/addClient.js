const express = require("express");

const clientController = require("../controllers/addClient");

const router = express.Router();

// GET /clients
router.get("/posts", clientController.getPosts);

// POST /clients
router.post("/post", clientController.createPost);

module.exports = router;
