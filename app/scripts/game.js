'use strict';

var Game = {
  // Initialize and start our game
  start: function () {
    Crafty.load([ ], function () {

      // Start crafty and set a background color so that we can see it's working
      Crafty.init(800, 600);
      Crafty.background('#66D124');

      // Simply start splashscreen
      Crafty.scene('LevelOne');

    });
  }
};

Game.start();
