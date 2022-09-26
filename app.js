import express from 'express';
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;


router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile(path + 'index.html');
});

router.get('/tux', (req, res) => {
  res.sendFile(path + 'tux.html');
});


app.use(express.static('public'))
app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {
  console.log(`The app listening on port: ${port}`)
});
