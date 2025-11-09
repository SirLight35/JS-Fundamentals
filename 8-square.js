let arg1 = process.argv[2];
let size = parseInt(arg1);

if (!arg1) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
