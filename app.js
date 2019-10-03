const compression = require('compression');
const express = require('express');
const app = express();
app.use(compression());
const port = 3000;

app.get('/', (req, res) => {
	res.send('This one runs an express server!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
