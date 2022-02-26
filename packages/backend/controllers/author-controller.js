const Author = require("../models/author-model");

createAuthor = (req, res) => {
    
};

deleteAuthor = (req, res) => {

};

updateAuthor = (req, res) => {
    
};

getAuthors = async (req, res) => {
  await Author.find({}, (err, authors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!authors.length) {
      return res
        .status(404)
        .json({ success: false, error: "Authors not found" });
    }
    return res.status(200).json({ success: true, data: authors });
  }).catch((err) => console.error(err));
};

getAuthorByWalletId = async (req, res) => {
  await Author.find({ walletId: req.params.id }, (err, author) => {
    console.log(req.params.id);
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!author) {
      return res
        .status(404)
        .json({ success: false, error: `Author not found` });
    }
    return res.status(200).json({ success: true, data: author });
  }).catch((err) => console.error(err));
};

module.exports = {
  createAuthor,
  deleteAuthor,
  updateAuthor,
  getAuthors,
  getAuthorByWalletId,
};
