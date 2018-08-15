'use strict';
const article = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const schema = new Schema({
    title: String,
    content: String,
    type: String,
    createdAt: Date,
    author: String,
    comments: Number,
  });
  return mongoose.model('Article', schema);
};
module.exports = article;
