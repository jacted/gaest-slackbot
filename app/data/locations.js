'use strict'

var request = require('superagent')

// Array of locations
var locations = []

var fetchLocations = () => {
  request
    .get('https://api.gaest.com/locations')
    .end((err, res) => {
      if (err) {

      } else {
        for (let v of res.body.data) {
          locations.push({
            name: v.attributes.name,
            slug: v.attributes.slug,
            id: v.id
          })
        }
      }
    })
}

var getLocationId = (text) => {
  return new Promise((resolve, reject) => {
    for (let v of locations) {
      // Check on name & slug
      if (text.indexOf(v.name.toLowerCase()) !== -1 || text.indexOf(v.slug.toLowerCase()) !== -1) {
        return resolve(+v.id)
      }
    }

    return reject('NOT_FOUND')
  })
}

module.exports = {
  fetchLocations: fetchLocations,
  getLocationId: getLocationId
}
