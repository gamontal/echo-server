'use strict';

const Leap = require('leapjs');
const range = require('./helpers').range;

let numFrameGrabs = 10;

const captureGesture = function (controller) {
  let frames = [];
  let ans = '';

  range(0, numFrameGrabs).forEach(function () {
    frames.push(controller.frame());
    console.log(controller.frame());
  });

  let previousFrame = null;

  let sumHands = 0;
  let sumFingers = 0;
  let sumTranlsationX = 0;
  let sumTranslationY = 0;
  let sumTranslationZ = 0;
  let rotationAxisX = 0;
  let rotationAxisY = 0;
  let rotationAxisZ = 0;
  let rotationAngle = 0;

  let hand1Type = 0;
  let hand1DirectionX = 0;
  let hand1DirectionY = 0;
  let hand1DirectionZ = 0;
  let hand1PalmPositionX = 0;
  let hand1PalmPositionY = 0;
  let hand1PalmPositionZ = 0;
  let hand1GrabStrength = 0;
  let hand1PinchStrength = 0;
  let hand1Confidence = 0;
  let hand1ArmDirectionX = 0;
  let hand1ArmDirectionY = 0;
  let hand1ArmDirectionZ = 0;
  let hand1ArmCenterX = 0;
  let hand1ArmCenterY = 0;
  let hand1ArmCenterZ = 0;
  let hand1TranslationX = 0;
  let hand1TranslationY = 0;
  let hand1TranslationZ = 0;
  let hand1RotationAxisX = 0;
  let hand1RotationAxisY = 0;
  let hand1RotationAxisZ = 0;
  let hand1RotationAngle = 0;

  let hand2Type = 0;
  let hand2DirectionX = 0;
  let hand2DirectionY = 0;
  let hand2DirectionZ = 0;
  let hand2PalmPositionX = 0;
  let hand2PalmPositionY = 0;
  let hand2PalmPositionZ = 0;
  let hand2GrabStrength = 0;
  let hand2PinchStrength = 0;
  let hand2Confidence = 0;
  let hand2ArmDirectionX = 0;
  let hand2ArmDirectionY = 0;
  let hand2ArmDirectionZ = 0;
  let hand2ArmCenterX = 0;
  let hand2ArmCenterY = 0;
  let hand2ArmCenterZ = 0;
  let hand2ArmUpVectorX = 0;
  let hand2ArmUpVectorY = 0;
  let hand2ArmUpVectorZ = 0;
  let hand2TranslationX = 0;
  let hand2TranslationY = 0;
  let hand2TranslationZ = 0;
  let hand2RotationAxisX = 0;
  let hand2RotationAxisY = 0;
  let hand2RotationAxisZ = 0;
  let hand2RotationAngle = 0;

  // Hand 1 Finger 1 begins here ##
  let hand1Finger1DirectionX = 0;
  let hand1Finger1DirectionY = 0;
  let hand1Finger1DirectionZ = 0;
  let hand1Finger1Extended = 0;

  // attributes of finger 1 metacarpals
  let hand1Finger1MetacarpalCenterX = 0;
  let hand1Finger1MetacarpalCenterY = 0;
  let hand1Finger1MetacarpalCenterZ = 0;
  let hand1Finger1MetacarpalDirectionX = 0;
  let hand1Finger1MetacarpalDirectionY = 0;
  let hand1Finger1MetacarpalDirectionZ = 0;
  let hand1Finger1MetacarpalUpVectorX = 0;
  let hand1Finger1MetacarpalUpVectorY = 0;
  let hand1Finger1MetacarpalUpVectorZ = 0;

  // attributes of finger 1 proximal phalanx bone
  let hand1Finger1ProximalPhalanxBoneCenterX = 0;
  let hand1Finger1ProximalPhalanxBoneCenterY = 0;
  let hand1Finger1ProximalPhalanxBoneCenterZ = 0;
  let hand1Finger1ProximalPhalanxBoneDirectionX = 0;
  let hand1Finger1ProximalPhalanxBoneDirectionY = 0;
  let hand1Finger1ProximalPhalanxBoneDirectionZ = 0;
  let hand1Finger1ProximalPhalanxBoneUpVectorX = 0;
  let hand1Finger1ProximalPhalanxBoneUpVectorY = 0;
  let hand1Finger1ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of finger 1 intermediate phalanx bone
  let hand1Finger1IntermediatePhalanxBoneCenterX = 0;
  let hand1Finger1IntermediatePhalanxBoneCenterY = 0;
  let hand1Finger1IntermediatePhalanxBoneCenterZ = 0;
  let hand1Finger1IntermediatePhalanxBoneDirectionX = 0;
  let hand1Finger1IntermediatePhalanxBoneDirectionY = 0;
  let hand1Finger1IntermediatePhalanxBoneDirectionZ = 0;
  let hand1Finger1IntermediatePhalanxBoneUpVectorX = 0;
  let hand1Finger1IntermediatePhalanxBoneUpVectorY = 0;
  let hand1Finger1IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of finger 1 distal phalanx bone
  let hand1Finger1DistalPhalanxBoneCenterX = 0;
  let hand1Finger1DistalPhalanxBoneCenterY = 0;
  let hand1Finger1DistalPhalanxBoneCenterZ = 0;
  let hand1Finger1DistalPhalanxBoneDirectionX = 0;
  let hand1Finger1DistalPhalanxBoneDirectionY = 0;
  let hand1Finger1DistalPhalanxBoneDirectionZ = 0;
  let hand1Finger1DistalPhalanxBoneUpVectorX = 0;
  let hand1Finger1DistalPhalanxBoneUpVectorY = 0;
  let hand1Finger1DistalPhalanxBoneUpVectorZ = 0;
  let hand1Finger1TipPositionX = 0;
  let hand1Finger1TipPositionY = 0;
  let hand1Finger1TipPositionZ = 0;

  // Hand 1 Finger 2 Begins Here
  let hand1Finger2DirectionX = 0;
  let hand1Finger2DirectionY = 0;
  let hand1Finger2DirectionZ = 0;
  let hand1Finger2Extended = 0;

  // attributes of finger 2 metacarpals
  let hand1Finger2MetacarpalCenterX = 0;
  let hand1Finger2MetacarpalCenterY = 0;
  let hand1Finger2MetacarpalCenterZ = 0;
  let hand1Finger2MetacarpalDirectionX = 0;
  let hand1Finger2MetacarpalDirectionY = 0;
  let hand1Finger2MetacarpalDirectionZ = 0;
  let hand1Finger2MetacarpalUpVectorX = 0;
  let hand1Finger2MetacarpalUpVectorY = 0;
  let hand1Finger2MetacarpalUpVectorZ = 0;

  // attributes of finger 2 proximal phalanx bone
  let hand1Finger2ProximalPhalanxBoneCenterX = 0;
  let hand1Finger2ProximalPhalanxBoneCenterY = 0;
  let hand1Finger2ProximalPhalanxBoneCenterZ = 0;
  let hand1Finger2ProximalPhalanxBoneDirectionX = 0;
  let hand1Finger2ProximalPhalanxBoneDirectionY = 0;
  let hand1Finger2ProximalPhalanxBoneDirectionZ = 0;
  let hand1Finger2ProximalPhalanxBoneUpVectorX = 0;
  let hand1Finger2ProximalPhalanxBoneUpVectorY = 0;
  let hand1Finger2ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of finger 2 intermediate phalanx bone
  let hand1Finger2IntermediatePhalanxBoneCenterX = 0;
  let hand1Finger2IntermediatePhalanxBoneCenterY = 0;
  let hand1Finger2IntermediatePhalanxBoneCenterZ = 0;
  let hand1Finger2IntermediatePhalanxBoneDirectionX = 0;
  let hand1Finger2IntermediatePhalanxBoneDirectionY = 0;
  let hand1Finger2IntermediatePhalanxBoneDirectionZ = 0;
  let hand1Finger2IntermediatePhalanxBoneUpVectorX = 0;
  let hand1Finger2IntermediatePhalanxBoneUpVectorY = 0;
  let hand1Finger2IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of finger 2 distal phalanx bone
  let hand1Finger2DistalPhalanxBoneCenterX = 0;
  let hand1Finger2DistalPhalanxBoneCenterY = 0;
  let hand1Finger2DistalPhalanxBoneCenterZ = 0;
  let hand1Finger2DistalPhalanxBoneDirectionX = 0;
  let hand1Finger2DistalPhalanxBoneDirectionY = 0;
  let hand1Finger2DistalPhalanxBoneDirectionZ = 0;
  let hand1Finger2DistalPhalanxBoneUpVectorX = 0;
  let hand1Finger2DistalPhalanxBoneUpVectorY = 0;
  let hand1Finger2DistalPhalanxBoneUpVectorZ = 0;
  let hand1Finger2TipPositionX = 0;
  let hand1Finger2TipPositionY = 0;
  let hand1Finger2TipPositionZ = 0;

  // Hand 1 Finger 3 Begins Here
  let hand1Finger3DirectionX = 0;
  let hand1Finger3DirectionY = 0;
  let hand1Finger3DirectionZ = 0;
  let hand1Finger3Extended = 0;

  // attributes of Finger 3 metacarpals
  let hand1Finger3MetacarpalCenterX = 0;
  let hand1Finger3MetacarpalCenterY = 0;
  let hand1Finger3MetacarpalCenterZ = 0;
  let hand1Finger3MetacarpalDirectionX = 0;
  let hand1Finger3MetacarpalDirectionY = 0;
  let hand1Finger3MetacarpalDirectionZ = 0;
  let hand1Finger3MetacarpalUpVectorX = 0;
  let hand1Finger3MetacarpalUpVectorY = 0;
  let hand1Finger3MetacarpalUpVectorZ = 0;

  // attributes of Finger 3 proximal phalanx bone
  let hand1Finger3ProximalPhalanxBoneCenterX = 0;
  let hand1Finger3ProximalPhalanxBoneCenterY = 0;
  let hand1Finger3ProximalPhalanxBoneCenterZ = 0;
  let hand1Finger3ProximalPhalanxBoneDirectionX = 0;
  let hand1Finger3ProximalPhalanxBoneDirectionY = 0;
  let hand1Finger3ProximalPhalanxBoneDirectionZ = 0;
  let hand1Finger3ProximalPhalanxBoneUpVectorX = 0;
  let hand1Finger3ProximalPhalanxBoneUpVectorY = 0;
  let hand1Finger3ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 3 intermediate phalanx bone
  let hand1Finger3IntermediatePhalanxBoneCenterX = 0;
  let hand1Finger3IntermediatePhalanxBoneCenterY = 0;
  let hand1Finger3IntermediatePhalanxBoneCenterZ = 0;
  let hand1Finger3IntermediatePhalanxBoneDirectionX = 0;
  let hand1Finger3IntermediatePhalanxBoneDirectionY = 0;
  let hand1Finger3IntermediatePhalanxBoneDirectionZ = 0;
  let hand1Finger3IntermediatePhalanxBoneUpVectorX = 0;
  let hand1Finger3IntermediatePhalanxBoneUpVectorY = 0;
  let hand1Finger3IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 3 distal phalanx bone
  let hand1Finger3DistalPhalanxBoneCenterX = 0;
  let hand1Finger3DistalPhalanxBoneCenterY = 0;
  let hand1Finger3DistalPhalanxBoneCenterZ = 0;
  let hand1Finger3DistalPhalanxBoneDirectionX = 0;
  let hand1Finger3DistalPhalanxBoneDirectionY = 0;
  let hand1Finger3DistalPhalanxBoneDirectionZ = 0;
  let hand1Finger3DistalPhalanxBoneUpVectorX = 0;
  let hand1Finger3DistalPhalanxBoneUpVectorY = 0;
  let hand1Finger3DistalPhalanxBoneUpVectorZ = 0;
  let hand1Finger3TipPositionX = 0;
  let hand1Finger3TipPositionY = 0;
  let hand1Finger3TipPositionZ = 0;

  // Hand 1 Finger 4 Begins Here ##
  let hand1Finger4DirectionX = 0;
  let hand1Finger4DirectionY = 0;
  let hand1Finger4DirectionZ = 0;
  let hand1Finger4Extended = 0;

  // attributes of Finger 4 metacarpals
  let hand1Finger4MetacarpalCenterX = 0;
  let hand1Finger4MetacarpalCenterY = 0;
  let hand1Finger4MetacarpalCenterZ = 0;
  let hand1Finger4MetacarpalDirectionX = 0;
  let hand1Finger4MetacarpalDirectionY = 0;
  let hand1Finger4MetacarpalDirectionZ = 0;
  let hand1Finger4MetacarpalUpVectorX = 0;
  let hand1Finger4MetacarpalUpVectorY = 0;
  let hand1Finger4MetacarpalUpVectorZ = 0;

  // attributes of Finger 4 proximal phalanx bone
  let hand1Finger4ProximalPhalanxBoneCenterX = 0;
  let hand1Finger4ProximalPhalanxBoneCenterY = 0;
  let hand1Finger4ProximalPhalanxBoneCenterZ = 0;
  let hand1Finger4ProximalPhalanxBoneDirectionX = 0;
  let hand1Finger4ProximalPhalanxBoneDirectionY = 0;
  let hand1Finger4ProximalPhalanxBoneDirectionZ = 0;
  let hand1Finger4ProximalPhalanxBoneUpVectorX = 0;
  let hand1Finger4ProximalPhalanxBoneUpVectorY = 0;
  let hand1Finger4ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 4 intermediate phalanx bone
  let hand1Finger4IntermediatePhalanxBoneCenterX = 0;
  let hand1Finger4IntermediatePhalanxBoneCenterY = 0;
  let hand1Finger4IntermediatePhalanxBoneCenterZ = 0;
  let hand1Finger4IntermediatePhalanxBoneDirectionX = 0;
  let hand1Finger4IntermediatePhalanxBoneDirectionY = 0;
  let hand1Finger4IntermediatePhalanxBoneDirectionZ = 0;
  let hand1Finger4IntermediatePhalanxBoneUpVectorX = 0;
  let hand1Finger4IntermediatePhalanxBoneUpVectorY = 0;
  let hand1Finger4IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 4 distal phalanx bone
  let hand1Finger4DistalPhalanxBoneCenterX = 0;
  let hand1Finger4DistalPhalanxBoneCenterY = 0;
  let hand1Finger4DistalPhalanxBoneCenterZ = 0;
  let hand1Finger4DistalPhalanxBoneDirectionX = 0;
  let hand1Finger4DistalPhalanxBoneDirectionY = 0;
  let hand1Finger4DistalPhalanxBoneDirectionZ = 0;
  let hand1Finger4DistalPhalanxBoneUpVectorX = 0;
  let hand1Finger4DistalPhalanxBoneUpVectorY = 0;
  let hand1Finger4DistalPhalanxBoneUpVectorZ = 0;
  let hand1Finger4TipPositionX = 0;
  let hand1Finger4TipPositionY = 0;
  let hand1Finger4TipPositionZ = 0;

  // Hand 1 Finger 5 Begins Here ##
  let hand1Finger5DirectionX = 0;
  let hand1Finger5DirectionY = 0;
  let hand1Finger5DirectionZ = 0;
  let hand1Finger5Extended = 0;

  // attributes of Finger 5 metacarpals
  let hand1Finger5MetacarpalCenterX = 0;
  let hand1Finger5MetacarpalCenterY = 0;
  let hand1Finger5MetacarpalCenterZ = 0;
  let hand1Finger5MetacarpalDirectionX = 0;
  let hand1Finger5MetacarpalDirectionY = 0;
  let hand1Finger5MetacarpalDirectionZ = 0;
  let hand1Finger5MetacarpalUpVectorX = 0;
  let hand1Finger5MetacarpalUpVectorY = 0;
  let hand1Finger5MetacarpalUpVectorZ = 0;

  // attributes of Finger 5 proximal phalanx bone
  let hand1Finger5ProximalPhalanxBoneCenterX = 0;
  let hand1Finger5ProximalPhalanxBoneCenterY = 0;
  let hand1Finger5ProximalPhalanxBoneCenterZ = 0;
  let hand1Finger5ProximalPhalanxBoneDirectionX = 0;
  let hand1Finger5ProximalPhalanxBoneDirectionY = 0;
  let hand1Finger5ProximalPhalanxBoneDirectionZ = 0;
  let hand1Finger5ProximalPhalanxBoneUpVectorX = 0;
  let hand1Finger5ProximalPhalanxBoneUpVectorY = 0;
  let hand1Finger5ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 5 intermediate phalanx bone
  let hand1Finger5IntermediatePhalanxBoneCenterX = 0;
  let hand1Finger5IntermediatePhalanxBoneCenterY = 0;
  let hand1Finger5IntermediatePhalanxBoneCenterZ = 0;
  let hand1Finger5IntermediatePhalanxBoneDirectionX = 0;
  let hand1Finger5IntermediatePhalanxBoneDirectionY = 0;
  let hand1Finger5IntermediatePhalanxBoneDirectionZ = 0;
  let hand1Finger5IntermediatePhalanxBoneUpVectorX = 0;
  let hand1Finger5IntermediatePhalanxBoneUpVectorY = 0;
  let hand1Finger5IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 5 distal phalanx bone
  let hand1Finger5DistalPhalanxBoneCenterX = 0;
  let hand1Finger5DistalPhalanxBoneCenterY = 0;
  let hand1Finger5DistalPhalanxBoneCenterZ = 0;
  let hand1Finger5DistalPhalanxBoneDirectionX = 0;
  let hand1Finger5DistalPhalanxBoneDirectionY = 0;
  let hand1Finger5DistalPhalanxBoneDirectionZ = 0;
  let hand1Finger5DistalPhalanxBoneUpVectorX = 0;
  let hand1Finger5DistalPhalanxBoneUpVectorY = 0;
  let hand1Finger5DistalPhalanxBoneUpVectorZ = 0;
  let hand1Finger5TipPositionX = 0;
  let hand1Finger5TipPositionY = 0;
  let hand1Finger5TipPositionZ = 0;

  // Hand 2 Finger 1 begins here ##
  let hand2Finger1DirectionX = 0;
  let hand2Finger1DirectionY = 0;
  let hand2Finger1DirectionZ = 0;
  let hand2Finger1Extended = 0;

  // attributes of finger 1 metacarpals
  let hand2Finger1MetacarpalCenterX = 0;
  let hand2Finger1MetacarpalCenterY = 0;
  let hand2Finger1MetacarpalCenterZ = 0;
  let hand2Finger1MetacarpalDirectionX = 0;
  let hand2Finger1MetacarpalDirectionY = 0;
  let hand2Finger1MetacarpalDirectionZ = 0;
  let hand2Finger1MetacarpalUpVectorX = 0;
  let hand2Finger1MetacarpalUpVectorY = 0;
  let hand2Finger1MetacarpalUpVectorZ = 0;

  // attributes of finger 1 proximal phalanx bone
  let hand2Finger1ProximalPhalanxBoneCenterX = 0;
  let hand2Finger1ProximalPhalanxBoneCenterY = 0;
  let hand2Finger1ProximalPhalanxBoneCenterZ = 0;
  let hand2Finger1ProximalPhalanxBoneDirectionX = 0;
  let hand2Finger1ProximalPhalanxBoneDirectionY = 0;
  let hand2Finger1ProximalPhalanxBoneDirectionZ = 0;
  let hand2Finger1ProximalPhalanxBoneUpVectorX = 0;
  let hand2Finger1ProximalPhalanxBoneUpVectorY = 0;
  let hand2Finger1ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of finger 1 intermediate phalanx bone
  let hand2Finger1IntermediatePhalanxBoneCenterX = 0;
  let hand2Finger1IntermediatePhalanxBoneCenterY = 0;
  let hand2Finger1IntermediatePhalanxBoneCenterZ = 0;
  let hand2Finger1IntermediatePhalanxBoneDirectionX = 0;
  let hand2Finger1IntermediatePhalanxBoneDirectionY = 0;
  let hand2Finger1IntermediatePhalanxBoneDirectionZ = 0;
  let hand2Finger1IntermediatePhalanxBoneUpVectorX = 0;
  let hand2Finger1IntermediatePhalanxBoneUpVectorY = 0;
  let hand2Finger1IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of finger 1 distal phalanx bone
  let hand2Finger1DistalPhalanxBoneCenterX = 0;
  let hand2Finger1DistalPhalanxBoneCenterY = 0;
  let hand2Finger1DistalPhalanxBoneCenterZ = 0;
  let hand2Finger1DistalPhalanxBoneDirectionX = 0;
  let hand2Finger1DistalPhalanxBoneDirectionY = 0;
  let hand2Finger1DistalPhalanxBoneDirectionZ = 0;
  let hand2Finger1DistalPhalanxBoneUpVectorX = 0;
  let hand2Finger1DistalPhalanxBoneUpVectorY = 0;
  let hand2Finger1DistalPhalanxBoneUpVectorZ = 0;
  let hand2Finger1TipPositionX = 0;
  let hand2Finger1TipPositionY = 0;
  let hand2Finger1TipPositionZ = 0;

  // Hand 2 Finger 2 Begins Here ##
  let hand2Finger2DirectionX = 0;
  let hand2Finger2DirectionY = 0;
  let hand2Finger2DirectionZ = 0;
  let hand2Finger2Extended = 0;

  // attributes of finger 2 metacarpals
  let hand2Finger2MetacarpalCenterX = 0;
  let hand2Finger2MetacarpalCenterY = 0;
  let hand2Finger2MetacarpalCenterZ = 0;
  let hand2Finger2MetacarpalDirectionX = 0;
  let hand2Finger2MetacarpalDirectionY = 0;
  let hand2Finger2MetacarpalDirectionZ = 0;
  let hand2Finger2MetacarpalUpVectorX = 0;
  let hand2Finger2MetacarpalUpVectorY = 0;
  let hand2Finger2MetacarpalUpVectorZ = 0;

  // attributes of finger 2 proximal phalanx bone
  let hand2Finger2ProximalPhalanxBoneCenterX = 0;
  let hand2Finger2ProximalPhalanxBoneCenterY = 0;
  let hand2Finger2ProximalPhalanxBoneCenterZ = 0;
  let hand2Finger2ProximalPhalanxBoneDirectionX = 0;
  let hand2Finger2ProximalPhalanxBoneDirectionY = 0;
  let hand2Finger2ProximalPhalanxBoneDirectionZ = 0;
  let hand2Finger2ProximalPhalanxBoneUpVectorX = 0;
  let hand2Finger2ProximalPhalanxBoneUpVectorY = 0;
  let hand2Finger2ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of finger 2 intermediate phalanx bone
  let hand2Finger2IntermediatePhalanxBoneCenterX = 0;
  let hand2Finger2IntermediatePhalanxBoneCenterY = 0;
  let hand2Finger2IntermediatePhalanxBoneCenterZ = 0;
  let hand2Finger2IntermediatePhalanxBoneDirectionX = 0;
  let hand2Finger2IntermediatePhalanxBoneDirectionY = 0;
  let hand2Finger2IntermediatePhalanxBoneDirectionZ = 0;
  let hand2Finger2IntermediatePhalanxBoneUpVectorX = 0;
  let hand2Finger2IntermediatePhalanxBoneUpVectorY = 0;
  let hand2Finger2IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of finger 2 distal phalanx bone
  let hand2Finger2DistalPhalanxBoneCenterX = 0;
  let hand2Finger2DistalPhalanxBoneCenterY = 0;
  let hand2Finger2DistalPhalanxBoneCenterZ = 0;
  let hand2Finger2DistalPhalanxBoneDirectionX = 0;
  let hand2Finger2DistalPhalanxBoneDirectionY = 0;
  let hand2Finger2DistalPhalanxBoneDirectionZ = 0;
  let hand2Finger2DistalPhalanxBoneUpVectorX = 0;
  let hand2Finger2DistalPhalanxBoneUpVectorY = 0;
  let hand2Finger2DistalPhalanxBoneUpVectorZ = 0;
  let hand2Finger2TipPositionX = 0;
  let hand2Finger2TipPositionY = 0;
  let hand2Finger2TipPositionZ = 0;

  // Hand 2 Finger 3 Begins Here ##
  let hand2Finger3DirectionX = 0;
  let hand2Finger3DirectionY = 0;
  let hand2Finger3DirectionZ = 0;
  let hand2Finger3Extended = 0;

  // attributes of Finger 3 metacarpals
  let hand2Finger3MetacarpalCenterX = 0;
  let hand2Finger3MetacarpalCenterY = 0;
  let hand2Finger3MetacarpalCenterZ = 0;
  let hand2Finger3MetacarpalDirectionX = 0;
  let hand2Finger3MetacarpalDirectionY = 0;
  let hand2Finger3MetacarpalDirectionZ = 0;
  let hand2Finger3MetacarpalUpVectorX = 0;
  let hand2Finger3MetacarpalUpVectorY = 0;
  let hand2Finger3MetacarpalUpVectorZ = 0;

  // attributes of Finger 3 proximal phalanx bone
  let hand2Finger3ProximalPhalanxBoneCenterX = 0;
  let hand2Finger3ProximalPhalanxBoneCenterY = 0;
  let hand2Finger3ProximalPhalanxBoneCenterZ = 0;
  let hand2Finger3ProximalPhalanxBoneDirectionX = 0;
  let hand2Finger3ProximalPhalanxBoneDirectionY = 0;
  let hand2Finger3ProximalPhalanxBoneDirectionZ = 0;
  let hand2Finger3ProximalPhalanxBoneUpVectorX = 0;
  let hand2Finger3ProximalPhalanxBoneUpVectorY = 0;
  let hand2Finger3ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 3 intermediate phalanx bone
  let hand2Finger3IntermediatePhalanxBoneCenterX = 0;
  let hand2Finger3IntermediatePhalanxBoneCenterY = 0;
  let hand2Finger3IntermediatePhalanxBoneCenterZ = 0;
  let hand2Finger3IntermediatePhalanxBoneDirectionX = 0;
  let hand2Finger3IntermediatePhalanxBoneDirectionY = 0;
  let hand2Finger3IntermediatePhalanxBoneDirectionZ = 0;
  let hand2Finger3IntermediatePhalanxBoneUpVectorX = 0;
  let hand2Finger3IntermediatePhalanxBoneUpVectorY = 0;
  let hand2Finger3IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 3 distal phalanx bone
  let hand2Finger3DistalPhalanxBoneCenterX = 0;
  let hand2Finger3DistalPhalanxBoneCenterY = 0;
  let hand2Finger3DistalPhalanxBoneCenterZ = 0;
  let hand2Finger3DistalPhalanxBoneDirectionX = 0;
  let hand2Finger3DistalPhalanxBoneDirectionY = 0;
  let hand2Finger3DistalPhalanxBoneDirectionZ = 0;
  let hand2Finger3DistalPhalanxBoneUpVectorX = 0;
  let hand2Finger3DistalPhalanxBoneUpVectorY = 0;
  let hand2Finger3DistalPhalanxBoneUpVectorZ = 0;
  let hand2Finger3TipPositionX = 0;
  let hand2Finger3TipPositionY = 0;
  let hand2Finger3TipPositionZ = 0;

  // Hand 2 Finger 4 Begins Here ##
  let hand2Finger4DirectionX = 0;
  let hand2Finger4DirectionY = 0;
  let hand2Finger4DirectionZ = 0;
  let hand2Finger4Extended = 0;

  // attributes of Finger 4 metacarpals
  let hand2Finger4MetacarpalCenterX = 0;
  let hand2Finger4MetacarpalCenterY = 0;
  let hand2Finger4MetacarpalCenterZ = 0;
  let hand2Finger4MetacarpalDirectionX = 0;
  let hand2Finger4MetacarpalDirectionY = 0;
  let hand2Finger4MetacarpalDirectionZ = 0;
  let hand2Finger4MetacarpalUpVectorX = 0;
  let hand2Finger4MetacarpalUpVectorY = 0;
  let hand2Finger4MetacarpalUpVectorZ = 0;

  // attributes of Finger 4 proximal phalanx bone
  let hand2Finger4ProximalPhalanxBoneCenterX = 0;
  let hand2Finger4ProximalPhalanxBoneCenterY = 0;
  let hand2Finger4ProximalPhalanxBoneCenterZ = 0;
  let hand2Finger4ProximalPhalanxBoneDirectionX = 0;
  let hand2Finger4ProximalPhalanxBoneDirectionY = 0;
  let hand2Finger4ProximalPhalanxBoneDirectionZ = 0;
  let hand2Finger4ProximalPhalanxBoneUpVectorX = 0;
  let hand2Finger4ProximalPhalanxBoneUpVectorY = 0;
  let hand2Finger4ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 4 intermediate phalanx bone
  let hand2Finger4IntermediatePhalanxBoneCenterX = 0;
  let hand2Finger4IntermediatePhalanxBoneCenterY = 0;
  let hand2Finger4IntermediatePhalanxBoneCenterZ = 0;
  let hand2Finger4IntermediatePhalanxBoneDirectionX = 0;
  let hand2Finger4IntermediatePhalanxBoneDirectionY = 0;
  let hand2Finger4IntermediatePhalanxBoneDirectionZ = 0;
  let hand2Finger4IntermediatePhalanxBoneUpVectorX = 0;
  let hand2Finger4IntermediatePhalanxBoneUpVectorY = 0;
  let hand2Finger4IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 4 distal phalanx bone
  let hand2Finger4DistalPhalanxBoneCenterX = 0;
  let hand2Finger4DistalPhalanxBoneCenterY = 0;
  let hand2Finger4DistalPhalanxBoneCenterZ = 0;
  let hand2Finger4DistalPhalanxBoneDirectionX = 0;
  let hand2Finger4DistalPhalanxBoneDirectionY = 0;
  let hand2Finger4DistalPhalanxBoneDirectionZ = 0;
  let hand2Finger4DistalPhalanxBoneUpVectorX = 0;
  let hand2Finger4DistalPhalanxBoneUpVectorY = 0;
  let hand2Finger4DistalPhalanxBoneUpVectorZ = 0;
  let hand2Finger4TipPositionX = 0;
  let hand2Finger4TipPositionY = 0;
  let hand2Finger4TipPositionZ = 0;

  // Hand 2 Finger 5 Begins Here ##

  let hand2Finger5DirectionX = 0;
  let hand2Finger5DirectionY = 0;
  let hand2Finger5DirectionZ = 0;
  let hand2Finger5Extended = 0;

  // attributes of Finger 5 metacarpals
  let hand2Finger5MetacarpalCenterX = 0;
  let hand2Finger5MetacarpalCenterY = 0;
  let hand2Finger5MetacarpalCenterZ = 0;
  let hand2Finger5MetacarpalDirectionX = 0;
  let hand2Finger5MetacarpalDirectionY = 0;
  let hand2Finger5MetacarpalDirectionZ = 0;
  let hand2Finger5MetacarpalUpVectorX = 0;
  let hand2Finger5MetacarpalUpVectorY = 0;
  let hand2Finger5MetacarpalUpVectorZ = 0;

  // attributes of Finger 5 proximal phalanx bone
  let hand2Finger5ProximalPhalanxBoneCenterX = 0;
  let hand2Finger5ProximalPhalanxBoneCenterY = 0;
  let hand2Finger5ProximalPhalanxBoneCenterZ = 0;
  let hand2Finger5ProximalPhalanxBoneDirectionX = 0;
  let hand2Finger5ProximalPhalanxBoneDirectionY = 0;
  let hand2Finger5ProximalPhalanxBoneDirectionZ = 0;
  let hand2Finger5ProximalPhalanxBoneUpVectorX = 0;
  let hand2Finger5ProximalPhalanxBoneUpVectorY = 0;
  let hand2Finger5ProximalPhalanxBoneUpVectorZ = 0;

  // attributes of Finger 5 intermediate phalanx bone
  let hand2Finger5IntermediatePhalanxBoneCenterX = 0;
  let hand2Finger5IntermediatePhalanxBoneCenterY = 0;
  let hand2Finger5IntermediatePhalanxBoneCenterZ = 0;
  let hand2Finger5IntermediatePhalanxBoneDirectionX = 0;
  let hand2Finger5IntermediatePhalanxBoneDirectionY = 0;
  let hand2Finger5IntermediatePhalanxBoneDirectionZ = 0;
  let hand2Finger5IntermediatePhalanxBoneUpVectorX = 0;
  let hand2Finger5IntermediatePhalanxBoneUpVectorY = 0;
  let hand2Finger5IntermediatePhalanxBoneUpVectorZ = 0;

  // attributes of Finger 5 distal phalanx bone
  let hand2Finger5DistalPhalanxBoneCenterX = 0;
  let hand2Finger5DistalPhalanxBoneCenterY = 0;
  let hand2Finger5DistalPhalanxBoneCenterZ = 0;
  let hand2Finger5DistalPhalanxBoneDirectionX = 0;
  let hand2Finger5DistalPhalanxBoneDirectionY = 0;
  let hand2Finger5DistalPhalanxBoneDirectionZ = 0;
  let hand2Finger5DistalPhalanxBoneUpVectorX = 0;
  let hand2Finger5DistalPhalanxBoneUpVectorY = 0;
  let hand2Finger5DistalPhalanxBoneUpVectorZ = 0;
  let hand2Finger5TipPositionX = 0;
  let hand2Finger5TipPositionY = 0;
  let hand2Finger5TipPositionZ = 0;

  // populate hand data
  for (let frame of frames) {
    sumHands += frame.hands.length;
    sumFingers += frame.fingers.length;

    if (previousFrame && previousFrame.valid) {
      let translationVector = frame.translation(previousFrame);
      sumTranlsationX += translationVector[0];
      sumTranslationY += translationVector[1];
      sumTranslationZ += translationVector[2];
      let rotationAxisVector = frame.rotation_axis(previousFrame);
      rotationAxisX += rotationAxisVector[0];
      rotationAxisY += rotationAxisVector[1];
      rotationAxisZ += rotationAxisVector[2];
      rotationAngle += frame.rotation_angle(previousFrame);
    }

    if (frame.hands[0] != null) {
      let hand1 = frame.hands[0];

      let hand1DirectionVector = hand1.direction;
      hand1DirectionX += hand1DirectionVector[0];
      hand1DirectionY += hand1DirectionVector[1];
      hand1DirectionZ += hand1DirectionVector[2];
      let hand1PalmPositionVector = hand1.palm_position;
      hand1PalmPositionX += hand1PalmPositionVector[0];
      hand1PalmPositionY += hand1PalmPositionVector[1];
      hand1PalmPositionZ += hand1PalmPositionVector[2];
      hand1GrabStrength += hand1.grab_strength;
      hand1PinchStrength += hand1.pinch_strength;
      hand1Confidence += hand1.confidence;
      let hand1ArmDirectionVector = hand1.arm.direction;
      hand1ArmDirectionX += hand1ArmDirectionVector[0];
      hand1ArmDirectionY += hand1ArmDirectionVector[1];
      hand1ArmDirectionZ += hand1ArmDirectionVector[2];
      let hand1ArmCenterVector = hand1.arm.elbow_position + (hand1.arm.wrist_position - hand1.arm.elbow_position) * 0.05;
      hand1ArmCenterX += hand1ArmCenterVector[0];
      hand1ArmCenterY += hand1ArmCenterVector[1];
      hand1ArmCenterZ += hand1ArmCenterVector[2];

      if (previousFrame && previousFrame.valid) {
        let hand1TranslationVector = hand1.translation(previousFrame);
        hand1TranslationX += hand1TranslationVector[0];
        hand1TranslationY += hand1TranslationVector[1];
        hand1TranslationZ += hand1TranslationVector[2];
        let hand1RotationAxisVector = hand1.rotation_axis(previousFrame);
        hand1RotationAxisX += hand1RotationAxisVector[0];
        hand1RotationAxisY += hand1RotationAxisVector[1];
        hand1RotationAxisZ += hand1RotationAxisVector[2];
        hand1RotationAngle += hand1.rotation_angle(previousFrame);
      }

      if (frame.hands[0].fingers[0] != null) {

        // Set Hand 1 Finger 1
        let hand1Finger1 = frame.hands[0].fingers[0];
        let hand1Finger1DirectionVector = hand1Finger1.direction;
        hand1Finger1DirectionX += hand1Finger1DirectionVector[0];
        hand1Finger1DirectionY += hand1Finger1DirectionVector[1];
        hand1Finger1DirectionZ += hand1Finger1DirectionVector[2];

        // attributes of finger 1 metacarpals
        let hand1Finger1MetacarpalCenter = hand1Finger1.bone(0).center;
        hand1Finger1MetacarpalCenterX += hand1Finger1MetacarpalCenter[0];
        hand1Finger1MetacarpalCenterY += hand1Finger1MetacarpalCenter[1];
        hand1Finger1MetacarpalCenterZ += hand1Finger1MetacarpalCenter[2];
        let hand1Finger1MetacarpalDirection = hand1Finger1.bone(0).direction;
        hand1Finger1MetacarpalDirectionX += hand1Finger1MetacarpalDirection[0];
        hand1Finger1MetacarpalDirectionY += hand1Finger1MetacarpalDirection[1];
        hand1Finger1MetacarpalDirectionZ += hand1Finger1MetacarpalDirection[2];

        // attributes of finger 1 proximal phalanx bone
        let hand1Finger1ProximalPhalanxBoneCenter = hand1Finger1.bone(1).center;
        hand1Finger1ProximalPhalanxBoneCenterX += hand1Finger1ProximalPhalanxBoneCenter[0];
        hand1Finger1ProximalPhalanxBoneCenterY += hand1Finger1ProximalPhalanxBoneCenter[1];
        hand1Finger1ProximalPhalanxBoneCenterZ += hand1Finger1ProximalPhalanxBoneCenter[2];
        let hand1Finger1ProximalPhalanxBoneDirection = hand1Finger1.bone(1).direction;
        hand1Finger1ProximalPhalanxBoneDirectionX += hand1Finger1ProximalPhalanxBoneDirection[0];
        hand1Finger1ProximalPhalanxBoneDirectionY += hand1Finger1ProximalPhalanxBoneDirection[1];
        hand1Finger1ProximalPhalanxBoneDirectionZ += hand1Finger1ProximalPhalanxBoneDirection[2];

        // attributes of finger 1 intermediate phalanx bone
        let hand1Finger1IntermediatePhalanxBoneCenter = hand1Finger1.bone(2).center;
        hand1Finger1IntermediatePhalanxBoneCenterX += hand1Finger1IntermediatePhalanxBoneCenter[0];
        hand1Finger1IntermediatePhalanxBoneCenterY += hand1Finger1IntermediatePhalanxBoneCenter[1];
        hand1Finger1IntermediatePhalanxBoneCenterZ += hand1Finger1IntermediatePhalanxBoneCenter[2];
        let hand1Finger1IntermediatePhalanxBoneDirection = hand1Finger1.bone(2).direction;
        hand1Finger1IntermediatePhalanxBoneDirectionX += hand1Finger1IntermediatePhalanxBoneDirection[0];
        hand1Finger1IntermediatePhalanxBoneDirectionY += hand1Finger1IntermediatePhalanxBoneDirection[1];
        hand1Finger1IntermediatePhalanxBoneDirectionZ += hand1Finger1IntermediatePhalanxBoneDirection[2];

        // attributes of finger 1 distal phalanx bone
        let hand1Finger1DistalPhalanxBoneCenter = hand1Finger1.bone(3).center;
        hand1Finger1DistalPhalanxBoneCenterX += hand1Finger1DistalPhalanxBoneCenter[0];
        hand1Finger1DistalPhalanxBoneCenterY += hand1Finger1DistalPhalanxBoneCenter[1];
        hand1Finger1DistalPhalanxBoneCenterZ += hand1Finger1DistalPhalanxBoneCenter[2];
        let hand1Finger1DistalPhalanxBoneDirection = hand1Finger1.bone(3).direction;
        hand1Finger1DistalPhalanxBoneDirectionX += hand1Finger1DistalPhalanxBoneDirection[0];
        hand1Finger1DistalPhalanxBoneDirectionY += hand1Finger1DistalPhalanxBoneDirection[1];
        hand1Finger1DistalPhalanxBoneDirectionZ += hand1Finger1DistalPhalanxBoneDirection[2];
        hand1Finger1TipPositionX += hand1Finger1.joint_position(3)[0];
        hand1Finger1TipPositionY += hand1Finger1.joint_position(3)[1];
        hand1Finger1TipPositionZ += hand1Finger1.joint_position(3)[2];
      }
      if (frame.hands[0].fingers[1] != null) {

        // Set Hand 1 Finger 2 ##
        let hand1Finger2 = frame.hands[0].fingers[1];
        let hand1Finger2DirectionVector = hand1Finger2.direction;
        hand1Finger2DirectionX += hand1Finger2DirectionVector[0];
        hand1Finger2DirectionY += hand1Finger2DirectionVector[1];
        hand1Finger2DirectionZ += hand1Finger2DirectionVector[2];

        // attributes of finger 2 metacarpals
        let hand1Finger2MetacarpalCenter = hand1Finger2.bone(0).center;
        hand1Finger2MetacarpalCenterX += hand1Finger2MetacarpalCenter[0];
        hand1Finger2MetacarpalCenterY += hand1Finger2MetacarpalCenter[1];
        hand1Finger2MetacarpalCenterZ += hand1Finger2MetacarpalCenter[2];
        let hand1Finger2MetacarpalDirection = hand1Finger2.bone(0).direction;
        hand1Finger2MetacarpalDirectionX += hand1Finger2MetacarpalDirection[0];
        hand1Finger2MetacarpalDirectionY += hand1Finger2MetacarpalDirection[1];
        hand1Finger2MetacarpalDirectionZ += hand1Finger2MetacarpalDirection[2];

        // attributes of finger 2 proximal phalanx bone
        let hand1Finger2ProximalPhalanxBoneCenter = hand1Finger2.bone(1).center;
        hand1Finger2ProximalPhalanxBoneCenterX += hand1Finger2ProximalPhalanxBoneCenter[0];
        hand1Finger2ProximalPhalanxBoneCenterY += hand1Finger2ProximalPhalanxBoneCenter[1];
        hand1Finger2ProximalPhalanxBoneCenterZ += hand1Finger2ProximalPhalanxBoneCenter[2];
        let hand1Finger2ProximalPhalanxBoneDirection = hand1Finger2.bone(1).direction;
        hand1Finger2ProximalPhalanxBoneDirectionX += hand1Finger2ProximalPhalanxBoneDirection[0];
        hand1Finger2ProximalPhalanxBoneDirectionY += hand1Finger2ProximalPhalanxBoneDirection[1];
        hand1Finger2ProximalPhalanxBoneDirectionZ += hand1Finger2ProximalPhalanxBoneDirection[2];

        // attributes of finger 2 intermediate phalanx bone
        let hand1Finger2IntermediatePhalanxBoneCenter = hand1Finger2.bone(2).center;
        hand1Finger2IntermediatePhalanxBoneCenterX += hand1Finger2IntermediatePhalanxBoneCenter[0];
        hand1Finger2IntermediatePhalanxBoneCenterY += hand1Finger2IntermediatePhalanxBoneCenter[1];
        hand1Finger2IntermediatePhalanxBoneCenterZ += hand1Finger2IntermediatePhalanxBoneCenter[2];
        let hand1Finger2IntermediatePhalanxBoneDirection = hand1Finger2.bone(2).direction;
        hand1Finger2IntermediatePhalanxBoneDirectionX += hand1Finger2IntermediatePhalanxBoneDirection[0];
        hand1Finger2IntermediatePhalanxBoneDirectionY += hand1Finger2IntermediatePhalanxBoneDirection[1];
        hand1Finger2IntermediatePhalanxBoneDirectionZ += hand1Finger2IntermediatePhalanxBoneDirection[2];

        // attributes of finger 2 distal phalanx bone
        let hand1Finger2DistalPhalanxBoneCenter = hand1Finger2.bone(3).center;
        hand1Finger2DistalPhalanxBoneCenterX += hand1Finger2DistalPhalanxBoneCenter[0];
        hand1Finger2DistalPhalanxBoneCenterY += hand1Finger2DistalPhalanxBoneCenter[1];
        hand1Finger2DistalPhalanxBoneCenterZ += hand1Finger2DistalPhalanxBoneCenter[2];
        let hand1Finger2DistalPhalanxBoneDirection = hand1Finger2.bone(3).direction;
        hand1Finger2DistalPhalanxBoneDirectionX += hand1Finger2DistalPhalanxBoneDirection[0];
        hand1Finger2DistalPhalanxBoneDirectionY += hand1Finger2DistalPhalanxBoneDirection[1];
        hand1Finger2DistalPhalanxBoneDirectionZ += hand1Finger2DistalPhalanxBoneDirection[2];
        hand1Finger2TipPositionX += hand1Finger2.joint_position(3)[0];
        hand1Finger2TipPositionY += hand1Finger2.joint_position(3)[1];
        hand1Finger2TipPositionZ += hand1Finger2.joint_position(3)[2];
      }

      if (frame.hands[0].fingers[2] != null) {

        // Set Hand 1 Finger 3 ##
        let hand1Finger3 = frame.hands[0].fingers[2];
        let hand1Finger3DirectionVector = hand1Finger3.direction;
        hand1Finger3DirectionX += hand1Finger3DirectionVector[0];
        hand1Finger3DirectionY += hand1Finger3DirectionVector[1];
        hand1Finger3DirectionZ += hand1Finger3DirectionVector[2];

        // attributes of finger 3 metacarpals
        let hand1Finger3MetacarpalCenter = hand1Finger3.bone(0).center;
        hand1Finger3MetacarpalCenterX += hand1Finger3MetacarpalCenter[0];
        hand1Finger3MetacarpalCenterY += hand1Finger3MetacarpalCenter[1];
        hand1Finger3MetacarpalCenterZ += hand1Finger3MetacarpalCenter[2];
        let hand1Finger3MetacarpalDirection = hand1Finger3.bone(0).direction;
        hand1Finger3MetacarpalDirectionX += hand1Finger3MetacarpalDirection[0];
        hand1Finger3MetacarpalDirectionY += hand1Finger3MetacarpalDirection[1];
        hand1Finger3MetacarpalDirectionZ += hand1Finger3MetacarpalDirection[2];

        // attributes of finger 3 proximal phalanx bone
        let hand1Finger3ProximalPhalanxBoneCenter = hand1Finger3.bone(1).center;
        hand1Finger3ProximalPhalanxBoneCenterX += hand1Finger3ProximalPhalanxBoneCenter[0];
        hand1Finger3ProximalPhalanxBoneCenterY += hand1Finger3ProximalPhalanxBoneCenter[1];
        hand1Finger3ProximalPhalanxBoneCenterZ += hand1Finger3ProximalPhalanxBoneCenter[2];
        let hand1Finger3ProximalPhalanxBoneDirection = hand1Finger3.bone(1).direction;
        hand1Finger3ProximalPhalanxBoneDirectionX += hand1Finger3ProximalPhalanxBoneDirection[0];
        hand1Finger3ProximalPhalanxBoneDirectionY += hand1Finger3ProximalPhalanxBoneDirection[1];
        hand1Finger3ProximalPhalanxBoneDirectionZ += hand1Finger3ProximalPhalanxBoneDirection[2];

        // attributes of finger 3 intermediate phalanx bone
        let hand1Finger3IntermediatePhalanxBoneCenter = hand1Finger3.bone(2).center;
        hand1Finger3IntermediatePhalanxBoneCenterX += hand1Finger3IntermediatePhalanxBoneCenter[0];
        hand1Finger3IntermediatePhalanxBoneCenterY += hand1Finger3IntermediatePhalanxBoneCenter[1];
        hand1Finger3IntermediatePhalanxBoneCenterZ += hand1Finger3IntermediatePhalanxBoneCenter[2];
        let hand1Finger3IntermediatePhalanxBoneDirection = hand1Finger3.bone(2).direction;
        hand1Finger3IntermediatePhalanxBoneDirectionX += hand1Finger3IntermediatePhalanxBoneDirection[0];
        hand1Finger3IntermediatePhalanxBoneDirectionY += hand1Finger3IntermediatePhalanxBoneDirection[1];
        hand1Finger3IntermediatePhalanxBoneDirectionZ += hand1Finger3IntermediatePhalanxBoneDirection[2];

        // attributes of finger 3 distal phalanx bone
        let hand1Finger3DistalPhalanxBoneCenter = hand1Finger3.bone(3).center;
        hand1Finger3DistalPhalanxBoneCenterX += hand1Finger3DistalPhalanxBoneCenter[0];
        hand1Finger3DistalPhalanxBoneCenterY += hand1Finger3DistalPhalanxBoneCenter[1];
        hand1Finger3DistalPhalanxBoneCenterZ += hand1Finger3DistalPhalanxBoneCenter[2];
        let hand1Finger3DistalPhalanxBoneDirection = hand1Finger3.bone(3).direction;
        hand1Finger3DistalPhalanxBoneDirectionX += hand1Finger3DistalPhalanxBoneDirection[0];
        hand1Finger3DistalPhalanxBoneDirectionY += hand1Finger3DistalPhalanxBoneDirection[1];
        hand1Finger3DistalPhalanxBoneDirectionZ += hand1Finger3DistalPhalanxBoneDirection[2];
        hand1Finger3TipPositionX += hand1Finger3.joint_position(3)[0];
        hand1Finger3TipPositionY += hand1Finger3.joint_position(3)[1];
        hand1Finger3TipPositionZ += hand1Finger3.joint_position(3)[2];
      }

      if (frame.hands[0].fingers[3] != null) {

        // Set Hand 1 Finger 4 ##
        let hand1Finger4 = frame.hands[0].fingers[3];
        let hand1Finger4DirectionVector = hand1Finger4.direction;
        hand1Finger4DirectionX += hand1Finger4DirectionVector[0];
        hand1Finger4DirectionY += hand1Finger4DirectionVector[1];
        hand1Finger4DirectionZ += hand1Finger4DirectionVector[2];

        // attributes of finger 4 metacarpals
        let hand1Finger4MetacarpalCenter = hand1Finger4.bone(0).center;
        hand1Finger4MetacarpalCenterX += hand1Finger4MetacarpalCenter[0];
        hand1Finger4MetacarpalCenterY += hand1Finger4MetacarpalCenter[1];
        hand1Finger4MetacarpalCenterZ += hand1Finger4MetacarpalCenter[2];
        let hand1Finger4MetacarpalDirection = hand1Finger4.bone(0).direction;
        hand1Finger4MetacarpalDirectionX += hand1Finger4MetacarpalDirection[0];
        hand1Finger4MetacarpalDirectionY += hand1Finger4MetacarpalDirection[1];
        hand1Finger4MetacarpalDirectionZ += hand1Finger4MetacarpalDirection[2];

        // attributes of finger 4 proximal phalanx bone
        let hand1Finger4ProximalPhalanxBoneCenter = hand1Finger4.bone(1).center;
        hand1Finger4ProximalPhalanxBoneCenterX += hand1Finger4ProximalPhalanxBoneCenter[0];
        hand1Finger4ProximalPhalanxBoneCenterY += hand1Finger4ProximalPhalanxBoneCenter[1];
        hand1Finger4ProximalPhalanxBoneCenterZ += hand1Finger4ProximalPhalanxBoneCenter[2];
        let hand1Finger4ProximalPhalanxBoneDirection = hand1Finger4.bone(1).direction;
        hand1Finger4ProximalPhalanxBoneDirectionX += hand1Finger4ProximalPhalanxBoneDirection[0];
        hand1Finger4ProximalPhalanxBoneDirectionY += hand1Finger4ProximalPhalanxBoneDirection[1];
        hand1Finger4ProximalPhalanxBoneDirectionZ += hand1Finger4ProximalPhalanxBoneDirection[2];

        // attributes of finger 4 intermediate phalanx bone
        let hand1Finger4IntermediatePhalanxBoneCenter = hand1Finger4.bone(2).center;
        hand1Finger4IntermediatePhalanxBoneCenterX += hand1Finger4IntermediatePhalanxBoneCenter[0];
        hand1Finger4IntermediatePhalanxBoneCenterY += hand1Finger4IntermediatePhalanxBoneCenter[1];
        hand1Finger4IntermediatePhalanxBoneCenterZ += hand1Finger4IntermediatePhalanxBoneCenter[2];
        let hand1Finger4IntermediatePhalanxBoneDirection = hand1Finger4.bone(2).direction;
        hand1Finger4IntermediatePhalanxBoneDirectionX += hand1Finger4IntermediatePhalanxBoneDirection[0];
        hand1Finger4IntermediatePhalanxBoneDirectionY += hand1Finger4IntermediatePhalanxBoneDirection[1];
        hand1Finger4IntermediatePhalanxBoneDirectionZ += hand1Finger4IntermediatePhalanxBoneDirection[2];

        // attributes of finger 4 distal phalanx bone
        let hand1Finger4DistalPhalanxBoneCenter = hand1Finger4.bone(3).center;
        hand1Finger4DistalPhalanxBoneCenterX += hand1Finger4DistalPhalanxBoneCenter[0];
        hand1Finger4DistalPhalanxBoneCenterY += hand1Finger4DistalPhalanxBoneCenter[1];
        hand1Finger4DistalPhalanxBoneCenterZ += hand1Finger4DistalPhalanxBoneCenter[2];
        let hand1Finger4DistalPhalanxBoneDirection = hand1Finger4.bone(3).direction;
        hand1Finger4DistalPhalanxBoneDirectionX += hand1Finger4DistalPhalanxBoneDirection[0];
        hand1Finger4DistalPhalanxBoneDirectionY += hand1Finger4DistalPhalanxBoneDirection[1];
        hand1Finger4DistalPhalanxBoneDirectionZ += hand1Finger4DistalPhalanxBoneDirection[2];
        hand1Finger4TipPositionX += hand1Finger4.joint_position(3)[0];
        hand1Finger4TipPositionY += hand1Finger4.joint_position(3)[1];
        hand1Finger4TipPositionZ += hand1Finger4.joint_position(3)[2];
      }

      if (frame.hands[0].fingers[4] != null) {

        // Set Hand 1 Finger 5 ##
        let hand1Finger5 = frame.hands[0].fingers[4];
        let hand1Finger5DirectionVector = hand1Finger5.direction;
        hand1Finger5DirectionX += hand1Finger5DirectionVector[0];
        hand1Finger5DirectionY += hand1Finger5DirectionVector[1];
        hand1Finger5DirectionZ += hand1Finger5DirectionVector[2];

        // attributes of finger 5 metacarpals
        let hand1Finger5MetacarpalCenter = hand1Finger5.bone(0).center;
        hand1Finger5MetacarpalCenterX += hand1Finger5MetacarpalCenter[0];
        hand1Finger5MetacarpalCenterY += hand1Finger5MetacarpalCenter[1];
        hand1Finger5MetacarpalCenterZ += hand1Finger5MetacarpalCenter[2];
        let hand1Finger5MetacarpalDirection = hand1Finger5.bone(0).direction;
        hand1Finger5MetacarpalDirectionX += hand1Finger5MetacarpalDirection[0];
        hand1Finger5MetacarpalDirectionY += hand1Finger5MetacarpalDirection[1];
        hand1Finger5MetacarpalDirectionZ += hand1Finger5MetacarpalDirection[2];

        // attributes of finger 5 proximal phalanx bone
        let hand1Finger5ProximalPhalanxBoneCenter = hand1Finger5.bone(1).center;
        hand1Finger5ProximalPhalanxBoneCenterX += hand1Finger5ProximalPhalanxBoneCenter[0];
        hand1Finger5ProximalPhalanxBoneCenterY += hand1Finger5ProximalPhalanxBoneCenter[1];
        hand1Finger5ProximalPhalanxBoneCenterZ += hand1Finger5ProximalPhalanxBoneCenter[2];
        let hand1Finger5ProximalPhalanxBoneDirection = hand1Finger5.bone(1).direction;
        hand1Finger5ProximalPhalanxBoneDirectionX += hand1Finger5ProximalPhalanxBoneDirection[0];
        hand1Finger5ProximalPhalanxBoneDirectionY += hand1Finger5ProximalPhalanxBoneDirection[1];
        hand1Finger5ProximalPhalanxBoneDirectionZ += hand1Finger5ProximalPhalanxBoneDirection[2];

        // attributes of finger 5 intermediate phalanx bone
        let hand1Finger5IntermediatePhalanxBoneCenter = hand1Finger5.bone(2).center;
        hand1Finger5IntermediatePhalanxBoneCenterX += hand1Finger5IntermediatePhalanxBoneCenter[0];
        hand1Finger5IntermediatePhalanxBoneCenterY += hand1Finger5IntermediatePhalanxBoneCenter[1];
        hand1Finger5IntermediatePhalanxBoneCenterZ += hand1Finger5IntermediatePhalanxBoneCenter[2];
        let hand1Finger5IntermediatePhalanxBoneDirection = hand1Finger5.bone(2).direction;
        hand1Finger5IntermediatePhalanxBoneDirectionX += hand1Finger5IntermediatePhalanxBoneDirection[0];
        hand1Finger5IntermediatePhalanxBoneDirectionY += hand1Finger5IntermediatePhalanxBoneDirection[1];
        hand1Finger5IntermediatePhalanxBoneDirectionZ += hand1Finger5IntermediatePhalanxBoneDirection[2];

        // attributes of finger 5 distal phalanx bone
        let hand1Finger5DistalPhalanxBoneCenter = hand1Finger5.bone(3).center;
        hand1Finger5DistalPhalanxBoneCenterX += hand1Finger5DistalPhalanxBoneCenter[0];
        hand1Finger5DistalPhalanxBoneCenterY += hand1Finger5DistalPhalanxBoneCenter[1];
        hand1Finger5DistalPhalanxBoneCenterZ += hand1Finger5DistalPhalanxBoneCenter[2];
        let hand1Finger5DistalPhalanxBoneDirection = hand1Finger5.bone(3).direction;
        hand1Finger5DistalPhalanxBoneDirectionX += hand1Finger5DistalPhalanxBoneDirection[0];
        hand1Finger5DistalPhalanxBoneDirectionY += hand1Finger5DistalPhalanxBoneDirection[1];
        hand1Finger5DistalPhalanxBoneDirectionZ += hand1Finger5DistalPhalanxBoneDirection[2];
        hand1Finger5TipPositionX += hand1Finger5.joint_position(3)[0];
        hand1Finger5TipPositionY += hand1Finger5.joint_position(3)[1];
        hand1Finger5TipPositionZ += hand1Finger5.joint_position(3)[2];
      }
    }

    if (frame.hands[1] != null) {
      let hand2 = frame.hands[1];

      let hand2DirectionVector = hand2.direction;
      hand2DirectionX += hand2DirectionVector[0];
      hand2DirectionY += hand2DirectionVector[1];
      hand2DirectionZ += hand2DirectionVector[2];
      let hand2PalmPositionVector = hand2.palm_position;
      hand2PalmPositionX += hand2PalmPositionVector[0];
      hand2PalmPositionY += hand2PalmPositionVector[1];
      hand2PalmPositionZ += hand2PalmPositionVector[2];
      hand2GrabStrength += hand2.grab_strength;
      hand2PinchStrength += hand2.pinch_strength;
      hand2Confidence += hand2.confidence;
      let hand2ArmDirectionVector = hand2.arm.direction;
      hand2ArmDirectionX += hand2ArmDirectionVector[0];
      hand2ArmDirectionY += hand2ArmDirectionVector[1];
      hand2ArmDirectionZ += hand2ArmDirectionVector[2];
      let hand2ArmCenterVector = hand2.arm.elbow_position + (hand2.arm.wrist_position - hand2.arm.elbow_position) * 0.05;
      hand2ArmCenterX += hand2ArmCenterVector[0];
      hand2ArmCenterY += hand2ArmCenterVector[1];
      hand2ArmCenterZ += hand2ArmCenterVector[2];

      if (previousFrame && previousFrame.valid) {
        let hand2TranslationVector = hand2.translation(previousFrame);
        hand2TranslationX += hand2TranslationVector[0];
        hand2TranslationY += hand2TranslationVector[1];
        hand2TranslationZ += hand2TranslationVector[2];
        let hand2RotationAxisVector = hand2.rotation_axis(previousFrame);
        hand2RotationAxisX += hand2RotationAxisVector[0];
        hand2RotationAxisY += hand2RotationAxisVector[1];
        hand2RotationAxisZ += hand2RotationAxisVector[2];
        hand2RotationAngle += hand2.rotation_angle(previousFrame);
      }

      if (frame.hands[1].fingers[0] != null) {

        // Set Hand 1 Finger 1 ##
        let hand2Finger1 = frame.hands[1].fingers[0];
        let hand2Finger1DirectionVector = hand2Finger1.direction;
        hand2Finger1DirectionX += hand2Finger1DirectionVector[0];
        hand2Finger1DirectionY += hand2Finger1DirectionVector[1];
        hand2Finger1DirectionZ += hand2Finger1DirectionVector[2];

        // attributes of finger 1 metacarpals
        let hand2Finger1MetacarpalCenter = hand2Finger1.bone(0).center;
        hand2Finger1MetacarpalCenterX += hand2Finger1MetacarpalCenter[0];
        hand2Finger1MetacarpalCenterY += hand2Finger1MetacarpalCenter[1];
        hand2Finger1MetacarpalCenterZ += hand2Finger1MetacarpalCenter[2];
        let hand2Finger1MetacarpalDirection = hand2Finger1.bone(0).direction;
        hand2Finger1MetacarpalDirectionX += hand2Finger1MetacarpalDirection[0];
        hand2Finger1MetacarpalDirectionY += hand2Finger1MetacarpalDirection[1];
        hand2Finger1MetacarpalDirectionZ += hand2Finger1MetacarpalDirection[2];

        // attributes of finger 1 proximal phalanx bone
        let hand2Finger1ProximalPhalanxBoneCenter = hand2Finger1.bone(1).center;
        hand2Finger1ProximalPhalanxBoneCenterX += hand2Finger1ProximalPhalanxBoneCenter[0];
        hand2Finger1ProximalPhalanxBoneCenterY += hand2Finger1ProximalPhalanxBoneCenter[1];
        hand2Finger1ProximalPhalanxBoneCenterZ += hand2Finger1ProximalPhalanxBoneCenter[2];
        let hand2Finger1ProximalPhalanxBoneDirection = hand2Finger1.bone(1).direction;
        hand2Finger1ProximalPhalanxBoneDirectionX += hand2Finger1ProximalPhalanxBoneDirection[0];
        hand2Finger1ProximalPhalanxBoneDirectionY += hand2Finger1ProximalPhalanxBoneDirection[1];
        hand2Finger1ProximalPhalanxBoneDirectionZ += hand2Finger1ProximalPhalanxBoneDirection[2];

        // attributes of finger 1 intermediate phalanx bone
        let hand2Finger1IntermediatePhalanxBoneCenter = hand2Finger1.bone(2).center;
        hand2Finger1IntermediatePhalanxBoneCenterX += hand2Finger1IntermediatePhalanxBoneCenter[0];
        hand2Finger1IntermediatePhalanxBoneCenterY += hand2Finger1IntermediatePhalanxBoneCenter[1];
        hand2Finger1IntermediatePhalanxBoneCenterZ += hand2Finger1IntermediatePhalanxBoneCenter[2];
        let hand2Finger1IntermediatePhalanxBoneDirection = hand2Finger1.bone(2).direction;
        hand2Finger1IntermediatePhalanxBoneDirectionX += hand2Finger1IntermediatePhalanxBoneDirection[0];
        hand2Finger1IntermediatePhalanxBoneDirectionY += hand2Finger1IntermediatePhalanxBoneDirection[1];
        hand2Finger1IntermediatePhalanxBoneDirectionZ += hand2Finger1IntermediatePhalanxBoneDirection[2];

        // attributes of finger 1 distal phalanx bone
        let hand2Finger1DistalPhalanxBoneCenter = hand2Finger1.bone(3).center;
        hand2Finger1DistalPhalanxBoneCenterX += hand2Finger1DistalPhalanxBoneCenter[0];
        hand2Finger1DistalPhalanxBoneCenterY += hand2Finger1DistalPhalanxBoneCenter[1];
        hand2Finger1DistalPhalanxBoneCenterZ += hand2Finger1DistalPhalanxBoneCenter[2];
        let hand2Finger1DistalPhalanxBoneDirection = hand2Finger1.bone(3).direction;
        hand2Finger1DistalPhalanxBoneDirectionX += hand2Finger1DistalPhalanxBoneDirection[0];
        hand2Finger1DistalPhalanxBoneDirectionY += hand2Finger1DistalPhalanxBoneDirection[1];
        hand2Finger1DistalPhalanxBoneDirectionZ += hand2Finger1DistalPhalanxBoneDirection[2];
        hand2Finger1TipPositionX += hand2Finger1.joint_position(3)[0];
        hand2Finger1TipPositionY += hand2Finger1.joint_position(3)[1];
        hand2Finger1TipPositionZ += hand2Finger1.joint_position(3)[2];
      }

      if (frame.hands[1].fingers[1] != null) {

        // Set Hand 1 Finger 2 ##
        let hand2Finger2 = frame.hands[1].fingers[1];
        let hand2Finger2DirectionVector = hand2Finger2.direction;
        hand2Finger2DirectionX += hand2Finger2DirectionVector[0];
        hand2Finger2DirectionY += hand2Finger2DirectionVector[1];
        hand2Finger2DirectionZ += hand2Finger2DirectionVector[2];

        // attributes of finger 2 metacarpals
        let hand2Finger2MetacarpalCenter = hand2Finger2.bone(0).center;
        hand2Finger2MetacarpalCenterX += hand2Finger2MetacarpalCenter[0];
        hand2Finger2MetacarpalCenterY += hand2Finger2MetacarpalCenter[1];
        hand2Finger2MetacarpalCenterZ += hand2Finger2MetacarpalCenter[2];
        let hand2Finger2MetacarpalDirection = hand2Finger2.bone(0).direction;
        hand2Finger2MetacarpalDirectionX += hand2Finger2MetacarpalDirection[0];
        hand2Finger2MetacarpalDirectionY += hand2Finger2MetacarpalDirection[1];
        hand2Finger2MetacarpalDirectionZ += hand2Finger2MetacarpalDirection[2];

        // attributes of finger 2 proximal phalanx bone
        let hand2Finger2ProximalPhalanxBoneCenter = hand2Finger2.bone(1).center;
        hand2Finger2ProximalPhalanxBoneCenterX += hand2Finger2ProximalPhalanxBoneCenter[0];
        hand2Finger2ProximalPhalanxBoneCenterY += hand2Finger2ProximalPhalanxBoneCenter[1];
        hand2Finger2ProximalPhalanxBoneCenterZ += hand2Finger2ProximalPhalanxBoneCenter[2];
        let hand2Finger2ProximalPhalanxBoneDirection = hand2Finger2.bone(1).direction;
        hand2Finger2ProximalPhalanxBoneDirectionX += hand2Finger2ProximalPhalanxBoneDirection[0];
        hand2Finger2ProximalPhalanxBoneDirectionY += hand2Finger2ProximalPhalanxBoneDirection[1];
        hand2Finger2ProximalPhalanxBoneDirectionZ += hand2Finger2ProximalPhalanxBoneDirection[2];

        // attributes of finger 2 intermediate phalanx bone
        let hand2Finger2IntermediatePhalanxBoneCenter = hand2Finger2.bone(2).center;
        hand2Finger2IntermediatePhalanxBoneCenterX += hand2Finger2IntermediatePhalanxBoneCenter[0];
        hand2Finger2IntermediatePhalanxBoneCenterY += hand2Finger2IntermediatePhalanxBoneCenter[1];
        hand2Finger2IntermediatePhalanxBoneCenterZ += hand2Finger2IntermediatePhalanxBoneCenter[2];
        let hand2Finger2IntermediatePhalanxBoneDirection = hand2Finger2.bone(2).direction;
        hand2Finger2IntermediatePhalanxBoneDirectionX += hand2Finger2IntermediatePhalanxBoneDirection[0];
        hand2Finger2IntermediatePhalanxBoneDirectionY += hand2Finger2IntermediatePhalanxBoneDirection[1];
        hand2Finger2IntermediatePhalanxBoneDirectionZ += hand2Finger2IntermediatePhalanxBoneDirection[2];

        // attributes of finger 2 distal phalanx bone
        let hand2Finger2DistalPhalanxBoneCenter = hand2Finger2.bone(3).center;
        hand2Finger2DistalPhalanxBoneCenterX += hand2Finger2DistalPhalanxBoneCenter[0];
        hand2Finger2DistalPhalanxBoneCenterY += hand2Finger2DistalPhalanxBoneCenter[1];
        hand2Finger2DistalPhalanxBoneCenterZ += hand2Finger2DistalPhalanxBoneCenter[2];
        let hand2Finger2DistalPhalanxBoneDirection = hand2Finger2.bone(3).direction;
        hand2Finger2DistalPhalanxBoneDirectionX += hand2Finger2DistalPhalanxBoneDirection[0];
        hand2Finger2DistalPhalanxBoneDirectionY += hand2Finger2DistalPhalanxBoneDirection[1];
        hand2Finger2DistalPhalanxBoneDirectionZ += hand2Finger2DistalPhalanxBoneDirection[2];
        hand2Finger2TipPositionX += hand2Finger2.joint_position(3)[0];
        hand2Finger2TipPositionY += hand2Finger2.joint_position(3)[1];
        hand2Finger2TipPositionZ += hand2Finger2.joint_position(3)[2];
      }

      if (frame.hands[1].fingers[2] != null) {

        // Set Hand 1 Finger 3 ##
        let hand2Finger3 = frame.hands[1].fingers[2];
        let hand2Finger3DirectionVector = hand2Finger3.direction;
        hand2Finger3DirectionX += hand2Finger3DirectionVector[0];
        hand2Finger3DirectionY += hand2Finger3DirectionVector[1];
        hand2Finger3DirectionZ += hand2Finger3DirectionVector[2];

        // attributes of finger 3 metacarpals
        let hand2Finger3MetacarpalCenter = hand2Finger3.bone(0).center;
        hand2Finger3MetacarpalCenterX += hand2Finger3MetacarpalCenter[0];
        hand2Finger3MetacarpalCenterY += hand2Finger3MetacarpalCenter[1];
        hand2Finger3MetacarpalCenterZ += hand2Finger3MetacarpalCenter[2];
        let hand2Finger3MetacarpalDirection = hand2Finger3.bone(0).direction;
        hand2Finger3MetacarpalDirectionX += hand2Finger3MetacarpalDirection[0];
        hand2Finger3MetacarpalDirectionY += hand2Finger3MetacarpalDirection[1];
        hand2Finger3MetacarpalDirectionZ += hand2Finger3MetacarpalDirection[2];

        // attributes of finger 3 proximal phalanx bone
        let hand2Finger3ProximalPhalanxBoneCenter = hand2Finger3.bone(1).center;
        hand2Finger3ProximalPhalanxBoneCenterX += hand2Finger3ProximalPhalanxBoneCenter[0];
        hand2Finger3ProximalPhalanxBoneCenterY += hand2Finger3ProximalPhalanxBoneCenter[1];
        hand2Finger3ProximalPhalanxBoneCenterZ += hand2Finger3ProximalPhalanxBoneCenter[2];
        let hand2Finger3ProximalPhalanxBoneDirection = hand2Finger3.bone(1).direction;
        hand2Finger3ProximalPhalanxBoneDirectionX += hand2Finger3ProximalPhalanxBoneDirection[0];
        hand2Finger3ProximalPhalanxBoneDirectionY += hand2Finger3ProximalPhalanxBoneDirection[1];
        hand2Finger3ProximalPhalanxBoneDirectionZ += hand2Finger3ProximalPhalanxBoneDirection[2];

        // attributes of finger 3 intermediate phalanx bone
        let hand2Finger3IntermediatePhalanxBoneCenter = hand2Finger3.bone(2).center;
        hand2Finger3IntermediatePhalanxBoneCenterX += hand2Finger3IntermediatePhalanxBoneCenter[0];
        hand2Finger3IntermediatePhalanxBoneCenterY += hand2Finger3IntermediatePhalanxBoneCenter[1];
        hand2Finger3IntermediatePhalanxBoneCenterZ += hand2Finger3IntermediatePhalanxBoneCenter[2];
        let hand2Finger3IntermediatePhalanxBoneDirection = hand2Finger3.bone(2).direction;
        hand2Finger3IntermediatePhalanxBoneDirectionX += hand2Finger3IntermediatePhalanxBoneDirection[0];
        hand2Finger3IntermediatePhalanxBoneDirectionY += hand2Finger3IntermediatePhalanxBoneDirection[1];
        hand2Finger3IntermediatePhalanxBoneDirectionZ += hand2Finger3IntermediatePhalanxBoneDirection[2];

        // attributes of finger 3 distal phalanx bone
        let hand2Finger3DistalPhalanxBoneCenter = hand2Finger3.bone(3).center;
        hand2Finger3DistalPhalanxBoneCenterX += hand2Finger3DistalPhalanxBoneCenter[0];
        hand2Finger3DistalPhalanxBoneCenterY += hand2Finger3DistalPhalanxBoneCenter[1];
        hand2Finger3DistalPhalanxBoneCenterZ += hand2Finger3DistalPhalanxBoneCenter[2];
        let hand2Finger3DistalPhalanxBoneDirection = hand2Finger3.bone(3).direction;
        hand2Finger3DistalPhalanxBoneDirectionX += hand2Finger3DistalPhalanxBoneDirection[0];
        hand2Finger3DistalPhalanxBoneDirectionY += hand2Finger3DistalPhalanxBoneDirection[1];
        hand2Finger3DistalPhalanxBoneDirectionZ += hand2Finger3DistalPhalanxBoneDirection[2];
        hand2Finger3TipPositionX += hand2Finger3.joint_position(3)[0];
        hand2Finger3TipPositionY += hand2Finger3.joint_position(3)[1];
        hand2Finger3TipPositionZ += hand2Finger3.joint_position(3)[2];
      }

      if (frame.hands[1].fingers[3] != null) {

        // Set Hand 1 Finger 4 ##
        let hand2Finger4 = frame.hands[1].fingers[3];
        let hand2Finger4DirectionVector = hand2Finger4.direction;
        hand2Finger4DirectionX += hand2Finger4DirectionVector[0];
        hand2Finger4DirectionY += hand2Finger4DirectionVector[1];
        hand2Finger4DirectionZ += hand2Finger4DirectionVector[2];

        // attributes of finger 4 metacarpals
        let hand2Finger4MetacarpalCenter = hand2Finger4.bone(0).center;
        hand2Finger4MetacarpalCenterX += hand2Finger4MetacarpalCenter[0];
        hand2Finger4MetacarpalCenterY += hand2Finger4MetacarpalCenter[1];
        hand2Finger4MetacarpalCenterZ += hand2Finger4MetacarpalCenter[2];
        let hand2Finger4MetacarpalDirection = hand2Finger4.bone(0).direction;
        hand2Finger4MetacarpalDirectionX += hand2Finger4MetacarpalDirection[0];
        hand2Finger4MetacarpalDirectionY += hand2Finger4MetacarpalDirection[1];
        hand2Finger4MetacarpalDirectionZ += hand2Finger4MetacarpalDirection[2];

        // attributes of finger 4 proximal phalanx bone
        let hand2Finger4ProximalPhalanxBoneCenter = hand2Finger4.bone(1).center;
        hand2Finger4ProximalPhalanxBoneCenterX += hand2Finger4ProximalPhalanxBoneCenter[0];
        hand2Finger4ProximalPhalanxBoneCenterY += hand2Finger4ProximalPhalanxBoneCenter[1];
        hand2Finger4ProximalPhalanxBoneCenterZ += hand2Finger4ProximalPhalanxBoneCenter[2];
        let hand2Finger4ProximalPhalanxBoneDirection = hand2Finger4.bone(1).direction;
        hand2Finger4ProximalPhalanxBoneDirectionX += hand2Finger4ProximalPhalanxBoneDirection[0];
        hand2Finger4ProximalPhalanxBoneDirectionY += hand2Finger4ProximalPhalanxBoneDirection[1];
        hand2Finger4ProximalPhalanxBoneDirectionZ += hand2Finger4ProximalPhalanxBoneDirection[2];

        // attributes of finger 4 intermediate phalanx bone
        let hand2Finger4IntermediatePhalanxBoneCenter = hand2Finger4.bone(2).center;
        hand2Finger4IntermediatePhalanxBoneCenterX += hand2Finger4IntermediatePhalanxBoneCenter[0];
        hand2Finger4IntermediatePhalanxBoneCenterY += hand2Finger4IntermediatePhalanxBoneCenter[1];
        hand2Finger4IntermediatePhalanxBoneCenterZ += hand2Finger4IntermediatePhalanxBoneCenter[2];
        let hand2Finger4IntermediatePhalanxBoneDirection = hand2Finger4.bone(2).direction;
        hand2Finger4IntermediatePhalanxBoneDirectionX += hand2Finger4IntermediatePhalanxBoneDirection[0];
        hand2Finger4IntermediatePhalanxBoneDirectionY += hand2Finger4IntermediatePhalanxBoneDirection[1];
        hand2Finger4IntermediatePhalanxBoneDirectionZ += hand2Finger4IntermediatePhalanxBoneDirection[2];

        // attributes of finger 4 distal phalanx bone
        let hand2Finger4DistalPhalanxBoneCenter = hand2Finger4.bone(3).center;
        hand2Finger4DistalPhalanxBoneCenterX += hand2Finger4DistalPhalanxBoneCenter[0];
        hand2Finger4DistalPhalanxBoneCenterY += hand2Finger4DistalPhalanxBoneCenter[1];
        hand2Finger4DistalPhalanxBoneCenterZ += hand2Finger4DistalPhalanxBoneCenter[2];
        let hand2Finger4DistalPhalanxBoneDirection = hand2Finger4.bone(3).direction;
        hand2Finger4DistalPhalanxBoneDirectionX += hand2Finger4DistalPhalanxBoneDirection[0];
        hand2Finger4DistalPhalanxBoneDirectionY += hand2Finger4DistalPhalanxBoneDirection[1];
        hand2Finger4DistalPhalanxBoneDirectionZ += hand2Finger4DistalPhalanxBoneDirection[2];
        hand2Finger4TipPositionX += hand2Finger4.joint_position(3)[0];
        hand2Finger4TipPositionY += hand2Finger4.joint_position(3)[1];
        hand2Finger4TipPositionZ += hand2Finger4.joint_position(3)[2];
      }

      if (frame.hands[1].fingers[4] != null) {

        // Set Hand 1 Finger 5 ##
        let hand2Finger5 = frame.hands[1].fingers[4];
        let hand2Finger5DirectionVector = hand2Finger5.direction;
        hand2Finger5DirectionX += hand2Finger5DirectionVector[0];
        hand2Finger5DirectionY += hand2Finger5DirectionVector[1];
        hand2Finger5DirectionZ += hand2Finger5DirectionVector[2];

        // attributes of finger 5 metacarpals
        let hand2Finger5MetacarpalCenter = hand2Finger5.bone(0).center;
        hand2Finger5MetacarpalCenterX += hand2Finger5MetacarpalCenter[0];
        hand2Finger5MetacarpalCenterY += hand2Finger5MetacarpalCenter[1];
        hand2Finger5MetacarpalCenterZ += hand2Finger5MetacarpalCenter[2];
        let hand2Finger5MetacarpalDirection = hand2Finger5.bone(0).direction;
        hand2Finger5MetacarpalDirectionX += hand2Finger5MetacarpalDirection[0];
        hand2Finger5MetacarpalDirectionY += hand2Finger5MetacarpalDirection[1];
        hand2Finger5MetacarpalDirectionZ += hand2Finger5MetacarpalDirection[2];

        // attributes of finger 5 proximal phalanx bone
        let hand2Finger5ProximalPhalanxBoneCenter = hand2Finger5.bone(1).center;
        hand2Finger5ProximalPhalanxBoneCenterX += hand2Finger5ProximalPhalanxBoneCenter[0];
        hand2Finger5ProximalPhalanxBoneCenterY += hand2Finger5ProximalPhalanxBoneCenter[1];
        hand2Finger5ProximalPhalanxBoneCenterZ += hand2Finger5ProximalPhalanxBoneCenter[2];
        let hand2Finger5ProximalPhalanxBoneDirection = hand2Finger5.bone(1).direction;
        hand2Finger5ProximalPhalanxBoneDirectionX += hand2Finger5ProximalPhalanxBoneDirection[0];
        hand2Finger5ProximalPhalanxBoneDirectionY += hand2Finger5ProximalPhalanxBoneDirection[1];
        hand2Finger5ProximalPhalanxBoneDirectionZ += hand2Finger5ProximalPhalanxBoneDirection[2];

        // attributes of finger 5 intermediate phalanx bone
        let hand2Finger5IntermediatePhalanxBoneCenter = hand2Finger5.bone(2).center;
        hand2Finger5IntermediatePhalanxBoneCenterX += hand2Finger5IntermediatePhalanxBoneCenter[0];
        hand2Finger5IntermediatePhalanxBoneCenterY += hand2Finger5IntermediatePhalanxBoneCenter[1];
        hand2Finger5IntermediatePhalanxBoneCenterZ += hand2Finger5IntermediatePhalanxBoneCenter[2];
        let hand2Finger5IntermediatePhalanxBoneDirection = hand2Finger5.bone(2).direction;
        hand2Finger5IntermediatePhalanxBoneDirectionX += hand2Finger5IntermediatePhalanxBoneDirection[0];
        hand2Finger5IntermediatePhalanxBoneDirectionY += hand2Finger5IntermediatePhalanxBoneDirection[1];
        hand2Finger5IntermediatePhalanxBoneDirectionZ += hand2Finger5IntermediatePhalanxBoneDirection[2];

        // attributes of finger 5 distal phalanx bone
        let hand2Finger5DistalPhalanxBoneCenter = hand2Finger5.bone(3).center;
        hand2Finger5DistalPhalanxBoneCenterX += hand2Finger5DistalPhalanxBoneCenter[0];
        hand2Finger5DistalPhalanxBoneCenterY += hand2Finger5DistalPhalanxBoneCenter[1];
        hand2Finger5DistalPhalanxBoneCenterZ += hand2Finger5DistalPhalanxBoneCenter[2];
        let hand2Finger5DistalPhalanxBoneDirection = hand2Finger5.bone(3).direction;
        hand2Finger5DistalPhalanxBoneDirectionX += hand2Finger5DistalPhalanxBoneDirection[0];
        hand2Finger5DistalPhalanxBoneDirectionY += hand2Finger5DistalPhalanxBoneDirection[1];
        hand2Finger5DistalPhalanxBoneDirectionZ += hand2Finger5DistalPhalanxBoneDirection[2];
        hand2Finger5TipPositionX += hand2Finger5.joint_position(3)[0];
        hand2Finger5TipPositionY += hand2Finger5.joint_position(3)[1];
        hand2Finger5TipPositionZ += hand2Finger5.joint_position(3)[2];
      }
    }

    previousFrame = frame;
  }

  ans += (sumHands / numFrameGrabs).toString() + ',';
  ans += (sumFingers / numFrameGrabs).toString() + ',';
  ans += (sumTranlsationX / numFrameGrabs).toString() + ',';
  ans += (sumTranslationY / numFrameGrabs).toString() + ',';
  ans += (sumTranslationZ / numFrameGrabs).toString() + ',';
  ans += (rotationAxisX / numFrameGrabs).toString() + ',';
  ans += (rotationAxisY / numFrameGrabs).toString() + ',';
  ans += (rotationAxisZ / numFrameGrabs).toString() + ',';
  ans += (rotationAngle / numFrameGrabs).toString() + ',';

  // hand1Type = 0
  ans += (hand1DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1PalmPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1PalmPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1PalmPositionZ / numFrameGrabs).toString() + ',';
  ans += (hand1GrabStrength / numFrameGrabs).toString() + ',';
  ans += (hand1PinchStrength / numFrameGrabs).toString() + ',';
  ans += (hand1Confidence / numFrameGrabs).toString() + ',';
  ans += (hand1ArmDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1ArmDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1ArmDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1ArmCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1ArmCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1ArmCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1TranslationX / numFrameGrabs).toString() + ',';
  ans += (hand1TranslationY / numFrameGrabs).toString() + ',';
  ans += (hand1TranslationZ / numFrameGrabs).toString() + ',';
  ans += (hand1RotationAxisX / numFrameGrabs).toString() + ',';
  ans += (hand1RotationAxisY / numFrameGrabs).toString() + ',';
  ans += (hand1RotationAxisZ / numFrameGrabs).toString() + ',';
  ans += (hand1RotationAngle / numFrameGrabs).toString() + ',';

  ans += (hand2DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2PalmPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2PalmPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2PalmPositionZ / numFrameGrabs).toString() + ',';
  ans += (hand2GrabStrength / numFrameGrabs).toString() + ',';
  ans += (hand2PinchStrength / numFrameGrabs).toString() + ',';
  ans += (hand2Confidence / numFrameGrabs).toString() + ',';
  ans += (hand2ArmDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2ArmDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2ArmDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2ArmCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2ArmCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2ArmCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2TranslationX / numFrameGrabs).toString() + ',';
  ans += (hand2TranslationY / numFrameGrabs).toString() + ',';
  ans += (hand2TranslationZ / numFrameGrabs).toString() + ',';
  ans += (hand2RotationAxisX / numFrameGrabs).toString() + ',';
  ans += (hand2RotationAxisY / numFrameGrabs).toString() + ',';
  ans += (hand2RotationAxisZ / numFrameGrabs).toString() + ',';
  ans += (hand2RotationAngle / numFrameGrabs).toString() + ',';

  ans += (hand1Finger1DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger1TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand1Finger2DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger2TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand1Finger3DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger3TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand1Finger4DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger4TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand1Finger5DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand1Finger5TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand2Finger1DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger1TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand2Finger2DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger2TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand2Finger3DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger3TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand2Finger4DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger4TipPositionZ / numFrameGrabs).toString() + ',';

  ans += (hand2Finger5DirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5MetacarpalDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5ProximalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5IntermediatePhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneCenterX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneCenterY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneCenterZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneDirectionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneDirectionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5DistalPhalanxBoneDirectionZ / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5TipPositionX / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5TipPositionY / numFrameGrabs).toString() + ',';
  ans += (hand2Finger5TipPositionZ / numFrameGrabs).toString();

  console.log(ans);
};

const controller = new Leap.Controller({ enableGestures: true });

captureGesture(controller);
controller.connect();

