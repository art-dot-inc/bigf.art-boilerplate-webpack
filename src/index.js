// these are the variables you can use as inputs to your algorithms
console.log(bigFhash)   // the 64 chars hex number fed to your algorithm
console.log(bigFrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the bigFrand() function
// when the "bigFhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the window.bigFAttributes property
// of the window object.
// More about it in the guide, section features:
// [https://bigFhash.xyz/articles/guide-mint-generative-token#features]
//

// window.bigFAttributes = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }
// window.bigFart();



const container = document.createElement("div")
container.innerText = `
  random hash: ${bigFhash}\n
  some pseudo random values: [ ${bigFrand()}, ${bigFrand()}, ${bigFrand()}, ${bigFrand()}, ${bigFrand()},... ]\n
`
document.body.prepend(container)

window.bigFAttributes = {
    r1: bigFrand(),
    r2: bigFrand(),
}

window.bigFart();