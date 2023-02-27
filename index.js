const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

// app.get('/test', (req, res) => {
//     res.send('You  are on testing page');
//     console.log('testing');
// });

// app.get('/', (req, res) => {
//     res.send('Home page');
//     console.log('Hello World!');
// });

app.listen(port, () => {
    console.log(`Example app listening on localhost ${port}`);
});
