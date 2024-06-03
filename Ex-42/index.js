"use strict";
let magicians = ["Alice", "Chris", "David"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "The Great";
    }
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// modifies the original array
make_great(magicians);
// shows modified name
show_magicians(magicians);
