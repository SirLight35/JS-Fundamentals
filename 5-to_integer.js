let arg1 = process.argv[2];

if (isNaN(arg1) || arg1.trim() === "") {
  console.log("not a number");
} else {
  console.log("my number: " + arg1);
}
