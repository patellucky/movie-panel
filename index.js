const express = require('express')
const path = require('path');
const fs = require('fs')
const db = require('./config/database');
const router = require('./router/router');

const app = express();


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))

app.use("/uploads/img", express.static(path.join(__dirname, "/uploads/img")))

app.use(router);

app.listen(8081, (err) => {
    db();
    err ? console.log("Some thing went wrong") : console.log("server started on http://localhost:8081")
})