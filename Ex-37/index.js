"use strict";
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} size t-shirt with the message "${message}" printed on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into Coding");
