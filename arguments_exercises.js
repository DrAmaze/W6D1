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

Function.prototype.applyCurriedSum = function curry(context, numArgs){
  let args = Array.from(arguments);
  let numbers = [];

  function _curriedSum(num){
    numbers.push(num);
    let total = 0;

    if (numbers.length === numArgs){
      numbers.forEach(function(n){
        total += n;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum.apply(context, args.join(numArgs));
};

Function.prototype.spreadCurriedSum = function curry(numArgs, ...args) {
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
};
