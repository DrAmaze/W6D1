// function sum(){
//   let args = Array.from(arguments);
//   let total = 0;
//
//   args.forEach((num) => {
//     total += num;
//   });
//
//   return total;
// }


function sum(...nums){
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

Function.prototype.myBind2 = function(context, ...args){ //breakfast, "meow"
  const that = this; //says

  return function bound(...calltimeArgs){ //Markov
    return that.apply(context, args.concat(calltimeArgs)); // says.apply(breakfast, ["meow", "Markov"]) => breakfast.says("meow", "Markov");
  };
};

Function.prototype.myShortBind = function(context, ...args){
  return (...calltimeArgs) => this.apply(context, args.concat(calltimeArgs));
};
