var express = require('express')

const app = express()
const port = 3000

const pug = require('pug');

const compiledFunction = pug.compileFile('pugtest.pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
	res.send(compiledFunction());
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 5,
  };
  res.json(cat);
});

/* Login user */
app.post('/', function (req, res, next) {
	
	console.log(req.body);
	
	res.send("Hello "+req.body.username);
	
	/*
	const username = req.body.username;
    let loginResult = true; // login(username, req.body.password);
	if (loginResult) {
        res.render('users', {username: username});
    }
    else {
        res.render('index', {error: true});
    }
	*/
});
// module.exports = router;