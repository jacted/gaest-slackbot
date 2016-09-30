'use strict'

var getTitle = (room) => {
    return '#' + room.id + ' - ' + room.attributes.title
}

var addressField = (room) => {
    return {
        title: 'Address'
        , value: room.attributes.address + '\n' + room.attributes.postal_code+' '+room.attributes.city
        , short: true
    }
}

var capacityField = (room) => {
    return {
        title: 'Capacity'
        , value: room.attributes.capacity
        , short: true
    }
}

var priceField = (room) => {
    return {
        title: 'Price (hourly)'
        , value: room.attributes.hourly_price / 100 + ' DKK'
        , short: true
    }
}

var ratingField = (room) => {
    var rating = (room.attributes.rating == null) ? 0 : room.attributes.rating
    return {
        title: 'Rating'
        , value: rating
        , short: true
    }
}

module.exports = {
    getTitle: getTitle
    , addressField: addressField
    , capacityField: capacityField
    , priceField: priceField
    , ratingField: ratingField
}