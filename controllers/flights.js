var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}).sort('departs').exec(function(err, flights) {
        res.render('flights/index', {flights, title: 'All Flights'})
    })
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'New Flight'});
}

function create (req, res) {
    Flight.create(req.body)
    res.redirect('/flights')
}

function show (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {
               title: `${flight.airline} Flight ${flight.flightNo}`,
               flight,
               tickets
            });
        })
    })
}