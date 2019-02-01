const MarkerMap = require('./models');

module.exports = {
    getAll: (req, res) => {
        MarkerMap.find()
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    getOne: (req, res) => {
        var id = req.params.id;
        MarkerMap.findById({ _id: id })
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        var id = req.params.id;
        MarkerMap.create(req.body)
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        var id = req.params.id;
        MarkerMap.update({ _id: id }, req.body, {runValidators: true})
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        var id = req.params.id;
        MarkerMap.findByIdAndDelete({ _id: id })
            .then(results => res.json(results))
            .catch(err => res.json(err));
    }

};
