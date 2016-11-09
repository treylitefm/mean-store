(function() {
    var mongoose = require('mongoose')

    var OrderSchema = new mongoose.Schema({
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }, {timestamps:true})

    mongoose.model('Order', OrderSchema)
})()
