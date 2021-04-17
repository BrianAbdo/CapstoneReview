const express = require('express');
const app = express();
const path = require('path')
const Sequelize = require('sequelize');
const { quotes } = require('./models');

var bodyParser = require('body-parser');

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/Random', async (req, res) => {
    var currentDayOfWeek =weekday[new Date().getDay()]
   
    const quotesData = await quotes.findAll({where:{week_day:currentDayOfWeek}});
    if(quotesData == null || quotesData.length ==0)
    {
        res.status(400).send("No Quotes to Give");

    }
    console.log(quotesData)
    // db.Saturday[getRandomInt(db.Saturday.length)]
    res.json({ message:quotesData[getRandomInt(quotesData.length)].quote })

});
app.get('/RandomByDate/:day', async (req, res) => {
    var day = req.params['day']
    
    if(day < 0 || day > 6)
        {
          res.status(400).send("Day of the week needs to be between 0 and 6");
  
        }
    var currentDayOfWeek =weekday[day]
    
    const quotesData = await quotes.findAll({where:{week_day:currentDayOfWeek}});
    if(quotesData == null || quotesData.length ==0)
    {
        res.status(400).send("No Quotes to Give");

    }
    console.log(quotesData)
    // db.Saturday[getRandomInt(db.Saturday.length)]
    res.json({ message:quotesData[getRandomInt(quotesData.length)].quote })

});

app.listen(process.env.PORT  || 8080, () => {
});