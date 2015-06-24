Crafty.scene('LevelOne', function() {
  var BitMap = [[1, 1, 1, 1, 1, 1],
				[1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1],
				[1, 1, 1, 1, 1, 1]];

  for (var i = 0; i < 6*6; i++) {
	var Bit = Crafty.e('2D, Canvas, Color, Solid')
	  .attr({
		w: 10,
		h: 10
	  })
	  .color('black');
  }


  var SmallBlock = Crafty.e('2D, Canvas, Color, Fourway, Gravity')
    .attr({
	  x: 500,
	  y: 500,
	  w: 10,
	  h: 10
	})
	.color('red')
	.fourway(4)
	.gravity('Floor');

  SmallBlock.origin("center");

  SmallBlock.bind('EnterFrame', function() {
	this.rotation = this.rotation + 1;
  });


}, function() {
  // destructor
});
