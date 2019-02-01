const Controller = require('./controller');

module.exports = app => {
    app
        .get('/api/markermaps', Controller.getAll)
        .get('/api/markermaps/:id', Controller.getOne)
        .post('/api/markermaps', Controller.create)
        .put('/api/markermaps/:id', Controller.update)
        .delete('/api/markermaps/:id', Controller.delete);
};