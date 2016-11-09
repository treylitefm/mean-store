(function() {
    var express = require('express')
    var app = express()
    var port = 8080
    var bp = require('body-parser')
    var path = require('path')

    app.use(express.static(path.join(__dirname, './client')))
    app.use(bp.json())

    require('./server/config/mongoose.js')
    require('./server/config/routes.js')(app)

    app.listen(port, function() {
        console.log('Node listening on',port)
    })
})()
