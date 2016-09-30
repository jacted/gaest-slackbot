'use strict'

var request = require('superagent')

var fetchRooms = (locationID, price, limit, page, capacity) => {
  price *= 100

  return new Promise((resolve, reject) => {
    request
      .get('https://api.gaest.com/locations/' + locationID + '/rooms')
      .end((err, res) => {
        if (err) {
          return reject('API_ERROR')
        }

        let rooms = res.body.data

        // Sort rooms by price
        rooms.sort(function (a, b) {
          return a.attributes.hourly_price - b.attributes.hourly_price || a.attributes.capacity - b.attributes.capacity
        })

        // Filter
        var filteredRooms = rooms.filter((el) => {
          return el.attributes.hourly_price <= price && el.attributes.capacity >= capacity
        })

        // Pagination
        let fromLimit = (page - 1) * limit
        let toLimit = (page) * limit

        rooms = filteredRooms.slice(fromLimit, toLimit)

        return resolve(rooms)
      })
  })
}

module.exports = {
  fetchRooms: fetchRooms
}
