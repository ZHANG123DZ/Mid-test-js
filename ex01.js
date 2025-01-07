function printChristmasTree(n, character) {
    if (typeof n !== "number" || n>=100 || n<0 || character.length !== 1 || isNaN(n) ) {
        return console.log("Invalid");
    }
    let noel = "";
    for (let i=1; i<= n; i++) {
        noel += " ".repeat((2*n-2*i)/2) + character.repeat(2*i-1) + " ".repeat((2*n-2*i)/2) + "\n";
    }
    noel += " ".repeat(n-1) + character.repeat(1) + " ".repeat(n-1);
    return console.log(noel);
}
printChristmasTree(5, "*");

// Output:

//     *
//    ***
//   *****
//  *******
// *********
//     *

printChristmasTree(4, "o");

// Output:

//    o
//   ooo
//  ooooo
// ooooooo
//    o

printChristmasTree(-10, "x");

// Output: "Invalid"