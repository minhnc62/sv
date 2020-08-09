const express = require('express');
const mongoose = require('mongoose');
const trainerRouter = require('./routes/trainer');
const app = express();
const Trainer = require('./models/trainer');
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://nguyencongminh:ZiXHVY3STJKyDCs@cluster0.tdvrg.mongodb.net/admin123?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');




app.use(express.static('./public'));
app.use(express.static('./uploads'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.get('/', async (req, res) => {
    const trainers = await Trainer.find().sort({nameTrainer: 'asc'});
   
    res.render('trainers/index', { trainers: trainers });
});


app.use('/trainer', trainerRouter);

app.listen(port);