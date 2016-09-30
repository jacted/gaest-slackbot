'use strict'

var request = require('superagent')

var fetchRooms = (locationID, price, limit, page) => {

    price *= 100

    return new Promise((resolve, reject) => {

        request
        .get('https://api.gaest.com/locations/'+locationID+'/rooms')
        .end((err, res) => {

            if(err) {
                return reject('API_ERROR')
            }

            let rooms = res.body.data

            // Sort rooms by price
            rooms.sort(function(a, b) {
                return parseFloat(a.attributes.hourly_price) - parseFloat(b.attributes.hourly_price)
            });

            // Pagination
            let fromLimit = (page - 1) * limit
            let toLimit = (page) * limit

            rooms = res.body.data.slice(fromLimit, toLimit)

            // Filter on price
            let filterRooms = rooms.filter((el) => {
                return el.attributes.hourly_price <= price
            });

            return resolve(filterRooms)

        })
        

    })

}

module.exports = {
    fetchRooms: fetchRooms
}