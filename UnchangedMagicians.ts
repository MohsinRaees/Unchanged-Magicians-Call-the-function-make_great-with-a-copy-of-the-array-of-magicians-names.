//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.//


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great() with a copy of the magicians array
let great_magicians: string[] = make_great([...magicians]);

// Call the function to show the original magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);


