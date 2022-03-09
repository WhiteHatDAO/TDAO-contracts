const Article = require("../models/article-model");

createArticle = (req, res) => {
  Article.create({
    walletId: req.body.walletId,
    body: req.body.body,
    cover: req.body.cover,
    price: req.body.price,
    title: req.body.title,
    authors: req.body.authors,
    abstract: req.body.abstract,
    blockchain: req.body.blockchain,
    categories: req.body.categories
  }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: "Article was created successfully." });
  })
}

updateArticle = async (req, res) => {

}

deleteArticle = async (req, res) => {

}

getArticles = async (req, res) => {
  await Article.find(req.query, (err, article) => {
    if(err) {
      return res.status(400).json({ success: false, error: err });
    }

    if(!article) {
      return res
        .status(404)
        .json({ success: false, error: 'Article not found' })
    }
    return res.status(200).json({success: true, data: article});
  }).catch((err) => console.error(err))
}

getArticlesByField = async (req, res) => {
  // await Article.find({ `` req.query.field }, (err, article) => {
  //   if (err) {
  //     return res.status(400).json({ success: false, error: err });
  //   }
  //   if (!article) {
  //     return res
  //       .status(404)
  //       .json({ success: false, error: `Article not found` });
  //   }
  //   return res.status(200).json({ success: true, data: article });
  // }).catch((err) => console.error(err));
}


module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticlesByField,
};
