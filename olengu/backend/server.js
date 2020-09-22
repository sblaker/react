var cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const express = require('express');
app = express();

app.use(fileUpload());
app.use('/pictures',express.static('pictures'));

app.use(cors({
  origin: 'http://localhost:3000'
  }));

var port = process.env.PORT || 3500;
app.listen(port);
console.log('server started on port ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }


  const file = req.files.file;

  file.mv(`${__dirname}/pictures/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/pictures/${file.name}` });
  });
});

