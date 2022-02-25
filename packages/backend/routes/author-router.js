const express = require("express");

const AuthorController = require("../controllers/author-controller");

const router = express.Router();

router.post("/author", AuthorController.createAuthor);
router.put("/author/id", AuthorController.updateAuthor);
router.delete("/author/id", AuthorController.deleteAuthor);
router.get("/authors", AuthorController.getAuthors);
router.get("/authors/id", AuthorController.getAuthorById);

module.exports = router;
