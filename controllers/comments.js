const comments = require('../data/comments');
const commentCount = comments.length;

const list = (req, res) => {
    res.json(comments);
  };

const show = (req, res) => {
    const id = req.params.commentId;
  
    const foundComment = comments.find((comment) => comment._id === Number(id));
    res.json(foundComment);
  };
const create = (req, res) => {
    const newComment = {
      _id: commentCount + 1,
      ...req.body,
      postId: 1,
    };
  
    comments.push(newComment);
    res.json(newComment);
  };

  module.exports = {
    list, 
    show, 
    create
}