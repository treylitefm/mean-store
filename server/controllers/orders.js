(function() {
    function OrdersFetchController(ModelName) {
        var mongoose = require('mongoose')
        var Model = mongoose.model(ModelName)

        function _fetch(req, res) {
            Model.find({}).populate('customer product').exec(function(err, docs) {
                res.json(err ? err : docs)
            })
        }

        function _fetchOne(req, res) {
            Model.findOne(req.body).populate('customer product').exec(function(err, docs) {
                res.json(err ? err : docs)
            })
        }

        function _fetchRecent(req, res) {
            Model.find({}).sort('-createdAt').limit(5).exec(function(err, posts) {
                
            })
        }

        function _create(req, res) { //TODO:so that orders are accessible from customer, embed order in customer object as well
            Model.create(req.body, function(err, docs) {
                if (err) { res.json(err) } else {
                    Model.find({}).populate('customer product').exec(function(err, docs) {
                        res.json(err ? err: docs)
                    })
                }
            })
        }

       return {
            fetch: _fetch,
            fetchOne: _fetchOne,
            fetchRecent: _fetchRecent,
            create: _create
        }
    }

    module.exports = new OrdersFetchController('Order')
})()
