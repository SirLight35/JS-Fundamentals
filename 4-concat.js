let arg1 = process.argv[2];
let arg2 = process.argv[3];
let con = arg1 + " is " + arg2;
if (arg2) {
  console.log(con);
} else if (arg1) {
  console.log(arg1 + " is undefined");
} else {
  console.log("undefined is undefined");
}
