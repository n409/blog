const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Головна сторінка
router.get("/", postController.renderMainPage);

// Сторінка додавання посту
router.get("/add-post", postController.renderAddPostPage);

// Додавання нового посту
router.post("/add-post", postController.createPost);

// Отримання всіх постів
router.get("/posts", postController.getAllPosts);

// Сторінка редагування посту
router.get("/edit-post/:id", postController.renderEditPostPage);

// Оновлення посту
router.put("/edit-post/:id", postController.updatePost);

// Видалення посту
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
