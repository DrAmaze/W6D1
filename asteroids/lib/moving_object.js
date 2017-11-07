function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(50);
  ctx.fillStyle = "blue";
};

module.exports = MovingObject;
