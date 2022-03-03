var obj1 = {
  num3: 500,
};

var obj2 = {
  num3: 1000,
};

var obj3 = {
  num3: 50,
};

function fnCall(x, y) {
  //   var a;
  //   console.log(a);
  //   var b = 20;
  //   var c = "hello";
  //   console.log(typeof a);
  var num1 = x;
  var num2 = y;
  var results = num1 + num2 + this.num3; //obj1.num3 obj2.num3 window.num3 = undefined
  console.log(results);
}
// fnCall();

fnCall.call(obj1, 100, 200);
fnCall.call(obj2, 1, 2);

fnCall.apply(obj3, [20, 20]);

// var fn = fnCall.bind(obj3, 10, 10);
// fn();

var fn = fnCall.bind(obj3);
fn(30, 30);

// fnCall.bind(obj2, 1, 1)();

// fnCall.bind(obj2)(5, 1);
