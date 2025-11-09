let arg1 = process.argv[2];
let arg2 = process.argv[3];
let con = parseInt(arg1) + parseInt(arg2);
if (arg2) {
  console.log(con);
} else if (arg1) {
  console.log("Nan");
} else {
  console.log("Nan");
}
