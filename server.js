const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const appModule = require('./app');

app.get('/', (req, res) => {
    const greeting = appModule.getGreeting();
    res.send(greeting);
});

app.get('/affirmations', async (req, res) => {
    const affimation = await appModule.getAffirmation();
    res.send(affimation);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;