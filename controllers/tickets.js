var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            title: `New Ticket for ${flight.airline} Flight ${flight.flightNo}`,
            flight
        });
    })
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        req.body.flight = flight._id;
        Ticket.create(req.body);
        res.redirect(`/Flights/${flight._id}`);
    });
}

function deleteTicket(req, res) {
    Ticket.deleteOne({ _id: req.params.id}, function(err) {
        res.redirect(`/flights/${req.params.fid}`);
    });
}