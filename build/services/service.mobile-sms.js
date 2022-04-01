"use strict";

var _require = require("../constants/envs"),
    MAILJET_SMS_TOKEN = _require.MAILJET_SMS_TOKEN;

var mailjet = require('node-mailjet').connect(MAILJET_SMS_TOKEN);

var sendSMS = function sendSMS() {
  var request = mailjet.post('sms', {
    version: 'v4'
  }).id().request({
    FromTS: '1516233600',
    ToTS: '1516320000'
  });
  request.then(function (result) {
    console.log(result.body);
  })["catch"](function (err) {
    console.log(err.statusCode);
  }); // const request = mailjet.post('sms-send', { version: 'v4' }).request({
  //     Text: 'Have a nice SMS flight with Mailjet !',
  //     To: '+637993032821',
  //     From: 'MJPilot',
  // })
  // request
  //     .then((result) => {
  //         console.log(result.body)
  //     })
  //     .catch((err) => {
  //         console.log(err)
  //     })
};

module.exports = sendSMS;