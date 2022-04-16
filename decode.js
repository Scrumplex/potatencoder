let one = ":potat:"
let zero = ":pofat:"

const input = process.argv.slice(2).join(" ");
let binary = input;
let regexOne = new RegExp(one, "g");
binary = binary.replace(regexOne, 1)
let regexZero = new RegExp(zero, "g")
binary = binary.replace(regexZero, 0)
console.log("BIN:", binary)

out = String.fromCharCode(
  ...binary.split(' ').map(bin => parseInt(bin, 2))
)

console.log("OUT:", out)

