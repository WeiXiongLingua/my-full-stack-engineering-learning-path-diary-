const express = require('express');

const app = express();


app.get('/:id.html', (req, res) => {
    res.send('Content File' + req.params.id);
    console.log(req.params.id)
})
app.listen(3000, () => {
    console.log('running');
})