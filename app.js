global._classes = {
    express: require("express"),
    mongoClient: require("mongodb").MongoClient,
    session: require('express-session')
};


var app = _classes.express();

app.listen(8080, function () {
    console.log('Application is listening 8080 port');
});

