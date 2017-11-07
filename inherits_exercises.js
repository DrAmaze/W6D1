Function.prototype.inherits = function(Parent){
  // define a surrogate
  function Surrogate(){}

  // set prototype of surrogate
  Surrogate.prototype = Parent.prototype;

  // set subclass.prototype = new surrogate()
  this.prototype = new Surrogate();

  // set subclass.prototype.constructor = subclass
  this.prototype.constructor = this;
};

Function.prototype.createInherits = function(Parent) {
  this.prototype = Object.create;
  this.prototype.constructor = this;
};
