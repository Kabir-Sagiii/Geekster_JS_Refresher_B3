async function fn() {
  var a = 100;
  var b = 200; // 100,Hello I ama Async Function 200
  var c = 30;
  console.log(a);
  // var f1Promise = await f1();
  await f1();
  // console.log(f1Promise);
  console.log(b);

  // var f2Promise = await f2();
  await f2();
  console.log(c);

  // console.log(f2Promise);
}

function f1() {
  var x = "Hello I ama Async Function";
  console.log(x);
  var a1 = fetch("https://jsonplaceholder.typicode.com/posts");
}

function f2() {
  var y = "I am also async function";
  console.log(y);
  var a2 = fetch("https://jsonplaceholder.typicode.com/comments");
}
