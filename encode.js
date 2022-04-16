const one = ":potat:"
const zero = ":pofat:"

const input = process.argv.slice(2).join(" ");
let binary = "";
for (var i = 0; i < input.length; i++) {
      binary += input[i].charCodeAt(0).toString(2) + " ";
}

console.log("BIN:", binary);
let potated = "";
potated = binary;
potated = potated.replace(/0/g, zero);
potated = potated.replace(/1/g, one);

console.log("OUT:", potated)
