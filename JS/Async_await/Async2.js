var interval1;
function f1() {
  //   f2().then(function (res) {
  //     console.log(res);
  //   });
  //   console.log(a);

  var a = await f2();
  console.log(a);

  console.log("I am Executing after setInterval");
}

function f2() {
  var a1 = setTimeout(function () {
    return new Promise(function (resolve, reject) {
      resolve("Hello");
    });
  }, 2000);
  return a1;
}
