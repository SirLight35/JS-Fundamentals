let arg1 = process.argv[2];

if (!arg1) {
  console.log("Missing size");
} else {
  let size = parseInt(arg1);
  for (let i = 0; i < size; i++) {
    console.log("x".repeat(size));
  }
}
