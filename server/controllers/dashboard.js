(function() {
    function DashboardController() {
        var mongoose = require('mongoose')
        mongoose.Promise = require('q').Promise
        var Customer = mongoose.model('Customer')
        var Order = mongoose.model('Order')
        var Product = mongoose.model('Product')


        function _index(req, res) {
            var customersRecent, ordersRecent, productsRecent

            Customer.find({}).sort('-createdAt').limit(5).exec()
                .then(function(customers) {
                    customersRecent = customers
                    return Product.find({}).sort('-createdAt').limit(5).exec()
                })
                .then(function(products) {
                    productsRecent = products
                    return Order.find({}).populate('customer product').sort('-createdAt').limit(5).exec()
                })
                .then(function(orders) {
                    ordersRecent = orders
                    res.json({
                        orders: ordersRecent,
                        products: productsRecent,
                        customers: customersRecent
                    })
                })
        }

        return {
            index: _index
        }

    }

    module.exports = new DashboardController()
})()
