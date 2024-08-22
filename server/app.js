const express = require('express');
const { v4: uuidv4 } = require('uuid');
const https = require('https');
const app = express();
const port = 3000
        
app.get('/uuid', (req, res) => {
        res.json({ uuid: uuidv4() });
});

app.listen(port, () => {
        console.log('UUID service listening at http://localhost:${port}');
});
