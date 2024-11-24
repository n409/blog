const Post = require("../models/postModel");

// Головна сторінка
exports.renderMainPage = (req, res) => {
    res.render("index", { title: "Main page" });
};

// Сторінка додавання посту
exports.renderAddPostPage = (req, res) => {
    res.render("add-post", { title: "Add post" });
};

// Додавання нового посту
exports.createPost = (req, res) => {
    const { title, author } = req.body;
    const post = new Post({ title, author });

    post.save()
        .then(() => res.redirect("/posts"))
        .catch((error) => {
            console.log(error);
            res.render("error");
        });
};

// Отримання всіх постів
exports.getAllPosts = (req, res) => {
    Post.find()
        .then((posts) => res.render("posts", { title: "Posts", posts }))
        .catch((error) => {
            console.log(error);
            res.render("error");
        });
};

// Сторінка редагування посту
exports.renderEditPostPage = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then((post) => res.render("edit-post", { title: post.title, id: post._id, post }))
        .catch((error) => {
            console.log(error);
            res.render("error");
        });
};

// Оновлення посту
exports.updatePost = (req, res) => {
    const { title, author } = req.body;
    const id = req.params.id;

    Post.findByIdAndUpdate(id, { title, author })
        .then(() => res.redirect("/posts"))
        .catch((error) => {
            console.log(error);
            res.render("error");
        });
};

// Видалення посту
exports.deletePost = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndDelete(id)
        .then(() => res.redirect("/posts"))
        .catch((error) => {
            console.log(error);
            res.render("error");
        });
};
