let arg1 = process.argv[2];

if (isNaN(arg1) || arg1.trim() === "") {
  console.log("Not a number");
} else {
  console.log("My number: " + arg1);
}
