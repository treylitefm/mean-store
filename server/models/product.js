(function() {
    var mongoose = require('mongoose')

    var ProductSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        url: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }, {timestamps: true})

    mongoose.model('Product', ProductSchema)
})()
