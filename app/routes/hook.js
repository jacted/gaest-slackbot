'use strict'

var config = require('../config')
var loc = require('../data/locations')
var filter = require('../data/filter')
var roomsData = require('../data/rooms')
var fieldsData = require('../data/fields')

module.exports = function (app) {
  app.post('/slack', function (req, res) {
        // Check token
    if (req.body.token === config.slack.token) {
            // Lowercase text
      let text = req.body.text.toLowerCase()

      var limit = filter.getLimit(text)
      var price = filter.getPrice(text)
      var locationID = loc.getLocationId(text)
      var page = filter.getPage(text)

      Promise.all([limit, price, locationID, page])
            .then((values) => {
              limit = values[0]
              price = values[1]
              locationID = values[2]
              page = values[3]

              roomsData.fetchRooms(locationID, price, limit, page)
                .then((rooms) => {
                  if (rooms.length === 0) {
                    res.send({
                      icon_emoji: ':robot_face:',
                      text: 'No rooms'
                    })
                  }

                  let attachments = []
                  for (let room of rooms) {
                    let fields = []
                    fields.push(fieldsData.addressField(room))
                    fields.push(fieldsData.capacityField(room))
                    fields.push(fieldsData.priceField(room))
                    fields.push(fieldsData.ratingField(room))

                    attachments.push({
                      'fallback': fieldsData.getTitle(room),
                      'color': '#36a64f',
                      'title': fieldsData.getTitle(room),
                      'title_link': 'https://www.gaest.com/rooms/' + room.id,
                      'fields': fields,
                      'text': room.attributes.description,
                      'mrkdwn_in': ['text', 'pretext']
                    })
                  }

                  res.send({
                    icon_emoji: ':robot_face:',
                    attachments: attachments
                  })
                })
                .catch((err) => {
                  res.send({ error: err })
                })
            })
            .catch((err) => {
              res.send({ error: err })
            })
    } else {
      res.send({ error: 'TOKEN_MISMATCH' })
    }
  })
}
