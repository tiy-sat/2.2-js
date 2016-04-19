// JS makes the web interactive

// When using objects we utilize "dot syntax"
// to grab properties inside of them

// Undefined and NaN (not a number) are types that
// tell us important things:
// Undefined -  we have not defined a varialbe
// reference
// NaN usually - we messed up some math

// Function calls have ( ) to pass arguments
// to separate our arguments we use commas
console.log("Hello world", "I am working!");

// console.log is meant for troubleshoot variables
// to see what they equal

// _one_ equal sign assigns data to variable names
var building = {
  // syntax for objects
  // property: value

  // string of fountainhead
  name: "fountainhead",
  // number
  address: 230983,
  // number
  floors: 10
}

// To access an object we use dot syntax
console.log("building.floors", building.floors);

// To access an object we square brackets
// please note to remember quotes, as not using
// quotes would reference a variable

// When using quote-ception you will need
// double quotes on the outside and single
// quotes on the inside
console.log("building['floors']", building["floors"]);



// array of building name strings (fountainhead, at&t center, at&t stadium, rand)
var buildingNames = [
  "fountainhead",
  "at&t center",
  "at&t stadium",
  "rand"
];

// To access a specific index inside of variables
// of the type Array, we use `[0]` with a number of
// desired 0
console.log("buildingNames[0]", buildingNames[0]);


// Here I do not want to reference other vars
// Make literal objects
//
// Which is great practice when data does not need
// to be used more than once.
var backpacks = [
  // first object in array of objects
  {
    items: [
      "laptop",
      "laptop adapter",
      "notebook"
    ]
  },
  {
    items: [
      "html & css book",
      "laptop",
      "phone"
    ]
  },
  {
    items: [
      "magic kit",
      "mace",
      "soda water"
    ]
  },
  {
    items: [
      "phone",
      "altoids",
      "laptop"
    ]
  },
  {
    items: [
      "headphones",
      "knitting",
      "phone"
    ]
  }

];

// backpacksAsObject.jason.items[0]
var backpacksBetter = [
  // first object in array of objects
  {
    name: "jason",
    backpack: {
      items: [
        "laptop",
        "laptop adapter",
        "notebook"
      ]
    }
  },
  {
    name: "ernie",
    backpack: {
      items: [
        "html & css book",
        "laptop",
        "phone"
      ]
    }
  },
  {
    name: "paul",
    backpack: {
      items: [
        "magic kit",
        "mace",
        "soda water"
      ]
    }
  },
  {
    name: "e",
    backpack: {
      items: [
        "phone",
        "altoids",
        "laptop"
      ]
    }
  },
  {
    name: "mariah",
    backpack: {
      items: [
        "headphones",
        "knitting",
        "phone"
      ]
    }
  }
];

// What I want to console log:
//   In <name>'s backpack they have <number>
//   items. Including <third item string>.
var backpackOwnerNameJason = backpacksBetter[0].name;
// .length
var backpackOwnerJasonItemsLength = backpacksBetter[0].backpack.items.length;
var backpackOwnerJasonItemThree = backpacksBetter[0].backpack.items[2]
var backpackOwnerSentence = "In ";
backpackOwnerSentence += backpackOwnerNameJason;
backpackOwnerSentence += "'s backpack they have ";
backpackOwnerSentence += backpackOwnerJasonItemsLength;
backpackOwnerSentence += " items.";
backpackOwnerSentence += " Including ";
backpackOwnerSentence += backpackOwnerJasonItemThree;
backpackOwnerSentence += "."

console.log(backpackOwnerSentence);


// To access "laptop adapter": an array of objects
// that have one property containing an array
console.log("backpacks[0].items[1]", backpacks[0].items[1]);

var numberOfPhones = 23;
var preambleText = "Jason has ";
var postambleText = " mobile phones";
var fullText = preambleText + numberOfPhones + postambleText;
// performing math with strings
// is called concatenation
console.log(fullText);
// Jason has 23 mobile phones
