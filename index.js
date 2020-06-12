require('rootpath')();
var express = require('express');
var app = express();

var FetchPage = require('services/fetchPage');

app.get('/:id', function(req, res) {
    var pageId = req.params.id;
    console.log(pageId);
    new FetchPage().run(pageId)
    .then(function(page) {res.status(200).send(page);})
    .catch(
        function(error) {
            if(error.startsWith('(#803')) {
                res.status(404).send({error: 'Page not found'});
            }

            res.status(422).send({error: 'Non-page id provided'})
        }
    )
})

app.listen(3000, function () {});

module.exports = app;