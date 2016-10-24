'use strict';

const fcm = require('node-gcm');
const Leap = require('leapjs');
const LeapTrainer = require('./leap-trainer/leaptrainer');

const controller = new Leap.Controller();
const trainer = new LeapTrainer.Controller({ controller: controller });

// load gesture dataset
const trainingSet = require('../training-set');

trainer.fromJSON(JSON.stringify(trainingSet[2]));
trainer.fromJSON(JSON.stringify(trainingSet[3]));

let fcmApiKey = 'AIzaSyAYoONVd5-f1Nev7YmpqfrJxPQ1mqpu2TM';
let regTokens = ['fgekbl9bgyM:APA91bGzhVeVVRyhgyGYXTGZuc91WRE2U6SDEy1rAlA91sGz0p5NVvq3kj8nWgrsJZ0GH9hhhhM-gnucjjBSR0DnNmV5PXU_0KrdVIqs0p3VYbQH47ThIh2IYc96fYTbgZYlCF-XIFPp'];

trainer.on('YES', function () {
  console.log(JSON.stringify(trainingSet[2].data));
  let message = new fcm.Message();
  message.addData('gesture_text', 'yes');

  // Set up the sender with you API key, prepare your recipients' registration tokens. 
  let sender = new fcm.Sender(fcmApiKey);

  sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log(response);
  });
});

trainer.on('NO', function () {
  console.log(JSON.stringify(trainingSet[3].data));
  let message = new fcm.Message();
  message.addData('gesture_text', 'no');

  // Set up the sender with you API key, prepare your recipients' registration tokens. 
  let sender = new fcm.Sender(fcmApiKey);

  sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log(response);
  });
});

controller.connect();
