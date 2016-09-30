var chai = require('chai'),
  expect = chai.expect,
  request = require('supertest'),
  config = require('../app/config')

describe('Server', function () {
  var server

  beforeEach(function () {
    server = require('../app/server')
  })

  afterEach(function () {
    server.close()
  })

    // Slack
  it('responds to /slack', function (done) {
    request(server)
            .post('/slack')
            .expect(200, done)
  })

    // Responds with data
  it('responds to hook with data', function (done) {
        // Timeout to get the locations
    setTimeout(() => {
      request(server)
                .post('/slack')
                .send({
                  token: config.slack.token,
                  text: 'Gaest vis 2 lokaler i Aarhus til 500 kr side 1'
                })
                .expect(200)
                .end(function (err, res) {
                  expect(res.body).to.have.property('icon_emoji')
                  expect(res.body).to.have.property('attachments')

                  done()
                })
    }, 500)
  }, 5000)
})
