
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/contact', (req, res) => res.send({name:'03060893074',fax:''}))
app.get('/contact', (req, res) => res.send({name:'03060893074',fax:''}))
app.get('/contact/:ddd', (req, res) => res.send({name:'03060893074',fax:''}))
app.get('/about', (req, res) => res.send({name:'ali_ajaz',fax:'02134387474'}))
app.get('/profile', (req, res) => res.send({'name':'ali ajaz'}));
app.get('/profile1', (req, res) => res.send({'name':'ali ajaz'}));

// mlab
// local Storage;
// mongos library;
// body parser;



app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))


