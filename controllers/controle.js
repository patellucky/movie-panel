const multer = require('multer');
const movie = require('../models/moiveSchema')
const fs = require('fs')

let movieId;

const home = async (req, res) => {
    try {
        const data = await movie.find();
        console.log(data)
        return res.render("dashboard", { moviesData: data })
    } catch (error) {
        console.log(error)
    }
}

const addMovie = async (req, res) => {
    let image = req.file.path
    try {
        let data = await movie.create({ ...req.body, image });
        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

const add_movie = async (req, res) => {
    return res.render("Addmovie")
}

const updateMovie = async (req, res) => {
    let image = req.file.path
    try {
        let data = await movie.findOneAndUpdate(movieId, { ...req.body, image });
        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

const edit_movie = async (req, res) => {
    let { id } = req.params;
    movieId = id
    try {
        const data = await movie.findOne(id);
        return res.render("Editmovie", { data })
    } catch (error) {
        console.log(error)
    }
}

const deleteMovie = async (req, res) => {
    let { id } = req.params;
    try {
        let data = await movie.findOneAndDelete(id).then((singleRecode) => {
            fs.unlinkSync(singleRecode.image)
            return res.redirect("/");
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, addMovie, updateMovie, deleteMovie, add_movie, edit_movie }