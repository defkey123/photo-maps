//database initialization
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maps_project_db');
mongoose.Promise = global.Promise;

var MarkerSchema = new mongoose.Schema({
    name: { type: String },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
});

var MarkerMapSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Map name is required"] },
    description: { type: String },
    markers: [MarkerSchema]
});
const MarkerMap = mongoose.model('MarkerMap', MarkerMapSchema);

module.exports = MarkerMap;