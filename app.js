global._classes = {
    express: require("express"),
    mongoClient: require("mongodb").MongoClient,
    session: require('express-session')
};

var app = _classes.express();

((function () {
    var session_index = 0;
    app.use(_classes.session({
        genid: function (req) {
            session_index += 1;
            return 's' + Math.floor(1000000 + 100000000 * Math.random()).toString(36) + '-' + session_index.toString(36);
        }, secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true
    }));
})());

app.use('/', _classes.express.static(__dirname + '/public'));
app.use('/js', _classes.express.static(__dirname + '/public/js'));
app.use('/css', _classes.express.static(__dirname + '/public/css'));
app.use('/img', _classes.express.static(__dirname + '/public/img'));

/**
 * start of the API methods
 */
app.post('/api/login', function (req, res, next) {
    res.send({msg: "This stuff is actually working"});
});


app.listen(8080, function () {
    console.log('Application is listening 8080 port');
});

