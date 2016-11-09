(function() {
    var mongoose = require('mongoose')

    var CustomerSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 20,
            required: true,
            trim: true
        }
    }, {timestamps: true})

    mongoose.model('Customer', CustomerSchema)
})()
