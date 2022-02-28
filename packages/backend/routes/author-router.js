const express = require("express");

const AuthorController = require("../controllers/author-controller");

const router = express.Router();

router.post("/author", AuthorController.createAuthor);
router.put("/author/walletId", AuthorController.updateAuthor);
router.delete("/author/id", AuthorController.deleteAuthor);
router.get("/authors", AuthorController.getAuthors);
router.get("/author/walletId", AuthorController.getAuthorByWalletId);

module.exports = router;
