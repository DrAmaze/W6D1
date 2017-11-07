// // function sum(){
//   let args = Array.from(arguments);
//   let total = 0;
//
//   args.forEach((num) => {
//     total += num;
//   });
//
//   return total;
// }

function restSum(...nums){
  let total = 0;

  nums.forEach((num) => {
    total += num;
  });

  return total;
}

Function.prototype.myBind = function(context){ // breakfast
  let args = Array.from(arguments).slice(1); // meow
  const that = this; // says

  return function bound(){
    let calltimeArgs = Array.from(arguments); // Markov
    return that.apply(context, args.join(calltimeArgs)); // return breakfast.says("meow")(*waiting for calltime args*);
  };
};

Function.prototype.myRestBind = function(context, ...args){ //breakfast, "meow"
  const that = this; //says

  return function bound(...calltimeArgs){ //Markov
    return that.apply(context, args.concat(calltimeArgs)); // says.apply(breakfast, ["meow", "Markov"]) => breakfast.says("meow", "Markov");
  };
};

Function.prototype.myShortBind = function(context, ...args){
  return (...calltimeArgs) => this.apply(context, args.concat(calltimeArgs));
};

function curriedSum(numArgs){
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach(function(n){
        total += n;
      });

      return total;

    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}


// this = method we're trying to call (says)
// context = where we want to call it (breakfast)
// curry.apply(breakfast, args)

Function.prototype.applyCurry = function curry(numArgs) {
  let args = [];
  let that = this;

  function _curry(arg) {
    args.push(arg);

    if (args.length === numArgs){
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
};

Function.prototype.spreadCurry = function curry(numArgs) {
  let args = [];
  let that = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      that(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};
