const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const postRoutes = require("./routes/postRoutes"); // Імпортуємо маршрути

const app = express();
const PORT = process.env.PORT || 3000;
const db = process.env.MONGO_URI || 'mongodb+srv://new-user:qwertyuiop@cluster0.rzt0c.mongodb.net/Node-blog';

// Налаштування
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(postRoutes); // Використання маршрутів

// Підключення до MongoDB і запуск сервера
async function start() {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

start();
