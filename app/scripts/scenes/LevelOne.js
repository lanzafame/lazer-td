Crafty.scene('LevelOne', function() {
  var Floor = Crafty.e('Floor, 2D, Canvas, Color')
    .attr({
	  x: 0,
	  y: 550,
	  w: 800,
	  h: 50
	})
	.color('black');

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
