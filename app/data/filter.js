'use strict'

var getLimit = (text) => {
  return new Promise((resolve, reject) => {
    var match = text.match(/vis ([0-9]+)/)

    if (match) {
      resolve(+match[1])
    }

    return resolve(10)
  })
}

var getPrice = (text) => {
  return new Promise((resolve, reject) => {
    var match = text.match(/([0-9]+)\s*kr/)

    if (match) {
      resolve(+match[1])
    }

    return resolve(1000000)
  })
}

var getPage = (text) => {
  return new Promise((resolve, reject) => {
    var match = text.match(/side ([0-9]+)/)

    if (match) {
      resolve(+match[1])
    }

    return resolve(1)
  })
}

module.exports = {
  getLimit: getLimit,
  getPrice: getPrice,
  getPage: getPage
}
